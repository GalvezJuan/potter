import { useEffect, useState } from "react"

export const Peticion = ({ nombre }) => {

    const [valor, setValor] = useState([])

    const peticion = async () => {
        let response = await fetch(`https://api.potterdb.com/v1/characters?filter[name]=${nombre}`)
        let data = await response.json()

        const resultados = data.data.filter((element) =>
            element.attributes.name.toLowerCase() === nombre.toLowerCase()
        )
        
        setValor(resultados)
    }

    useEffect(() => {
       if (nombre !== "") peticion()
    }, [nombre])

    return<>
        {valor.map((element, index) => {
            return <div key={index}>
                <h3>{element.attributes.name}</h3>
                <img src={element.attributes.image} alt="" />
            </div>
        })}
    </>
}

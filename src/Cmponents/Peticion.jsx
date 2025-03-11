import { useEffect, useState } from "react"

export const Peticion = ({ nombre }) => {

    const [valor, setValor] = useState([])

    const peticion = async () => {
        let response = await fetch(`https://api.potterdb.com/v1/characters?filter[name]=${nombre}`)
        let data = await response.json()
        console.log(data.data)
        setValor(data.data)
    }
    useEffect(() => {
        peticion()
    }, [nombre])

    return<>
            {valor.map((element, index)=>{
                return <div key={index}>
                    <h3>{element.name}</h3>
                </div>

            })}

        </>

    

}
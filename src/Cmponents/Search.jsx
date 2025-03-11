import { useRef } from "react"

export const Search = ({setNombre}) => {

    const inputRef = useRef()
    return <>
        <input ref={inputRef} type="text" placeholder="Escribe aquí" />
        <button onClick={()=>setNombre(inputRef.current.value)} >Accio</button>
    </>

}
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const URL="https://pokeapi.co/api/v2/pokemon"


const Pokemones = () => {
     const [pokemones, setPokemones] = useState([]);
     const [name, setName] = useState("");

    const navigate = useNavigate()

    const getData = async () => {
        try {
            
            const response = await fetch(URL)
            const {results} = await response.json()
            setPokemones(results)
            }
        catch (error) {
            console.log("No hay pokemones")
        }
    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <div class="flex flex-col items-center">
            <div className="flex flex-col mt-12">
            <select className="mx-46 p-4 w-full text-center" value={name} onChange={(e)=>setName(e.target.value)}>
                <option value="" disabled defaultValue >Selecciona tu Pokemon</option>
                {
                    pokemones.map(({name}) => <option key={name} value={name}>{name}</option>)
                }
            </select>
            <div className="mt-12">

            <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-700 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform" onClick={()=>navigate(`/pokemones/${name}`)}>
                <span className="relative">Ver Pokemon</span>
                 </button>
            </div>
            </div>
        </div>
    )
}

export default Pokemones


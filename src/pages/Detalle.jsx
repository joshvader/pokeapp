import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"

const URL="https://pokeapi.co/api/v2/pokemon/"

const Detalle = () => {
     const [pokemon, setPokemon] = useState({})
     const {name}= useParams();

     const getData = async () => {
        try {
            
            const response = await fetch(URL + name )
            const results = await response.json()
            setPokemon(results)
            }
        catch (error) {
            console.log("No hay pokemones")
        }
    }
    console.log (pokemon);

    useEffect(() => {
        getData();
    }, [name])


   return (
    <div className="flex flex-col justify-center items-center mt-24">
     <h1 className=" font-bold text-3xl">{pokemon?.name}</h1>
     <img className="w-40" src={pokemon?.sprites?.front_default}/>
     
     <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-700 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
    
     <Link className="relative" to={"/pokemones"}>Volver</Link>
  </button>
    
    </div>
  )
}

export default Detalle
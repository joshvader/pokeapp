import { NavLink } from "react-router-dom"
import logoPokemon from "../../assets/img/International_Pokémon_logo.svg.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 bg-gray-700">
      <img src={logoPokemon} alt="logoPokemon" className="w-24" />
      <div className="flex gap-3">
        <NavLink className={({isActive})=> isActive ? "active": "inactive"} to={"/"}>Home</NavLink>
        <NavLink  className ={({isActive})=> isActive ? "active": "inactive"} to={"/pokemones"}>Pokemones</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
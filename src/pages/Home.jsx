import picachu from "../assets/img/Pikachu.webp"

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
        <h1 className=" font-bold text-3xl text-center">Bienvenido Maestro Pokémon</h1>
        <img  src={picachu} alt="picachu" className="w-72"  />

    </div>
  )
}

export default Home
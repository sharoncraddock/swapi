import Logo from './logo'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="text-center -mb-6">
        <Logo color="#FFE81F" width="300" />
      </div>
      <h1 className="text-white text-2xl font-bold">A long time ago in a galaxy far, far away...</h1>
      <p className="mt-4">
         there was a Star Wars app to find out more about all the incredible people, starships, and vehicles from the Star Wars Universe!
         Click around and explore, and may the force be with you!
      </p>
      <ul className="text-center py-4">
        <li className="py-2">
          <Link className="text-green-300 underline underline-offset-3" to='/people'>People</Link>
        </li>
        <li className="py-2">
          <Link className="text-green-300 underline underline-offset-3" to='/starships'>Starships</Link>
        </li>
        <li className="py-2">
          <Link className="text-green-300 underline underline-offset-3" to='/vehicles'>Vehicles</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div className="flex">
       <Link className="text-red-400 pr-4" to='/'>Home</Link>
       <nav>
          <Link className="text-green-400 p-4" to='/people'>People</Link>
          <Link className="text-green-400 p-4" to='/starships'>Starships</Link>
          <Link className="text-green-400 p-4" to='/vehicles'>Vehicles</Link>
       </nav>
    </div>
  );
}

export default Navbar
import { useState } from 'react';
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className=""
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.71 6.71l-5-5a1 1 0 0 0-1.42 1.42L16.59 7H4a1 1 0 1 0 0 2h12.59l-4.3 4.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 0-1.42z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="w-full">
          <ul className="mt-2 divide-y divide-gray-200">
            <li onClick={toggleMenu}>
              <Link className="p-4 block bg-white px-4 py-2 text-gray-800 hover:bg-gray-200" to='/'>
                Home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link className="p-4 block bg-white px-4 py-2 text-gray-800 hover:bg-gray-200" to='/people'>
                People
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link className="p-4 block bg-white px-4 py-2 text-gray-800 hover:bg-gray-200" to='/starships'>
                Starships
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link className="p-4 block bg-white px-4 py-2 text-gray-800 hover:bg-gray-200" to='/vehicles'>
                Vehicles
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

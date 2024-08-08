import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className='navbar'>
        <Link to="/"><button>About</button></Link>
        <Link to="/cats"><button>All The Cats</button></Link>
        <Link to="/form"><button>New Cat Form</button></Link>
    </div>
  )
}
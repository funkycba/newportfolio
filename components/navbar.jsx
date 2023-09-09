import  {Link}  from 'react-router-dom';
import Nav from '../Nav/navApp'
export default function Navbar() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
      <Nav
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            Main
          </Link>,
          <Link key={2} className="nav-link text-light" to="/portfolio">
            List of projects
          </Link>,
        ]}
      />
      // <nav>
      //   <ul>
      //     <li>
      //       Home
      //     </li>
      //     <li>
      //       Projects
      //     </li>
      //   </ul>
      // </nav>
    );
  }
  
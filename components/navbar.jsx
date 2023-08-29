import { Link } from 'react-router-dom';
import Nav from './Nav/navApp'
export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
      <Navbar
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            Main
          </Link>,
          <Link key={2} className="nav-link text-light" to="/portfolio">
            List of projects
          </Link>,
        ]}
      />
    );
  }
  
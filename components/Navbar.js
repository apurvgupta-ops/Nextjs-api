import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar container">
        <Link href="/">
          <a className="Navbar-brand">SuperHero-Identity</a>
        </Link>
        <Link href="/new">
          <MDBBtn>New-Identity</MDBBtn>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

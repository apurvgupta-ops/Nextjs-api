import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar container ">
        <Link href="/">
          <a className="Navbar-brand p-5">SuperHero-Identity</a>
        </Link>
        <Link href="/new">
          <MDBBtn>New-Identity</MDBBtn>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

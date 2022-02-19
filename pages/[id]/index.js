import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const index = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;
  //   console.log(heroId);

  const deleteHero = async () => {
    try {
      const response = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "DELETE",
      });
      //   router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>Super Hero Identity</h3>
      <div>
        <MDBCard className="my-2" style={{ maxWidth: "22rem" }} key={index}>
          <MDBCardBody>
            <MDBCardTitle>{hero.superHero}</MDBCardTitle>
            <MDBCardText>{hero.realName}</MDBCardText>
            <Link href={"/"}>
              <MDBBtn onClick={deleteHero} className="mx-2 btn btn-danger">
                Delete Hero
              </MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps({ params }) {
  const id = params.id;
  const response = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = response.data;
  return {
    props: {
      hero: hero,
    },
  };
}

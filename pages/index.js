import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";
const index = ({ heros }) => {
  return (
    <>
      <div className="container">
        <h5 className="py-2">SuperHero Identity</h5>
        <div>
          {heros.map((hero, index) => {
            return (
              <MDBCard
                className="my-2"
                style={{ maxWidth: "22rem" }}
                key={index}
              >
                <MDBCardBody>
                  <MDBCardTitle>
                    {hero.superHero} - {hero.realName}
                  </MDBCardTitle>
                  <MDBCardText>Reveal Identity</MDBCardText>
                  <Link href={`/${hero._id}`}>
                    <MDBBtn className="mx-2">View</MDBBtn>
                  </Link>
                  <Link href={`/${hero._id}/edit`}>
                    <MDBBtn>Edit</MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/hero");
  // console.log(response.data.hero);
  const { hero } = response.data;
  return {
    props: {
      heros: hero,
    },
  };
}
export default index;

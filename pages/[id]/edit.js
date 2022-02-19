import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const edit = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;
  console.log(heroId);

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3>Edit SuperHero</h3>
      <form onSubmit={handleSubmit}>
        <MDBInput
          className="my-2"
          onchange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
          value={form.superHero}
        />
        <MDBInput
          onchange={handleChange}
          label="RealName"
          type="text"
          name="realName"
          value={form.realName}
        />
        <Link href={"/"}>
          <MDBBtn className="my-2" type="submit">
            Submit
          </MDBBtn>
        </Link>
      </form>
    </>
  );
};

export default edit;

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

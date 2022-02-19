import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const newSuperhero = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
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
      const response = await axios("http://localhost:3000/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      //   Router.push("/");
      router.push("/", undefined, { shallow: true });
      //   console.log({ form });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      New Superhero
      <form onSubmit={handleSubmit}>
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="SuperHero"
          name="superHero"
          type="text"
        />
        <MDBInput
          onChange={handleChange}
          label="Real Name"
          name="realName"
          type="text"
        />
        <MDBBtn className="my-2" type="submit">
          Submit
        </MDBBtn>
      </form>
    </>
  );
};

export default newSuperhero;

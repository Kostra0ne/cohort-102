import React, { useState } from "react";
import { useForm } from "hooks/useForm";
import Button from "Components/Button";
import "styles/Form.scss";
import useCounter from "./Hooks/Counter";

const Form = () => {
  const { formValues, handleChange } = useForm({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
  });

  const myCounter = useCounter(0);
  const myCounter2 = useCounter(109);
  const myCounter3 = useCounter(30);
  const myCounter4 = useCounter(-50);

  const [image, setImage] = useState({
    fakeURL: "",
    file: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullObject = { ...formValues, image: image.file };
    // Posting
    console.log(fullObject);
  };

  const handleImage = (event) => {
    const fakeURL = URL.createObjectURL(event.target.files[0]);

    setImage({
      fakeURL: fakeURL,
      file: event.target.files[0],
    });
  };

  return (
    <>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <h1>{myCounter}</h1>
      <h1>{myCounter2}</h1>
      <h1>{myCounter3}</h1>
      <h1>{myCounter4}</h1>
      <img src={image.fakeURL} alt="" />

      <form autoComplete="off" className="Form" onSubmit={handleSubmit}>
        <h1 className="Form__title">Subscribe</h1>
        <div className="Form__group">
          <label className="Form__label" htmlFor="firstName">
            First name
          </label>
          <input
            onChange={handleChange}
            value={formValues.firstName}
            className="Form__input"
            name="firstName"
            type="text"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="lastName">
            Last name
          </label>
          <input
            onChange={handleChange}
            value={formValues.lastName}
            name="lastName"
            className="Form__input"
            type="text"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="email">
            Email
          </label>

          <input
            className="Form__input"
            onChange={handleChange}
            value={formValues.email}
            type="email"
            name="email"
          />

          <input
            onChange={handleImage}
            className="Form__input"
            id="image"
            type="file"
            name="image"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="Form__input"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className="Form__group">
          <label className="Form__label" htmlFor="isAdmin">
            Admin
          </label>
          <input
            onChange={handleChange}
            className="Form__input"
            id="isAdmin"
            name="isAdmin"
            type="checkbox"
          />
        </div>
        <Button type="success">Submit</Button>
      </form>
    </>
  );
};

export default Form;

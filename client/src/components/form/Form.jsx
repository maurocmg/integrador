import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvqdhB0n2S0gylhu2w3xeSn298ddJQiyFdg&usqp=CAU"
        alt="Not found"
      />
      <br />
      <label htmlFor="">Nombre: </label>
      <input
        type="text"
        value={userData.userName}
        name="userName"
        onChange={handleChange}
        className={errors.userName && styles.warning}
      />
      {errors.userName ? (
        <p style={{ color: "red" }}>{errors.userName}</p>
      ) : null}
      <label htmlFor="">Password: </label>
      <input
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        className={errors.password && styles.warning}
      />
      {errors.password ? (
        <p style={{ color: "red" }}>{errors.password}</p>
      ) : null}
      <br />
      <button type="submit">Ingresar</button>
    </form>
  );
}

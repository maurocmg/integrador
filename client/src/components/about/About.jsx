import React from "react"
import styles from "./About.module.css"

export default function About(props) {
    return (
      <div className={styles.container}>
        <h1>Bienvenido a mi primer App</h1>
        <p>
          En esta App utilicé los conocimientos de SoyHenry 
        </p>
        <img
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/11/batman-rie-2881801.jpg?itok=JaYFMEuM"
          alt="Not found"
        />
        <h3>Hola, mi nombre es Mauro</h3>
      </div>
    );
}
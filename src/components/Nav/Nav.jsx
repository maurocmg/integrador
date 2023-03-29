import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
import React from "react";

export default function Nav(props){
    return (
        <div className={styles.general}>
            <SearchBar onSearch={ (characterID) => props.onSearch(characterID)}></SearchBar>
        </div>
    )
}
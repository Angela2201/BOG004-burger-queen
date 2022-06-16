import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'

const Home = () => {

    let Navigate = useNavigate()
    function changeView(e) {
        e.preventDefault();
        console.log("click");
        Navigate("/Wall")
    }

    return (
        <div id="view-home" className={styles.viewHome}>
            <form onSubmit={changeView}>
                <button type="submit" className={styles.btnHome}>
                    <img className={styles.imgHome} src="https://i.imgur.com/6h7OwHR.png"></img>
                </button>
            </form>
        </div>
    )
}

export default Home;
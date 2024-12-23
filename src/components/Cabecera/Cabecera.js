import { Link } from 'react-router-dom'

import CabeceraLink from '../CabeceraLink/CabeceraLink'

import styles from './Cabecera.module.css'

import logo from './logo-alura.png'

function Cabecera() {
    return (
        <header className={styles.cabecera} >
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo de Alura" />
                    <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./" >Inicio</CabeceraLink>
                <CabeceraLink url="./Favoritos" >Favoritos</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera
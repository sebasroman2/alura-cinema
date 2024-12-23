import { Outlet } from "react-router-dom"

import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import FavoritosProvider from "context/favoritos"
import Pie from "components/Pie/Pie"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Pie />
        </main>
    )
}

export default PaginaBase
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacto = () => (
  <Layout>
        <nav>
      <ul>
        <li>
        <Link to="/">Inicio</Link>
        </li>
        <li>
        <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
    <h1>Esto es la página de contacto</h1>
    <p>Hola, puedes encontrarnos en este email: contacto@contacto.com</p>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Contacto

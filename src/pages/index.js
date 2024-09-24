import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Cards from "../components/card"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
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
  <div className="contenedor-card">
  <Cards
        titulo="Aprende React"
        descripcion="React es una biblioteca de JavaScript para construir interfaces de usuario."
        imagen={
          <StaticImage
            src="../images/react.jpg"
            alt="React Logo"
            layout="constrained"
            style={{ width: '100%', height: 'auto' }}
          />
        }
        enlace = 'https://es.react.dev/'
      />
      <Cards
        titulo="Explora Gatsby"
        descripcion="Gatsby es un framework basado en React que permite crear sitios web rápidos y modernos."
        imagen={
          <StaticImage
            src="../images/gatsby.jpg"
            alt="Gatsby Logo"
            layout="constrained"
            style={{ width: '100%', height: 'auto' }}
          />
        }
        enlace = 'https://www.gatsbyjs.com/'
      />
      <Cards
        titulo="Diseña con Figma"
        descripcion="Figma es una herramienta de diseño colaborativo utilizada por diseñadores y desarrolladores."
        imagen={
          <StaticImage
            src="../images/figma.jpg"
            alt="Figma Logo"
            layout="constrained"
            style={{ width: '100%', height: 'auto' }}
          />
        }
        enlace = 'https://www.figma.com/'
      />
      <Cards
        titulo="Consulta a tus datos con GraphQL"
        descripcion="GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y un entorno de ejecución para realizar consultas con datos existentes."
        imagen={
          <StaticImage
            src="../images/graphql.jpg"
            alt="GraphQL Logo"
            layout="constrained"
            style={{ width: '100%', height: 'auto' }}
          />
        }
        enlace = 'https://graphql.org/'
      />
  </div>
</Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"


function SecondPage() {
  return (
    <Layout>
    
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

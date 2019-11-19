import React from "react"
import Image from "gatsby"

import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function IndexPage() {
  return (
    <Layout page='home' bgColor='inherit'>
      <section>
        <div className='landing-tile'>Yo</div>
        <div className='landing-tile'>
          <h1>Cake Designer and Decorator</h1>
        </div>
        <div className='landing-tile'>Uh huh</div>
      </section>
    </Layout>
  )
}

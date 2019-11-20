import React from "react"
import Image from "gatsby"

import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function IndexPage() {
  return (
    <Layout page='home' bgColor='inherit'>
      <section>
        <div className='landing-tile'>
          <h2>Cake Designer and Decorator</h2>
        </div>
        <div className='landing-tile'>
          <BlogList />
        </div>
      </section>
    </Layout>
  )
}

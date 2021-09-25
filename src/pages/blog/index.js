import React from 'react'

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Latest Stories</h1>
        <p>Browse blog posts</p>
        <section className="section">
          {/* <BlogRoll /> */}
        </section>
      </Layout>
    )
  }
}

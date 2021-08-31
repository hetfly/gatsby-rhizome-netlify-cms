import React from 'react'

import Layout from '../../components/Layout'
import ArticlesRoll from '../../components/ArticlesRoll'

export default class ArticlesPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>ICON Articles</h1>
          <p>Latest articles from ICON ecosysytem</p>
        </section>
        <section>
          <p>Search for articles</p>
        </section>
        
        <section>
          <ArticlesRoll />
        </section>
      </Layout>
    )
  }
}

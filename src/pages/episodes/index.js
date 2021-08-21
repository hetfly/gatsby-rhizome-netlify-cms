import React from 'react'

import Layout from '../../components/Layout'
import EpisodesRoll from '../../components/EpisodesRoll'

export default class EyeOnIconIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>Podcast Episodes</h1>
          <p>Podcast description</p>
        </section>
        <section>
          <p>Browse episodes, filter by <strong>guests</strong> and <strong>topics</strong></p>
        </section>
        
        <section>
          <EpisodesRoll />
        </section>
      </Layout>
    )
  }
}

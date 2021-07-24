import React from 'react'

import Layout from '../../components/Layout'
import EpisodesRoll from '../../components/EpisodesRoll'

export default class EyeOnIconIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Eye on Icon Podcast</h1>
        <p>Podcast description</p>
        <p>Browse episodes, filter by <strong>guests</strong> and <strong>topics</strong></p>
        <section>
          <EpisodesRoll />
        </section>
      </Layout>
    )
  }
}

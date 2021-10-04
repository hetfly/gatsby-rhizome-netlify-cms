import React from 'react'

import Layout from '../../components/Layout'
import EpisodesRoll from '../../components/EpisodesRoll'

export default class EyeOnIconIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>Podcast Episodes</h1>
          <p>Eye on Icon - we bring you all the latest news, interviews and community events in the Icon and BTP connected ecosystems.</p>
        </section>
        <section>
          <p>Search for topics, guests or anything else</p>
        </section>
        
        <section>
          <EpisodesRoll />
        </section>
      </Layout>
    )
  }
}

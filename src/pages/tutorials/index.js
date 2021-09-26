import React from 'react'

import Layout from '../../components/Layout'
import TutorialsRoll from '../../components/TutorialsRoll'

export default class TutorialsPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>ICON Tutorials</h1>
          <p>We ensure every Dapp on ICON and it's BTP connected chains has a tutorial covering it to ensure you know how to get started.</p>
        </section>
        <section>
          <p>Search for tutorials</p>
        </section>
        
        <section>
          <TutorialsRoll />
        </section>
      </Layout>
    )
  }
}

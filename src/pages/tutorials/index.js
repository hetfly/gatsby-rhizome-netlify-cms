import React from 'react'

import Layout from '../../components/Layout'
import TutorialsRoll from '../../components/TutorialsRoll'

export default class TutorialsPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>ICON Tutorials</h1>
          <p>Tutorials description</p>
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

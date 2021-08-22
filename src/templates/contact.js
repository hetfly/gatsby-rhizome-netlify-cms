import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

export const ContactTemplate = ({
  title,
  heading,
  subheading
}) => (
  <>
    <section className='top'>
      <h1>Contact</h1>
      <p>Text</p>
    </section>
  </>
)

ContactTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`

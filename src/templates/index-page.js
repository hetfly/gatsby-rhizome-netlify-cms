import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading
}) => (
  <>
    <section className='top'>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <Link to='/episodes' className='btn btn-primary'>See Episodes</Link>
    </section>
    <section>
      <p>with your hosts:</p>
      <div className='hosts'>
        <div className='host'>
          <h2>Fez</h2>
          <p>photo, description, links</p>
        </div>
        <div className='separator'>and</div>
        <div className='host'>
          <h2>Icongrapher</h2>
          <p>photo, description, links</p>
        </div>
      </div>
    </section>
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        heading
        subheading
      }
    }
  }
`

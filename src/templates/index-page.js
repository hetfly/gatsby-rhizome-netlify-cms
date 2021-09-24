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
     <div className='quick-access'>
       <div className='quick-access-item'>
         <h3>Podcast</h3>
         
       </div>
       <div className='quick-access-item'>
         <h3>Tutorials</h3>
         
       </div>
       <div className='quick-access-item'>
         <h3>Articles</h3>
         
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

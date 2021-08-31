import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewImage from '../img/ep-preview.svg'
import Content, { HTMLContent } from '../components/Content'

export const TutorialTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  url,
  date,
  guests,
  helmet,
}) => {
  const TutorialContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div>url: {url}</div>
            <div>date: {date}</div>
            <div>guests: {guests}</div>
            <p>{description}</p>
            <TutorialContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

TutorialTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  url: PropTypes.string,
  guests: PropTypes.string,
}

const Tutorial = ({ data }) => {
  const { markdownRemark: tutorials } = data

  return (
    <Layout>
      <TutorialTemplate
        content={tutorials.html}
        contentComponent={HTMLContent}
        description={tutorials.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${tutorials.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${tutorials.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={tutorials.frontmatter.tags}
        date={tutorials.frontmatter.date}
        title={tutorials.frontmatter.title}
        url={tutorials.frontmatter.url}
        guests={tutorials.frontmatter.guests}
        featuredimage={tutorials.frontmatter.featuredimage}
        description={tutorials.frontmatter.description}
      />
    </Layout>
  )
}

Tutorial.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Tutorial

export const pageQuery = graphql`
  query TutorialByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        url
        guests
      }
    }
  }
`

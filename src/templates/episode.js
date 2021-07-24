import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EpisodeTemplate = ({
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
  const EpisodeContent = contentComponent || Content

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
            <EpisodeContent content={content} />
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

EpisodeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  url: PropTypes.string,
  guests: PropTypes.string,
}

const Episode = ({ data }) => {
  const { markdownRemark: episode } = data

  return (
    <Layout>
      <EpisodeTemplate
        content={episode.html}
        contentComponent={HTMLContent}
        description={episode.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${episode.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${episode.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={episode.frontmatter.tags}
        date={episode.frontmatter.date}
        title={episode.frontmatter.title}
        url={episode.frontmatter.url}
        guests={episode.frontmatter.guests}
        featuredimage={episode.frontmatter.featuredimage}
        description={episode.frontmatter.description}
      />
    </Layout>
  )
}

Episode.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Episode

export const pageQuery = graphql`
  query EpisodeByID($id: String!) {
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

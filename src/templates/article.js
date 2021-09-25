import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  title,
  url,
  date,
  helmet,
}) => {
  const ArticleContent = contentComponent || Content

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
            <p>{description}</p>
            <ArticleContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  url: PropTypes.string,
}

const Article = ({ data }) => {
  const { markdownRemark: articles } = data

  return (
    <Layout>
      <ArticleTemplate
        content={articles.html}
        contentComponent={HTMLContent}
        description={articles.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${articles.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${articles.frontmatter.description}`}
            />
          </Helmet>
        }
        date={articles.frontmatter.date}
        title={articles.frontmatter.title}
        url={articles.frontmatter.url}
        featuredimage={articles.frontmatter.featuredimage}
      />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        url
      }
    }
  }
`

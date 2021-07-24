import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class EpisodesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: episodes } = data.allMarkdownRemark

    return (
      <div className="episodes">
        {episodes &&
          episodes.map(({ node: episode }) => (
            <div className="episode-wrap" key={episode.id}>
              <div class="episode">
              {episode.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: episode.frontmatter.featuredimage,
                      alt: `featured image thumbnail for episode ${episode.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
                  
                  <p className="episode-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={episode.fields.slug}
                    >
                      {episode.frontmatter.title}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {episode.frontmatter.date}
                    </span>
                    <div>url: {episode.frontmatter.url}</div>
                    <div>date: {episode.frontmatter.date}</div>
                    <div>guests: {episode.frontmatter.guests}</div>
                  </p>
                </div>
            </div>
          ))}
      </div>
    )
  }
}

EpisodesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EpisodesRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "episode" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                url
                guests
                description
                date
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EpisodesRoll data={data} count={count} />}
  />
)

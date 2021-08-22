import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewImage from '../img/ep-preview.svg'
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
              <div className="episode">
                  <div className="episode-title">
                  <Link to={episode.fields.slug}>{episode.frontmatter.title}</Link>
                  </div>
                  <div className="episode-tags">
                    <div className='label'>Topics</div>
                    <div className='value'>{episode.frontmatter.tags}</div>
                  </div>
                  <div className="episode-tags">
                    <div className='label'>Guests</div>
                    <div className='value'>{episode.frontmatter.guests}</div>
                  </div>
                  <div className="episode-description">{episode.frontmatter.description}</div>
                  <div className="episode-watch">
                    <a class="btn btn-primary" href={episode.frontmatter.url} target="_blank">Watch Episode</a>
                  </div>
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
                tags
                guests
                description
                date
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EpisodesRoll data={data} count={count} />}
  />
)

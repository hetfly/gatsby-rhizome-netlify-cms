import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchImage from '../img/search.svg'

class EpisodesRoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
  }

  handleSearch = e => {
    const query = e.target.value.toLowerCase();
    this.setState({searchBy: query});
  }

  shouldShow = episode => {
    const searchBy = this.state.searchBy;
    const { title, topics, guests, description } = episode.frontmatter;

    if (searchBy.length >= 2) {
      return title.toLowerCase().indexOf(searchBy) >= 0
        || topics.toLowerCase().indexOf(searchBy) >= 0
        || guests.toLowerCase().indexOf(searchBy) >= 0
        || description.toLowerCase().indexOf(searchBy) >= 0
    } else {
      return true;
    }
  }

  render() {
    const { data } = this.props
    const { edges: episodes } = data.allMarkdownRemark;
    const shouldShow = this.shouldShow;

    return (
      <>
        <div className="search-wrap">
          <img src={SearchImage} width={25} height={25} />
          <input type="text" value={this.state.searchBy} onChange={e => this.handleSearch(e)}></input>
        </div>
        <div className="episodes">
          {episodes &&
            episodes.sort((a, b) => {
              return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
            }).map(({ node: episode }) => (
              shouldShow(episode) && (
                <div className="episode-wrap" key={episode.id}>
                  <div className="episode">
                    <div className="episode-title">
                    <Link to={episode.fields.slug}>{episode.frontmatter.title}</Link>
                    {episode.frontmatter.type}
                    </div>
                    <div className="episode-tags">
                      <div className='label'>Topics</div>
                      <div className='value'>{episode.frontmatter.topics}</div>
                    </div>
                    <div className="episode-tags">
                      <div className='label'>Guests</div>
                      <div className='value'>{episode.frontmatter.guests}</div>
                    </div>
                    <div className="episode-description">{episode.frontmatter.description}</div>
                    <div className="episode-watch">
                      <a className="btn btn-primary" href={episode.frontmatter.url} target="_blank">Watch Episode</a>
                    </div>
                  </div>
                </div>
              )
            ))}
        </div>
      </>
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
                topics
                guests
                description
                date
                type
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EpisodesRoll data={data} count={count} />}
  />
)

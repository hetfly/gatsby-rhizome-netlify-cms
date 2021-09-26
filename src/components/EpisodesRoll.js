import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import SearchImage from '../img/search.svg'
import { Episode } from '../templates/index-page'

class EpisodesRoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBy: "",
      typeBy: ""
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleType = this.handleType.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
  }

  handleSearch = e => {
    const query = e.target.value.toLowerCase();
    this.setState({searchBy: query});
  }

  handleType = e => {
    const typeVal = e.target.getAttribute('data-type')
    const currentType = this.state.typeBy;
    typeVal === currentType
     ? this.setState({typeBy: ""})
     : this.setState({typeBy: typeVal})
  }

  shouldShow = episode => {
    const searchBy = this.state.searchBy;
    const typeBy = this.state.typeBy;
    const { title, topics, guests, description, type } = episode.frontmatter;

    function searchQueryResult() {
      if (searchBy.length >= 2) {
        return title.toLowerCase().indexOf(searchBy) >= 0
        || topics.toLowerCase().indexOf(searchBy) >= 0
        || guests.toLowerCase().indexOf(searchBy) >= 0
        || description.toLowerCase().indexOf(searchBy) >= 0
      } else {
        return true;
      }
    }

    function typeQueryResult() {
      if (typeBy !== "") {
        return type === typeBy
      } else {
        return true;
      }
    }

    return searchQueryResult() && typeQueryResult();
  }

  render() {
    const { data } = this.props
    const { edges: episodes } = data.allMarkdownRemark;
    // const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const shouldShow = this.shouldShow;

    return (
      <>
        <div className="types-wrap">
          <button className={`${this.state.typeBy === 'Weekly News' ? 'active' : ''}`} data-type="Weekly News" onClick={e => this.handleType(e)}>Weekly News</button>
          <button className={`${this.state.typeBy === 'Community Session' ? 'active' : ''}`} data-type="Community Session" onClick={e => this.handleType(e)}>Community Session</button>
          <button className={`${this.state.typeBy === 'Interview' ? 'active' : ''}`} data-type="Interview" onClick={e => this.handleType(e)}>Interview</button>
        </div>
        <div className="search-wrap">
          <img src={SearchImage} width={25} height={25} alt='search' />
          <input type="text" value={this.state.searchBy} onChange={e => this.handleSearch(e)}></input>
        </div>
        <div className="episodes">
          {episodes &&
            episodes.sort((a, b) => {
              return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
            }).map(episode => (
              shouldShow(episode.node) && <Episode episode={episode} key={episode.node.id} />
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
                anchorUrl
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

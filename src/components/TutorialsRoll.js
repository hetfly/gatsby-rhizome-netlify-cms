import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import SearchImage from '../img/search.svg'
import { Tutorial } from '../templates/index-page'

class TutorialsRoll extends React.Component {
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

  shouldShow = tutorial => {
    const searchBy = this.state.searchBy;
    const { title, topics, description } = tutorial.frontmatter;

    function searchQueryResult() {
      if (searchBy.length >= 2) {
        return title.toLowerCase().indexOf(searchBy) >= 0
        || topics.toLowerCase().indexOf(searchBy) >= 0
        || description.toLowerCase().indexOf(searchBy) >= 0
      } else {
        return true;
      }
    }

    return searchQueryResult();
  }

  render() {
    const { data } = this.props
    const { edges: tutorials } = data.allMarkdownRemark;
    const shouldShow = this.shouldShow;

    return (
      <>
        <div className="search-wrap">
          <img src={SearchImage} width={25} height={25} alt='search' />
          <input type="text" value={this.state.searchBy} onChange={e => this.handleSearch(e)}></input>
        </div>
        <div className="tutorials">
          {tutorials &&
            tutorials.sort((a, b) => {
              return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
            }).map(tutorial => (
              shouldShow(tutorial.node) && <Tutorial tutorial={tutorial} key={tutorial.node.id} />
            ))}
        </div>
      </>
    )
  }
}

TutorialsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TutorialsRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tutorial" } } }
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
                description
                date
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TutorialsRoll data={data} count={count} />}
  />
)

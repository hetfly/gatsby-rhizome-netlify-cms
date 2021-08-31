import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchImage from '../img/search.svg'

class ArticlesRoll extends React.Component {
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

  shouldShow = article => {
    const searchBy = this.state.searchBy;
    const { title, topics, guests, description } = article.frontmatter;

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
    const { edges: articles } = data.allMarkdownRemark;
    const shouldShow = this.shouldShow;

    console.log(articles);

    return (
      <>
        <div className="search-wrap">
          <img src={SearchImage} width={25} height={25} />
          <input type="text" value={this.state.searchBy} onChange={e => this.handleSearch(e)}></input>
        </div>
        <div className="articles">
          {articles &&
            articles.sort((a, b) => {
              return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
            }).map(({ node: article }) => (
              shouldShow(article) && (
                <div className="article-wrap" key={article.id}>
                  <div className="article">
                    <div className="article-title">{article.frontmatter.title}</div>
                    <div className="article-tags">
                      <div className='label'>Topics</div>
                      <div className='value'>{article.frontmatter.topics}</div>
                    </div>
                    <div className="article-description">{article.frontmatter.description}</div>
                    <div className="article-watch">
                      <a className="btn btn-primary" href={article.frontmatter.url} target="_blank">Read Article</a>
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

ArticlesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArticlessRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "article" } } }
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
    render={(data, count) => <ArticlesRoll data={data} count={count} />}
  />
)

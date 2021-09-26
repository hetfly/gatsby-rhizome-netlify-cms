import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import useEpisodesData from '../hooks/episodes';
import useArticlesData from '../hooks/articles';
import useTutorialsData from '../hooks/tutorials';
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading
}) => 
  {
    const episodesData = useEpisodesData();
    const articlesData = useArticlesData();
    const tutorialsData = useTutorialsData();

    return (
      <>
        <section className='top'>
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </section>
        <section>
        <div className='quick-access'>
          <div className='quick-access-item'>
            <h3>Latest Podcast</h3>
            {
              episodesData && <Episode episode={episodesData.sort((a, b) => {
                return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
              })[0]} />
            }
          </div>
          <div className='quick-access-item'>
            <h3>Latest Tutorial</h3>
            {
              tutorialsData && <Tutorial tutorial={tutorialsData.sort((a, b) => {
                return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
              })[0]} />
            }
          </div>
          <div className='quick-access-item'>
            <h3>Latest Article</h3>
            {
              articlesData && <Article article={articlesData.sort((a, b) => {
                return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
              })[0]} />
            }
          </div>
        </div>
        </section>
      </>
    )
}

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

const Tutorial = ({tutorial: { node }}) => {
  return (
    <div className="tutorial-wrap" key={node.id}>
      <div className="tutorial">
        <div className="tutorial-title">{node.frontmatter.title}</div>
        <div className="tutorial-tags">
          <div className='label'>Topics</div>
          <div className='value'>{node.frontmatter.topics}</div>
        </div>
        <div className="tutorial-description">{node.frontmatter.description}</div>
        <div className="tutorial-watch">
          <a className="btn btn-primary" href={node.frontmatter.url} target="_blank" rel="noreferrer">Watch Tutorial</a>
        </div>
      </div>
    </div>
  )
}

const Article = ({article: { node }}) => {
  return (
    <div className="article-wrap" key={node.id}>
      <div className="article">
        <div className="article-title">{node.frontmatter.title}</div>
        <div className="article-description">{node.frontmatter.description}</div>
        <div className="article-watch">
          <a className="btn btn-primary" href={node.frontmatter.url} target="_blank" rel="noreferrer">Read Article</a>
        </div>
      </div>
    </div>
  )
}

export const Episode = ({episode: { node }}) => {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="episode-wrap" key={node.id}>
      <div className="episode">
        <div className={`episode-label ${node.frontmatter.type.split(' ')[0].toLowerCase()}`}>{node.frontmatter.type}</div>
        <div className="episode-title">{node.frontmatter.title}</div>
        <div className="episode-date">{new Date(node.frontmatter.date).toLocaleDateString("en-US", dateOptions)}</div>
        <div className="episode-tags">
          <div className='label'>Topics</div>
          <div className='value'>{node.frontmatter.topics}</div>
        </div>
        <div className="episode-tags">
          <div className='label'>Guests</div>
          <div className='value'>{node.frontmatter.guests}</div>
        </div>
        <div className="episode-description">{node.frontmatter.description}</div>
        <div className="episode-watch">
          <a className="btn btn-primary" href={node.frontmatter.url} target="_blank" rel="noreferrer">Watch Episode</a>
          {
            node.frontmatter.anchorUrl &&
            <a className="btn btn-primary" href={node.frontmatter.anchorUrl} target="_blank" rel="noreferrer">Anchor</a>
          }
        </div>
      </div>
    </div>
  )
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

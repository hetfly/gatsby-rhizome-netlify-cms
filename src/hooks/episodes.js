import { useStaticQuery, graphql } from 'gatsby'

export default function useEspisodesData() {
    const data = useStaticQuery(graphql`
    query EpisodesDataQuery {
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
  `)

    return data?.allMarkdownRemark.edges;
  }
import { useStaticQuery, graphql } from 'gatsby'

export default function useTutorialsData() {
    const data = useStaticQuery(graphql`
      query TutorialsDataQuery {
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
    `)

    return data?.allMarkdownRemark.edges;
  }
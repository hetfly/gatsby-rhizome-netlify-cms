import { useStaticQuery, graphql } from 'gatsby'

export default function useArticlesData() {
    const data = useStaticQuery(graphql`
      query ArticlessDataQuery {
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
    `)

    return data?.allMarkdownRemark.edges;
  }
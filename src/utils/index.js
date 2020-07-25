import { graphql, useStaticQuery } from "gatsby";


export function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
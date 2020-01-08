import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { avatar } = useStaticQuery(
    graphql`
        query SiteMetaData {
            avatar: file(absolutePath: { regex: "/avatar-bot.png/" }) {
                childImageSharp {
                fixed(width: 150, height: 150, quality: 90) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
                }
            }
            site {
                siteMetadata {
                author
                bio
                social {
                    twitter
                    github
                    facebook
                    medium
                    linkedin
                    instagram
                }
                }
            }
        }
    `
  )
  return avatar
}
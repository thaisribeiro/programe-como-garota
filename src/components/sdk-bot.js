import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Chat from './chat'

function Sdk() {
  const { site, avatar } = useStaticQuery(
    graphql`
          query AvatarQuery {
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
  
  
  return (
    <div className="avatar-container">
      <div className="chat-ok">
        <Chat/>
      </div>
      <div onClick={() => alert('Clicked')} >
        <Image
          className="avatar-sdk"
          fixed={avatar.childImageSharp.fixed}
          style={{
            marginBottom: 0,
            minWidth: 80,
            maxWidth: 80,
            maxHeight: 80,
            borderRadius: '100%',
            border: '5px solid rgba(12, 10, 10, -10.85)',
            marginBottom: '30px'
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  )
}

export default Sdk
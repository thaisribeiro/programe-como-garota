import React, { useState } from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Chat from './chat'

import './sdk-bot.css'

function Sdk() {
  const [opened, setOpened] = useState(false)

  const { site, avatar } = useStaticQuery(
    graphql`
          query AvatarQuery {
            avatar: file(absolutePath: { regex: "/tha-avatar.png/" }) {
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
      {
        opened && (
          <div className="chat-ok">
            <Chat />
          </div>
        )
      }

      <div onClick={() => setOpened(!opened)} >
        <Image
          className="avatar-sdk"
          fixed={avatar.childImageSharp.fixed}
          style={{
            marginBottom: 0,
            minWidth: 80,
            maxWidth: 100,
            maxHeight: 100,
            borderRadius: '100%',
            border: '5px solid rgba(12, 10, 10, 0.15)',
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
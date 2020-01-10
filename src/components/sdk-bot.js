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
            avatar: file(absolutePath: { regex: "/thais-avatar.png/" }) {
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
      <div onClick={() => setOpened(!opened)} >
        <Image
          className="avatar-sdk"
          fixed={avatar.childImageSharp.fixed}
          style={{
            marginBottom: 0,
            minWidth: 80,
            maxWidth: 120,
            maxHeight: 120,
            marginBottom: '100px',
            borderRadius: '100%',
            boxShadow:'#9c9696 3px 52px 55px -34px'
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
      </div>
      {
        opened && (
          <Chat />
        )
      }

    </div>
  )
}

export default Sdk
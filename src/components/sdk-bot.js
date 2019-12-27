import React from 'react'
import Image from 'gatsby-image'

function Sdk() {
    return (
        <div className="avatar-container">
            <Image
                className="avatar-sdk"
                fixed='/home/thaisribeiro/Documentos/thaisribe-blog/src/images/avatar-bot.png'
                style={{
                    marginBottom: 0,
                    minWidth: 150,
                    borderRadius: '100%',
                    border: '8px solid #0c0a0a26',
                    marginBottom: '30px'
                }}
                imgStyle={{
                    borderRadius: '50%',
                }}
            />
        </div>
    )
}

export default Sdk
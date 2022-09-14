import React from 'react'
import './DocumentsHolder.scss'

const DocumentsHolder = () => {
  return (
    <div className="documents-holder">
        <div className="links">
            <a href="https://www.bukable.co/">About</a>
            <a href="https://www.bukable.co/">Privacy</a>
            <a href="https://www.bukable.co/">Support</a>
            <a href="https://www.bukable.co/">More</a>
        </div>
        <div className="downloads">
            <p>Coming soon</p>
            <img src="/assets/apple-logo.png" alt="apple-logo" />
            <img src="/assets/playstore-logo.png" alt="playstore-logo" />
        </div>
        <p className="inc">© 2022 Bukable, Inc. </p>
    </div>
  )
}

export default DocumentsHolder
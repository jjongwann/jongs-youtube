import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
      <footer id='footer' role='contentinfo'>
        <Link to={'mailto:whddhks1121.naver.com'} rel='noopenner noreferrer'>
            whddhks1121.naver.com
        </Link>
      </footer>
    )
}

export default Footer
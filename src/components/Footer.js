import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return ( 
      <footer>
        <div className="socials">
          <a title="facebook" href="https://facebook.com" target="_blank">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
          <a title="twitter" href="https://twitter.com" target="_blank">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com" target="_blank">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '20px', height: '20px' }}
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer

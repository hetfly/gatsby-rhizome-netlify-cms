import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/rhizome-logo.png'
import Footer from './Footer'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: logo,
                    alt: `RHIZOME`,
                  }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <ul className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <li>
                <Link className="navbar-item" to="/eyeonicon">
                  Eye on Icon
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/token">
                  Token
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar

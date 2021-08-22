import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Footer from './Footer'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen = () => {
    const currentState = this.state.open;
    this.setState({open: !currentState});
  }

  render() {
    return (
      <header className={`${this.state.open ? 'open' : ''}`}>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src={logo} alt='Eye on Icon' width={200} height={70} />
              </Link>
            </div>
            <ul className={`navbar-menu`}>
              <li>
                <Link className="navbar-item" to="/episodes">
                  Episodes
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/token">
                  Token
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
        </nav>

        <div className="burger" onClick={() => this.toggleOpen()}><span className='lines'></span></div>
      </header>
    )
  }
}

export default Navbar

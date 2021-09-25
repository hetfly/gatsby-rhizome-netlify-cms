import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

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
        <nav className="navbar">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src={logo} alt='Eye on Icon' width={200} height={70} />
              </Link>
            </div>
            <ul className={`navbar-menu`}>
              <li>
                <Link className="navbar-item" to="/episodes">
                  Podcast
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/tutorials">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/articles">
                  Articles
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

        <button className="burger" onClick={(e) => this.toggleOpen()}><span className='lines'>menu</span></button>
      </header>
    )
  }
}

export default Navbar

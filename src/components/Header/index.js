// Write your code here
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom' // here we use withRouter cause history props are availble in within the component
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="nav-container">
    <div className="nav-card-details">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-container"
      >
        {close => (
          <div className="model-container-new">
            <button
              type="button"
              onClick={() => close()}
              testid="closeButton"
              className="close-btn"
            >
              <IoMdClose size="30" />
            </button>

            <ul className="unoorder-list-container">
              <li className="nav-list-item">
                <Link className="nav-link" to="/">
                  <AiFillHome size="35" />
                  <p className="text-content">Home</p>
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="nav-link" to="/about">
                  <BsInfoCircleFill size="32" />
                  <p className="text-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)

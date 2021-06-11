import {Component} from 'react'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class NavBar extends Component {
  renderNavItemsList = () => {
    const {selectedSection, changeSelectedSection} = this.props

    return navBarItems.map(navItem => {
      const onClickNavbarItem = () => changeSelectedSection(navItem.name)

      const btnClassName =
        selectedSection === navItem.name ? 'selected-item' : ''

      return (
        <li
          className={`nav-item ${btnClassName}`}
          key={navItem.id}
          onClick={onClickNavbarItem}
        >
          <img
            className="item-image"
            src={navItem.iconUrl}
            alt={navItem.name}
          />
          <p className="item-name">{navItem.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar">
        <img
          className="profile-img"
          src="https://res.cloudinary.com/dkr26vkii/image/upload/v1623396789/mypic_vsatpi.jpg"
          alt="profile"
        />
        <ul className="nav-items-list">{this.renderNavItemsList()}</ul>
      </nav>
    )
  }
}

export default NavBar

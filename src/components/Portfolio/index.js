import {Component} from 'react'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import HomeSection from '../HomeSection'
import NavBar from '../NavBar'
import ProjectsSection from '../ProjectsSection'
import SocialMediaSection from '../SocialMediaSection'

import './index.css'

const section = {
  home: 'HOME',
  about: 'ABOUT',
  projects: 'PROJECTS',
  contact: 'CONTACT',
}

class PortfolioSection extends Component {
  state = {selectedSection: 'HOME'}

  renderComponents = () => {
    const {selectedSection} = this.state

    switch (selectedSection) {
      case section.about:
        return <AboutSection />

      case section.contact:
        return <ContactSection />

      case section.projects:
        return <ProjectsSection />

      default:
        return <HomeSection />
    }
  }

  changeSelectedSection = selectedSection => {
    this.setState({
      selectedSection,
    })
  }

  render() {
    const {selectedSection} = this.state

    return (
      <div className="portfolio-container">
        <NavBar
          selectedSection={selectedSection}
          changeSelectedSection={this.changeSelectedSection}
        />
        <div className="portfolio-body">
          <div className="selected-section">{this.renderComponents()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default PortfolioSection

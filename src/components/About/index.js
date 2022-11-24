// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
        className="about-img"
      />
    </div>
  </div>
)

export default About

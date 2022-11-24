// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
        alt="home"
        className="home-img"
      />
    </div>
  </div>
)

export default Home

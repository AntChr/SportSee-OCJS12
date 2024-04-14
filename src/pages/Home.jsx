import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Profil from "../components/Profil"
import "../style/home.scss"

function Home() {
  return (
    <>
    <Header/>
    <div className="home__container">
        <Navigation />
        <Profil />
    </div>
    </>
    
  )
}

export default Home
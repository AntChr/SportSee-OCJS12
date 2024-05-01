import "../style/header.scss"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="header__container">
        <div className="header__container__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="header__container__titles">
            <div className="header__container__home">
                <h2>Accueil</h2>
            </div>
            <div className="header__container__profil">
                <h2>Profil</h2>
            </div>
            <div className="header__container__param">
                <h2>Réglages</h2>
            </div>
            <div className="header__container__community">
                <h2>Communauté</h2>
            </div>
        </div>
    </div>
  )
}

export default Header
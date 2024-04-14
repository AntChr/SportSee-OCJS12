import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"
import "../style/navigation.scss"

function Navigation() {
  return (
    <div className="navigation__container">
        <div className="navigation__container__images">
            <img src={icon1} alt="logo yoga"/>
            <img src={icon2} alt="logo natation"/>
            <img src={icon3} alt="logo cyclisme"/>
            <img src={icon4} alt="logo musculation"/>
        </div>
        <div className="navigation__container__copyright">
            <span className="navigation__container__copyright__text">Copyright, SportSee 2020</span>
        </div>
    </div>
  )
}

export default Navigation
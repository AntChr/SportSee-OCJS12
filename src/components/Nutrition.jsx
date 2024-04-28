import flame from "../assets/flame.svg"
import chicken from "../assets/chicken.svg"
import apple from "../assets/apple.svg"
import burger from "../assets/burger.svg"
import "../style/nutrition.scss"


function Nutrition({ data }) {
    console.log(data);
    const formattedCalories = (data[0].quantity / 1000).toLocaleString(undefined, { minimumFractionDigits: 3 }) + ' kCal';
  return (
    <div className="nutrition__container">
        <div className="nutrition__container__case">
            <div className="nutrition__container__case__logo">
                <img src={flame} alt="calorie flamme" />
            </div>
            <div className="nutrition__container__case__text">
                <h3>{formattedCalories}</h3>
                <p>Calories</p>
            </div>
        </div>
        <div className="nutrition__container__case">
            <div className="nutrition__container__case__logo">
                <img src={chicken} alt="Protéines" />
            </div>
            <div className="nutrition__container__case__text">
                <h3>{data[1].quantity}g</h3>
                <p>Protéines</p>
            </div>
        </div>
        <div className="nutrition__container__case">
            <div className="nutrition__container__case__logo">
                <img src={apple} alt="Glucides" />
            </div>
            <div className="nutrition__container__case__text">
                <h3>{data[2].quantity}g</h3>
                <p>Glucides</p>
            </div>
        </div>
        <div className="nutrition__container__case">
            <div className="nutrition__container__case__logo">
                <img src={burger} alt="Lipides" />
            </div>
            <div className="nutrition__container__case__text"> 
                <h3>{data[3].quantity}g</h3>
                <p>Lipides</p>
            </div>
        </div>
    </div>
  )
}

export default Nutrition
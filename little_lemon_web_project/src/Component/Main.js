// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "../style/mainstyle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from './Booking';
import { useReducer } from "react";
import Header from "./Header";
import ConfirmedBooking from "./confirmedBooking";


const Main = () => {

	const seedRandom = function(seed){
		var m = 2**35 - 31;
		var a = 185685;
		var s = seed % m;

		return function(){
			return (s = s * a % m) /m;
		}
	}


	const fetchAPI = function(date){
		let result = []
		let random = seedRandom(date.getDate())

		for (let i = 17; i <= 23; i++ ){
			if (random() < 0.5){
				result.push(i + ':00')
			}
			if (random() > 0.5){
				result.push(i + ':30')
			}
		}
		return result;
	}


	const intialState = {availableTimes: fetchAPI(new Date())};

	const [state, dispatch] = useReducer(updateTimes, intialState);

	function updateTimes(state, date) {
		return {availableTimes: fetchAPI(new Date())}
	}

	const submitAPI = function(formData){
		return true;
	}

	const navigate = useNavigate();
	function submitForm(formData){
		if (submitAPI(formData)) {
			navigate('/confirmed')
		}
	}


	return(
		<main>
			{/* <section className="Week-Specialty"> 
				<div className="Specialty-header">
					<h1>This Week Specialty</h1>
					<button className="Online-btn">Online menu</button>
				</div>
				<article className="displayed-food">
					<div className="GreekSalad">
							<img src={require("../Images/image1.jpg")} alt="HeroImage" width="267" height="186"/>
						<div className="food-text">
							<div className="food-header">
								<h1>Greek Salad</h1>
								<h2>$4.55</h2>
							</div>
							<div>
								<p>
									The famous greek salad of
									crispy lettuce, peppers, olives
									and our Chicago style feta
									cheese, garnished with
									crunchy garlic and rosemary
									croutons.
								</p>
							</div>
						</div>
					</div>

					<div className="Bruchetta">
							<img src={require("../Images/image3.jpg")} alt="HeroImage" width="267" height="186"/>
						<div className="food-text">
							<div className="food-header">
								<h1>Bruchetta</h1>
								<h2>$24.55</h2>
							</div>
							<div>
								<p>
								Our Bruschetta is made from
								grilled bread that has been
								smeared with garlic and seasoned
								with salt and olive oil.
								</p>
							</div>
						</div>
					</div>

					<div className="LemonDessert">
							<img src={require("../Images/image14.jpg")} alt="HeroImage" width="267" height="186"/>
						<div className="food-text">
							<div className="food-header">
								<h1>Lemon Dessert</h1>
								<h2>$24.55</h2>
							</div>
							<div>
								<p>
								This comes straight from
								grandma’s recipe book, every
								last ingredient has been
								sourced and is as authentic
								as can be imagined.
								</p>
							</div>
						</div>
					</div>
				</article>
			</section>
			<section className="testimonials">
				<div className="inner">
					<h1>Testimonails</h1>
					<div className="border"></div>

					<div className="row">
						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/Man pic.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial one</div>
								<div className="stars">
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
								</div>
								<p>
									A very nice food, Love it.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/Lady1.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Two</div>
								<div className="stars">
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={regularStar}/>
								</div>
								<p>
									A very nice restaurant, I would love dine here again.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/asian-handsome-man-with-a-mustache-smiling-on-white-background-free-photo.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Three</div>
								<div className="stars">
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
								</div>
								<p>
									A very nice restaurant.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/Lady2.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Four</div>
								<div className="stars">
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
									<FontAwesomeIcon icon={solidStar}/>
								</div>
								<p>
									An excellent meal.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			
			<Routes>
				<Route path="/" element={<Header/>}/>
				<Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}/>
				<Route path="/confirmed" element={<ConfirmedBooking/>}/>
			</Routes>

		</main>
	)
}

export default Main;
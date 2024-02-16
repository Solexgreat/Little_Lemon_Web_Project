// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "../style/mainstyle.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from './Booking';
import { createContext, useReducer } from "react";
import Header from "./Header";
import ConfirmedBooking from "./confirmedBooking";



const Main = () => {



	const fetchAPI = function(){
		let result = []
		//let num = date.getDate();

		for (let i = 17; i <= 23; i++ ){
			let random =  Math.random()
			if (random < 0.5){
				result.push(i + ':00')
			}
			if (random > 0.5){
				result.push(i + ':30')
			}
		}
		return result;
	}


	const intialState = {availableTime: fetchAPI(new Date())};

	const [state, dispatch] = useReducer(updateTimes, intialState);

	function updateTimes(state, date) {
		return {availableTime: fetchAPI(new Date())}
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
			 */}

			<Routes>
				<Route path="/" element={<Header/>}/>
				<Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}/>
				<Route path="/confirmed" element={<ConfirmedBooking/>}/>
			</Routes>
		
		</main>
	)
}

export default Main;
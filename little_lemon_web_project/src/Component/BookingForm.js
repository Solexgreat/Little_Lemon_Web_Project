import { useState } from "react"
import "../style/BookingForm.css"


const BookingForm = (props) => {
	const[date, setDate] = useState('');
	const[time, setTime] = useState('');
	const[guest, setGuest] = useState('');
	const[occasion, setOccasion] = useState('');

	const isDisabled = date && time && guest && occasion;

	const handelSubmit = (e) =>{
		e.preventDefault();
		props.submitForm(e)

	}

	const handleChange = (e) => {
		setDate(e);
		props.dispatch(e)
	}
	return (
		<header>
			<section>
				<form onSubmit={handelSubmit} className="form">
					 <fieldset>
						<div className="book-Date">
							<label htmlFor="book-Date">Choose Date:</label>
							<input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
							type="date" required/>
						</div>

						{/* for time selction */}
						<div className="bookTime">
						<label htmlFor="book-time">Choose Time:</label>
						<select id='book-time' value={time} onChange={(e)=> setTime(e.target.value)}>
							<option > Select a Time</option>
							{
								props.availableTimes.availableTime.map(availableTimes => {return (
									<option key={availableTimes}>{availableTimes}</option>
								)})
							}
						</select>
						</div>

						{/* For guest Selection */}
						<div className="bookGuest">
							<label htmlFor="book-guest">Number of Guest:</label>
							<input id='book-guest' type="number" min='1' max='10' value={guest} onChange={(e) => setGuest(e.target.value)}
							 required/>
						</div>

						{/* For Occasion */}
						<div className="bookOccasion">
							<label htmlFor="book-occasion">Occasion:</label>
							<select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
								<option>Birthday</option>
								<option>Annivasary</option>
							</select>
						</div>

						{/* button */}
						<div className="btnReserved">
							<input id="btnReserved" aria-label="On click"  disabled={!isDisabled} type="submit" value={"Make Your Reservation"} />
						</div>
					 </fieldset>
				</form>
			</section>
		</header>
	)
}

export default BookingForm;
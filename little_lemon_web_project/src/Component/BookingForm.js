import { useState } from "react"


const BookingForm = () => {
	const[date, setDate] = useState('');
	const[time, setTime] = useState('');
	const[guest, setGuest] = useState('');
	const[occassion, setOccassion] = useState('');

	const handelSubmit = (e) =>{
		e.preventDefault();

	}

	const handleChange = (e) => {
		setDate(e);
	}
	return (
		<header>
			<section>
				<form onSubmit={handelSubmit}>
					 <fieldset>
						<div>
							<label htmlFor="book-Date">Choose Date</label>
							<input id='book-Date' value={date} onChange={(e) => handleChange(e.target.value)}
							type="date" required/>
						</div>

						{/* for time selction */}
						<div>
						<label htmlFor="book-time">Choose Date</label>
						<select value={time} onChange={(e)=> handleChange(e.target.value)}>
							<option > Select a Time</option>
							{
								props.availableTimes.availableTimes.map(availableTimes => {return (
									<option key={availableTimes}>{availableTimes}</option>
								)})
							}
						</select>
						</div>

						{/* For guest Selection */}
						<div>
							<label htmlFor="book-guest">Number of Guest</label>
							<input id='book-Date' value={date} onChange={(e) => handleChange(e.target.value)}
							 required/>
						</div>

						{/* For Occasion */}
						<div>
							<label htmlFor="book-occasions">Select an Occasion</label>
							<select></select>
						</div>
					 </fieldset>
				</form>
			</section>
		</header>
	)
}

export default BookingForm;
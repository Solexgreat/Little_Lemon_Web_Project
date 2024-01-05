import { useState } from "react"


const BookingForm = () => {
	const[date, setDate] = useState('')

	const handleDate = (e) => {
		setDate(e.target.vale)
	}
	return (
		<header>
			<section>
				<form>
					 <fieldset>
						<div>
						<label htmlFor="book-Date">Chose Date</label>
						 <input id='book-Date' value={date} onClick={(e) => handleDate(e.target.value)} type="date" required/>
						</div>
					 </fieldset>
				</form>
			</section>
		</header>
	)
}

export default BookingForm;
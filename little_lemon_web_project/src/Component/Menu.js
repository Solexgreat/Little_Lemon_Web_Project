import React from 'react'
import '../style/Menu.css'
import recipes from './recipes';
import Swal from 'sweetalert2'
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Menu = () => {

	const handleOrder = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, Order it!"
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Order!",
					text: "Your Order has been taken.",
					icon: "success"
				});
			}
		});
	}

	return (
		<div className='menu-container'>
			<div className="Specialty-header">
					<h1>This Week Specialty</h1>
					<button className="Online-btn">Online menu</button>
			</div>
			<article>
				<div className='card'>
					{recipes.map(recipe =>
					<div key={recipe.id} className='menu-items'>
						<img src={recipe.image()} alt='rt'/>
						<div className='menu-content'>
							<div className="menu-heading">
								<h1>{recipe.title}</h1>
								<p>{recipe.price}</p>
							</div>
							<div>
								<p>{recipe.description}</p>
								<button className='menu-btn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
							</div>
						</div>
					</div>
					)}
				</div>
			</article>
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
			</section>
		</div>
	)
}

export default Menu;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faStar } from '@fortawesome/free-regular-svg-icons';
import "../style/mainstyle.css";


const Main = () => {

	return(
		<main>
			<div className="Herosection">
					<div className="Hero-text" >
						<h1 className="Little-lemon">Little Lemon</h1>
						<h2>Chicago</h2>
						<p>Lorem ipsum dolor sit amet, consectetur<br/>
						adipiscing elit, sed do eiusmod tempor<br/>
						incididunt ut labore et dolore magna<br/>aliqua.</p>
						<div className="Hero-btn">
							<button className="Reserve-table">Reserve a table</button>
						</div>
					</div>
					<div className="Hero-image">
						<img src={require("../Images/image12.jpg")} alt="HeroImage" width="380" height="404"  />
					</div>
			</div>
			<section className="Week-Specialty">
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
								<img src={require("../Images/image4.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial one</div>
								<div className="stars">
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
								</div>
								<p>
									A very nice restaurant.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/image5.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Two</div>
								<div className="stars">
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
								</div>
								<p>
									A very nice restauran.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/image10.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Three</div>
								<div className="stars">
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
								</div>
								<p>
									A very nice restauran.
								</p>
							</div>
						</div>

						<div className="col">
							<div className="testimonial">
								<img src={require("../Images/image10.jpg")} alt='testimonial' width="100" height="100" />
								<div className="name">Testimonial Four</div>
								<div className="stars">
									<FontAwesomeIcon icon={"fa-solid fa-star"}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
									<FontAwesomeIcon icon={ faStar}/>
								</div>
								<p>
									A very nice restaurant.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
					<div className="AboutUs">
						<div>
							<h1>Little Lemon</h1>
							<h2>Chicago</h2>
							<p>Amet minim mollit non
							deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit. Exercitation veniam consequat
							sunt nostrud amet.Amet minim mollit non deserunt ullamco
							est sit aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit. </p>
						</div>
						<div>
							<img src="" alt="about us img" width="235" height="296" />
						</div>
						<div>
							<img src="" alt="about us img" width="235" height="296" />
						</div>
					</div>
			</section>
		</main>
	)
}

export default Main;
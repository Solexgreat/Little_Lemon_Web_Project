import React from 'react'
import '../style/Menu.css'
import recipes from './recipes';


const Menu = () => {

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
						<div>
							<h1>{recipe.title}</h1>
							<p>{recipe.price}</p>
						</div>
						<div>
							<p>{recipe.description}</p>
							<button className='menu-btn'>Order Now</button>
						</div>
					</div>
					)}
				</div>
			</article>
				{/* <article className="displayed-food">
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
				</article> */}
		</div>
	)
}

export default Menu;
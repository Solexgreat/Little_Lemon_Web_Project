import '../style/header.css'

const Header = () => {

	return(
		// <head>
		// 	<meta name="description" content="Little Lemon is a five star restuarant located in Chicago" />
		// 	<meta name="og:title" content="Little Lemon" />
		// 	<meta name="og:description" content="Little Lemon is a five star restuarant located in Chicago" />
		// 	<meta name="og:image" content="Image/image2.jpg"/>
		// </head>
		<header className="Herosection">
			<section>
				{/* banner text */}
				<div className="Hero-text" >
					<h2 className="Little-lemon">Little Lemon</h2>
					<h3>Chicago</h3>
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
			</section>
		</header>
	)
}

export default Header;
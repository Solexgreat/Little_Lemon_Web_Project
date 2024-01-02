import "../style/About.css"

const About = () => {
	
	return(
		<section className="AboutUs">
					<div className="About-inner">
						<div className="About-row">
							<div className="About-col textbox">
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
							<div className="About-col-img">
								<div className="owner1">
								<img src={require('../Images/restuarant owner.jpg')} alt="about us img" width="200" height="236" />
								</div>
								<div className="owner2">
								<img src={require('../Images/restuarant owner2.jpg')} alt="about us img" width="200" height="236" />
								</div>
							</div>
						</div>
					</div>
			</section>
	)
}

export default About;
import "../style/footer.css"


const Footer = () => {

	return(
		<footer>
			<div className="footer">
				<div className="footer-row">
					<div className="footer-Img">
						<img src={require("../Images/image2.jpg")} alt="footer img" width="163" height="256"/>
					</div>

					<div className="footer-Nav">
						<ul>
							<h2>Dormant Navigation</h2>
							<li><a href="/home">Home</a></li>
							<li><a href="/about">About</a></li>
							<li><a href="/menu">Menu</a></li>
							<li><a href="/reservation">Reservation</a></li>
							<li><a href="/online order">Online Order</a></li>
							<li><a href="/login">Login</a></li>
						</ul>
					</div>

					<div className="Contact">
						<ul>
						<h2>Contact</h2>
							<li>Phone number</li>
							<li>Email</li>
						</ul>
					</div>

					<div className="Socialmedia">
						<ul>
						<h2>Socialmedia Link</h2>
							<li><a href='/'>Facebook</a></li>
							<li><a  href='/'>Instagram</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
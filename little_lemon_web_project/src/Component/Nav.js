import { useState } from "react"
import "../style/navstyle.css"



const Nav = () => {

	const [menuOpen, setMenuOpen] = useState(false);

	const toggelMenu = () =>{
		setMenuOpen(!menuOpen)
	}

	return(
		<nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
			<a href='/' className="logo">
				<img src={require("../Images/logo1.jpg")} alt="Logo" width="200px" />
			</a>

			{/*mobile item*/}
			<div className="menu-icon" onClick={toggelMenu}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>

			{/* nav items */}
			<ul className={`nav-links ${menuOpen ? "visible": ""}`}>
				<li><a href="/home">HOME</a></li>
				<li><a href="/about">ABOUT</a></li>
				<li><a href="/menu">MENU</a></li>
				<li><a href="/reservation">RESERVATION</a></li>
				<li><a href="/online order">ONLINE ORDER</a></li>
				<li><a href="/login">LOGIN</a></li>
			</ul>
		</nav>
	)
}

export default Nav;
import "../style/navstyle.css"



const Nav = () => {

	return(
		<nav className="nav-bar">
			<img src={require("../Images/logo1.jpg")} alt="web Logo" width="223px" />
			<ul>
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
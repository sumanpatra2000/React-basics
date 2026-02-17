function Header({ userName }) {
	return (
		<header className="site-header">
			<h1>
				Welcome {userName} to the <span className="codecraft">CodeCraft</span> Labs Intranet
			</h1>
			<nav>
				<a href="#">Home</a>
				<a href="#">Employee Management</a>
				<a href="#">JavaScript Practice!</a>
			</nav>

		</header>
	);
}

export default Header;

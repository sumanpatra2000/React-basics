function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<p>© {year} CodeCraft Labs. All rights reserved.</p>
		</footer>
	);
}

export default Footer;

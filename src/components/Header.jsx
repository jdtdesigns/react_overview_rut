function Header(props) {
  const handleLinkClick = e => {
    e.preventDefault();

    props.setPage(e.target.innerText.toLowerCase());
  }

  return (
    <header>
      <h3>Portfolio Practice</h3>

      <nav>
        <a onClick={handleLinkClick} href="/" className={props.page === 'home' ? 'active' : ''}>Home</a>
        <a onClick={handleLinkClick} href="/about" className={props.page === 'about' ? 'active' : ''}>About</a>
        <a onClick={handleLinkClick} href="/contact" className={props.page === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
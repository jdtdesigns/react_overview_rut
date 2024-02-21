function Header(props) {
  console.log(props);
  return (
    <header>
      <h3>{props.mainTitle}</h3>
    </header>
  )
}

export default Header
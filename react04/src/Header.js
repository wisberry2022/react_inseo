function Header(props) {
  return (
    <header>
      THE SCRIPT - NOTHING
      {props.what}
      {props.member.map(el => <li key={el.id}>{el.name}</li>)}.reverse().slick(0, 2);
    </header>
  );
}

export default Header;
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map(element => <a href={`#${element}`} key={element}>{element}</a>)

  return <nav>{linksElements}</nav>;
}

export default NavBar;

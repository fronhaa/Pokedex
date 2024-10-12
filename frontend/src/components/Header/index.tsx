import {
  HeaderContainer,
  HeaderDiv,
  HeaderLogo,
  NavLink,
  NavMenu,
} from "./styles";
import Logo from "../../assets/Logo.png";
export function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <HeaderLogo src={Logo} />
        <NavMenu>
          <NavLink>Home</NavLink>
          <NavLink>Pokedex</NavLink>
          <NavLink>Settings</NavLink>
        </NavMenu>
      </HeaderContainer>
    </HeaderDiv>
  );
}

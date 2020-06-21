import styled from "styled-components";
import ThemeToggler from "../ThemeToggler";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>Jeremy Hon</Logo>
      <ThemeToggler />
    </NavbarContainer>
  );
};

const Logo = styled.div``;

const NavbarContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;

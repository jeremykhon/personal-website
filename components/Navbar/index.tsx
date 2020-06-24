import styled from "styled-components";
import ThemeToggler from "../ThemeToggler";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const links = {
  linkedin: "https://www.linkedin.com/in/jeremyhon/",
  github: "https://github.com/jehon11",
  email: "mailto:jeremy@jeremyhon.com",
};

const Navbar: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleSideMenu = () => {
    setShowSideMenu(showSideMenu ? false : true);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const navbarRight = () => (
    <NavbarRight>
      {windowWidth > 576 ? (
        <>
          <SocialLink href={links.email} target="_blank">
            Contact
          </SocialLink>
          <SocialLink href={links.github} target="_blank">
            Github
          </SocialLink>
          <SocialLink href={links.linkedin} target="_blank">
            Linkedin
          </SocialLink>
          <ThemeToggler />
        </>
      ) : (
        <GiHamburgerMenu size={25} onClick={toggleSideMenu} />
      )}
    </NavbarRight>
  );

  return (
    <>
      <Nav>
        <div className="container">
          <NavbarContainer>
            <Logo>Jeremy Hon</Logo>
            {windowWidth > 0 ? navbarRight() : null}
          </NavbarContainer>
        </div>
      </Nav>
      <Menu
        right
        isOpen={showSideMenu}
        onStateChange={({ isOpen }) => setShowSideMenu(isOpen)}
        width={220}
      >
        <>
          <div className="bm-item">
            <ThemeToggler />
          </div>
          <SocialLink className="bm-item" href={links.email} target="_blank">
            Contact
          </SocialLink>
          <SocialLink className="bm-item" href={links.github} target="_blank">
            Github
          </SocialLink>
          <SocialLink className="bm-item" href={links.linkedin} target="_blank">
            Linkedin
          </SocialLink>
        </>
      </Menu>
    </>
  );
};

const SocialLink = styled.a`
  margin-right: 25px;
  color: var(--color-text);

  &:hover {
    color: unset;
    text-decoration: none;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: var(--color-primary);
  font-weight: bold;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(var(--color-bg) 60%, rgba(255, 255, 255, 0) 100%);
  z-index: 1000;
`;

const NavbarContainer = styled.div`
  padding: 20px 0 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;

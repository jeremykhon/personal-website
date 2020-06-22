import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext, ChangeEvent } from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (e: ChangeEvent) => {
    console.log(e.target);
    setTheme && setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {theme && (
        <ToggleContainer>
          <div className="switch">
            <input
              className="switch__input"
              checked={theme === "dark"}
              type="checkbox"
              id="switchCheckbox1"
              onChange={toggleTheme}
            />
            <label
              aria-hidden="true"
              className="switch__label"
              htmlFor="switchCheckbox1"
            >
              On
            </label>
            <div aria-hidden="true" className="switch__marker"></div>
          </div>
          {theme === "dark" ? (
            <FiMoon className="ml-3" />
          ) : (
            <FiSun className="ml-3" />
          )}
        </ToggleContainer>
      )}
    </>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default ThemeToggler;

import { useTheme } from "styled-components";
import {
  DropdownCircle
} from "./StyledThemeSwitcher";
import { useState } from "react";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";

const ThemeSwitcher = ({ toggleTheme }) => {
  const theme = useTheme();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const handleClick = () => {
    toggleTheme();
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <DropdownCircle dropdown={dropdownOpened} onClick={handleClick}>
      {theme.name === "light" && (<Sun width="3em" fill={theme.colors.text} />)}
      {theme.name === "dark" && (<Moon width="3em" fill={theme.colors.text} />)}
      
    </DropdownCircle>
  );
};

export default ThemeSwitcher;

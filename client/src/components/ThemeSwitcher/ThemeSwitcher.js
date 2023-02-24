import { useTheme } from "styled-components";
import {
  DropdownCircle
} from "./StyledThemeSwitcher";
import { useState } from "react";
import { ReactComponent as SunSVG } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonSVG } from "../../assets/icons/moon.svg";

const ThemeSwitcher = ({ toggleTheme }) => {
  const theme = useTheme();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const handleClick = () => {
    toggleTheme();
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <DropdownCircle dropdown={dropdownOpened} onClick={handleClick}>
      {theme.name === "light" && (<SunSVG width="3em" fill={theme.colors.text} />)}
      {theme.name === "dark" && (<MoonSVG width="3em" fill={theme.colors.text} />)}
      
    </DropdownCircle>
  );
};

export default ThemeSwitcher;

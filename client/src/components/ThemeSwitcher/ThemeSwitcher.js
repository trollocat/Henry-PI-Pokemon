import {
  DropdownCircle,
  InnerCircleContainer,
  InnerCircle,
  SampleText,
} from "./StyledThemeSwitcher";
import { useState } from "react";

const ThemeSwitcher = ({ toggleTheme }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <DropdownCircle dropdown={dropdownOpened} onClick={handleClick}>
      <InnerCircleContainer>
        <InnerCircle>
          <SampleText>Aa</SampleText>
        </InnerCircle>
      </InnerCircleContainer>
    </DropdownCircle>
  );
};

export default ThemeSwitcher;

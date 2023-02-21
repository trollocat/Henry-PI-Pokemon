import Routes from "./routes";
import store from "./redux/store";
import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// styled
import { StyledGlobal } from "./css/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
// components
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const [appearance, setAppearance] = useState("light");
  const toggleTheme = () => {
    if (appearance === "light") setAppearance("dark");
    else setAppearance("light");
  };

  return (
    <Provider store={store}>
      <StyledGlobal />
      <ThemeProvider theme={theme[appearance]}>
        <Router>
          <div className="App">
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

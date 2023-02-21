import Routes from "./routes";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// styled
import { StyledGlobal } from "./css/StyledGlobal";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <Provider store={store}>
      <StyledGlobal />
      <ThemeProvider theme={theme.light}>
        <Router>
          <div className="App">
            <Routes />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

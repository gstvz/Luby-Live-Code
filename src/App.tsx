import { ThemeProvider } from "styled-components";
import LiveCodeScreen from "./pages/LiveCodeScreen";
import { GlobalStyle, theme } from "@styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LiveCodeScreen />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;

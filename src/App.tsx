import { GlobalStyles } from "./assets/styles";
import { Switch } from "./components";
import { ThemeContextProvider } from "./context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <h1>Hello</h1>
        <Switch />
      </ThemeContextProvider>
    </>
  );
}

export default App;

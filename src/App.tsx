import { GlobalStyles } from "./assets/styles";
import { Header, Switch } from "./components";
import { ThemeContextProvider } from "./context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <h1>Hello</h1>
        <Switch />
        <Header />
      </ThemeContextProvider>
    </>
  );
}

export default App;

import { GlobalStyles } from "./assets/styles";
import { Header, Switch } from "./components";
import { ThemeContextProvider } from "./context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <Header />
      </ThemeContextProvider>
    </>
  );
}

export default App;

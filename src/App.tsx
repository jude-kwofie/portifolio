import { GlobalStyles } from "./assets/styles";
import { Header } from "./components";
import { ThemeContextProvider } from "./context";
import { Home } from "./pages";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <Header />
        <Home />
      </ThemeContextProvider>
    </>
  );
}

export default App;

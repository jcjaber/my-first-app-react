import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <header>
          <Header />
          <p>Hello React!</p>
        </header>
        <Footer />
      </div>
    </>
  );
}

export default App;

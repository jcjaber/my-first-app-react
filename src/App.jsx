import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './styles';
import { defaultTheme } from './themes';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <div>
      <header>
        <Header />
        <p>Hello React!</p>
      </header>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;

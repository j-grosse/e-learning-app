import Header from './components/common/Header';
import Main from './routes/Main';
import Footer from './components/common/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

import Header from './components/common/Header';
import Main from './routes/Main';
import Footer from './components/common/Footer';
import { ThemeProvider } from '@/components/theme-provider';
// import './App.css';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto border border-gray shadow-lg">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Main />
        <Footer />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App; 

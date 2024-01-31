import Header from './components/home/Header';
import Main from './components/routes/Main';
import Footer from './components/home/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main />
    <button className="btn btn-primary w-64 rounded-full">Daisy UI Button App.tsx</button>

      <Footer />
    </>
  );
}

export default App;

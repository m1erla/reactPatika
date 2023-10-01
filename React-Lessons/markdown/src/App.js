import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Preview from './components/Preview';

function App() {
  return (
    <div className="container">
      <Header />
      <Preview/>
      <Footer/>
    </div>
  );
}

export default App;

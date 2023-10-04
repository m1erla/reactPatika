import './App.css';
import Daily from './components/Daily';
import Footer from './components/Footer';
import Search from './components/Search';
import ForecastDaily from './components/Forecast/ForecastDaily';
import ForecastHourly from './components/Forecast/ForecastHourly';
function App() {
  return (
    <div className="container">
        <div className='left'>
          <Search />
          <Daily/>
          <Footer/>
        </div>
        <div className='content'>
             <ForecastHourly />
             <ForecastDaily />
        </div>
    </div>
  );
}

export default App;

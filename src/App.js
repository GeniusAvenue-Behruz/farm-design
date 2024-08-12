import './App.css';
import Header from './components/Header.js';
import Alert from './components/Alert.js';
import Deals from './components/Deals.js';
import Categories from './components/Categories.js'
import Restaurants from './components/Restaurants.js'

function App() {
  return (
    <div className="App">
      <Alert />
      <Header />
      <Deals/>
      <Categories />
      <Restaurants />
    </div>
  );
}

export default App;

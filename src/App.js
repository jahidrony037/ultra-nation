import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const[cart,setCart]=useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(error => console.log(error))
  }, [])

    const btnHandelClick= (country) => {
      //console.log(country);
       const newCart = [...cart, country];
       console.log(newCart);
       setCart(newCart);
       
    }

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h3>Country Added: {cart.length} </h3>
      <Cart cart ={cart}></Cart>
      {
        countries.map(country => <Country key={country.alpha3Code} btnHandelClick={btnHandelClick} country={country}></Country>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {

  const proteinOptions = [
    {value: "bacon", label: "Bacon"},
    {value: "chicken breast", label: "Chicken breast"},
    {value: "free range eggs", label: "Free range eggs"},
    {value: "ground beef", label: "Ground beef"},
    {value: "salmon fillet", label: "Salmon fillet"},
    {value: "turkey", label: "Turkey"},
    {value: "ham", label: "Ham"}
  ]

  const [protein, setProtein] = useState([]);
  const handleProteinOption = (protein) => {
    setProtein(protein);
  }

  const vegetableOptions = [
    {value: "beans", label: "Beans"},
    {value: "bell pepper", label: "Bell pepper"},
    {value: "broccoli", label: "Broccoli"},
    {value: "carrots", label: "Carrots"},
    {value: "corn", label: "Corn"},
    {value: "green onion", label: "Green onion"},
    {value: "onion", label: "Onion"},
    {value: "spinach", label: "Spinach"}
  ]

  const [vegetable, setVegetable] = useState([]);
  const handleVegeOption = (vegetable) => {
    setVegetable(vegetable);
  }

  const grainOptions = [
    {value: "bread", label: "Bread"},
    {value: "corn tortillas", label: "Corn tortillas"},
    {value: "flour", label: "Flour"},
    {value: "pasta", label: "Pasta"},
    {value: "rice", label: "Rice"}
  ]

  const [grain, setGrain] = useState([]);
  const handleGrainOption = (grain) => {
    setGrain(grain);
  }

  const dairyOptions = [
    {value: "greek yogurt", label: "Greek yogurt"},
    {value: "milk", label: "Milk"},
    {value: "salted butter", label: "Salted butter"},
    {value: "processed american cheese", label: "Processed american cheese"},
    {value: "provolone cheese", label: "Provolone cheese"}
  ]

  const [dairy, setDairy] = useState([]);
  const handleDairyOption = (dairy) => {
    setProtein(dairy);
  }

  return (
    <div className="App">
      <p>College Cooking Guide</p>
      <div id="dropDown">
        <div class="indDrop">
          <Multiselect options={dairyOptions} displayValue="label">
          isObject = {false}
          onRemove= {(event) => {
          console.log(event);
          }}
          onSelect= {(event) => {
          console.log(event);
          }}
      </Multiselect>
        </div>

        <div class="indDrop">
          <Multiselect options={vegetableOptions} displayValue="label">
          isObject = {false}
          onRemove= {(event) => {
          console.log(event);
          }}
          onSelect= {(event) => {
          console.log(event);
          }}
      </Multiselect>
        </div>

        <div class="indDrop">
          <Multiselect options={grainOptions} displayValue="label">
          isObject = {false}
          onRemove= {(event) => {
          console.log(event);
          }}
          onSelect= {(event) => {
          console.log(event);
          }}
      </Multiselect>
        </div>

        <div class="indDrop">
          <Multiselect options={dairyOptions} displayValue="label">
          isObject = {false}
          onRemove= {(event) => {
          console.log(event);
          }}
          onSelect= {(event) => {
          console.log(event);
          }}
      </Multiselect>
        </div>
      </div>
    </div>
  );
}

export default App;

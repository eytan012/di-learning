import './App.css';
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import {useState} from "react";


const items = [
    {
        title:'What is React?',
        content: 'Frond end JS Library.'
    },
    {
        title:'Why use React?',
        content: 'Will make your life easy.'
    },
    {
        title: 'What we are going to study?',
        content: 'Redux and Hooks.'
    }
]
const options = [
    {
        label:'Red',
        value:'red'
    },
    {
        label:'Blue',
        value:'blue'
    },    {
        label:'Gree',
        value:'green'
    },
]
function App() {
const [selected,setSelected] = useState(options[0])
  return (
    <div>

      {/*<Accordion items={items}/>*/}
      {/*  <Search/>*/}
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
    </div>
  );
}

export default App;



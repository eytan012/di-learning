import React from 'react'
import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import axios from "axios";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
      searchText: '',
    }
  }

  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.data)
  //   .then(data => {
  //     // this.state.arr = data
  //     // console.log(this.state.arr);
  //     this.setState({arr:data})
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  async componentDidMount() {
    try {
      const req = await axios.get('https://jsonplaceholder.typicode.com/users')
      const res = await req.data
       this.setState({arr:res})
    } catch (e) {
      console.log(e)
    }

  }



  handleClick = (val) => {
    console.log('click');
    this.setState({searchText:val});
  }

  render(){
    const {arr,searchText} = this.state;

    const filteredRobots = arr.filter(item=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className='tc'>
        <SearchBox handleClick={this.handleClick}/>
        <CardsList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;

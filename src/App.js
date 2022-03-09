import React from 'react';
import CardList from './CardList';
import {robots} from './Robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends React.Component {
    constructor (){
        super();
        this.state = {
            robots : [], //you can also do <robots : robots> if you dont want to fetch api.
            searchfield : ''
        }
    }

    // You can fetch API data from internet and return it
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }

onSearchChange = (event) => {
    //event.taget.value == what user types into search bar
    this.setState({searchfield : event.target.value}) 
    }

    render() {
        //moved const filterRobots inside render() so CardList prop can reach it.
        //cant reach it inside of onSearchChange(0)
        const filterRobots = this.state.robots.filter(robot => {
            //returning a robot from our list that matches the text in search bar
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
        
            })

        //Scroll component wraps CardList component, thus has its state/behavior
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                <CardList  robots = {filterRobots} />
                </Scroll>
            </div>   
        );
    }
}
export default App;
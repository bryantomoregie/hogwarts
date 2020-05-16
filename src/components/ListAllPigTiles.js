import React, { Component } from 'react';
import IndividualPigTile from './IndividualPigTile.js'


class ListAllPigTiles extends Component {
    
    state = {
        hogs: []
    }

    greasyHogs = () => {
        this.setState({
            hogs: this.state.hogs.filter(hog => hog.greased == true)
        })
    }

    filterByWeight = () => {
       this.setState({
           hogs: this.state.hogs.sort((x, y) => x.weight - y.weight)
       })
    }

    compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    filterByName = () => {
        this.setState({ 
            hogs: this.state.hogs.sort(this.compareValues('name'))
        })
       console.log("hello")
    }

    componentDidMount(){
        fetch('http://localhost:3001/hogs')
        .then(res => res.json())
        .then(arrayOfPigs => {
            this.setState({
                hogs: arrayOfPigs     
            })
        })
    }
    

    
    
    render() {
        console.log(this.state.hogs)
      return (
         
        <div className="ListAllPigTiles" style={{ marginTop: 20 }}> 
         <button onClick={() => this.filterByName()} type="button" class="btn btn-primary">Filter by Name</button>
         <button onClick={() => this.filterByWeight()} type="button" class="btn btn-primary">Filter by Weight</button>
         <button onClick={() => this.greasyHogs()} type="button" class="btn btn-primary">Filter by Grease</button>
            {this.state.hogs.map(pigs => (
                <IndividualPigTile
                name={pigs.name}
                specialty={pigs.specialty}
                greased={pigs.greased}
                weight={pigs.weight}
                highestMedalAchieved={pigs.highestMedalAchieved}
                image={pigs.image}
                />
            ))}
        </div>
       
      )
    }
  }
  
  export default ListAllPigTiles;
  
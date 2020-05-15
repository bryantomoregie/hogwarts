import React, { Component } from 'react';
import IndividualPigTile from './IndividualPigTile.js'


class ListAllPigTiles extends Component {
    
    state = {
        hogs: ["hi"]
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
         <button>Delete</button>
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
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </div>
      
      )
    }
  }
  
  export default ListAllPigTiles;
  
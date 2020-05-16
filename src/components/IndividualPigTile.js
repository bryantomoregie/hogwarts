import React, { Component } from 'react'


class IndividualPigTile extends Component {
    render() {
      return (
        <div className="pigTile">
           <div>{this.props.name}</div>
      <img src={this.props.image} />
        </div>
      )
    }
  }
  
  export default IndividualPigTile;
  
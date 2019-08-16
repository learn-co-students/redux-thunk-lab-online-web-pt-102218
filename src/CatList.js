    
import React, { Component } from 'react';

class CatList extends Component {

  handleOnClick() {
    
  }

  render() {
    console.log('List of Cats', this.props.cats)
    const allCats = this.props.catPics.map((cat, i) =>  { 
      if (cat.url) {
      return <img key={i} src={cat.url} id={cat.id}/> }} )
    return (
      <div>
        <h3> Cat List</h3>
        {allCats}
      </div>
    );
  }
};

export default CatList;
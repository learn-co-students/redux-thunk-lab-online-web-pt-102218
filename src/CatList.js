import React, {Component} from 'react';

export default class CatList extends Component {

  generatePics() {
    return this.props.catPics.map((pic) => <img src={pic.url}/>)
  }


  render() {
    return (
      <div>
      {this.generatePics()}
      </div>
    )
  }
}

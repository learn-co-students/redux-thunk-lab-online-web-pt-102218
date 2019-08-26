import React, { Component } from 'react';

export default class CatList extends Component {
  constructor() {
    super()
    this.displayCats = this.displayCats.bind(this)
  }

  displayCats() {
    if (this.props.loading) {
      return <h3>Now Loading Cats</h3>
    } else {
      return (
        this.props.catPics.map((p, idx) => {
          return <img style={{display: 'block', height: '200px', width: 'auto',}}key={idx} src={p.url} alt={`Cat Pic ${idx}`}/>
        })
      )
    }
  }

  render() {
    return (
      <div>
        {this.displayCats()}
      </div>
    )
  }
}
import React from 'react';

export default class Catlist extends React.Component {
  render() {
     return(
       <div>
         {this.props.catPics.map((pic, index) => <img key={index}
         src={pic.url}  alt={`cat -${index}`} />)}
       </div>
     )
  }
}
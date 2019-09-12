import React, {Component} from 'react'
import cuid from 'cuid'

class Class extends Component{
    
    generateCatPics(){
        return this.props.catPics.map(catPic => <img key={cuid()} src={catPic.url}/>)
    }

    render(){
        return(
            <div>
                {this.generateCatPics()}
            </div>
        )
    }
}

export default Class
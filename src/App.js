import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {   

  componentDidMount(){
    if(this.props.cats.length === 0){
      this.props.fetchCats()
    }
  }
  
  render() {
    return (
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <h3>Catbook</h3>
                <h1>Hello!</h1>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <CatList catPics={this.props.cats} /> 
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats.pictures
  }
}



export default connect(mapStateToProps, {fetchCats})(App)
import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({catPics: state.cats.pictures})


export default connect(mapStateToProps, { fetchCats })(App)


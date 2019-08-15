import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions';
import { connect } from 'react-redux';
import CatList from './CatList';

class App extends Component {   
  componentDidMount() {
    if (this.props.cats.length === 0) {
      this.props.fetchCats()
    }
  }
  render() {
    console.log('Inside render', this.props)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <h1> Hello! </h1>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
         <CatList catPics={this.props.cats} /> 
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log('MSTP', state.cats.pictures)
  return {cats: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


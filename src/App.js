import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import CatList from './CatList'
import * as actions from './actions/catActions'

import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats().then(
      () => console.log('done!')
    );
  }
  
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <a href="/">CatBook</a>
          </Navbar.Brand>
        </Navbar>
        <div className="container">
          <CatList catPics={this.props.catState.pictures} loading={this.props.catState.loading}/>
        </div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catState: state.cats }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(actions.fetchCats()),
    loadingCats: () => dispatch(actions.loadingCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


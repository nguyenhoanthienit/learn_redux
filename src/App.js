import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateUsers } from './actions/users-action';

class App extends Component {  
  constructor(props){
    super(props);
    this.onUpdateUsers = this.onUpdateUsers.bind(this);
  }
  onUpdateUsers(event){
    this.props.onUpdateUsers(event.target.value);
  }
  render(){
    console.log(this.props);
    return(
      <div>
        {this.props.users}
        <input onChange={this.onUpdateUsers} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  products : state.products,
  users : state.users
});

const mapActionToProps = {
  onUpdateUsers : updateUsers
}

export default connect(mapStateToProps, mapActionToProps)(App);
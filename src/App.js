import React, { Component } from 'react'
import Header from './components/header/index'
import BoardInfoBar from './components/boardinfobar/boardinfobar'
import ListContainer from './components/listcontainer/listcontainer'
import {connect} from 'react-redux'
import addCards from './store/actions1'
import addLists from './store/actions2'
import addPositions from './store/actions3'
class App extends Component {
   componentDidMount(){
        
      this.props.addPositions();
      this.props.addCards();
      this.props.addLists();
      
   }

  render() {

    return <div>
             <Header/>
             <BoardInfoBar/>
             <ListContainer/>
    </div>
    
  }
}
const mapStateToProps = state => {
  return {
          cards:state.reducer.cards,
          lists:state.reducer.lists
  }
}
const mapDispatchToProps = {addCards,addLists,addPositions}

export default connect(mapStateToProps, mapDispatchToProps)(App);

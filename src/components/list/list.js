import React, { Component } from 'react'
import { connect } from 'react-redux'
import addCard from './actions1'
import Dragula from 'react-dragula'
import DragulaStyles from 'react-dragula/dist/dragula.min.css'




class List extends Component {
   
    
    state = {
        isShow: true
    }

    handleSubmit = (e) => {
        const { id, positions, addCard } = this.props;

        const newCard = {
            "name": e.target.insert.value,
            "listId": id
        }

        const posArray = positions[id - 1].posititonsArray;
       
        addCard(newCard, posArray);


        this.setState({ isShow: true });
        e.preventDefault();
    }
    handleClick = () => {
        this.setState({ isShow: false })
    }

    render() {
        const { id, cards, positions } = this.props;

       let arr = new Array;
       let arr1;

       if(positions[id-1] && positions[id - 1].posititonsArray){
       for (let key = 0; key < positions[id - 1].posititonsArray.length; key++)
       arr.push(cards[positions[id - 1].posititonsArray[key]-1]);
       arr1 = arr.map((item, index) => {if(item) return <li key={index}>{item.name}</li>});
       }

      
       
        return <div className="list-items">

            <ul data-id={id} className="container">
           {arr1}
            </ul>


            {this.state.isShow ? <button onClick={this.handleClick} className="add-card-btn btn">Add a card</button>
                : <form onSubmit={this.handleSubmit}>
                    <input type="submit" name="submit" value="Add" />
                    <input type="text" name="insert" />
                </form>
            }
        </div>


    }
}
const mapStateToProps = state => {
    return {
        cards: state.reducer.cards,
        positions: state.reducer.positions
       
    }
}
const mapDispatchToProps = { addCard }

export default connect(mapStateToProps, mapDispatchToProps)(List);
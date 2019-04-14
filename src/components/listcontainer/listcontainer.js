import React, { Component } from 'react';
import List from '../list/list'
import { connect } from 'react-redux'
import addList from './actions'
import Dragula from 'react-dragula'
import changePositions from './changepositions'
import changeListCards from './changelistcards'

class ListContainer extends Component {
    state = {
        isShow: true
    }

    componentDidUpdate() {

        let indexOfDrag, indexOfDrop, source1, source2, id1, id2;
        const { positions } = this.props;

        let dom = document.getElementById('cont');
        let list = dom.querySelectorAll('.container');
        let container = Array.from(list);

        let drake = Dragula(container);


        drake.on('drag', function (el, source) {


            indexOfDrag = Array.prototype.indexOf.call(el.parentElement.children, el);
            source1 = source;
        });

        drake.on('drop', function (el, target, source, sibling) {

            indexOfDrop = Array.prototype.indexOf.call(target.children, el);
            source2 = target;
            id1 = source1.dataset.id;
            id2 = source2.dataset.id;
            if (positions[id1 - 1] && positions[id1 - 1].posititonsArray.length) {

                if (source1 === source2) {

                    changePositions(indexOfDrag, indexOfDrop, positions[id1 - 1].posititonsArray, id1);
                } else {

                    changeListCards(indexOfDrag, indexOfDrop, positions[id1 - 1].posititonsArray, positions[id2 - 1].posititonsArray, id1, id2)
                }
            }
        })


    }

    handleSubmit = (e) => {

        const newObject = {

            "name": e.target.insert.value
        }
        const newListId = this.props.lists.length + 1;

        this.props.addList(newObject, newListId);
        this.setState({ isShow: true })

    }
    handleClick = () => {
        this.setState({ isShow: false })
    }
    render() {


        const lists = this.props.lists.map((item, index) => {
            return <div key={index} className='list'>
                <h3 className="list-title">{item.name}</h3>
                <List id={item.id} />
            </div>
        })

        return <section id='cont' className="lists-container">

            {lists}
            {
                this.state.isShow ?
                    <button onClick={this.handleClick} className="add-list-btn btn">Add a list</button>
                    : <form onSubmit={this.handleSubmit}>
                        <input type="text" name="insert" />
                        <input type="submit" value="Add" />
                    </form>}
        </section>
    }
}

const mapStateToProps = state => {
    return {
        lists: state.reducer.lists,
        cards: state.reducer.cards,
        positions: state.reducer.positions


    }
}
const mapDispatchToProps = { addList }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

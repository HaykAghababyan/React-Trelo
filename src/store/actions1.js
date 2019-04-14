  export default function addCards(data) {


    return async dispatch => {
        
        const res = await fetch(`http://localhost:3001/cards`);
        const cards = await res.json();
     
        dispatch({
            type: 'LOAD_CARDS',
            data: cards
          })
    }
}



export  default function addLists(data) {
 
    
    return async dispatch => {
        
        const res = await fetch(`http://localhost:3001/lists`);
        const lists = await res.json();
     
        dispatch({
            type: 'LOAD_LISTS',
            data: lists
          })
    }
}
export  default function addLists(data) {
 
    
    return async dispatch => {
        
        const res = await fetch(`http://localhost:3001/positions`);
        const pos = await res.json();
  
        dispatch({
            type: 'LOAD_POSITIONS',
            data: pos
          })
    }
}
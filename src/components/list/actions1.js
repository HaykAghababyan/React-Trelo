export default function addCard(data,array) {

   
    return  async dispatch => {
        let res= await fetch('http://localhost:3001/cards', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)});
        res = await res.json();
   
        array.push(res.id);
        
         
        fetch(`http://localhost:3001/positions/${data.listId}`,{
            headers: {
                "Content-Type": "application/json",
            },
        method:"PATCH",
        body:JSON.stringify({ posititonsArray:array})
        
        })

        dispatch({
            type: 'ADD_CARDS',
            data: res
          })
    }
}


export default function addList(data,id) {

   
    return  async dispatch => {
    let res = await fetch('http://localhost:3001/lists', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)});

        res = await res.json();   
 
       let res1 = await fetch(`http://localhost:3001/positions`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({listID:id, posititonsArray:new Array })
        })
        res1 =await res1.json();
        dispatch({
            type: 'ADD_LISTS',
            data: [res,res1]
          })
    }
}
export default function changePositions(index1, index2, array, id) {

    let k = array.splice(index1, 1);
    array.splice(index2, 0, k[0]);


    fetch(`http://localhost:3001/positions/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ posititonsArray: array })

    })

}


export default function changeListCards(indexOfDrag, indexOfDrop, arrayDrag, arrayDrop, id1, id2) {

    let k = arrayDrag.splice(indexOfDrag, 1);

    arrayDrop.splice(indexOfDrop, 0, k[0]);


    fetch(`http://localhost:3001/positions/${id1}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ posititonsArray: arrayDrag })

    })

    fetch(`http://localhost:3001/positions/${id2}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ posititonsArray: arrayDrop })

    })

}


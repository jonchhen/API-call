
// const url = 'http://petstore.swagger.io/v2/pet/findByStatus?status=available';

// function send() {
//     const idNum = parseInt(document.getElementById('id').value)
//     console.log(`id: ${id}`)

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             const {id, name, status} = data[idNum];
//             document.getElementById("para").innerHTML = `ID: ${id} <br> Name: ${name}<br> Status: ${status}`
//         })
//         .catch(error => console.log(error))
//     }

const url = 'https://cors-anywhere.herokuapp.com/http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/requestValidation';

    function checkScore() {
        const idNum = parseInt(document.getElementById('id').value)
    
        fetch(url, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({address: 123}) //for getting the actual score, replace 123 with idNum 
        })
            .then(res => res.text()) //if returning JSON then do res.json()
            .then(data => {
                console.log(data)
                document.getElementById("para").innerHTML = data
            })
            .catch(error => console.log(error))
        }
   


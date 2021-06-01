//async await
// const sendData =async ()=>{
//     const username = document.getElementById('uname').value;
//     const pw = document.getElementById('pw').value;
//     const req = await fetch(`http://localhost:3000/login?u=${username}&p=${pw}`)
//     const data = await req.json()
//     console.log(data)
//     return data
// }

//promises
// const sendData = ()=>{
//     const username = document.getElementById('uname').value;
//     const pw = document.getElementById('pw').value;
//     fetch(`http://localhost:3000/login?u=${username}&p=${pw}`)
//         .then(res=>{
//             res.json().then(r => console.log(r))
//         })
// }

//post requst
const sendData =async ()=>{
    const username = document.getElementById('uname').value;
    const pw = document.getElementById('pw').value;
    const data = {
        u:username,
        p:pw
    }
    const req = await fetch(`http://localhost:3000/login`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    const data2 = await req.json()
    console.log(data2)
    return data2
}
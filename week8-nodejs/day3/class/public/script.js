



const sendData = async ()=>{
    try{
        const name = document.getElementById('name').value
        console.log(name)
        const data = {
            name:name
        }
        const post = await fetch('http://localhost:5010/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const data2 = await post.json()
        return data2
    } catch (e){
        console.log(e)
    }
}


/*
const showData = ()=>{
    fetch('http://localhost:5000/show')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)})
}
*/

const showData = async ()=>{
    try{
        console.log('somthing')
        const fetchData = await fetch('http://localhost:5010/show')
        const data = await fetchData.json()
        console.log(data)
        // await createData(data)
    }catch (e){
        console.log(e)
    }
}

const createData = async (data)=>{
    const root = document.getElementById('root')
    const map = data.map((item)=>{
        const p = document.createElement('p')
        p.innerText = item.name
        root.appendChild(p)
    })
}
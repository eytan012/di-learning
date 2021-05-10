const container = document.querySelector('.container')

function fetchData(){
    const searchField = document.querySelector('#search').value
    let xhr = new XMLHttpRequest()
    xhr.open('GET',
        `https://api.giphy.com/v1/gifs/search?q=${searchField}&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    xhr.responseType = 'json'
    xhr.send()
    xhr.onload = ()=>{
        const res = xhr.response
        displayGifs(res)
    }
}

function displayGifs(res){
    container.innerHTML = ''
    const data = res.data
    console.log(data)
    const mapping = data.forEach((item)=>{
        const div = document.createElement('div')
        div.className = `${item.id}`
        const img = document.createElement('img')
        img.setAttribute('src', `${item.images.original.url}`)
        img.setAttribute('width', '250')
        const btn = document.createElement('button')
        btn.addEventListener('click',()=>{
            div.remove()
        })
        btn.className = `${item.id}`
        btn.innerText = "Delete"
        div.appendChild(img)
        div.appendChild(btn)
        container.appendChild(div)
    })
    const deleteAllBtn = document.createElement('button')
    deleteAllBtn.innerText = "Delete All"
    container.appendChild(deleteAllBtn)
    deleteAllBtn.addEventListener('click',()=>{
        container.innerHTML = ''
    })
}

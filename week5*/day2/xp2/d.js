let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
xhr.responseType = 'json'
xhr.send()
xhr.onload = ()=>{
    const res = xhr.response.data
    console.log(res)
    displayRandomGifs(res)
}

const root = document.getElementById('root')

function displayRandomGifs(res){
        const img = document.createElement('img')
        img.setAttribute('src', `${res.image_original_url}`)
        img.setAttribute('width', '250')
    root.appendChild(img)
}


const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/23',
    'https://swapi.dev/api/people/4'
]

Promise.all(urls.map(url=>
    fetch(url).then(res=>res.json())
))
.then(data=>console.log(data))
.catch(err=>console.log(err))



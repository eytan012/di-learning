const apiUrl = 'https://zivuch.github.io/employees.json'

//async-await
async function fetchData(url) {
    try {
        const req = await fetch(url)
        const res = await req.json()
        return res.employees
    } catch (e) {
        console.log(e)
    }

}

async function filterData() {
    const searchBoxValue = document.querySelector('#searchBox').value.toLowerCase()
    const employees = await fetchData(apiUrl)
    const filtered = employees.filter((item) => {
        return item.firstName.toLowerCase().includes(searchBoxValue)
    })
    console.log(filtered)
}

async function sortByAge() {
    const employees = await fetchData(apiUrl)
    const sort = employees.sort((a, b) => {
        return a.age - b.age;
    })
    console.log(sort)
}

async function sortByFirstName() {
    const employees = await fetchData(apiUrl)
    const sort = employees.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName)
    })
    console.log(sort)
}

//promises
// function fetchData(url){
// fetch(url)
//     .then(res => res.json())
//     .then(data=> console.log(data.employees))
//     .catch(e=>console.log(e))
// }
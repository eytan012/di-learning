let btn = document.getElementById('insertRowBtn')
btn.addEventListener('click',insertRow)

//create 1 tr, 2tds,each td has text
let table = document.getElementById('sampleTable').children[0]
let counter = 2
function insertRow(){
    counter++
    let tr = document.createElement("tr")
    table.appendChild(tr)
    for (let i=0; i<=1; i++){
        let td = document.createElement("td")
        let text = document.createTextNode(`Row ${counter} cell ${i+1}`)
        td.appendChild(text)
        tr.appendChild(td)
    }
}
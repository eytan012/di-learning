

// const input1 = document.querySelector('#input1')
const root = document.querySelector('#root')
const arr = []
const logBtn1Value = ()=>{
    const input1 = document.querySelector('.input1').value
    arr.push(input1)
    const newArr = arr.map((val)=>{
        return val += ` my great item `
    })
    displayInputValues(newArr)
}


const displayInputValues = (val)=>{
    div1.innerHTML = ''
    val.forEach((val)=>{
        const p = document.createElement('p')
        div1.appendChild(p)
        p.innerText = val
    })

}

const createInputsAndButtons = ()=>{
    const input1 = document.createElement('input')
    input1.setAttribute('type','text')
    input1.className = "input1"
    root.appendChild(input1)
    const btn1 = document.createElement('button')
    btn1.innerText = "Click me"
    root.appendChild(btn1)
    btn1.addEventListener('click',logBtn1Value)
}
createInputsAndButtons()



const div1 = document.createElement('div')
div1.setAttribute('class','displayText')
root.appendChild(div1)

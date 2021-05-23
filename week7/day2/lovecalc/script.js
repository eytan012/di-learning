


async function fetchData() {
    const first = document.getElementById('first').value
    const second = document.getElementById('second').value
    try{
        const req = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${first}&sname=${second}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cf8a4ee456msh5dc6f06a102744dp1cf400jsn6dc5bfdca299",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            }
        })
        const res = await req.json()
        display(res)
    }catch (e){
        console.log(e)
    }

}

const displayResult = document.querySelector('.displayResult')

async function display(res){
    displayResult.innerHTML = ''
    const data = res
    console.log(data)
    const congrats = document.createElement('p')
    congrats.innerText = `Hello ${data.fname} And ${data.sname}! You guys have ${data.percentage}% of a much. ${data.result}`
    displayResult.appendChild(congrats)
}
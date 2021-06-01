const sendDataToServer = async () => {
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value
    await getDataFromServer()
    const data = await fetch(`http://localhost:3000/getData`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password, username })
        }
    )
    // .then(res => res.json())
    // .then(res => console.log(res))
    // return
}
const getDataFromServer = async () => {
    let password = document.querySelector('#password').value
    let username = document.querySelector('#username').value
    const data = await fetch(`http://localhost:3000/getData`)
    const result = await data.json()
    let ifExist = false;
    let counter=1
    console.log(password)
    console.log(username)
    result.forEach(item => {
        if ((item.username === username || item.password === password )) {
            return ifExist = true
        }
    })
    if (ifExist){
        document.querySelector('#bad').style.display = 'block'
        return document.querySelector('#good').style.display = 'none'
    }
    document.querySelector('#good').style.display = 'block'
    document.querySelector('#bad').style.display = 'none'
}
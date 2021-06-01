const sendData = () => {
  const user = document.getElementById('user').value;
  fetch('http://localhost:5000/addUser',
      {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
      }
  )
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}

const showData = () => {
  fetch('http://localhost:5000/showUsers')
  .then(res => res.json())
  .then(data => {
    createData(data);
  })
}

const createData = (arr) => {
  let root = document.getElementById('root');
  root.innerHTML = '';
  arr.forEach(item => {
    let div = document.createElement('div');
    div.innerText = item.user;
    root.appendChild(div)
  })
}


const searchData = () => {
  const user = document.getElementById('user').value;
  fetch(`http://localhost:5000/search/${user}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
}

const access_key = '075d15d60a95b06528ad8d5812e3d35e';
const list_url = `http://www.apilayer.net/api/list?access_key=${access_key}`
const rate_url = `http://www.apilayer.net/api/live?access_key=${access_key}&format=1`
const root = document.getElementById('root');

const getList = async () => {
  try{
    const response = await fetch(list_url);
    const data = await response.json();
    return data.currencies;
  }
  catch(e){
    throw new Error('Unable to get data from getList')
  }
}

const createList = async(arr,elm) => {
  const sel = document.createElement('SELECT');
  sel.setAttribute('id',elm);
  sel.setAttribute('name',elm)

  root.appendChild(sel);

  let opt = document.createElement('OPTION')
  opt.setAttribute('value','');
  opt.innerText = 'Please Select Currency'
  sel.appendChild(opt);

  arr.forEach( ([key,value]) => {
    let opt = new Option(value,key);
    sel.appendChild(opt);
  })
}

const getExchangeRate = async(fromCurrency,toCurrency) => {
  try {
    const response = await fetch(rate_url);
    const rates = await response.json();
    const rate = rates.quotes;

    const exchangeRate = rate['USD'+toCurrency] / rate['USD'+fromCurrency];

    return exchangeRate;
  } catch (e) {
    throw new Error('Unable to get data from getExchangeRate')
  }
}

const creatUI = async () => {
  const list = await getList();
  const arr = Object.entries(list);
  createList(arr,'from');
  createList(arr,'to');

  let amt = document.createElement('INPUT');
  amt.setAttribute('id','amount');
  amt.setAttribute('placeholder', 'Amount');
  root.appendChild(amt);

  let btn = document.createElement('BUTTON');
  btn.setAttribute('id','btn');
  btn.innerText = 'Calculate';
  root.appendChild(btn);

  let messageDiv = document.createElement('DIV');
  root.appendChild(messageDiv);

  btn.addEventListener('click', async function(){
    let fromCurrency = document.querySelector('#from').value;
    let toCurrency = document.querySelector('#to').value;
    let amount = document.querySelector('#amount').value;
    // console.log(fromCurrency,toCurrency,amount);
    let rate = await getExchangeRate(fromCurrency,toCurrency);
    const c_amount = (amount * rate).toFixed(2);
    messageDiv.innerText = `From ${fromCurrency} to ${toCurrency} = ${c_amount}`;
  })

}


creatUI();

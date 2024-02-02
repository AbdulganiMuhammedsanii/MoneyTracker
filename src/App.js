import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'applications/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      })

    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json);
      });
    });
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 AAPL Stock'} />
          <input value={datetime}
            onChange={ev => setDatetime(ev.target.value)} type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description '} />
        </div>
        <button type="submit">Add New transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">

          <div className="left">
            <div className="name">AAPL Stock</div>
            <div className="description"> I believe Apple is going to the Moon!!</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-1-24 14:35</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">CS1110 Consultant</div>
            <div className="description">Thank you CIS</div>
          </div>
          <div className="right">
            <div className="price green">+$150</div>
            <div className="datetime">2024-1-27 14:35</div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default App;

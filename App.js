import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [User, setUser] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newUser = { email: email, password: password };
    setUser([newUser]);
    console.log(User);
  }
  const data = { Email: '', Password: '' };

  fetch('https://reqres.in/api/users', {
    headers: {
    'Content-Type': 'application/json',
  },
    method: 'POST',
    body: JSON.stringify({
      "email":email,
      "password":password
    }
    )
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  return (
    <div className="App-header">
      <form action='' onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
}

export default App;

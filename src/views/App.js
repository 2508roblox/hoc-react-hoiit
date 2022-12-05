import logo from './logo.svg';
import './App.scss';
import Example from './Example';

function App() {
  const auth = {
    name: 'Giang',
    age: 18,
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>Hoi dan IT</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
        <Example  />
      </header>
    </div>
  );
}

export default App;

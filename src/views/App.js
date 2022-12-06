import logo from './logo.svg';
import './App.scss';
import Example from './Example';

function App() {

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
        {/* nesting component */}
        <Example  />
      </header>
    </div>
  );
}

export default App;

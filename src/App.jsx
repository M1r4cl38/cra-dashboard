//import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Aside } from './components/aside/Aside';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="app">
        <Aside />
        <Header />
        <Main />
    </div>
  );
}

export default App;

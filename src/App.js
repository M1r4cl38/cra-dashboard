//import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Left } from './components/Left';
import { Main } from './components/Main';
import { Right } from './components/Right';

function App() {
  return (
    <div className="App">
      <aside className="Left">
        <Left />
      </aside>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      <aside className="Right">
        <Right />
      </aside>
    </div>
  );
}

export default App;

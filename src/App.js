import './App.css';
import HERO from './components/hero/Hero.jsx';
import ABOUT from './components/about/about.jsx';
import FOOTER from './components/footer/footer,jsx'
import PROJECTS from './components/Projects.jsx'

function App() {
  return (
    <div>
      <HERO />
      <PROJECTS />
      <ABOUT />
      <FOOTER />
    </div>
  );
}

export default App;

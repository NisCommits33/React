import './App.css'
import Gallery from './components/Gallery';


export default function App(){
  return(
    <div>
    <h1 style={{color:"black"}}>Welcome to Number Guessing Game</h1>
    <p>hmm, I am thinking of a number. Can you guess it??</p>
    
      <Gallery/>
    </div>
  );
}


import logo from './assets/react-core-concepts.png'

const changableElements = ["Fundamental","Crucial","Core"];

function genRandomNumber(max){
  return Math.floor(Math.random() * (max + 1))
}
function Header(){
  const description = changableElements[genRandomNumber(2)]
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
  </header>
  )
}
const CoreConcept = (props) =>{
  return(
    <li>
      <img src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
       <h2>Core Concepts</h2>
      </main>
    </div>
  );
}

export default App;

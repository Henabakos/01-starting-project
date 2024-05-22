import logo from '../assets/react-core-concepts.png'
const changableElements = ["Fundamental","Crucial","Core"];

function genRandomNumber(max){
  return Math.floor(Math.random() * (max + 1))
}
export default function Header(){
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
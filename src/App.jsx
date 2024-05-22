import { CoreConcept } from './components/CoreConcept.jsx';
import Header from './components/Header.jsx'
import { CORE_CONCEPTS } from './data';
import {EXAMPLES} from './data.js'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

// const CoreConcept = (props) =>{
//   return(
//     <li>
//       <img src={props.image} alt="image" />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function App() {

  const [tabContent,setTabContent] = useState()
  const handleSelect=(selectedButton)=>{
    setTabContent(selectedButton)
    console.log(selectedButton)
}
  return (
    <div>
      <Header/>
      <main>
       <h2>Core Concepts</h2>
       <section id='core-concepts'>
       
       <ul>
        {CORE_CONCEPTS.map((item,inx)=><CoreConcept {...item}/>)
      }
       </ul>
       </section>
       <section id='examples'>
        <h2>Example</h2>
        <menu>
          <TabButton isSelected = {tabContent === "components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
          <TabButton isSelected = {tabContent === "props"} onSelect={()=>handleSelect("props")}>props</TabButton>
          <TabButton isSelected = {tabContent === "jsx"} onSelect={()=>handleSelect("jsx")}>Jsx</TabButton>
          <TabButton isSelected = {tabContent === "state"} onSelect={()=>handleSelect("state")}>State</TabButton>
        </menu>
       </section>
       {!tabContent ? <p>Please Click a Button</p>
       : <div id="tab-content">
       <h2>{EXAMPLES[tabContent].title}</h2>
       <p>{EXAMPLES[tabContent].description}</p>
       <pre>
         <code>
         {EXAMPLES[tabContent].code}
         </code>
       </pre>
      </div>
      }
      </main>
    </div>
  );
}

export default App;

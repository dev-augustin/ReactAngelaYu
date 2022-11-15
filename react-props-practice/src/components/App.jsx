import Card from "./Card";
import { contacts } from "../contacts";
function App() {

  return (
    <div>
      <h4>Hello</h4>
      {contacts.map((item) =>{return <Card key ={item.name} element={item.name} />})}
     
    </div>
  );
}

export default App;

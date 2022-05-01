import { Counter } from "./components/counter"
import { Todos } from "./components/Todo"

function App() {
//   const state =store.getState();
// console.log("Store" ,store.getState());

  return (
    <div className="App">
 <Counter/>
 <hr/>
 <Todos/>
    </div>
  )
}

export default App

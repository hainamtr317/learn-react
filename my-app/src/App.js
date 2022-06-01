import Todo from "./components/Todo";


function App() {
  
  return (<div>
    <h1>My todo</h1>
      <Todo Text='mylist' />
      <Todo Text='name' />
      <Todo Text='subject'/>
  </div>);
}

export default App;

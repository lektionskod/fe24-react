import TodoItem from "./components/TodoItem";

function App() {
  const heading = 'Todo App';
  const todos = [
    {
      todo : 'Köpa glass',
      done : true
    },
    {
      todo : 'Köpa kaffe',
      done : false
    },
    {
      todo : 'Mata katten',
      done : true
    },
    {
      todo : 'Tömma kattlådan',
      done : false
    },
    {
      todo : 'Rasta grisen',
      done : false
    },
  ];
  return (
    <div className="app">
      <h1>{ heading }</h1> { /* Allt inom {} tolkas som vanilla JS */}
      <ul>
        {
          todos.map((todo, index) => {
            return <TodoItem 
              key={ index }
              todo={ todo }
            />
          })
        }
      </ul>
    </div>
  )
}

export default App;

// <li>Köpa kaffe</li>
//         <li>Äta glass</li>
//         <li>Mata katten</li>
//         <li>Tömma kattlådan</li>

// document.querySelector('h1').textContent = 'Todo App';

{/* <TodoItem todo="Köpa glass" done={ false } />
        <TodoItem todo="Köpa kaffe" done={ true } />
        <TodoItem todo="Mata katten" done={ false } />
        <TodoItem todo="Tömma kattlådan" done={ false } /> */}
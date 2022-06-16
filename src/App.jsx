// import React from "react";
// import movies from "./movies";
// import Header from "./components/Header";
// import Note from "./components/Note";
// import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
// const GlobalStyle = createGlobalStyle`
//   *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
// `;
// const MainBox = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-items: center;
//   border: solid red;
//   width: 100%;
//   min-height: 100vh;
// `;
// // console.log(movies);

// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       <MainBox>
//         {movies.map((movie) => {
//           return (
//             <Note
//               title={movie.title}
//               overview={movie.overview}
//               key={movie.id}
//             />
//           );
//         })}
//       </MainBox>
//     </>
//   );
// }

// import React from "react";

// export default function App() {
//   // let numbers = [3, 52, 4, 33, 123, 48];

//   // function double(x) {
//   //   return x * 2;
//   // }

//   // const doubledNumbers = numbers.map(double);
//   // console.log(doubledNumbers);

//   let numbers = [3, 52, 4, 33, 123, 48];

//   const filteredNumbers = numbers.filter(function (num) {
//     return num > 10;
//   });
//   console.log("Filtered numbers greater than 10 are: " + filteredNumbers);

//   return <h1>Hi!</h1>;
// }

// RENDERING AND MAPPING ITEMS FROM ANOTHER FILE, COMPONENTS

// import Note from "./components/Note";
// import movies from "./movies";
// import Header from "./components/Header";
// import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
// `;
// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Header />
//       {movies.map((movie) => {
//         return <Note title={movie.title} overview={movie.overview} />;
//       })}
//     </>
//   );
// }

// FORM HANDLING, SETTING COMPLEX STATES WITH USESTATE.

// export default function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: "",
//   });

//VV código sem destructuring (JS)
// function handleChange(event) {
//   const newValue = event.target.value;
//   const inputName = event.target.name;

//   setFullName((prevValue) => {
//     if (inputName === "fName") {
//       return {
//         fName: newValue,
//         lName: prevValue.lName,
//       };
//     } else if (inputName === "lName") {
//       return {
//         fName: prevValue.fName,
//         lName: newValue,
//       };
//     }
//   });
// }

//Código com destruscturing

//   function handleChange(event) {
//     const { value, name } = event.target;

//     setFullName((prevValue) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName,
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value,
//         };
//       }
//     });
//   }

//   return (
//     <>
//       <h1>
//         {" "}
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <input
//         onChange={handleChange}
//         type="text"
//         name="fName"
//         value={fullName.fName}
//         placeholder="Type your first name"
//       />
//       <input
//         type="text"
//         onChange={handleChange}
//         name="lName"
//         value={fullName.lName}
//         placeholder="Type your last name"
//       />
//     </>
//   );
// }

// export default function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//   });

//   function handleChange(event) {
//     const { value, name } = event.target;
//     setContact((prevValue) => {
//       return {
//         ...prevValue,
//         [name]: value,
//       };
//     });
//   }

//   return (
//     <div>
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <input
//         value={contact.fName}
//         type="text"
//         name="fName"
//         placeholder="first name"
//         onChange={handleChange}
//       />
//       <input
//         value={contact.lName}
//         type="text"
//         name="lName"
//         placeholder="last name"
//         onChange={handleChange}
//       />
//       <input
//         value={contact.email}
//         type="text"
//         name="email"
//         placeholder="email"
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

//TO-DO COM USESTATE (udemy)

// import React, { useState } from "react";
// import ListItem from "./components/ListItem";

// export default function App() {
//   const [input, setInput] = useState();

//   const [taskList, setTaskList] = useState([]);

//   function handleInput(event) {
//     setInput(event.target.value);
//   }

// function addTask() {
//   // if (task !== "") {
//   //   setTaskList((prevItems) => {
//   //     return [...prevItems, task];
//   //   });
//   // }
//   // setTask("");
//   const finalList = {
//     value: input,
//     id: Math.random(),
//   }; // -> define um objeto dentro da função.

//   setTaskList((prevState) => [...prevState, finalList]); // -> seta o state como os itens prévios do state, mais o objeto criado acima.
//   setInput("");
// }

// function deleteItem(id) {
//   setTaskList((prevItem) => {
//     return prevItem.filter((item, i) => {
//       return i !== id;
//     });
//   });
// }

//   return (
//     <div>
//       <h1>To-do:</h1>
//       <input
//         type="text"
//         name=""
//         placeholder="Type a task to-do"
//         onChange={handleInput}
//         value={input}
//       />
//       <button onClick={addTask}>
//         <span>Add task</span>
//       </button>
//       <ul>
//         {taskList.map((item, i) => {
//           return <ListItem text={item} />;
//         })}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   function start() {
//     setInterval(() => {
//       setCount((prevState) => (prevState < 5 ? prevState + 1 : prevState));
//     }, 1000);
//   }

//   return (
//     <>
//       <h1>Hi!</h1>
//       <h2>{count}</h2>
//       <button onClick={start}>Start</button>
//     </>
//   );
// }

// import React, { useState } from "react";

// export default function App() {
//   const [input, setInput] = useState("");
//   const [task, settask] = useState([]);

//   // const handleChange = (event)=>{
//   //     setInput(event.target.value)
//   // }

//   function addTask() {
//     const finalList = {
//       value: input,
//       id: Math.random(),
//     };

//     if (input !== "") {
//       settask((prevList) => [...prevList, finalList]);
//     }
//     setInput("");
//   }
//   const deleteTask = (id) => {
//     const filteredList = task.filter(item => item.id !== id)
//     settask(filteredList)
//   };
//   return (
//     <form onSubmit={(e) => e.preventDefault()}>

//       <button onClick={() => {addTask();}}>
//         ADD Tarefa
//       </button>

//       <input value={input} onChange={(event) => {setInput(event.target.value);}}/>

//       <ul>
//         {task.map(tarefa => (
//         <li>{tarefa.value} 
//         <button onClick={()=>{deleteTask(tarefa.id)}}></button> </li>
//         ))}
//       </ul>

//     </form>
//   );
// }


import React, { useState } from 'react'

export default function App() {

  const [input, setInput] = useState()
  const [name, setName] = useState()
  const [bought, setBought] = useState(false)
  const handleClick = () => {
    setName(input)
    setBought(true)
  }



  return (
    <div>
      <h2>e-commerce T2</h2>
      <input value={input}
        onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={() => { handleClick() }}>Enviar</button>
      {bought && <div>
        <h1>Obrigado por comprar, {name}.</h1>
        <h2>Volte Sempre </h2>
      </div>}

    </div>
  )
}




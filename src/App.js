import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  // case 1 when dependency array is empty 
  // it works like componentDidMount in class component
  // i.e. its is executed only once after first render
  useEffect(()=>{
    console.log("use effect was executed")
  },[])

  // case 2 
  // when we omit dependency array , use efect will execute after every render
  // can not update state in this case , as it runs after every render , will end in infinite loop 
  // and will give error
  useEffect(()=>{
    console.log("use effect case 2 was executed");
  })


  console.log("component was rendered");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;

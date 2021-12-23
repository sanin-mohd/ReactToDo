import { useState } from "react/cjs/react.development";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  let day = d.getDay();

  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br/>
        <h2>Whoop, it's {days[day]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => {
            setToDo(event.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setToDos([...toDos, {id:Date.now(), text:toDo,status:false}]);
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(event)=>{
                  console.log(event.target.value);
                  console.log(obj);
                  setToDos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status= !obj.status
                  }
                  return obj2
                }))}}  value={obj.status} type="checkbox" name="" id="" />
                <p >{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{setToDo('')}} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}

        {
          toDos.map((obj)=>{
            if(obj.status===true){
              return(
                <h1>{obj.text}</h1>
              )
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default App;

import { useState } from "react/cjs/react.development";
import "./App.css";
import Swal from 'sweetalert2'
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = d.getDay();

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {days[day]} 🌝 ☕ </h2>
      </div>
      <div class="card">
        <div class="card-body">
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
                if(toDo!=''){
                  setToDos([
                    ...toDos,
                    { id: Date.now(), text: toDo, status: false , delete:false},
                  ]);
                }
              }}
              className="fas fa-plus"
            ></i>
          </div>
        </div>
      </div>
      <nav className="mt-2">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Todos
          </a>
          <a
            class="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Completed
          </a>
          <a
            class="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Deleted
          </a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="todos">
        {toDos.map((obj) => {
          if(obj.delete===false && obj.status===false){
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(event) => {
                      console.log(event.target.value);
                      console.log(obj);
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = !obj.status;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                
                <div className="">
                <i onClick={async(event) => {
                      const { value: text } = await Swal.fire({
                        input: 'text',
                        inputLabel: 'Message',
                        inputPlaceholder: 'Type your message here...',
                        inputValue:obj.text,
                        inputAttributes: {
                          'aria-label': 'Type your message here'
                        },
                        showCancelButton: true,
                        inputValidator: (value) => {
                          if (value!='') {
                            setToDos(
                              toDos.filter((obj2) => {
                                if (obj2.id === obj.id) {
                                  obj2.text = value;
                                }
                                return obj2;
                              })
                            );
                          }
                        }
                        
                      })
                     
                      
                      
                      
                    }} class="far fa-edit"></i>
                  <i
                    onClick={(event) => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.delete = true;
                          }
                          return obj2;
                        })
                      );
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          }
        })}
      </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="todos">
        {toDos.map((obj) => {
          if(obj.status==true){
            return (
              <div className="todo">
                <div className="left">
                  <p>{obj.text}</p>
                </div>
                
               
              </div>
            );
          }
        })}
      </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="todos">
        {toDos.map((obj) => {
          if(obj.delete==true){
            return (
              <div className="todo">
                <div className="left">
                  <p>{obj.text}</p>
                </div>
                
               
              </div>
            );
          }
        })}
      </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

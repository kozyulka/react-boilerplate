import React from "react";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


export default class App extends React.Component {


    render() {
        return (
           <div>
               <h1 className="page-title">TO DO App</h1>
               <div className="row">
                   <div className="columns small-11 medium-6 large-5 small-centered">
                      <div className="container">
                          <TodoSearch/>
                          <TodoList/>
                          <AddTodo/>
                      </div>
                    </div>
               </div>
           </div>
        )
    }
}



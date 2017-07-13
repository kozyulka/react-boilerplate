import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import TodoAPI from "../api/TodoAPI";

class TodoList extends React.Component {
    render() {
        const { todos, showCompleted, searchText } = this.props;
        const renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">
                        Nothing to do
                    </p>
                );
            }

            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                <TodoItem key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state;
    }
)(TodoList);

//connect prinimaet kak argument funkciyu, v kotoruyu peredaem state i ukazivaem kuski state, kotorie mi xotim 4tobi komponent imel
//funkciya vozvrawaet ob'ekt, sv-va kotoraya peredayutsya v props komponenta
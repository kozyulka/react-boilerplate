import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import actions from "../actions/actions";

class TodoItem extends React.Component {
    render() {
        const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo'; //raznie stili v zavisimosti, viplnena li todowka
        const renderDate = () => {
            let message = "Created ";
            let timestamp = createdAt;

            if(completed) {
                message = "Completed ";
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };

        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.startToggleTodo(id, !completed));

            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(TodoItem)

//tut 4erez connect mi polu4aem funkciyu dispatch, kotoraya dostupna 4erez props komponenta
import React from "react";
import { connect } from "react-redux";
import actions from "../actions/actions";

class AddTodo extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const newTodoText = this.refs.todoText.value;

        if (newTodoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(newTodoText));

        } else {
            this.refs.todoText.focus(); //v slu4ae,esli polzovatel vvedet invalid data, kursor navedetsya na pole vvoda
        }
    };

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo)
import moment from 'moment';
import firebase, {firebaseRef} from '../firebase/index';

const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

const toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

const updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
};

const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        let todoRef = firebaseRef.child(`todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates))
        })
    }
};

const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

const startAddTodo = (text) => {
    //blagodarya redux-thunk, action generator mojet vernut funkciyu s asynchronous kodom vmesto ob'ekta
    //dispatch pozvolit nam dispat4it actions posle togo kak ono budet soxraneno v firebase
    //getState pozvolit polu4it current state redux stora
    return (dispatch, getState) =>  {
        //sna4ala sozdaem ob'ekt,kotoriy xotim dobavit v firebase // do etogo on bil v reducere v ADD_TODO case
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        let todoRef = firebaseRef.child('todos').push(todo);//sozdaem ob'ekt todos (child) v base i pushim tuda t*odo, kotoriy tolko 4to sozdali
        //teper dobavlyaem 4erez promise ob'ekt v state posle togo,kak zagruzitsya firebase. tut action dispat4itsya tak je kak i v componente
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });

        //itogo: sozdala t*odo i dobavila ego v firebase;
        // i kogda ono zagruzilos, vizivayu dispatch, kotoriy obnovlyaet store; i eto re-renderit komponent, dobavlyaya noviy t*do v browser
    };
};

const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

const startAddTodos = () => {
    return (dispatch, getState) => {
        let todosRef = firebaseRef.child('todos');

        return todosRef.once('value').then((snapshot) => {
            let todos = snapshot.val() || {} ;
            const parsedTodos = [];

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });

            dispatch(addTodos(parsedTodos));

        })
    }
};

export default { setSearchText, addTodo, updateTodo, toggleShowCompleted, addTodos, startAddTodo, startToggleTodo, startAddTodos }
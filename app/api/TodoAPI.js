const $ = require("jquery");

module.exports = {
  // setTodos(todos) {
  //     if ($.isArray(todos)) {
  //         localStorage.setItem('todos', JSON.stringify(todos));
  //         return todos;
  //     }
  // },
  //
  // getTodos() {
  //     const stringTodos = localStorage.getItem('todos');
  //     let todos = [];
  //
  //     try {
  //         todos = JSON.parse(stringTodos);
  //     } catch (e) {
  //
  //     }
  //
  //     return $.isArray(todos) ? todos : [];
  // },

  filterTodos(todos, showCompleted, searchText) {
      let filteredTodos = todos;

      // filter by showCompleted
      filteredTodos = filteredTodos.filter((todo) => {
          return !todo.completed || showCompleted; //pokazivaem tolko non-completed, libo je vse, kogda showCompleted
      });


      //filter by searchText
      filteredTodos = filteredTodos.filter((todo) => {
          let text = todo.text.toLowerCase(); //polu4aem text iz todowki
         return searchText.length === 0 || text.indexOf(searchText) > -1;  //proveryaem est li voobwe searchText,
                                                                           // esli on raven 0, mi vozvrawaem vse todowki (ni4ego ne menyaetsya);
                                                                           // potom proveryaem soderjit li text v sebe naw searchtext
      });

      //filter with showing non-completed first
      filteredTodos.sort((a, b) => {
          if(!a.completed && b.completed) {
              return -1; //esli est zaverwennie i nezaverwennie todowki, sna4ala visvyatyatsya nezaverwennie
          } else if (a.completed && !b.completed) {
              return 1; //tupo protivopolojnoe usplovie
          } else {
              return 0; //ostavit vse na svoix mestax
          }

      });

      return filteredTodos;
  }
};

//4tobi udalit todowki v brauzere, v console: localStorage.removeItem('todos');
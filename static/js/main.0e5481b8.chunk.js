(this["webpackJsonptodo-list-react-app"]=this["webpackJsonptodo-list-react-app"]||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),i=o(9),c=o.n(i),d=(o(15),o(10)),r=o(8),s=o(2),l=o(3),u=o(5),h=o(4),p=o(19),j=o(6),b=o.n(j),m=o(0),f=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).handelEditing=function(){n.setState({edit:!0})},n.endEdit=function(t){"Enter"===t.key&&n.setState({edit:!1})},n.state={edit:!1},n}return Object(l.a)(o,[{key:"render",value:function(){var t=this,e={},o={},n=this.state.edit,a=this.props,i=a.todo,c=a.handelChangeProp,d=a.deleteTodoProp,r=a.editTodoProp;!0===n?o.display="none":e.display="none";var s=i.id,l=i.title,u=i.completed;return Object(m.jsxs)("li",{className:b.a.item,children:[Object(m.jsxs)("div",{style:o,onDoubleClick:function(){t.handelEditing()},children:[Object(m.jsx)("input",{className:b.a.checkbox,type:"checkbox",checked:u,onChange:function(){c(s)}}),Object(m.jsx)("span",{style:u?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l}),Object(m.jsx)("button",{type:"button",onClick:function(){d(s)},children:"Delete"})]}),Object(m.jsx)("input",{type:"text",style:e,className:b.a.textInput,value:l,onChange:function(t){r(s,t.target.value)},onKeyDown:this.endEdit})]})}}]),o}(a.a.Component),O=function(t){var e=t.todos;return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsx)(f,{todo:e,handelChangeProp:t.handelChangeProp,deleteTodoProp:t.deleteTodoProp,editTodoProp:t.editTodoProp},e.id)}))})},x=function(){return Object(m.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(m.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",textTransform:"lowercase",textAlign:"center"},children:"Todos"})})},v=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).onChange=function(t){n.setState({title:t.target.value})},n.handelSubmit=function(t){t.preventDefault();var e=n.state.title,o=n.props.addTodoProp;e.trim()?(o(e),n.setState({title:""})):n.alert="Please write item"},n.state={title:""},n.alert="",n}return Object(l.a)(o,[{key:"render",value:function(){var t=this.state.title;return Object(m.jsxs)("form",{onSubmit:this.handelSubmit,className:"form-container",children:[Object(m.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:t,onChange:this.onChange}),Object(m.jsx)("h4",{children:this.alert}),Object(m.jsx)("button",{type:"button",className:"input-submit",children:"Add"})]})}}]),o}(a.a.Component),g=function(t){Object(u.a)(o,t);var e=Object(h.a)(o);function o(){var t;return Object(s.a)(this,o),(t=e.call(this)).componentDidMount=function(){var e=localStorage.getItem("todos"),o=JSON.parse(e);o&&t.setState({todos:o})},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}}))},t.delTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.addTodoItem=function(e){var o={id:Object(p.a)(),title:e,completed:!1},n=t.state.todos;t.setState({todos:[].concat(Object(d.a)(n),[o])})},t.editTodo=function(e,o){var n=t.state.todos;t.setState({todos:n.map((function(t){return t.id===e&&(t.title=o),t}))})},t.state={todos:[]},t}return Object(l.a)(o,[{key:"componentDidUpdate",value:function(t,e){var o=this.state.todos;if(e.todos!==o){var n=JSON.stringify(o);localStorage.setItem("todos",n)}}},{key:"render",value:function(){var t=this.state.todos;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"inner",children:[Object(m.jsx)(x,{}),Object(m.jsx)(v,{addTodoProp:this.addTodoItem}),Object(m.jsx)(O,{todos:t,handelChangeProp:this.handleChange,deleteTodoProp:this.delTodo,editTodoProp:this.editTodo})]})})}}]),o}(n.Component);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))},6:function(t,e,o){t.exports={item:"TodoItem_item__21nD8",checkbox:"TodoItem_checkbox__h-7Bd",textInput:"TodoItem_textInput__2nvJT"}}},[[17,1,2]]]);
//# sourceMappingURL=main.0e5481b8.chunk.js.map
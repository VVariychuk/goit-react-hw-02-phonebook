(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__2Z2TQ"}},13:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__GzRkA"}},14:function(t,e,n){t.exports={contact:"ContactsListItm_contact__3HxQw"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=n(15),o=n(3),l=n(4),u=n(6),d=n(5),b=n(10),j=n.n(b),m=n(11),h=n.n(m),f=n(0);function O(t){var e=t.children;return Object(f.jsx)("div",{className:h.a.container,children:e})}var p=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:e}),n]})},x=n(12),C=n(7),v=n.n(C),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(x.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.form,children:[Object(f.jsxs)("label",{children:["Name",Object(f.jsx)("input",{className:v.a.input,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:v.a.btnAdd,children:"Add contact"})]})}}]),n}(a.Component);function A(t){var e=t.value,n=t.onFilter;return Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})}var _=n(13),y=n.n(_),S=n(14),k=n.n(S);function F(t){var e=t.name,n=t.number,a=t.onClickHendler;return Object(f.jsxs)("li",{className:k.a.contact,children:[Object(f.jsxs)("span",{children:[e,": "]}),Object(f.jsx)("span",{children:n}),Object(f.jsx)("button",{typy:"button",onClick:a,children:"Delete"})]})}function w(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:e.length?Object(f.jsx)("ul",{className:y.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(F,{name:a,number:c,onClickHendler:function(){return n(e)}},e)}))}):Object(f.jsx)("p",{children:"No contacts added"})})}var N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.AddContact=function(e,n){var a={id:j.a.generate(),name:e,number:n};t.state.contacts.some((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.DeleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterChange=function(e){t.setState({filter:e.target.value})},t.onContactsFilter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(f.jsxs)(O,{children:[Object(f.jsx)(p,{title:"Phonebook",children:Object(f.jsx)(g,{onSubmit:this.AddContact})}),Object(f.jsx)(p,{title:"Contacts",children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{value:t,onFilter:this.onFilterChange}),Object(f.jsx)(w,{contacts:this.onContactsFilter(),onDeleteContact:this.DeleteContacts})]})})]})}}]),n}(a.Component);n(29);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"AddContactsForm_form___WC7Z",btnAdd:"AddContactsForm_btnAdd__27RPu"}}},[[30,1,2]]]);
//# sourceMappingURL=main.ec78b8d8.chunk.js.map
(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(68),a(44)),s=a(142),l=a(143),d=a(107),j=a(138),b=a(24),u=a(140),m=a(78),h=a(136),g=a(141),p=a(74),x=a.n(p),O=a(75),f=a.n(O),y=a(76),F=a.n(y),v=a(3),C=Object(m.a)({overrides:{MuiButton:{label:{color:"#3A3535"}}}}),w=Object(h.a)((function(){return{appbar:{alignItems:"left"},button:{margin:"0 0.75rem"}}}));function N(){var e=w();return Object(v.jsx)(j.a,{children:Object(v.jsx)(u.a,{maxWidth:"md",style:{padding:"0",background:"#F2BCBC"},children:Object(v.jsx)(g.a,{theme:C,children:Object(v.jsx)(s.a,{style:{background:"#FFFFFF"},className:e.appbar,position:"static",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:e.button,startIcon:Object(v.jsx)(x.a,{children:"home"}),component:b.b,to:"/",children:"Home"}),Object(v.jsx)(d.a,{className:e.button,startIcon:Object(v.jsx)(f.a,{children:"new shopping list"}),component:b.b,to:"/newlist",children:"New shopping list"}),Object(v.jsx)(d.a,{className:e.button,startIcon:Object(v.jsx)(F.a,{children:"my lists"}),component:b.b,to:"/mylists",children:"My lists"})]})})})})})}var k=a(5),I=a(144),B=a(151),A=Object(k.a)({root:{color:"#FFFFFF"}})(I.a);function S(){return Object(v.jsx)(u.a,{maxWidth:"md",style:{padding:"0",height:"100%",backgroundColor:"#FFFFFF"},children:Object(v.jsxs)(B.a,{style:{padding:"3rem 2rem",backgroundImage:"url(../background.png)"},children:[Object(v.jsx)(A,{variant:"h4",children:"Shoppinglist"}),Object(v.jsx)(A,{variant:"h5",style:{paddingTop:10,width:"60%"},children:"Create your own shoppinglist and you wont forget that special something."})]})})}var T=Object(m.a)({overrides:{MuiButton:{label:{color:"#3A3535"}}}}),D=Object(h.a)((function(){return{appbar:{alignItems:"left"}}}));function q(){var e=D();return Object(v.jsx)(j.a,{children:Object(v.jsx)(u.a,{maxWidth:"md",style:{padding:"0",background:"#F2BCBC"},children:Object(v.jsx)(g.a,{theme:T,children:Object(v.jsx)(s.a,{style:{background:"#FFFFFF"},className:e.appbar,position:"static",children:Object(v.jsx)(l.a,{children:Object(v.jsx)(d.a,{disabled:!0,children:"Elli Jukarainen 2021"})})})})})})}var M=a(22),R=a(150),W=a(146),J=a(77),G=a.n(J),L=a(145),E=a(152),P=a(57),Y=a.n(P),z=a(11),H=Object(h.a)({mainInput:{width:"60%",marginBottom:30,backgroundColor:"#FFF",color:"black",borderRadius:"12px","& label":{color:"#656565"}},form:{display:"flex",flexFlow:"column nowrap",height:"100%"},formNameArea:{padding:"1rem 2rem",backgroundImage:"url(../background.png)"},formItemArea:{flexGrow:1,padding:"1rem 2rem"},contentArea:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},inputfieldsArea:{dislay:"flex",flexDirection:"column"},inputRow:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginBottom:"15px"},btnGroup:{margin:" 0 2rem"},formControlsArea:{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"0 3rem"}}),V=Object(k.a)({root:{"& label.Mui-focused":{color:"#555"},"& .MuiInput-underline:after":{borderBottomColor:"#ec4d90"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ec4d90",borderRadius:"12px"},"&.Mui-focused fieldset":{borderColor:"#ec4d90  "}}}})(R.a);var K=function(e){var t=Object(z.e)(),a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)([{id:Object(E.a)(),value:"",quantity:0}]),l=Object(o.a)(s,2),j=l[0],b=l[1],m=H(),h=function(e,t){var a=Object(M.a)(j);switch(t){case"add":a[e].quantity+=1;break;case"sub":a[e].quantity>0&&(a[e].quantity-=1)}b(a)};return Object(v.jsx)(u.a,{maxWidth:"md",style:{padding:"0",height:"100%",backgroundColor:"#FFFFFF"},children:Object(v.jsxs)("form",{className:m.form,onSubmit:function(a){a.preventDefault();var n={id:Object(E.a)(),name:c,children:j};e.setData([].concat(Object(M.a)(e.data),[n])),localStorage.setItem("data",JSON.stringify([].concat(Object(M.a)(e.data),[n]))),t.push("/mylists")},children:[Object(v.jsxs)(B.a,{className:m.formNameArea,children:[Object(v.jsx)(I.a,{variant:"h4",style:{color:"#fff",marginTop:20,marginBottom:10,fontWeight:"bold"},children:"Create my new shopping list"}),Object(v.jsx)(I.a,{variant:"h6",style:{color:"#fff",marginTop:40},children:"Name of my list"}),Object(v.jsx)(V,{className:m.mainInput,variant:"outlined",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(v.jsxs)(B.a,{className:m.contentArea,children:[Object(v.jsxs)(B.a,{className:m.formItemArea,children:[Object(v.jsx)(I.a,{variant:"h5",style:{color:"#3A3535",marginTop:20,marginBottom:20},children:"My list items"}),Object(v.jsxs)(B.a,{className:m.inputfieldsArea,children:[j.map((function(e,t){return Object(v.jsxs)(B.a,{className:m.inputRow,children:[Object(v.jsx)(V,{style:{width:"100%"},label:"Item",variant:"outlined",name:"value",value:e.value,onChange:function(e){return function(e,t){var a=Object(M.a)(j);a[t][e.target.name]=e.target.value,b(a)}(e,t)}}),Object(v.jsxs)(L.a,{className:m.btnGroup,children:[Object(v.jsx)(d.a,{name:"quantity",onClick:function(){return h(t,"sub")},children:"-"}),Object(v.jsx)(d.a,{disabled:!0,children:e.quantity}),Object(v.jsx)(d.a,{name:"quantity",onClick:function(){return h(t,"add")},children:"+"})]}),Object(v.jsx)(W.a,{onClick:function(){return function(e){var t=Object(M.a)(j);t.splice(t.findIndex((function(t){return t.id===e})),1),b(t)}(e.id)},children:Object(v.jsx)(Y.a,{})})]},t)})),Object(v.jsx)(W.a,{onClick:function(){b([].concat(Object(M.a)(j),[{id:Object(E.a)(),value:"",quantity:0}]))},children:Object(v.jsx)(G.a,{})})]})]}),Object(v.jsxs)(B.a,{className:m.formControlsArea,children:[Object(v.jsx)(d.a,{onClick:function(){t.goBack()},variant:"contained",style:{marginTop:20,marginRight:20,marginBottom:20,marginLeft:20,backgroundColor:"#F2F2F2"},children:"Cancel"}),Object(v.jsx)(d.a,{type:"submit",variant:"contained",style:{marginTop:20,marginBottom:20,backgroundColor:"#ec4d90"},children:"Save"})]})]})]})})},Q=a(147),U=a(149),X=a(148),Z=Object(h.a)({root:{width:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"1fr auto"},title:{fontSize:22,color:"#ec4d90"},content:{height:"100%",overflowY:"auto"},actions:{display:"flex",flexDirection:"row",justifyContent:"flex-end"},item:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:"0.5rem 0"},name:{color:"#656565",fontWeight:"500",flexGrow:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},quan:{color:"#ec4d90",flexShrink:0}});function $(e){var t,a=Z();return Object(v.jsxs)(Q.a,{className:a.root,children:[Object(v.jsxs)(X.a,{className:a.content,children:[Object(v.jsx)(I.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:e.name}),null===(t=e.children)||void 0===t?void 0:t.map((function(e,t){return Object(v.jsxs)(B.a,{className:a.item,children:[Object(v.jsx)(I.a,{className:a.name,variant:"body2",component:"p",children:e.value},t),Object(v.jsxs)(I.a,{className:a.quan,variant:"body2",component:"p",children:[e.quantity," pcs"]},t)]})}))]}),Object(v.jsx)(U.a,{className:a.actions,children:Object(v.jsx)(W.a,{onClick:function(){return e.deleteCard(e.id)},children:Object(v.jsx)(Y.a,{})})})]})}var _=Object(h.a)({CardArea:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridAutoRows:"18rem",justifyItems:"center",alignItems:"stretch",gap:"1rem",padding:"1rem"},ButtonArea:{marginLeft:20}}),ee=Object(k.a)({root:{color:"#FFFFFF"}})(I.a);function te(e){var t=_(),a=function(t){var a=Object(M.a)(e.data);a.splice(a.findIndex((function(e){return e.id===t})),1),e.setData(a),localStorage.setItem("data",JSON.stringify(Object(M.a)(a)))};return Object(v.jsxs)(u.a,{maxWidth:"md",style:{padding:"0",height:"100%",backgroundColor:"#FFFFFF"},children:[Object(v.jsxs)(B.a,{style:{padding:"3rem 2rem",backgroundImage:"url(../background.png)"},children:[Object(v.jsx)(ee,{variant:"h4",style:{paddingTop:20},children:"My lists"}),Object(v.jsx)(ee,{variant:"h5",style:{marginTop:10},children:"View your lists "}),Object(v.jsx)(ee,{variant:"h5",style:{marginBottom:50},children:"You can delete lists by clicking the delete icon"})]}),Object(v.jsx)(B.a,{className:t.CardArea,children:0!==e.data.length?[e.data.map((function(e,t){return Object(v.jsx)($,{id:e.id,name:e.name,children:e.children,deleteCard:a},t)}))]:[Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ee,{variant:"h5",style:{marginTop:80,marginBottom:80},children:"No lists yet, start by creating a new list"}),Object(v.jsx)(d.a,{className:t.ButtonArea,component:b.b,to:"/newlist",children:"Create new list"})]})]})]})}var ae=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("data"))||[];r(e)}()}),[]),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(N,{}),Object(v.jsx)(z.a,{path:"/",exact:!0,children:Object(v.jsx)(S,{})}),Object(v.jsx)(z.a,{path:"/newlist",children:Object(v.jsx)(K,{data:a,setData:r})}),Object(v.jsx)(z.a,{path:"/mylists",children:Object(v.jsx)(te,{data:a,setData:r})}),Object(v.jsx)(q,{})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("root")),ne()},68:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.c27f1d4c.chunk.js.map
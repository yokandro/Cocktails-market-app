(this.webpackJsonppractice49=this.webpackJsonppractice49||[]).push([[0],{30:function(c,e,t){},31:function(c,e,t){},33:function(c,e,t){},43:function(c,e,t){},45:function(c,e,t){},47:function(c,e,t){"use strict";t.r(e);var n=t(1),s=t.n(n),r=t(13),i=t.n(r),a=t(4),j=(t(30),t(3)),l=t(6),o=(t(31),t(23)),d=t.n(o),h=t(0),b=s.a.createContext(),x=function(c){var e=c.children,t=Object(n.useState)([]),s=Object(l.a)(t,2),r=s[0],i=s[1];return Object(h.jsx)(b.Provider,{value:{cartItem:r,setCartItem:i},children:e})},O=function(){var c=Object(n.useContext)(b).cartItem;return Object(h.jsx)("div",{className:"PopUp",style:0===c.length?{display:"none"}:null,children:c.length})},u=t(17),m=(t(33),function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("svg",{height:"15px",viewBox:"-40 0 427 427.00131",width:"15px",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",id:"svg",children:[Object(h.jsx)("path",{d:"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),Object(h.jsx)("path",{d:"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),Object(h.jsx)("path",{d:"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"}),Object(h.jsx)("path",{d:"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"})]})})}),p=function(c){var e=c.isOpen,t=c.setIsOpen,s=Object(n.useContext)(b),i=s.cartItem,a=s.setCartItem;if(!e)return null;return Object(r.createPortal)(Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"Modal",children:[Object(h.jsx)("div",{className:"modal-elements",children:i.map((function(c,e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:c.strDrinkThumb,alt:c.strDrink,width:"100px",height:"100px"}),Object(h.jsx)("p",{children:c.strDrink}),Object(h.jsx)("button",{className:"removeBtn",onClick:function(){return function(c){var e=i.findIndex((function(e){return e.idDrink===c}));-1!==e&&(i.splice(e,1),a(Object(u.a)(i)))}(c.idDrink)},children:Object(h.jsx)(m,{})})]},e)}))}),Object(h.jsx)("button",{className:"confirm-btn",onClick:function(){if(0===i.length)return alert("\u0414\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044c"),void t(!1);console.log(i),a([]),t(!1)},children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"}),Object(h.jsx)("button",{className:"closeModalBtn",onClick:function(){return t(!1)},children:"X"})]})}),document.getElementById("modal"))},v=function(c){var e=c.width,t=c.height,n=c.fill;return Object(h.jsx)("div",{children:Object(h.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 490.674 490.674",width:e,height:t,children:[Object(h.jsxs)("g",{children:[Object(h.jsx)("circle",{fill:"#2f3640",cx:"394.667",cy:"426.671",r:"53.333"}),Object(h.jsx)("circle",{fill:"#2f3640",cx:"181.333",cy:"426.671",r:"53.333"})]}),Object(h.jsx)("path",{fill:n,d:"M488,78.276c-2.026-2.294-4.94-3.607-8-3.605H96c-5.891-0.001-10.668,4.773-10.669,10.664\r c0,0.717,0.072,1.433,0.216,2.136l42.667,213.333c1.014,4.967,5.384,8.534,10.453,8.533c0.469,0.031,0.939,0.031,1.408,0l320-42.667\r c4.807-0.642,8.576-4.446,9.173-9.259l21.333-170.667C490.989,83.681,490.047,80.592,488,78.276z"}),Object(h.jsx)("path",{fill:"#FAFAFA",d:"M181.333,266.671c-5.214-0.002-9.662-3.774-10.517-8.917l-21.333-128\r c-0.791-5.838,3.3-11.211,9.138-12.002c5.59-0.758,10.804,2.969,11.897,8.504l21.333,128c0.963,5.808-2.961,11.298-8.768,12.267\r C182.505,266.622,181.92,266.672,181.333,266.671z"}),Object(h.jsx)("path",{fill:"#FAFAFA",d:"M234.667,256.004c-5.536,0.022-10.169-4.193-10.667-9.707l-10.667-117.333\r c-0.552-5.865,3.755-11.067,9.621-11.619c0.029-0.003,0.057-0.005,0.086-0.008c5.867-0.531,11.053,3.796,11.584,9.663\r c0,0,0,0.001,0,0.001l10.667,117.333c0.53,5.867-3.796,11.053-9.663,11.584c0,0-0.001,0-0.001,0L234.667,256.004z"}),Object(h.jsx)("path",{fill:"#FAFAFA",d:"M288,245.337c-5.891,0-10.667-4.776-10.667-10.667V128.004c0-5.891,4.776-10.667,10.667-10.667\r c5.891,0,10.667,4.776,10.667,10.667v106.667C298.667,240.562,293.891,245.337,288,245.337z"}),Object(h.jsx)("path",{fill:"#FAFAFA",d:"M341.333,234.671h-1.195c-5.858-0.62-10.104-5.872-9.484-11.731\r c0.004-0.036,0.008-0.073,0.012-0.109l10.667-96c0.692-5.867,5.963-10.093,11.84-9.493c5.855,0.648,10.077,5.919,9.43,11.775\r c0,0,0,0.001,0,0.001l-10.667,96C351.368,230.543,346.793,234.667,341.333,234.671z"}),Object(h.jsx)("path",{fill:"#FAFAFA",d:"M394.667,224.004c-5.891-0.002-10.665-4.779-10.664-10.67c0-0.869,0.107-1.735,0.317-2.578\r l21.333-85.333c1.293-5.747,7.001-9.358,12.748-8.065c5.747,1.293,9.358,7.001,8.065,12.748c-0.036,0.161-0.076,0.321-0.12,0.48\r l-21.333,85.333C403.829,220.669,399.562,224.003,394.667,224.004z"}),Object(h.jsx)("path",{fill:"#2f3640",d:"M437.333,352.004H191.125c-35.558-0.082-66.155-25.16-73.216-60.011L65.92,32.004H10.667\r C4.776,32.004,0,27.228,0,21.337s4.776-10.667,10.667-10.667h64c5.07-0.001,9.439,3.566,10.453,8.533l53.717,268.587\r c5.035,24.896,26.888,42.817,52.288,42.88h246.208c5.891,0,10.667,4.776,10.667,10.667C448,347.228,443.224,352.004,437.333,352.004\r z"})]})})},f=function(){return Object(h.jsxs)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"100px",fill:"#2f3640",height:"100px",viewBox:"0 0 531.377 531.377",style:{enableBackground:"new 0 0 531.377 531.377"},children:[Object(h.jsx)("path",{d:"M230.384,163.802c-24.21,16.142-77.372-3.183-77.372-3.183l75.714,87.503h17.032l75.711-87.503\r C321.469,160.619,254.595,147.66,230.384,163.802z"}),Object(h.jsx)("path",{d:"M406.366,0c-39.98,0-72.697,31.354-75.061,70.749H55.771c-2.374,0-4.522,1.387-5.5,3.535\r c-0.987,2.16-0.629,4.69,0.925,6.478L219.083,274.78v212.551c-17.6,1.489-30.104,5.196-30.104,9.552\r c0,0.42,0.145,0.816,0.363,1.212c-21.834,3.298-36.153,8.795-36.153,15.007c0,10.096,37.628,18.276,84.051,18.276\r s84.057-8.181,84.057-18.276c0-6.4-15.154-12.01-38.064-15.273c0.124-0.307,0.218-0.626,0.218-0.945\r c0-4.173-11.562-7.743-28.052-9.351v-212.74l115.278-133.22c10.935,5.898,23.176,9.005,35.689,9.005\r c41.517,0,75.291-33.774,75.291-75.288C481.657,33.774,447.888,0,406.366,0z M251.308,261.019h-28.12L69.014,82.854h336.465\r L251.308,261.019z M406.366,138.471c-9.582,0-18.933-2.27-27.474-6.398l44.396-51.32c1.555-1.785,1.915-4.315,0.929-6.475\r c-0.981-2.149-3.139-3.535-5.503-3.535H343.41c2.347-32.707,29.648-58.644,62.956-58.644c34.838,0,63.186,28.351,63.186,63.184\r C469.551,110.115,441.204,138.471,406.366,138.471z"})]})},g=function(){var c=Object(n.useState)(""),e=Object(l.a)(c,2),t=e[0],s=e[1],r=Object(n.useState)(!1),i=Object(l.a)(r,2),j=i[0],o=i[1],x=Object(n.useContext)(b).cartItem;return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(a.b,{to:"/",children:Object(h.jsx)(f,{})})}),Object(h.jsxs)("div",{className:"searchBox",children:[Object(h.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search",value:t,onChange:function(c){return s(c.target.value)}}),Object(h.jsx)(a.b,{className:"searchButton",onClick:function(){return s("")},to:"/cocktails/search?name=".concat(t),children:Object(h.jsx)(d.a,{})})]}),Object(h.jsxs)("div",{className:"cart",onClick:function(){0!==x.length?o(!0):alert("\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044c")},children:[Object(h.jsx)(v,{width:"80px",height:"80px",fill:"#2f3640"}),Object(h.jsx)(O,{})]}),Object(h.jsx)(p,{isOpen:j,setIsOpen:o})]})})},w=(t(43),["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),k=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("footer",{className:"abc",children:w.map((function(c,e){return Object(h.jsx)(a.b,{className:"letter",to:"/cocktails/filter?letter=".concat(c.toLowerCase()),children:c},e)}))})})},N=t(21),C=t.n(N),z=t(24),y=function(c){var e=Object(n.useState)([]),t=Object(l.a)(e,2),s=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(c);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch with status: ".concat(t.status));case 6:return e.next=8,t.json();case 8:n=e.sent,r(n.drinks),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Failed to fetch: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),{data:null==s?"not-found":s}},I=function(){return Object(h.jsxs)("svg",{id:"_x31__px",height:"30",viewBox:"0 0 24 24",fill:"#fff",width:"30",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m11 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1z"})}),Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m18 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1z"})}),Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m9.5 9h-3.75c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.75c.276 0 .5.224.5.5s-.224.5-.5.5z"})}),Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m19.1 19h-9.09c-1.115 0-2.103-.747-2.401-1.816l-3.179-11.096c-.18-.642-.771-1.088-1.44-1.088h-2.49c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.49c1.115 0 2.103.747 2.401 1.816l3.179 11.096c.18.642.771 1.088 1.44 1.088h9.09c.626 0 1.193-.399 1.411-.992l.909-2.489c.095-.259.382-.392.642-.298.259.095.393.382.298.641l-.909 2.49c-.363.986-1.307 1.648-2.351 1.648z"})}),Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m18 14c-.066 0-.132-.013-.194-.04-.238-.099-5.806-2.506-5.806-7.424v-4.179c0-.214.137-.405.34-.474l5.5-1.857c.104-.035.217-.035.32 0l5.5 1.857c.203.069.34.26.34.474v4.179c0 4.918-5.568 7.325-5.806 7.425-.062.026-.128.039-.194.039zm-5-11.284v3.82c0 3.785 4.055 5.958 5 6.414.944-.457 5-2.638 5-6.414v-3.82l-5-1.688z"})}),Object(h.jsx)("g",{children:Object(h.jsx)("path",{d:"m17.5 9c-.009 0-.019 0-.027-.001-.143-.008-.274-.076-.363-.187l-2-2.5c-.172-.216-.138-.53.078-.703.218-.172.531-.137.703.078l1.65 2.064 3.105-3.105c.195-.195.512-.195.707 0s.195.512 0 .707l-3.5 3.5c-.093.095-.221.147-.353.147z"})})]})},F=function(c){var e=c.item,t=c.className,s=Object(n.useContext)(b),r=s.cartItem,i=s.setCartItem;return Object(h.jsx)("div",{className:t,onClick:function(){return i([].concat(Object(u.a)(r),[e]))},children:Object(h.jsx)(I,{})})},M=function(c){var e=c.item;c.imgWidth;return Object(h.jsxs)("div",{className:"cocktail",children:[Object(h.jsx)(a.b,{to:"/cocktail/".concat(e.idDrink),children:Object(h.jsx)("img",{src:e.strDrinkThumb,width:"250px",alt:e.strDrink})}),Object(h.jsx)("p",{children:e.strDrink}),Object(h.jsx)(F,{className:"buyBtn",item:e})]})},A=function(){var c=Object(j.g)().search.split("?letter="),e=Object(l.a)(c,2)[1],t="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e),n=y(t).data;return"not-found"===n?Object(h.jsx)(j.a,{to:"/cocktails/not-found"}):Object(h.jsx)("div",{className:"filterPage",children:n.map((function(c){return Object(h.jsx)(M,{item:c},c.idDrink)}))})},D=function(){var c=Object(j.g)().search.split("?name="),e=Object(l.a)(c,2)[1],t="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e),n=y(t).data;return"not-found"===n?Object(h.jsx)(j.a,{to:"/not-found"}):Object(h.jsx)("div",{className:"searchPage",children:n.map((function(c){return Object(h.jsx)(M,{item:c},c.strDrink)}))})},B=function(){var c=Object(j.g)().search,e=c.split("?letter="),t=Object(l.a)(e,2)[1];return c==="?letter=".concat(t)?Object(h.jsx)(A,{}):Object(h.jsx)(D,{})},P=(t(45),function(c){var e=c.item,t=e.strIngredient1,n=e.strIngredient2,s=e.strIngredient3,r=e.strIngredient4;return Object(h.jsxs)("div",{className:"ingredients-box",children:[Object(h.jsxs)("div",{className:"ingredient",children:[Object(h.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/".concat(t,"-Medium.png"),alt:t}),Object(h.jsx)("p",{children:t})]}),Object(h.jsxs)("div",{className:"ingredient",children:[Object(h.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/".concat(n,"-Medium.png"),alt:n}),Object(h.jsx)("p",{children:n})]}),Object(h.jsxs)("div",{className:"ingredient",style:null==s?{display:"none"}:null,children:[Object(h.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/".concat(s,"-Medium.png"),alt:s}),Object(h.jsx)("p",{children:s})]}),Object(h.jsxs)("div",{className:"ingredient",style:null==r?{display:"none"}:null,children:[Object(h.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/".concat(r,"-Medium.png"),alt:r}),Object(h.jsx)("p",{children:r})]})]})}),L=function(){var c=Object(j.h)().id,e="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(c),t=y(e).data;if(void 0===t[0])return null;var n=t[0],s=n.strDrink,r=n.strDrinkThumb,i=n.strCategory,a=n.strAlcoholic,l=n.strGlass,o=n.strInstructions;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"drink-name",children:s}),Object(h.jsxs)("div",{className:"singleCocktailPage",children:[Object(h.jsx)("img",{src:r,alt:"img"}),Object(h.jsxs)("div",{className:"single-page-container",children:[Object(h.jsx)("h3",{children:"Ingredients:"}),Object(h.jsx)(F,{className:"buyButtonCocktail",item:t[0]}),Object(h.jsx)(P,{item:t[0]})]})]}),Object(h.jsxs)("div",{className:"description",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Category:"})," ",i,", ",a]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Type of glass:"})," ",l]})]}),Object(h.jsxs)("div",{id:"style-1",className:"instruction",children:[Object(h.jsx)("span",{children:"Instructions:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:o})]})]})]})},H=function(){var c=y("https://www.thecocktaildb.com/api/json/v1/1/random.php").data;if(void 0===c[0])return null;var e=c[0],t=e.idDrink,n=e.strDrink,s=e.strDrinkThumb;return Object(h.jsxs)("div",{className:"recommendPage",children:[Object(h.jsx)("h1",{children:"\u0414\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443 \u043a\u043e\u043a\u0442\u0435\u0439\u043b\u044e \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u0448\u0443\u043a\u043e\u043c \u0430\u0431\u043e \u0444\u0456\u043b\u044c\u0442\u0440\u043e\u043c"}),Object(h.jsx)("h3",{children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0456\u044f:"}),Object(h.jsxs)("div",{className:"recommendPage-cocktail",children:[Object(h.jsx)(a.b,{to:"/cocktail/".concat(t),children:Object(h.jsx)("img",{src:s,alt:n})}),Object(h.jsxs)("div",{className:"personal-rec-text",children:[Object(h.jsxs)("p",{children:["Name: ",n]}),Object(h.jsx)(F,{className:"personal-rec-btn",item:c[0]})]})]})]})},S=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{style:{color:"#fff"},children:"Not Found"}),Object(h.jsx)(a.b,{style:{textDecoration:"none",color:"#fff"},to:"/",children:"Click here!"})]})},T=function(){return Object(h.jsxs)("div",{className:"com",children:[Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"content-box",children:Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",component:H}),Object(h.jsx)(j.b,{path:"/cocktails",component:B}),Object(h.jsx)(j.b,{path:"/cocktail/:id",component:L}),Object(h.jsx)(j.b,{path:"/not-found",component:S}),Object(h.jsx)(j.b,{component:S})]})})}),Object(h.jsx)(k,{})]})};i.a.render(Object(h.jsx)(a.a,{children:Object(h.jsx)(x,{children:Object(h.jsx)(T,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e9196553.chunk.js.map
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux/es/exports";
import { store, useAppSelector } from "./store/store";
import { UI_Enums } from "./UI/UI_Enums";
import { HashRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
/*Обнуление*/
*{
	padding: 0;
	margin: 0;
	border: 0;
	transition: 0.5s;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: ${UI_Enums.remSize};
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	font-family: Montserrat;
}
input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
*{background-color: transparent;}
*{-webkit-tap-highlight-color: transparent;}

h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
/*--------------------*/

body{
	padding: 15px;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HashRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </HashRouter>
);

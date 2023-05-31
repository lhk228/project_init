import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/style/index.scss';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('root :',root);

root.render(
  <>
	<RecoilRoot> 
	  <App />
	</RecoilRoot> 
  </>
);

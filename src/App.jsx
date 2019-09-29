import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import './assets/css/base.css';


const App = () => (
	<BrowserRouter>
		<Switch>
			<Route  path='/login' component={Login} />
			<Route  path='/' component={Home} />
		</Switch>
	</BrowserRouter>
)
export default App

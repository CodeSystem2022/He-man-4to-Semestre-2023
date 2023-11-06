import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '-/App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvdider } from '../src/context/AuthContext.jsx'

ReasctDOM.creatRoot(document.getElementById('root')).render(

	<React.StrinctMode>
	<BrowserRouter>
	<AuthProvdider>
	<App />
	</AuthProvdider>
	</BrowserRouter>
	</React.StrinctMode>,
)
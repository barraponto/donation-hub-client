import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { HubProvider} from './contexts/HubContext'
import App from '../src/components/App/App';
import './index.css';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <HubProvider>
                <App />
        </HubProvider>
      </UserProvider>
    </BrowserRouter>,
    document.getElementById('root'),
  )
  
  serviceWorker.unregister()
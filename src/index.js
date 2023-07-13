import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import HOC from './Hoc'
import store from './Store/Store'
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import Routing from './Routing'
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <HOC>
                <Navigation />
                <Routing />
            </HOC>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

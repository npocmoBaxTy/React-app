import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './hoc/Header/Header'

import RenderMainContent from "./Data/Renderhtml";

class App extends React.Component {
    render() {
        return (
            <Router>
                <RenderMainContent/>
                            
            </Router>
        )
    }
}

export default App
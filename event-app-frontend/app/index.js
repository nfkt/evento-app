import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './pages/admin/index';

class App extends React.Component{
    render(){
        return(
            <div>
                <Admin />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
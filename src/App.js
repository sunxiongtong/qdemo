import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import Shop from './pages/Shop';

// import 'antd-mobile/dist/antd-mobile.css';



class App extends React.Component {
  
    render() {

        return (
                <div className="App">
                    <Router basename='/'>
                        <Route path='/' component={Shop} exact></Route>
                    </Router>
                </div>
        );
    }

}

ReactDOM.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
    ,
    document.getElementById('root')
);


export default App;

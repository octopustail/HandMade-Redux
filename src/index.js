import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Content from "./content";
import './index.css'
import createStore from './createStore'

class Index extends Component {
    static  childContextTypes = {
        store: PropTypes.object
    };

    getChildContext(){
        return { store}
    }

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

const themeReducer = (state, action) => {
    if (!state) {
        return {themeColor: 'red'}
    }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }

};

const store = createStore(themeReducer);

ReactDOM.render(<Index/>, document.getElementById('root'));

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from './connect'




class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }


    render() {
        console.log('color',this.props)
        return (
            <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
        )
    }

}
//告诉高阶组件如何获取Header组件需要的数据
const mapStateToProps = (state)=>{
    return{
        themeColor:state.themeColor
    }
};

Header = connect(mapStateToProps)(Header);

export default Header
import React, {Component} from 'react';
import PropsType from 'prop-types';

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropsType.string,
        onSwitchColor: PropsType.func
    };

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }

    }

    render() {
        return (
            <div>
                <button style={{color: this.props.themeColor}}
                        onClick={this.handleSwitchColor.bind(this, 'blue')}>blue
                </button>
                <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>red
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
};


export default ThemeSwitch
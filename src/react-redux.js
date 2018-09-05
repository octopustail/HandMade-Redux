import React, {Component} from 'react';
import PropType from 'prop-types';

export class Provider extends Component {
    static propTypes = {
        store: PropType.object,
        children: PropType.any
    };

    static childContextTypes = {
        store: PropType.object
    };

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
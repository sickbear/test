import React, { Component } from 'react';
import './Ava.less';

export default class Ava extends Component {
    render() {
        return (
            <div className="ava">
                <img src={this.props.src} alt={this.props.desc}/>
            </div>
        )
    }
}
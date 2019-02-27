import React, { Component } from 'react';
import './Header.less';
import Ava from '../Ava/Ava';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__titles">
                    <h1>Finlandia Extra</h1>
                    <p className="title">Улучшенная версия!</p>
                </div>
                <Ava
                    src="https://apparat-finlandia.ru/images/domashniy.png"
                    desc="Eugene Suloev"    
                />
            </div>
        );
    }
}
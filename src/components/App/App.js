import React, { Component } from 'react';
import 'reset-css';
import './App.less';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

import * as React from 'react';
import logo from '../../assets/images/bikaner.jpeg';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header p-2">
                <div className="header row d-flex">
                    <div className="header-logo col">
                        <img src={logo} alt="Main Logo"/>
                        <span>Sweet Home</span>
                    </div>
                    <div className="col ml-auto">Worlddddddddddd</div>
                </div>
            </header>
        )
    }
}

export default Header;

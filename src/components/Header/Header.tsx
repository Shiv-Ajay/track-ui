import * as React from 'react';
import logo from '../../assets/images/bikaner.jpeg';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="header d-flex w-100">
                    <div className="col header-logo">
                        <img src={logo} alt="Main Logo"/>
                        <span className="">Sweet Home</span>
                    </div>
                    <div className="col d-flex header-options">
                        <div className="dropdown ml-auto header-dropdown">
                            <button className="btn btn-secondary dropdown-toggle dropdown-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome Abhinav
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Editt Profile</a>
                                <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Change Password</a>
                                <a className="dropdown-item" href="#" onClick={e => e.preventDefault()}>Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

import * as React from 'react';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header p-4">
                <div className="row">
                    <div className="col">
                        <img src="src/assets/images/bikaner.jpeg" alt="Main Logo"/>
                    </div>
                    <div className="col">Worlddddddddddd</div>
                </div>
            </header>
        )
    }
}

export default Header;

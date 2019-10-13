import * as React from 'react';
import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="App-header">
                <div className="header row">
                    <div className="col header-logo">
                        Footer
                    </div>
                    <div className="col d-flex header-options">
                        Copyright
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

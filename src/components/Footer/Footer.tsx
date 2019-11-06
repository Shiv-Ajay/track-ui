import * as React from 'react';
import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="App-header">
                <div className="d-flex">
                    <div className="col-sm-4">
                       <h4> About</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati sed quaerat cupiditate cumque!</p>
                    </div>
                    <div className="col-sm-4">
                       <h4> Services</h4>
                       <ul>
                           <li><a href="#">Link1</a></li>
                           <li><a href="#">Link2</a></li>
                           <li><a href="#">Link3</a></li>
                           <li><a href="#">Link4</a></li>
                       </ul>
                    </div>
                    <div className="col-sm-4">
                       <h4> Contatct</h4>
                       <p>Email: xxxx@gmail.com</p>
                       <p>Phone: 8888888888</p>
                    </div>
                   
                </div>
            </footer>
        )
    }
}

export default Footer;

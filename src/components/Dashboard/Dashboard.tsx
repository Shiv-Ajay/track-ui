import * as React from 'react';
import './Dashboard.scss';

interface DashboardProps {
    name: String;
    age?: Number;
}

interface DashboardState {
    address: String;
    phone?: Number;
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {
    render() {
        return (
            <div className="dashboard-container">
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 left-widgets p-3">
                        <div className="personal-document">
                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 right-widgets p-3">
                        <div className="credit-card">
                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 left-widgets p-3 mt-3">
                        <div className="bank-account">

                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 right-widgets p-3 mt-3">
                        <div className="daily-expense">
                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 left-widgets p-3 mt-3">
                        <div className="bill-management">
                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>

                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 right-widgets p-3 mt-3">
                        <div className="vehicle-management">
                        <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;

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
                            Here i will publish list of all publish document which is accessible throughout all views.
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 right-widgets p-3">
                        <div className="credit-card">
                            Here i will publish list of all credit cards which is accessible throughout all views.
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 left-widgets p-3 mt-3">
                        <div className="bank-account">
                            Here i will publish list of all bank documents which is accessible throughout all views.  
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 right-widgets p-3 mt-3">
                        <div className="daily-expense">
                            Here i will publish list of all daily expenses which is accessible throughout all views.
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 left-widgets p-3 mt-3">
                        <div className="bill-management">
                            Here i will publish list of all bills which is accessible throughout all views.
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 right-widgets p-3 mt-3">
                        <div className="vehicle-management">
                            Here i will publish list of all vehicles which is accessible throughout all views.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;

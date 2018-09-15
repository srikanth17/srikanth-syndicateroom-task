import React from 'react';
import { connect } from 'react-redux';
import Company from './Company';

class App extends React.Component {
    handleClick = (e) => {
        console.log(e.target.value);
    };
    render() {
        return (
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <fieldset onChange={this.handleClick}>
                            <legend>Show only</legend>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="con" value="tradingActive" />Trading active
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="con" value="eis" />EIS
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="con" value="seis" />SEIS
                                </label>
                            </div>
                        </fieldset>
                        <p>Companies</p>
                        <ul>
                            {this.props.data.opportunities.map((company) => {
                                return <li key={company.company} ><Company company={company}/></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

// destructuring only current object from the state
const mapStateToProps = ({ current }) => ({
    data: current
});

export default connect(mapStateToProps)(App);
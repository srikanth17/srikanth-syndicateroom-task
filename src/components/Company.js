import React from 'react';
import Modal from 'react-modal';

// styles used for Modal box
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// binds modal to the appElement
Modal.setAppElement('#app');

// react-modal is used to show modal box
class Company extends React.Component {
    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.openModal} className="btn btn-primary">View {this.props.company.company}</button>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Sea Levels"
                            >
                                <div>
                                    <p>Name: {this.props.company.company}</p>
                                    <p>Actively Trading: {this.props.company.tradingActive ? 'Yes' : 'No'}</p>
                                    <p>Average Investment: {this.props.company.averageInvestment}</p>
                                    <p>Total Raised: {this.props.company.totalRaised}</p>
                                    <p>Enterprise Investment Scheme tax relief: {this.props.company.eis ? 'Yes' : 'No'}</p>
                                    <p>Seed Enterprise Investment Scheme tax relief: {this.props.company.seis ? 'Yes' : 'No'}</p>
                                </div>
                                <button onClick={this.closeModal} className="btn btn-primary btn-lg">close</button>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;
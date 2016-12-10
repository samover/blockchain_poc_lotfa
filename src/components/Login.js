import React from 'react';
import AuthService from '../services/AuthService';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { username: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (AuthService.isLoggedIn()) {
            this.goToDashboard();
        }
    }

    handleChange(event) {
        if (event.target.type == "email") {
            this.setState({ username: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }


    handleSubmit() {
        AuthService.login(this.state.username, this.state.password);
        this.goToDashboard();
    }

    goToDashboard() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="center-vertical">
                <div className="center-content row">
                    <form onSubmit={this.handleSubmit} id="login-validation"
                          className="col-md-4 col-sm-5 col-xs-11 col-lg-3 center-margin">
                        <h3 className="text-center pad25B font-gray text-transform-upr font-size-23">Monarch Admin <span
                            className="opacity-80">v1.0</span></h3>
                        <div id="login-form" className="content-box bg-default">
                            <div className="content-box-wrapper pad20A">
                                <div className="form-group">
                                    <div className="input-group">
                            <span className="input-group-addon addon-inside bg-gray">
                                <i className="glyph-icon icon-envelope-o"></i>
                            </span>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="Enter email" value={this.state.username}
                                               onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                            <span className="input-group-addon addon-inside bg-gray">
                                <i className="glyph-icon icon-unlock-alt"></i>
                            </span>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password" value={this.state.password}
                                               onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;

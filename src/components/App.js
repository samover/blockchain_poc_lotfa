import React, { Component } from 'react';
import '../styles/external/font-awesome.min.css';
import '../styles/external/bootstrap.min.css';
import '../styles/external/theme.css';
import '../styles/external/loaders.min.css';
import '../styles/main.css';
import PageHeader from './menu/PageHeader';
import PageSidebar from './menu/PageSidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="body">
                    <div className="main_container">
                        <PageHeader />
                        <PageSidebar />
                        <div className="right_col" role="main" style={{ minHeight: '1500px' }}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
injectTapEventPlugin();
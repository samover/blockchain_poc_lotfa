import React from 'react';
import AuthService from '../../services/AuthService';
import { Link } from 'react-router';

export const PageSideBar = () => {
    return (
        <div id="page-sidebar" style={{height: '1797px'}}>
            <div className="scroll-sidebar" style={{height: '1797px'}}>


                <ul id="sidebar-menu" className="sf-js-enabled sf-arrows">
                    <li className="header"><span>Overview</span></li>
                    <li>
                        <Link to="/">
                            <i className="glyph-icon fa fa-list"></i>
                            <span>Bills of lading</span>
                        </Link>
                    </li>
                    <li className="no-menu">
                        <Link to="/release-requests">
                            <i className="glyph-icon fa fa-plus-square"></i>
                            <span>Release requests</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" title="Elements">
                            <i className="glyph-icon fa fa-user"></i>
                            <span>Address book</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Elements">
                            <i className="glyph-icon fa fa-archive"></i>
                            <span>Archive</span>
                        </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <Link to="login" onClick={AuthService.logout()}>
                            <i className="glyph-icon fa fa-sign-out"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default PageSideBar;

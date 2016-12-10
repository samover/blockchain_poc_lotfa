import React from 'react';
import {Link} from 'react-router';

export const Menu = () => {
    return (
        <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
                <div className="navbar nav_title">
                    <a href="index.html" className="site_title"><i className="fa fa-file-pdf-o"></i>
                        <span>React loves Blockchain</span></a>
                </div>

                <div className="clearfix"></div>
                <br/>

                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section active">
                        <h3>General</h3>
                        <ul className="nav side-menu">
                            <li><Link activeClassName="active" to=""><i className="fa fa-home"/> Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;

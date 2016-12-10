import React from 'react';

export const PageHeader = () => {
    return (
        <div id="page-header" className="bg-gradient-9">
            <div id="header-logo" className="logo-bg">
                <a className="logo-content-big" title="MonarchUI">
                    Monarch <i>UI</i>
                    <span>The perfect solution for user interfaces</span>
                </a>
                <a className="logo-content-small" title="MonarchUI">
                    Monarch <i>UI</i>
                    <span>The perfect solution for user interfaces</span>
                </a>
                <a id="close-sidebar" href="#" title="Close sidebar">
                    <i className="glyph-icon icon-angle-left"/>
                </a>
            </div>
        </div>
    )
}

export default PageHeader;
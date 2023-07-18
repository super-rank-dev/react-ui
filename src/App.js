import React from "react";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div ui-view="" id="app"
            ng-class="{&#39;app-mobile&#39; : app.isMobile, &#39;app-navbar-fixed&#39; : app.layout.isNavbarFixed, &#39;app-sidebar-fixed&#39; : app.layout.isSidebarFixed, &#39;app-sidebar-closed&#39;:app.layout.isSidebarClosed, &#39;app-footer-fixed&#39;:app.layout.isFooterFixed}"
            className="ng-scope app-mobile app-navbar-fixed">
                <Sidebar/>
                <Landing/>
                <Footer/>
        </div>
    );
}

export default App;
import React from "react";

const Footer = () => {
    return (
        <footer data-ng-include=" &#39;assets/views/app/footer.html&#39; " className="hidden-print ng-scope">
            <div className="footer-inner ng-scope">
                <div className="pull-left ng-binding">
                    © 2023 <span className="text-bold text-uppercase ng-binding">Aasri Control</span>. <span>All rights
                        reserved</span>
                </div>
                <div className="pull-right">
                    <span className="go-top" ng-click="toTheTop()"><i className="ti-angle-up"></i></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from "react";

import logoImage from "../assets/images/logo.png";
import avatarImage from "../assets/images/avatar-5.png";

const Landing = () => {
    return (
        <div className="app-content ng-scope" ng-className="{loading: loading}">
            <header data-ng-include=" &#39;assets/views/app/top-navbar.html&#39; "
                className="navbar navbar-default navbar-static-top hidden-print ng-scope">
                <div className="navbar-header ng-scope">
                    <a href="http://kinetix.aasricontrols.com/#"
                        className="sidebar-mobile-toggler pull-left hidden-md hidden-lg"
                        ng-click="toggle(&#39;sidebar&#39;)"> <i className="ti-align-justify"></i> </a>
                    <a className="navbar-brand" ui-sref="app.dashboard.main"
                        href="http://kinetix.aasricontrols.com/#!/dashboard">
                        <img src={logoImage} width="90" alt="AARSI" data-pagespeed-url-hash="861902669" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
                    </a>
                    <a href="http://kinetix.aasricontrols.com/#"
                        className="sidebar-toggler pull-right visible-md visible-lg"
                        ng-click="app.layout.isSidebarClosed = !app.layout.isSidebarClosed"> <i
                            className="ti-align-justify"></i> </a>
                    <a className="pull-right menu-toggler visible-xs-block" id="menu-toggler"
                        ng-click="navbarCollapsed = !navbarCollapsed"> <span className="sr-only">Toggle navigation</span> <i
                            className="ti-view-grid"></i> </a>
                </div>
                <div className="navbar-collapse ng-scope ng-isolate-scope collapse" uib-collapse="navbarCollapsed"
                    ng-init="navbarCollapsed = true" off-click="navbarCollapsed = true" off-click-if="!navbarCollapsed"
                    off-click-filter="#menu-toggler" aria-expanded="false" aria-hidden="true" style={{ height: '0px' }}>
                    <ul className="nav navbar-right ng-isolate-scope" ct-fullheight="window"
                        data-ct-fullheight-exclusion="header" data-ct-fullheight-if="isSmallDevice"
                        style={{ height: 'auto' }}>
                        <li className="dropdown current-user" uib-dropdown="" on-toggle="toggled(open)">
                            <a href="http://kinetix.aasricontrols.com/" className="dropdown-toggle" uib-dropdown-toggle=""
                                aria-haspopup="true" aria-expanded="false"> <img
                                    src={avatarImage}
                                    alt="Alan" data-pagespeed-url-hash="3376830180"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /> <span
                                        className="username ng-binding">Alan <i className="ti-angle-down"></i></span> </a>
                            <ul className="dropdown-menu">
                                <li></li>
                                <li>
                                    <a ui-sref="app.pages.user"> My Profile </a>
                                </li>
                                <li>
                                    <a ui-sref="app.pages.calendar"> My Calendar </a>
                                </li>
                                <li>
                                    <a ui-sref="app.pages.messages"> My Messages (3) </a>
                                </li>
                                <li>
                                    <a ui-sref="login.lockscreen" href="http://kinetix.aasricontrols.com/#!/login/lock">
                                        Lock Screen </a>
                                </li>
                                <li>
                                    <a ng-click="doLogout()"> Log Out </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="close-handle visible-xs-block menu-toggler" ng-click="navbarCollapsed = true">
                        <div className="arrow-left"></div>
                        <div className="arrow-right"></div>
                    </div>
                </div>
            </header>
            <div data-ng-include=" &#39;assets/views/app/main-content.html&#39; " className="main-content ng-scope"
                style={{ position: 'relative', top: 'auto', width: 'auto' }}>
                <div ui-view="" className="wrap-content container fade-in-up ng-scope" id="container">
                    <div ui-view="" className="fade-in-up ng-scope">
                        <div ui-view="" className="fade-in-up ng-scope">
                            <section id="page-title" className="padding-top-15 padding-bottom-15 ng-scope">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="mainTitle ng-binding">Policy and Procedure Management</h1>
                                        <span className="mainDescription ng-binding">Add Policy and Procedure</span>
                                    </div>
                                </div>
                            </section>

                            <div className="container-fluid container-fullw bg-white ng-scope">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-transparent">
                                            <div className="panel-body">
                                                <form name="Form.PolicyDocs" ng-submit="submitAction()" role="form"
                                                    ng-init="IsSubmitted=false"
                                                    className="ng-invalid ng-invalid-required ng-dirty ng-valid-parse">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.policyName.$dirty &amp;&amp; Form.PolicyDocs.policyName.$invalid }">
                                                                <label> Policy Name </label>
                                                                <input type="text" name="policyName"
                                                                    ng-model="VM.policyName" placeholder="Policy Name"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    required="" />
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.policyDesc.$dirty &amp;&amp; Form.PolicyDocs.policyDesc.$invalid }">
                                                                <label> Policy Description </label>
                                                                <textarea elastictextarea="" type="text"
                                                                    name="policyDesc" ng-model="VM.policyDesc"
                                                                    ng_autosize="" placeholder="Policy Description"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    required="" style={{ height: '44px' }}></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.source.$dirty &amp;&amp; Form.PolicyDocs.source.$invalid }">
                                                                <label> Source </label>
                                                                <select type="text"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    name="source" ng-model="VM.source"
                                                                    ng-options="op.val as op.val for op in app.Lookup.LIST31"
                                                                    required="">
                                                                    <option value="?" selected="selected"></option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group">
                                                                <label> Policy Owner </label>
                                                                <select name="policyOwner" ng-model="VM.policyOwner"
                                                                    ng-options="u.name as u.name for u in app.Lookup.Users"
                                                                    className="form-control ng-pristine ng-untouched ng-valid ng-empty">
                                                                    <option value="?" selected="selected"></option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.businessProcess.$dirty &amp;&amp; Form.PolicyDocs.businessProcess.$invalid }">
                                                                <label> Business Process</label>
                                                                <select type="text"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    name="businessProcess" ng-model="VM.businessProcess"
                                                                    ng-options="op.val as op.val for op in app.Lookup.LIST029"
                                                                    required="">
                                                                    <option value="?" selected="selected"></option>
                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{ &#39;has-error&#39; : Form.PolicyDocs.department.$invalid &amp;&amp; (!Form.PolicyDocs.department.$pristine || Form.PolicyDocs.department.$touched || Form.PolicyDocs.department.$submitted) }">
                                                                <label> Department </label>
                                                                <select type="text" name="department"
                                                                    ng-model="VM.department"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    ng-options="d.deptName as d.deptName for d in app.Lookup.Departments"
                                                                    required="">
                                                                    <option value="?" selected="selected"></option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{ &#39;has-error&#39; : Form.PolicyDocs.version.$invalid &amp;&amp; (!Form.PolicyDocs.version.$pristine || Form.PolicyDocs.version.$touched || Form.PolicyDocs.version.$submitted) }">
                                                                <label> Version </label>
                                                                <input type="text" name="version" ng-model="VM.version"
                                                                    placeholder="Version"
                                                                    className="form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"
                                                                    required="" />
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group">
                                                                <label> Policy Type </label>
                                                                <select type="text" name="policyType"
                                                                    ng-model="VM.policyType"
                                                                    className="form-control ng-pristine ng-untouched ng-valid ng-empty">
                                                                    <option value="? undefined:undefined ?"
                                                                        selected="selected"></option>
                                                                    <option selected="" value="Board level Policy">Board
                                                                        level Policy</option>
                                                                    <option selected="" value="Mgmt level Policy">Mgmt
                                                                        level Policy</option>
                                                                    <option selected="" value="Procedures">Procedures
                                                                    </option>
                                                                    <option selected="" value="Guidelines">Guidelines
                                                                    </option>
                                                                    <option value="Notices">Notices</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group">
                                                                <label> Effective Date </label>
                                                                <datepicker date-format="MM-dd-yyyy"
                                                                    className="ng-isolate-scope">
                                                                    <input type="text" name="effectiveDate"
                                                                        ng-model="VM.effectiveDate"
                                                                        placeholder="Effective Date"
                                                                        className="form-control ng-untouched ng-valid ng-not-empty ng-valid-required ng-dirty ng-valid-parse"
                                                                        required="" />
                                                                    <div className="_720kb-datepicker-calendar"
                                                                        ng-className="{&#39;_720kb-datepicker-forced-to-open&#39;: checkVisibility()}"
                                                                        ng-blur="hideCalendar()">
                                                                        <div className="_720kb-datepicker-calendar-header">
                                                                            <div
                                                                                className="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">
                                                                                <select ng-model="month"
                                                                                    title="Select month"
                                                                                    ng-change="selectedMonthHandle(month)"
                                                                                    className="ng-untouched ng-valid ng-empty ng-dirty ng-valid-parse">
                                                                                    <option value="? string:July ?"
                                                                                        selected="selected"></option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:1"
                                                                                        className="ng-binding ng-scope">
                                                                                        January</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:2"
                                                                                        className="ng-binding ng-scope">
                                                                                        February</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:3"
                                                                                        className="ng-binding ng-scope">
                                                                                        March</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:4"
                                                                                        className="ng-binding ng-scope">
                                                                                        April</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:5"
                                                                                        className="ng-binding ng-scope">May
                                                                                    </option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:6"
                                                                                        className="ng-binding ng-scope">June
                                                                                    </option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:7"
                                                                                        className="ng-binding ng-scope">July
                                                                                    </option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:8"
                                                                                        className="ng-binding ng-scope">
                                                                                        August</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:9"
                                                                                        className="ng-binding ng-scope">
                                                                                        September</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:10"
                                                                                        className="ng-binding ng-scope">
                                                                                        October</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:11"
                                                                                        className="ng-binding ng-scope">
                                                                                        November</option>

                                                                                    <option ng-repeat="item in months"
                                                                                        ng-selected="item === month"
                                                                                        ng-disabled="!isSelectableMaxDate(item + &quot; &quot; + day + &quot;, &quot; + year) || !isSelectableMinDate(item + &quot; &quot; + day + &quot;, &quot; + year)"
                                                                                        ng-value="$index + 1"
                                                                                        value="number:12"
                                                                                        className="ng-binding ng-scope">
                                                                                        December</option>

                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_720kb-datepicker-calendar-header">
                                                                            <div
                                                                                className="_720kb-datepicker-calendar-header-middle _720kb-datepicker-mobile-item _720kb-datepicker-calendar-month">
                                                                                <select ng-model="mobileYear"
                                                                                    title="Select year"
                                                                                    ng-change="setNewYear(mobileYear)"
                                                                                    className="ng-untouched ng-valid ng-empty ng-dirty ng-valid-parse">
                                                                                    <option value="? object:null ?"
                                                                                        selected="selected"></option>
                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-50"
                                                                                        className="ng-binding ng-scope">-50
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-49"
                                                                                        className="ng-binding ng-scope">-49
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-48"
                                                                                        className="ng-binding ng-scope">-48
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-47"
                                                                                        className="ng-binding ng-scope">-47
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-46"
                                                                                        className="ng-binding ng-scope">-46
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-45"
                                                                                        className="ng-binding ng-scope">-45
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-44"
                                                                                        className="ng-binding ng-scope">-44
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-43"
                                                                                        className="ng-binding ng-scope">-43
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-42"
                                                                                        className="ng-binding ng-scope">-42
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-41"
                                                                                        className="ng-binding ng-scope">-41
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-40"
                                                                                        className="ng-binding ng-scope">-40
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-39"
                                                                                        className="ng-binding ng-scope">-39
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-38"
                                                                                        className="ng-binding ng-scope">-38
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-37"
                                                                                        className="ng-binding ng-scope">-37
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-36"
                                                                                        className="ng-binding ng-scope">-36
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-35"
                                                                                        className="ng-binding ng-scope">-35
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-34"
                                                                                        className="ng-binding ng-scope">-34
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-33"
                                                                                        className="ng-binding ng-scope">-33
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-32"
                                                                                        className="ng-binding ng-scope">-32
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-31"
                                                                                        className="ng-binding ng-scope">-31
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-30"
                                                                                        className="ng-binding ng-scope">-30
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-29"
                                                                                        className="ng-binding ng-scope">-29
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-28"
                                                                                        className="ng-binding ng-scope">-28
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-27"
                                                                                        className="ng-binding ng-scope">-27
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-26"
                                                                                        className="ng-binding ng-scope">-26
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-25"
                                                                                        className="ng-binding ng-scope">-25
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-24"
                                                                                        className="ng-binding ng-scope">-24
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-23"
                                                                                        className="ng-binding ng-scope">-23
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-22"
                                                                                        className="ng-binding ng-scope">-22
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-21"
                                                                                        className="ng-binding ng-scope">-21
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-20"
                                                                                        className="ng-binding ng-scope">-20
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-19"
                                                                                        className="ng-binding ng-scope">-19
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-18"
                                                                                        className="ng-binding ng-scope">-18
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-17"
                                                                                        className="ng-binding ng-scope">-17
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-16"
                                                                                        className="ng-binding ng-scope">-16
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-15"
                                                                                        className="ng-binding ng-scope">-15
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-14"
                                                                                        className="ng-binding ng-scope">-14
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-13"
                                                                                        className="ng-binding ng-scope">-13
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-12"
                                                                                        className="ng-binding ng-scope">-12
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-11"
                                                                                        className="ng-binding ng-scope">-11
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-10"
                                                                                        className="ng-binding ng-scope">-10
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-9"
                                                                                        className="ng-binding ng-scope">-9
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-8"
                                                                                        className="ng-binding ng-scope">-8
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-7"
                                                                                        className="ng-binding ng-scope">-7
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-6"
                                                                                        className="ng-binding ng-scope">-6
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-5"
                                                                                        className="ng-binding ng-scope">-5
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-4"
                                                                                        className="ng-binding ng-scope">-4
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-3"
                                                                                        className="ng-binding ng-scope">-3
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-2"
                                                                                        className="ng-binding ng-scope">-2
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:-1"
                                                                                        className="ng-binding ng-scope">-1
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:0"
                                                                                        className="ng-binding ng-scope"
                                                                                        selected="selected">0</option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:1"
                                                                                        className="ng-binding ng-scope">1
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:2"
                                                                                        className="ng-binding ng-scope">2
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:3"
                                                                                        className="ng-binding ng-scope">3
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:4"
                                                                                        className="ng-binding ng-scope">4
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:5"
                                                                                        className="ng-binding ng-scope">5
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:6"
                                                                                        className="ng-binding ng-scope">6
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:7"
                                                                                        className="ng-binding ng-scope">7
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:8"
                                                                                        className="ng-binding ng-scope">8
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item" value="number:9"
                                                                                        className="ng-binding ng-scope">9
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:10"
                                                                                        className="ng-binding ng-scope">10
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:11"
                                                                                        className="ng-binding ng-scope">11
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:12"
                                                                                        className="ng-binding ng-scope">12
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:13"
                                                                                        className="ng-binding ng-scope">13
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:14"
                                                                                        className="ng-binding ng-scope">14
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:15"
                                                                                        className="ng-binding ng-scope">15
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:16"
                                                                                        className="ng-binding ng-scope">16
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:17"
                                                                                        className="ng-binding ng-scope">17
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:18"
                                                                                        className="ng-binding ng-scope">18
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:19"
                                                                                        className="ng-binding ng-scope">19
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:20"
                                                                                        className="ng-binding ng-scope">20
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:21"
                                                                                        className="ng-binding ng-scope">21
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:22"
                                                                                        className="ng-binding ng-scope">22
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:23"
                                                                                        className="ng-binding ng-scope">23
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:24"
                                                                                        className="ng-binding ng-scope">24
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:25"
                                                                                        className="ng-binding ng-scope">25
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:26"
                                                                                        className="ng-binding ng-scope">26
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:27"
                                                                                        className="ng-binding ng-scope">27
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:28"
                                                                                        className="ng-binding ng-scope">28
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:29"
                                                                                        className="ng-binding ng-scope">29
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:30"
                                                                                        className="ng-binding ng-scope">30
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:31"
                                                                                        className="ng-binding ng-scope">31
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:32"
                                                                                        className="ng-binding ng-scope">32
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:33"
                                                                                        className="ng-binding ng-scope">33
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:34"
                                                                                        className="ng-binding ng-scope">34
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:35"
                                                                                        className="ng-binding ng-scope">35
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:36"
                                                                                        className="ng-binding ng-scope">36
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:37"
                                                                                        className="ng-binding ng-scope">37
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:38"
                                                                                        className="ng-binding ng-scope">38
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:39"
                                                                                        className="ng-binding ng-scope">39
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:40"
                                                                                        className="ng-binding ng-scope">40
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:41"
                                                                                        className="ng-binding ng-scope">41
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:42"
                                                                                        className="ng-binding ng-scope">42
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:43"
                                                                                        className="ng-binding ng-scope">43
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:44"
                                                                                        className="ng-binding ng-scope">44
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:45"
                                                                                        className="ng-binding ng-scope">45
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:46"
                                                                                        className="ng-binding ng-scope">46
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:47"
                                                                                        className="ng-binding ng-scope">47
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:48"
                                                                                        className="ng-binding ng-scope">48
                                                                                    </option>

                                                                                    <option
                                                                                        ng-repeat="item in paginationYears track by $index"
                                                                                        ng-selected="year === item"
                                                                                        ng-disabled="!isSelectableMinYear(item) || !isSelectableMaxYear(item)"
                                                                                        ng-value="item"
                                                                                        value="number:49"
                                                                                        className="ng-binding ng-scope">49
                                                                                    </option>

                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_720kb-datepicker-calendar-header ng-hide"
                                                                            ng-show="showYearsPagination">
                                                                            <div
                                                                                className="_720kb-datepicker-calendar-years-pagination">
                                                                                <a
                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                    href="javascript:void(0)"
                                                                                    ng-click="setNewYear(y)"
                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                    className="ng-binding ng-scope">-50</a><a
                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                        href="javascript:void(0)"
                                                                                        ng-click="setNewYear(y)"
                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                        className="ng-binding ng-scope">-49</a><a
                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                            href="javascript:void(0)"
                                                                                            ng-click="setNewYear(y)"
                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                            className="ng-binding ng-scope">-48</a><a
                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                href="javascript:void(0)"
                                                                                                ng-click="setNewYear(y)"
                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                className="ng-binding ng-scope">-47</a><a
                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                    href="javascript:void(0)"
                                                                                                    ng-click="setNewYear(y)"
                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                    className="ng-binding ng-scope">-46</a><a
                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                        href="javascript:void(0)"
                                                                                                        ng-click="setNewYear(y)"
                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                        className="ng-binding ng-scope">-45</a><a
                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                            href="javascript:void(0)"
                                                                                                            ng-click="setNewYear(y)"
                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                            className="ng-binding ng-scope">-44</a><a
                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                href="javascript:void(0)"
                                                                                                                ng-click="setNewYear(y)"
                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                className="ng-binding ng-scope">-43</a><a
                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                    href="javascript:void(0)"
                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                    className="ng-binding ng-scope">-42</a><a
                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                        href="javascript:void(0)"
                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                        className="ng-binding ng-scope">-41</a><a
                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                            href="javascript:void(0)"
                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                            className="ng-binding ng-scope">-40</a><a
                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                href="javascript:void(0)"
                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                className="ng-binding ng-scope">-39</a><a
                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                    href="javascript:void(0)"
                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                    className="ng-binding ng-scope">-38</a><a
                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                        href="javascript:void(0)"
                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                        className="ng-binding ng-scope">-37</a><a
                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                            href="javascript:void(0)"
                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                            className="ng-binding ng-scope">-36</a><a
                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                className="ng-binding ng-scope">-35</a><a
                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                    className="ng-binding ng-scope">-34</a><a
                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                        className="ng-binding ng-scope">-33</a><a
                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                            className="ng-binding ng-scope">-32</a><a
                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                className="ng-binding ng-scope">-31</a><a
                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                    className="ng-binding ng-scope">-30</a><a
                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                        className="ng-binding ng-scope">-29</a><a
                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                            className="ng-binding ng-scope">-28</a><a
                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                className="ng-binding ng-scope">-27</a><a
                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                    className="ng-binding ng-scope">-26</a><a
                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                        className="ng-binding ng-scope">-25</a><a
                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                            className="ng-binding ng-scope">-24</a><a
                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                className="ng-binding ng-scope">-23</a><a
                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                    className="ng-binding ng-scope">-22</a><a
                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                        className="ng-binding ng-scope">-21</a><a
                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                            className="ng-binding ng-scope">-20</a><a
                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                className="ng-binding ng-scope">-19</a><a
                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                    className="ng-binding ng-scope">-18</a><a
                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                        className="ng-binding ng-scope">-17</a><a
                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                            className="ng-binding ng-scope">-16</a><a
                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                className="ng-binding ng-scope">-15</a><a
                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                    className="ng-binding ng-scope">-14</a><a
                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                        className="ng-binding ng-scope">-13</a><a
                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                            className="ng-binding ng-scope">-12</a><a
                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                className="ng-binding ng-scope">-11</a><a
                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                    className="ng-binding ng-scope">-10</a><a
                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                        className="ng-binding ng-scope">-9</a><a
                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                            className="ng-binding ng-scope">-8</a><a
                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                className="ng-binding ng-scope">-7</a><a
                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">-6</a><a
                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">-5</a><a
                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">-4</a><a
                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">-3</a><a
                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">-2</a><a
                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">-1</a><a
                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope _720kb-datepicker-active">0</a><a
                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">1</a><a
                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">2</a><a
                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">3</a><a
                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">4</a><a
                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">5</a><a
                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">6</a><a
                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">7</a><a
                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">8</a><a
                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">9</a><a
                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">10</a><a
                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">11</a><a
                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">12</a><a
                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">13</a><a
                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">14</a><a
                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">15</a><a
                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">16</a><a
                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">17</a><a
                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">18</a><a
                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">19</a><a
                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">20</a><a
                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">21</a><a
                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">22</a><a
                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">23</a><a
                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">24</a><a
                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">25</a><a
                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">26</a><a
                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">27</a><a
                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">28</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">29</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">30</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">31</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">32</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">33</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">34</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">35</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">36</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">37</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">38</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">39</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">40</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">41</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">42</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">43</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">44</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">45</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    className="ng-binding ng-scope">46</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="ng-binding ng-scope">47</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="ng-binding ng-scope">48</a><a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-className="{&#39;_720kb-datepicker-active&#39;: y === year, &#39;_720kb-datepicker-disabled&#39;: !isSelectableMaxYear(y) || !isSelectableMinYear(y)}"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                href="javascript:void(0)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-click="setNewYear(y)"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ng-repeat="y in paginationYears track by $index"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                className="ng-binding ng-scope">49</a>
                                                                            </div>
                                                                            <div
                                                                                className="_720kb-datepicker-calendar-years-pagination-pages">
                                                                                <a href="javascript:void(0)"
                                                                                    ng-click="paginateYears(paginationYears[0])"
                                                                                    ng-className="{&#39;_720kb-datepicker-item-hidden&#39;: paginationYearsPrevDisabled}"><b
                                                                                        className="_720kb-datepicker-default-button">⟨</b></a><a
                                                                                            href="javascript:void(0)"
                                                                                            ng-click="paginateYears(paginationYears[paginationYears.length -1 ])"
                                                                                            ng-className="{&#39;_720kb-datepicker-item-hidden&#39;: paginationYearsNextDisabled}"><b
                                                                                                className="_720kb-datepicker-default-button">⟩</b></a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="_720kb-datepicker-calendar-days-header">
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Sun</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Mon</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Tue</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Wed</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Thu</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Fri</div>
                                                                            <div ng-repeat="d in daysInString"
                                                                                className="ng-binding ng-scope">Sat</div>
                                                                        </div>
                                                                        <div className="_720kb-datepicker-calendar-body"></div>
                                                                    </div>
                                                                </datepicker>
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.policyStatus.$dirty &amp;&amp; Form.PolicyDocs.policyStatus.$invalid }">
                                                                <label> Status </label>
                                                                <select type="text"
                                                                    className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                                                                    name="policyStatus" ng-model="VM.policyStatus"
                                                                    ng-options="op.val as op.val for op in app.Lookup.LIST030"
                                                                    required="">
                                                                    <option value="?" selected="selected"></option>
                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="form-group"
                                                                ng-className="{&#39;has-error&#39;: Form.PolicyDocs.PolicyDesc.$dirty &amp;&amp; Form.PolicyDocs.policyDesc.$invalid }">
                                                                <label> Files to upload </label>
                                                                <input type="file" file-model="VM.fileModel"
                                                                    className="form-control" multiple="multiple" />
                                                            </div>
                                                        </div>
                                                        <hr className="hrule4" />
                                                        <div className="col-xs-12 text-right">
                                                            <a type="submit"
                                                                className="btn btn-squared btn-dark-blue"><i
                                                                    className="ti-save"></i> Save</a>
                                                            <a type="button" className="btn btn-squared btn-dark-blue"
                                                                ng-click="cancelAction()"><i className="ti-close"></i>
                                                                Cancel</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-white no-radius">
                                            <div className="panel-heading">
                                                <h5>Approvers</h5>
                                            </div>
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="panel-tools">
                                                        <a className="btn btn-xs btn-dark-blue btn-squared"
                                                            ui-sref="app.polproc.policydocs.approver({id: VM.id})"
                                                            href="http://kinetix.aasricontrols.com/#!/polproc/policydocs//manage-approver">Add
                                                            Approver</a>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <table className="table table-striped table-responsive col-xs-12">
                                                        <thead>
                                                            <tr className="sortable-headers">
                                                                <th><a ng-className="{&#39;text-azure&#39;: CurrCol===&#39;approver&#39; }"
                                                                    ng-click="sortMe(&#39;approver&#39;)"><i
                                                                        className="fa "></i> Approver</a></th>
                                                                <th><a ng-className="{&#39;text-azure&#39;: CurrCol===&#39;name&#39; }"
                                                                    ng-click="sortMe(&#39;name&#39;)"><i
                                                                        className="fa "></i>Name</a></th>
                                                                <th><a ng-className="{&#39;text-azure&#39;: CurrCol===&#39;status&#39; }"
                                                                    ng-click="sortMe(&#39;status&#39;)"><i
                                                                        className="fa "></i> Status </a></th>
                                                                <th><a ng-className="{&#39;text-azure&#39;: CurrCol===&#39;delegateTo&#39; }"
                                                                    ng-click="sortMe(&#39;delegateTo&#39;)"><i
                                                                        className="fa "></i> Delegate To</a></th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-4 ng-binding">
                                                        Showing NaN to NaN of entries
                                                    </div>
                                                    <div className="col-xs-12 col-sm-8 pagination-right">
                                                        <ul uib-pagination="" total-items="Grid2.Total"
                                                            items-per-page="Grid2.PerPage" ng-model="Grid2.CurrPage"
                                                            max-size="5"
                                                            className="pagination-sm ng-pristine ng-untouched ng-valid ng-isolate-scope pagination ng-empty"
                                                            boundary-link-numbers="true" role="menu">
                                                            <li role="menuitem" ng-if="::directionLinks"
                                                                ng-className="{disabled: noPrevious()||ngDisabled}"
                                                                className="pagination-prev ng-scope disabled"><a
                                                                    href="http://kinetix.aasricontrols.com/"
                                                                    ng-click="selectPage(page - 1, $event)"
                                                                    ng-disabled="noPrevious()||ngDisabled"
                                                                    uib-tabindex-toggle="" className="ng-binding"
                                                                    disabled="disabled" tabindex="-1">Previous</a></li>
                                                            <li role="menuitem"
                                                                ng-repeat="page in pages track by $index"
                                                                ng-className="{active: page.active,disabled: ngDisabled&amp;&amp;!page.active}"
                                                                className="pagination-page ng-scope active"><a
                                                                    href="http://kinetix.aasricontrols.com/"
                                                                    ng-click="selectPage(page.number, $event)"
                                                                    ng-disabled="ngDisabled&amp;&amp;!page.active"
                                                                    uib-tabindex-toggle="" className="ng-binding">1</a></li>
                                                            <li role="menuitem" ng-if="::directionLinks"
                                                                ng-className="{disabled: noNext()||ngDisabled}"
                                                                className="pagination-next ng-scope disabled"><a
                                                                    href="http://kinetix.aasricontrols.com/"
                                                                    ng-click="selectPage(page + 1, $event)"
                                                                    ng-disabled="noNext()||ngDisabled"
                                                                    uib-tabindex-toggle="" className="ng-binding"
                                                                    disabled="disabled" tabindex="-1">Next</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-mask ng-scope" style={{ display: 'none' }}>
                    <div className="view-mask-backdrop"></div>
                    <div
                        className="view-mask-dialogue col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-lg-4 col-lg-offset-4 padding-top-15">
                        <div style={{ marginLeft: '40%' }}></div>
                        <h5 className="ng-binding"> </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
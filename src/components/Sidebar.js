import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar app-aside hidden-print ng-scope" id="sidebar" toggleable=""
            parent-active-className="app-slide-off">
            <div ng-scrollbars="" className="ng-isolate-scope mCustomScrollbar _mCS_1 mCS_no_scrollbar">
                <div id="mCSB_1" className="mCustomScrollBox mCS-dark-3 mCSB_vertical mCSB_inside" tabindex="0">
                    <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                        style={{ position: 'relative', top: 0, left: 0 }} dir="ltr">
                        <div data-ng-include=" &#39;assets/views/app/sidebar.html&#39; " className="ng-scope">
                            <nav ng-model="adminState" ng-if="!adminState"
                                data-ng-include=" &#39;assets/views/app/nav.html&#39; "
                                className="ng-pristine ng-untouched ng-valid ng-scope ng-not-empty">
                                <div className="sidebar-spacer ng-scope">
                                </div>
                                <ul className="main-navigation-menu ng-scope">
                                    <li ui-sref-active="active">
                                        <a ui-sref="app.dashboard.main"
                                            href="http://kinetix.aasricontrols.com/#!/dashboard">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-bar-chart"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Dashboard </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li ui-sref-active="active">

                                    </li>
                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.polproc&#39;)}"
                                        className="active open">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-panel"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Policy and Procedure Management </span><i
                                                        className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu" style={{ display: 'block' }}>
                                            <li ui-sref-active="active"
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.polproc.policydocs&#39;) }"
                                                className="">
                                                <a ui-sref="app.polproc.policydocs.main"
                                                    href="http://kinetix.aasricontrols.com/#!/polproc/policydocs">
                                                    <span className="title"> Policy and Procedure Management </span>
                                                </a>
                                            </li>
                                            <li ng-className="{&#39;active&#39;: $state.includes(&#39;app.polproc.policy&#39;) }"
                                                className="">
                                                <a ui-sref="app.polproc.policy.main"
                                                    href="http://kinetix.aasricontrols.com/#!/polproc/policy">
                                                    <span className="title"> Policy Documents </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.datainventory&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-harddrives"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Data Governance </span><i
                                                        className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li ui-sref-active="active"
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.asset&#39;) }"
                                                className="">
                                                <a ui-sref="app.datainventory.asset.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/asset">
                                                    <span className="title"> Assets </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.datamodels&#39;) }">
                                                <a ui-sref="app.datainventory.datamodels.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/datamodels">
                                                    <span className="title"> Data Models </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.datamapping&#39;) }">
                                                <a ui-sref="app.datainventory.datamapping.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/datamapping">
                                                    <span className="title"> Data Lineage </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.steward&#39;) }">
                                                <a ui-sref="app.datainventory.steward.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/steward">
                                                    <span className="title"> Data Steward DQ </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.metadata&#39;) }">
                                                <a ui-sref="app.datainventory.metadata.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/metadata">
                                                    <span className="title"> Metadata </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.clouddatamanagement&#39;) }">
                                                <a ui-sref="app.datainventory.clouddatamanagement.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/clouddatamanagement">
                                                    <span className="title"> Cloud Data Management </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.datainventory.esgdata&#39;) }">
                                                <a ui-sref="app.datainventory.esgdata.main"
                                                    href="http://kinetix.aasricontrols.com/#!/datainventory/esgdata">
                                                    <span className="title"> ESGData </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.admin.gdprpre&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-harddrives"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> GDPR </span><i className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.gdprpre&#39;) }">
                                                <a ui-sref="app.compliance.gdprpre.main"
                                                    href="http://kinetix.aasricontrols.com/#!/compliance/gdprpre">
                                                    <span className="title">GDPR Pre Assessment </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.gdpr&#39;) }">
                                                <a ui-sref="app.compliance.gdpr.main"
                                                    href="http://kinetix.aasricontrols.com/#!/compliance/gdpr">
                                                    <span className="title"> GDPR Assessment </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li ui-sref-active="active">
                                        <a ui-sref="app.audit.main" href="http://kinetix.aasricontrols.com/#!/audit">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-zoom-in"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Audit </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li ui-sref-active="active">
                                        <a ui-sref="app.bpm.main" href="http://kinetix.aasricontrols.com/#!/bpm">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-flag-alt"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Business Process </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <a href="javascript:void(0)">
                                        <div className="item-content">
                                            <div className="item-media">
                                                <i className="ti-harddrives"></i>
                                            </div>
                                            <div className="item-inner">
                                                <span className="title"> Risk </span><i className="icon-arrow"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <ul className="sub-menu">

                                        <li ng-className="{&#39;active&#39;: $state.includes(&#39;app.risk.profile&#39;) }">
                                            <a ui-sref="app.risk.profile.main"
                                                href="http://kinetix.aasricontrols.com/#!/risk/profile">
                                                <span className="title"> Risk Data </span>
                                            </a>
                                        </li>
                                        <li
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.risk.assessment&#39;) }">
                                            <a ui-sref="app.risk.assessment.main"
                                                href="http://kinetix.aasricontrols.com/#!/risk/assessment">
                                                <span className="title"> Risk Control Self Assessment </span>
                                            </a>
                                        </li>

                                        <li ng-className="{&#39;active&#39;: $state.includes(&#39;app.risk.matrix&#39;) }">
                                            <a ui-sref="app.risk.matrix.main"
                                                href="http://kinetix.aasricontrols.com/#!/risk/matrix">
                                                <span className="title"> Risk Control Profile </span>
                                            </a>
                                        </li>

                                        <li
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.risk.controlMatrices.main&#39;) }">
                                            <a ui-sref="app.risk.controlMatrices.main"
                                                href="http://kinetix.aasricontrols.com/#!/risk/controlmatrices">
                                                <span className="title"> Risk Control Matrices </span>
                                            </a>
                                        </li>

                                        <li ng-className="{&#39;active&#39;: $state.includes(&#39;app.risk.rcm&#39;) }">
                                            <a ui-sref="app.risk.rcm.main"
                                                href="http://kinetix.aasricontrols.com/#!/risk/rcm">
                                                <span className="title"> Risk Control Dashboards </span>
                                            </a>
                                        </li>

                                    </ul>
                                    <a href="javascript:void(0)">
                                        <div className="item-content">
                                            <div className="item-media">
                                                <i className="ti-harddrives"></i>
                                            </div>
                                            <div className="item-inner">
                                                <span className="title"> Controls </span><i className="icon-arrow"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <ul className="sub-menu">
                                        <li ui-sref-active="active"
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.control.repo&#39;) }">
                                            <a ui-sref="app.control.repo.main"
                                                href="http://kinetix.aasricontrols.com/#!/control/repo">
                                                <span className="title"> Control Repository </span>
                                            </a>
                                        </li>
                                        <li
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.controltestdata&#39;) }">
                                            <a ui-sref="app.controltestdata.main"
                                                href="http://kinetix.aasricontrols.com/#!/controltestdata">
                                                <span className="title"> Control Test Data </span>
                                            </a>
                                        </li>
                                        <li
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.control.testplan&#39;) }">
                                            <a ui-sref="app.control.testplan.main"
                                                href="http://kinetix.aasricontrols.com/#!/control/testplan">
                                                <span className="title"> Control Test Plan </span>
                                            </a>
                                        </li>
                                        <li
                                            ng-className="{&#39;active&#39;: $state.includes(&#39;app.control.testresult&#39;) }">
                                            <a ui-sref="app.control.testresult.main"
                                                href="http://kinetix.aasricontrols.com/#!/control/testresult">
                                                <span className="title"> Control Test Result </span>
                                            </a>
                                        </li>
                                        <li ui-sref-active="active">
                                            <a ui-sref="app.mitigate.remediations"
                                                href="http://kinetix.aasricontrols.com/#!/mitigate/remediations">
                                                <span className="title"> Remediations </span>
                                            </a>
                                        </li>
                                        <li ui-sref-active="active">
                                            <a ui-sref="app.mitigate.findings"
                                                href="http://kinetix.aasricontrols.com/#!/mitigate/findings">
                                                <span className="title"> Actions Findings </span>
                                            </a>
                                        </li>
                                    </ul>


                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.itrisk&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-harddrives"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> IT Risk </span><i className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.itrisk.incident&#39;) }">
                                                <a ui-sref="app.itrisk.incident.main"
                                                    href="http://kinetix.aasricontrols.com/#!/itrisk/incident">
                                                    <span className="title"> IT Risk Incident </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.itrisk.assessment&#39;) }">
                                                <a ui-sref="app.itrisk.assessment.main"
                                                    href="http://kinetix.aasricontrols.com/#!/itrisk/assessment">
                                                    <span className="title"> IT Risk Assessment </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.oprisk&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-harddrives"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Loss Data Event Management </span><i
                                                        className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.oprisk.incident&#39;) }">
                                                <a ui-sref="app.oprisk.incident.main"
                                                    href="http://kinetix.aasricontrols.com/#!/oprisk/incident">
                                                    <span className="title"> Loss Data Event </span>
                                                </a>
                                            </li>
                                            <li
                                                ng-className="{&#39;active&#39;: $state.includes(&#39;app.oprisk.assessment&#39;) }">
                                                <a ui-sref="app.oprisk.assessment.main"
                                                    href="http://kinetix.aasricontrols.com/#!/oprisk/assessment">
                                                    <span className="title"> Loss Data Event Assessment </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.compliance&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-check-box"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Compliance </span><i className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                ng-className="{&#39;active open&#39;:$state.includes(&#39;app.compliance.sox&#39;) }">
                                                <a href="javascript:void(0)">
                                                    <div className="item-content">
                                                        <div className="item-inner-submenu">
                                                            <span className="title"> SOX </span><i className="icon-arrow"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li ui-sref-active="active"
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.soxtp&#39;) }">
                                                        <a ui-sref="app.compliance.soxtp.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/soxtp">
                                                            <span className="title"> SOX Test Plan </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.soxrcm&#39;) }">
                                                        <a ui-sref="app.compliance.soxrcm.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/soxrcm">
                                                            <span className="title"> SOX Risk Control Matrix</span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.soxpra&#39;) }">
                                                        <a ui-sref="app.compliance.soxpra.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/soxpra">
                                                            <span className="title"> SOX Process Risk Analysis</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                ng-className="{&#39;active open&#39;:$state.includes(&#39;app.compliance.pcidss&#39;) }">
                                                <a href="javascript:void(0)">
                                                    <div className="item-content">
                                                        <div className="item-inner-submenu">
                                                            <span className="title"> PCIDSS </span><i
                                                                className="icon-arrow"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li ui-sref-active="active"
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.pcidss&#39;) }">
                                                        <a ui-sref="app.compliance.pcidss.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/pcidss">
                                                            <span className="title"> PCIDSS </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                ng-className="{&#39;active open&#39;:$state.includes(&#39;app.compliance.amlkyc&#39;) }">
                                                <a href="javascript:void(0)">
                                                    <div className="item-content">
                                                        <div className="item-inner-submenu">
                                                            <span className="title"> AML/KYC </span><i
                                                                className="icon-arrow"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li ui-sref-active="active"
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.amlkyctp&#39;) }">
                                                        <a ui-sref="app.compliance.amlkyctp.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/amlkyctp">
                                                            <span className="title"> AML/KYC Assessment </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                ng-className="{&#39;active open&#39;:$state.includes(&#39;app.compliance.soc&#39;) }">
                                                <a href="javascript:void(0)">
                                                    <div className="item-content">
                                                        <div className="item-inner-submenu">
                                                            <span className="title"> SOC </span><i className="icon-arrow"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li ui-sref-active="active"
                                                        ng-className="{&#39;active&#39;: $state.includes(&#39;app.compliance.soctp&#39;) }">
                                                        <a ui-sref="app.compliance.soctp.main"
                                                            href="http://kinetix.aasricontrols.com/#!/compliance/soctp">
                                                            <span className="title"> SOC Assessment </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.mitigate&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-export"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Mitigation </span><i className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li ui-sref-active="active">
                                                <a ui-sref="app.mitigate.remediations"
                                                    href="http://kinetix.aasricontrols.com/#!/mitigate/remediations">
                                                    <span className="title"> Remediations </span>
                                                </a>
                                            </li>
                                            <li ui-sref-active="active">
                                                <a ui-sref="app.mitigate.findings"
                                                    href="http://kinetix.aasricontrols.com/#!/mitigate/findings">
                                                    <span className="title"> Actions Findings </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li ng-className="{&#39;active open&#39;:$state.includes(&#39;app.monitor&#39;)}">
                                        <a href="javascript:void(0)">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-desktop"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Monitoring </span><i className="icon-arrow"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li ui-sref-active="active">
                                                <a ui-sref="app.monitor.continuous">
                                                    <span className="title"> Continuous </span>
                                                </a>
                                            </li>
                                            <li ui-sref-active="active">
                                                <a ui-sref="app.monitor.network">
                                                    <span className="title"> Network </span>
                                                </a>
                                            </li>
                                            <li ui-sref-active="active">
                                                <a ui-sref="app.monitor.firewall">
                                                    <span className="title"> Firewall </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li ui-sref-active="active">
                                        <a ui-sref="app.glossary" href="http://kinetix.aasricontrols.com/#!/glossary">
                                            <div className="item-content">
                                                <div className="item-media">
                                                    <i className="ti-list"></i>
                                                </div>
                                                <div className="item-inner">
                                                    <span className="title"> Glossary </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div id="mCSB_1_scrollbar_vertical"
                        className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark-3 mCSB_scrollTools_vertical"
                        style={{ display: 'none' }}><a href="http://kinetix.aasricontrols.com/#" className="mCSB_buttonUp"
                            oncontextmenu="return false;"></a>
                        <div className="mCSB_draggerContainer">
                            <div id="mCSB_1_dragger_vertical" className="mCSB_dragger"
                                style={{ position: 'absolute', minHeight: '30px', top: '0px', height: '0px' }}
                                oncontextmenu="return false;">
                                <div className="mCSB_dragger_bar" style={{ lineHeight: '30px' }}></div>
                            </div>
                            <div className="mCSB_draggerRail"></div>
                        </div><a href="http://kinetix.aasricontrols.com/#" className="mCSB_buttonDown"
                            oncontextmenu="return false;"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
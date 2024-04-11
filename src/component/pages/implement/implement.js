import React from "react";
import Keyword from './keyword';
import Monitorpresence from './monitorpresence/monitorpresence';
import Keywordwatchdog from './keywordwatchdog/keywordwatchdog';
import Notifications from './notifications/notifications';
import Features from './features/features';
import Createmonitor from './createmonitor/createmonitor';
import MonitoredPlace from './monitoredplace/monitoredplace';
import Statuspage from './statuspage/statuspage';
import Monitoringapp from './monitoringapp/monitoringapp';
import Accountmoniter from './accountmonitor/accountmonitor';
import Footermonitor from './footermonitor/footermonitor';

const Implement = () => {
    return (
        <>

            <div className="menu">
            <Keyword />
            <Monitorpresence />
            <Keywordwatchdog />
            <Notifications />
            <Features />
            <Createmonitor />
            <MonitoredPlace />
            <Statuspage />
            <Monitoringapp />
            <Accountmoniter />
            <Footermonitor />
            </div>
        </>
    );
};

export default Implement;

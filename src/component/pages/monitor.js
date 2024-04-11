import React from "react";
import './monitor.css';
import Pingmonitoring from './pingmonitoring/pingmonitoring';
import Moniterserver from './monitorserver/monitorserver';
import Moniterdevice from './monitordevice/monitordevice';
import Moniterresponse from './monitorresponse/monitorresponse';
import Advanceusers from './advanceusers/advanceusers';
import Setupping from './setupping/setupping';
import Pinginmonitor from './pinginmonitor/pinginmonitor';
import Incidentpages from './incidentpages/incidentpages';
import Pingnotification from './pingnotification/pingnotification';
import Pingfree from './pingfree/pingfree';
import Pingfooter from './pingfooter/pingfooter';

const Monitor = () => {
    return (
        <>

            <div className="free">

                <Pingmonitoring />
                <Moniterserver />
                <Moniterdevice />
                <Moniterresponse />
                <Advanceusers />
                <Setupping />
                <Pinginmonitor />
                <Incidentpages />
                <Pingnotification />
                <Pingfree />
                <Pingfooter />

            </div>
        </>
    );
};

export default Monitor;

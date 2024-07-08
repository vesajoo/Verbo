import React from "react";

function DateParser({d}) {

    const now = Date.now()
    const dp = Date.parse(d)

    const diff = now - dp

    const minutes = 1000*60;
    const hours = 1000*60*60;
    const days = 1000*60*60*24;
    let timediff
    if (Math.round(diff / (minutes) > 60)){
        if (Math.round(diff / (hours) > 24)){
            timediff = Math.round(diff/(days)) + " päivää sitten"
        } else {
            timediff = Math.round(diff/(hours)) + " tuntia sitten"
        }
    } else {
        timediff = Math.round(diff/(minutes)) + " minuuttia sitten"
    }

    return <div>
        <p className="text-white">{timediff}</p>
    </div>

}

export default DateParser
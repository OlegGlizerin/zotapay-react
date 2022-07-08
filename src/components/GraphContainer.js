import './GraphContainerStyled';
import {GraphContainerStyled} from "./GraphContainerStyled";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState, useEffect } from "react";

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Tweets over time'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};

const options3 = {
    title: {
        text: 'Zone with dash style'
    },
    subtitle: {
        text: 'Dotted line typically signifies prognosis'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        zoneAxis: 'x',
        zones: [{
            value: 8
        }, {
            dashStyle: 'dot'
        }]
    }]
};
function GraphContainer() {
    const [status, setStatus] = useState("");
    useEffect(() => {
        async function f() {
            const res = await fetch('http://localhost:8000', {
                mode: 'no-cors',
                method: "GET",
                headers: {"Content-Type" : "application/json"}
            });
            const response = await res.text();
            console.log('aaa',response);
            setStatus(response);
        }
        f();


    }, []);
    console.log('rrrr',status);

    return (
        <GraphContainerStyled>
            <GraphContainerStyled.Subject>
                Hello Zotapay
                <GraphContainerStyled.Status>
                    {status}
                </GraphContainerStyled.Status>
            </GraphContainerStyled.Subject>
            <GraphContainerStyled.Content>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </GraphContainerStyled.Content>
            <GraphContainerStyled.Content>
                <HighchartsReact highcharts={Highcharts} options={options3} />
            </GraphContainerStyled.Content>
        </GraphContainerStyled>
    );
}

export default GraphContainer;

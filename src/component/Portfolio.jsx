
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../redux/action';

export default function Portfolio() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const state = useSelector((state)=> state.setProgress)
    console.log(state,"data");
    const dispatch= useDispatch()


    useEffect(() => {
        dispatch(setProgress(50))

        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center align-items-md-center ">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
         
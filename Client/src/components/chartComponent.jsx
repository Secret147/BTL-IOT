import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from './chartComponent.module.scss';
import classNames from 'classnames/bind';
import axios2 from '../service/axios2';

const cx = classNames.bind(styles);

function ChartComponent({ dataChart, checked }) {
    const [index, setIndex] = useState(0);
    const getConsuat = async () => {
        const res = await axios2.get('/count');

        setIndex(res.data[0]);
    };
    useEffect(() => {
        getConsuat();
    }, []);
    const chartData = {
        labels: checked ? Object.keys(dataChart) : dataChart.map((item) => item.dateStorage),
        datasets: [
            {
                label: 'Giờ thắp sáng(giờ)',
                data: Object.values(dataChart).map((item) => (item.timeLight / 3600).toFixed(2)),
                backgroundColor: 'rgb(75, 192, 192)',
                categoryPercentage: 0.6,
            },
            {
                label: 'Điện năng tiêu thụ(Kwh)',
                data: Object.values(dataChart).map((item) =>
                    ((item.timeLight / 3600) * (index.congsuat / 1000)).toFixed(2),
                ),
                backgroundColor: 'yellow',
                hidden: true,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'red',
                    font: {
                        size: 13,
                        weight: 700,
                    },
                },
            },
            y: {
                ticks: {
                    color: 'black',
                    font: {
                        size: 16,
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label1 = context.chart.data.datasets[0].label;
                        const value1 = context.raw;
                        const label2 = context.chart.data.datasets[1].label;
                        const value2 = context.chart.data.datasets[1].data[context.dataIndex];
                        return [`${label1}: ${value1}`, `${label2}: ${value2}`];
                    },
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className={cx('container')}>
            <Bar data={chartData} options={options} />
        </div>
    );
}

export default ChartComponent;

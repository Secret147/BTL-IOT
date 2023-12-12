import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from './chartComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ChartComponent({ dataChart, checked }) {
    const chartData = {
        labels: checked ? Object.keys(dataChart) : dataChart.map((item) => item.dateStorage),
        datasets: [
            {
                label: 'Giờ thắp sáng',
                data: Object.values(dataChart).map((item) => item.timeLight / 3600), // Giờ thắp sáng
                backgroundColor: 'rgb(75, 192, 192)',
                categoryPercentage: 0.6,
            },
        ],
    };

    // Cấu hình màu sắc cho nhãn

    // Cấu hình màu sắc cho nhãn
    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'red', // Thay đổi màu chữ của nhãn trục x
                    font: {
                        size: 13,
                        weight: 700, // Thay đổi kích thước font chữ của nhãn trục x
                    },
                },
            },
            y: {
                ticks: {
                    color: 'black', // Thay đổi màu chữ của nhãn trục y
                    font: {
                        size: 16, // Thay đổi kích thước font chữ của nhãn trục x
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

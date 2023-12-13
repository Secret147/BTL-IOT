import React, { useEffect, useState } from 'react';
import ChartComponent from '../../components/chartComponent';
import styles from './test.module.scss';
import classNames from 'classnames/bind';
import axios from '../../service/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Test() {
    const [dataChart, setDataChart] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [monthlyData, setMonthlyData] = useState({});
    const [yearData, setYearData] = useState({});
    const [checked, setChecked] = useState(false);

    const getData = async () => {
        const res = await axios.get('list');
        const data = res.data.results[0];

        // Tạo một đối tượng để lưu trữ các đối tượng theo tháng
        let monthlyData = {};
        let yearData = {};

        for (let item of data) {
            // Chuyển đổi chuỗi ngày thành đối tượng Date
            let date = new Date(item.dateStorage);

            // Lấy tháng và năm từ đối tượng Date
            let month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
            let year = date.getFullYear();

            // Thêm đối tượng vào danh sách tương ứng với tháng
            if (!(month in monthlyData)) {
                monthlyData[month] = [];
            }

            monthlyData[month].push(item);

            // Thêm đối tượng vào danh sách tương ứng với năm
            if (!(year in yearData)) {
                yearData[year] = {};
            }

            if (!(month in yearData[year])) {
                yearData[year][month] = {
                    dateStorage: '',
                    timeLight: 0,
                };
            }
            yearData[year][month].dateStorage = month.toString();
            yearData[year][month].timeLight += item.timeLight;
        }

        setMonthlyData(monthlyData);

        setYearData(yearData);

        if (selectedMonth === 'all') {
            setDataChart(res.data.results[0]);
            setChecked(false);
        } else if (selectedMonth < 13 && selectedMonth > 0) {
            setDataChart(monthlyData[selectedMonth]);
            console.log(monthlyData[selectedMonth]);
            setChecked(false);
        } else {
            setDataChart(yearData[selectedMonth]);
            console.log(yearData[selectedMonth]);
            setChecked(true);
        }
    };
    console.log(yearData);

    useEffect(() => {
        getData();
    }, [selectedMonth]);

    const months = Object.keys(monthlyData)
        .map(Number)
        .sort((a, b) => a - b);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('option')}>
                <select onChange={handleMonthChange}>
                    <optgroup label="Tháng">
                        {months.map((month) => (
                            <option key={month} value={month}>
                                Tháng {month}
                            </option>
                        ))}
                    </optgroup>

                    <optgroup label="Năm">
                        {Object.keys(yearData).map((year) => (
                            <option key={year} value={year}>
                                Năm {year}
                            </option>
                        ))}
                    </optgroup>
                    <option value={'all'}>Tất cả</option>
                </select>
                <div
                    className={cx('back')}
                    onClick={() => {
                        window.location.href = '/list';
                    }}
                >
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </div>
            </div>
            <ChartComponent dataChart={dataChart} checked={checked}></ChartComponent>
        </div>
    );
}

export default Test;

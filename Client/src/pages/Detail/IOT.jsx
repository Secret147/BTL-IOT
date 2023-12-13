import { useEffect, useState } from 'react';
import Back from '../../components/BackButton/Back';
import styles from './IOT.module.scss';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../service/axios';
import axios2 from '../../service/axios2';

const cx = classNames.bind(styles);

function IOT() {
    const [checkPopup, setCheckPopup] = useState(false);
    const [listDay, setListDay] = useState();
    const [time, setTime] = useState();
    const [congsuat, setCongsuat] = useState();

    const [index, setIndex] = useState({
        id: 1,
        congsuat: '',
        giadien: '',
    });
    const formatDate = (inputString) => {
        const dateObject = new Date(inputString);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();

        const formattedDate = `${day}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${year}`;

        return formattedDate;
    };
    const getListDay = async () => {
        const res = await axios.get('list');
        setListDay(res.data.results[0]);
    };
    const onClickPopup = () => {
        setCheckPopup(true);
        console.log(checkPopup);
    };
    const handleCloseDetail = () => {
        setCheckPopup(false);
    };
    const getConsuat = async () => {
        const res = await axios2.get('/count');

        setCongsuat(res.data[0].congsuat / 1000);
        setIndex(res.data[0]);
    };
    useEffect(() => {
        getConsuat();
    }, []);
    const timeLight = (totalSeconds) => {
        const hours = Math.round(totalSeconds / 3600);
        const minutes = Math.round((totalSeconds % 3600) / 60);
        const formattedTime = `${hours} giờ ${minutes} phút`;
        console.log(totalSeconds);
        setTime(formattedTime);
        setCongsuat(((totalSeconds * (index.congsuat / 1000)) / 3600).toFixed(2));
        console.log('congsuat:' + index.congsuat);
    };
    useEffect(() => {
        getListDay();
    }, []);
    return (
        <div className={cx('container')}>
            <Back></Back>

            <div className={checkPopup ? cx('popup') : cx('popup', 'popup_off')}>
                <div className={cx('popup_main')}>
                    <div className={cx('popup_box')}>
                        <div
                            className={cx('popup_cancel')}
                            onClick={() => {
                                handleCloseDetail();
                                handleCancel();
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div className={cx('popup_item')}>
                            <div className={cx('popup_item_box', 'left')}>
                                <div className={cx('popup_item_circle', 'left_color')}>
                                    <p className={cx('left_color')}>{time}</p>
                                </div>
                            </div>
                            <p className={cx('left_color')}>Thời gian thắp sáng</p>
                        </div>
                        <div className={cx('popup_item')}>
                            <div className={cx('popup_item_box')}>
                                <div className={cx('popup_item_circle')}>
                                    <p>{congsuat} kWh</p>
                                </div>
                            </div>
                            <p>Điện năng tiêu thụ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={checkPopup ? cx('main', 'turnoff_popup_bg') : cx('main')}>
                <div className={cx('main_box')}>
                    <div className={cx('main_table')}>
                        <div className={cx('table_box')}>
                            <div className={cx('table_header')}>
                                <div className={cx('table_header_box')}>
                                    <p>Danh sách ngày thu thập dữ liệu</p>
                                </div>
                            </div>
                            <div className={cx('listday')}>
                                <div className={cx('listday_box')}>
                                    {listDay &&
                                        listDay.length > 0 &&
                                        listDay.map((day) => {
                                            return (
                                                <div className={cx('day_item')} key={day.id}>
                                                    <div className={cx('day_item_box')}>
                                                        <div className={cx('day_item_left')}>
                                                            <p>Ngày: {formatDate(day.dateStorage)}</p>
                                                        </div>
                                                        <div
                                                            className={cx('day_item_right')}
                                                            onClick={() => {
                                                                onClickPopup();
                                                            }}
                                                        >
                                                            <div
                                                                className={cx('day_item_button')}
                                                                onClick={() => {
                                                                    timeLight(day.timeLight);
                                                                }}
                                                            >
                                                                <p>Xem chi tiết</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx('chart_button')}
                        onClick={() => {
                            window.location.href = '/test';
                        }}
                    >
                        <div className={cx('chart_button_main')}>
                            <p>Xem biểu đồ thống kê</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IOT;

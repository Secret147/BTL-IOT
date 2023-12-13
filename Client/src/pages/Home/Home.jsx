import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../service/axios';
import axios2 from '../../service/axios2';
import axios3 from '../../service/axios3';

const cx = classNames.bind(styles);
function Home() {
    const history = useNavigate();
    const [sumTime, setSumtime] = useState(0);
    const [priceElectric, setPriceElectric] = useState(3500);
    const [congsuatDen, setCongsuatden] = useState(0.1);
    const [index, setIndex] = useState({
        id: 1,
        congsuat: '',
        giadien: '',
    });
    const [checkLed, setCheckLed] = useState();
    const [checkActive, setCheckActive] = useState();
    const getSumTime = async () => {
        const res = await axios.get('/sum');
        setSumtime(res.data.results[0] / 3600);
        console.log(res.data.results[0]);
    };
    const nextSystem = async () => {
        if (checkLed) {
            const res = await axios3.get(`${'client'}/${'off'}`);
        } else {
            const res = await axios3.get(`${'client'}/${'on'}`);
        }
    };
    const nextActive = async () => {
        if (checkActive) {
            const res = await axios2.put(`active/${'0'}`);
        } else {
            const res = await axios2.put(`active/${'1'}`);
        }
    };
    const getConsuat = async () => {
        const res = await axios2.get('/count');

        setIndex(res.data[0]);
    };
    const unchecked = () => {
        setCheckLed(!checkLed);
    };
    const unactive = () => {
        setCheckActive(!checkActive);
    };
    const getSystem = async () => {
        const res = await axios3.get('/checkstate');
        setCheckLed(res.data);
    };
    const getActive = async () => {
        const res = await axios2.get('/checkactive');
        setCheckActive(res.data);
    };
    useEffect(() => {
        getSystem();
        getActive();
    }, []);

    useEffect(() => {
        getSumTime();
        getConsuat();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <div className={cx('main_box')}>
                    <div className={cx('main_front')}>
                        <div className={cx('main_front_box_left')}>
                            <div className={cx('main_front_left', 'left')}>
                                <div className={cx('main_front_left_box', 'left_color')}>
                                    <p>{sumTime.toFixed(2)}</p>
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                            </div>
                            <div className={cx('type', 'left')}>
                                <p>Số giờ thắp sáng(giờ)</p>
                            </div>
                        </div>
                        <div className={cx('main_front_box_right')}>
                            <div className={cx('main_front_left')}>
                                <div className={cx('main_front_left_box')}>
                                    <p>{(sumTime * (index.congsuat / 1000)).toFixed(2)}</p>
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <div className={cx('type')}>
                                <p>Điện năng tiêu thụ(kWh)</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('main_center')}>
                        <div className={cx('main_center_box')}>
                            <div className={cx('label_box')}>
                                <label className={cx('state_led')}>Trạng thái đèn</label>
                            </div>

                            <label className={cx('switch')}>
                                <input type="checkbox" value="on" checked={checkLed ? 'checked' : ''}></input>

                                <span
                                    className={cx('slider', 'round')}
                                    onClick={() => {
                                        nextSystem();
                                        unchecked();
                                    }}
                                ></span>
                            </label>
                        </div>

                        <div className={cx('main_center_box')}>
                            <div className={cx('label_box')}>
                                <label className={cx('state_led')}>Tự động thắp sáng</label>
                            </div>
                            <label className={cx('switch')}>
                                <input type="checkbox" value="on" checked={checkActive ? 'checked' : ''}></input>
                                <span
                                    className={cx('slider', 'round')}
                                    onClick={() => {
                                        nextActive();
                                        unactive();
                                    }}
                                ></span>
                            </label>
                        </div>
                    </div>
                    <div className={cx('main_behind')}>
                        <div
                            className={cx('main_behind_detail')}
                            onClick={() => {
                                history('/list');
                            }}
                        >
                            <div className={cx('main_behind_detail_box')}>
                                <p>Xem thống kê chi tiết</p>
                            </div>
                        </div>
                        <div
                            className={cx('main_behind_detail')}
                            onClick={() => {
                                history('/index');
                            }}
                        >
                            <div className={cx('main_behind_detail_box')}>
                                <p>Chỉ số hệ thống</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../service/axios';
import axios2 from '../../service/axios2';

const cx = classNames.bind(styles);
function Home() {
    const history = useNavigate();
    const [sumTime, setSumtime] = useState();
    const [priceElectric, setPriceElectric] = useState(3500);
    const [congsuatDen, setCongsuatden] = useState(0.1);
    const [index, setIndex] = useState({
        id: 1,
        congsuat: '',
        giadien: '',
    });
    const getSumTime = async () => {
        const res = await axios.get('/sum');
        setSumtime(res.data.results[0] / 3600);
        console.log(res.data.results[0]);
    };
    const getConsuat = async () => {
        const res = await axios2.get('/count');

        setIndex(res.data[0]);
    };
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
                                    <p>{Math.floor(sumTime) + 1}</p>
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
                                    <p>{Math.floor(sumTime * (index.congsuat / 1000)) + 1}</p>
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <div className={cx('type')}>
                                <p>Điện năng tiêu thụ(kWh)</p>
                            </div>
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

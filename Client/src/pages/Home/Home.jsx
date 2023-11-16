import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
    const history = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <div className={cx('main_box')}>
                    <div className={cx('main_front')}>
                        <div className={cx('main_front_box_left')}>
                            <div className={cx('main_front_left', 'left')}>
                                <div className={cx('main_front_left_box', 'left_color')}>
                                    <p>500</p>
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
                                    <p>100</p>
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                            </div>
                            <div className={cx('type')}>
                                <p>Điện năng tiêu thụ(KW/H)</p>
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
                                history('/list');
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

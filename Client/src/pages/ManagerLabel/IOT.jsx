import { useState } from 'react';
import Back from '../../components/BackButton/Back';
import styles from './IOT.module.scss';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function IOT() {
    const [checkPopup, setCheckPopup] = useState(false);
    const onClickPopup = () => {
        setCheckPopup(true);
        console.log(checkPopup);
    };
    const handleCloseDetail = () => {
        setCheckPopup(false);
    };
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
                                    <p className={cx('left_color')}>2 giờ 15 phút</p>
                                </div>
                            </div>
                            <p className={cx('left_color')}>Thời gian thắp sáng</p>
                        </div>
                        <div className={cx('popup_item')}>
                            <div className={cx('popup_item_box')}>
                                <div className={cx('popup_item_circle')}>
                                    <p>2 KW/H</p>
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
                                    <div className={cx('day_item')}>
                                        <div className={cx('day_item_box')}>
                                            <div className={cx('day_item_left')}>
                                                <p>Ngày: 14/11/2023</p>
                                            </div>
                                            <div
                                                className={cx('day_item_right')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <div className={cx('day_item_button')}>
                                                    <p>Xem chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('day_item')}>
                                        <div className={cx('day_item_box')}>
                                            <div className={cx('day_item_left')}>
                                                <p>Ngày: 14/11/2023</p>
                                            </div>
                                            <div
                                                className={cx('day_item_right')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <div className={cx('day_item_button')}>
                                                    <p>Xem chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('day_item')}>
                                        <div className={cx('day_item_box')}>
                                            <div className={cx('day_item_left')}>
                                                <p>Ngày: 14/11/2023</p>
                                            </div>
                                            <div
                                                className={cx('day_item_right')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <div className={cx('day_item_button')}>
                                                    <p>Xem chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('day_item')}>
                                        <div className={cx('day_item_box')}>
                                            <div className={cx('day_item_left')}>
                                                <p>Ngày: 14/11/2023</p>
                                            </div>
                                            <div
                                                className={cx('day_item_right')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <div className={cx('day_item_button')}>
                                                    <p>Xem chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IOT;

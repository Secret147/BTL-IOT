import { useEffect, useState } from 'react';
import styles from './IndexIot.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Back from '../../components/BackButton/Back';
import axios from '../../service/axios';
import axios2 from '../../service/axios2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function IndexIot() {
    const [checkPopup, setCheckPopup] = useState(false);
    const [price, setPrice] = useState();
    const [congsuat, setCongsuat] = useState();
    const [sumtime, setSumtime] = useState();
    const [index, setIndex] = useState({
        id: 1,
        congsuat: '',
        giadien: '',
        thoigiancanthapsang: '',
    });

    const [gio, setGio] = useState('');
    const [phut, setPhut] = useState('');

    const history = useNavigate();

    const getSumTime = async () => {
        const res = await axios.get('/sum');
        setSumtime(res.data.results[0] / 3600);
        console.log(res.data.results[0]);
    };

    const getConsuat = async () => {
        const res = await axios2.get('/count');
        setPrice(res.data[0].giadien);
        setCongsuat(res.data[0].congsuat / 1000);
        setIndex(res.data[0]);
    };

    useEffect(() => {
        getSumTime();
        getConsuat();
    }, []);

    const onClickPopup = () => {
        setCheckPopup(true);
        setGio(index.thoigiancanthapsang ? (index.thoigiancanthapsang / 3600).toString() : '');
        setPhut(index.thoigiancanthapsang ? ((index.thoigiancanthapsang % 3600) / 60).toString() : '');

        console.log(checkPopup);
    };

    const handleCloseDetail = () => {
        setCheckPopup(false);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === 'gio' || name === 'phut') {
            if (name === 'gio') {
                setGio(value);
            }
            if (name === 'phut') {
                setPhut(value);
            }

            const gioValue = parseInt(name === 'gio' ? value : gio, 10) || 0;
            const phutValue = parseInt(name === 'phut' ? value : phut, 10) || 0;

            console.log(gioValue + ' gio');
            console.log(phutValue + ' phut');
            const thoigiancanthapsang = (gioValue * 3600 + phutValue * 60).toString();

            setIndex((prevIndex) => ({
                ...prevIndex,
                thoigiancanthapsang,
            }));
        } else {
            setIndex({ ...index, [name]: value });
        }
    };

    const handleEdit = async () => {
        const res = await axios2.put('/newindex', index);
        if (res.status === 200) {
            toast.success('Thay đổi thành công');
            history('/index');
            getSumTime();
            getConsuat();
            handleCloseDetail();
        } else {
            toast.error('Thay đổi thất bại!');
        }
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
                            <div className={cx('popup_item_box')}>
                                <div className={cx('popup_item_label')}>
                                    <p>Công suất đèn</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nhập công suất đèn"
                                    onChange={handleInput}
                                    name="congsuat"
                                    value={index.congsuat}
                                ></input>
                            </div>
                            <div className={cx('popup_item_box')}>
                                <div className={cx('popup_item_label')}>
                                    <p>Đơn giá điện</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nhập đơn giá điện"
                                    onChange={handleInput}
                                    name="giadien"
                                    value={index.giadien}
                                ></input>
                            </div>
                            <div className={cx('popup_item_box')}>
                                <div className={cx('popup_item_label')}>
                                    <p>Thời gian cần cho cây</p>
                                </div>
                                <div className={cx('hour_m')}>
                                    <p>Giờ</p>
                                    <input
                                        type="text"
                                        placeholder="Nhập giờ"
                                        onChange={handleInput}
                                        name="gio"
                                        value={Math.round(gio)}
                                    ></input>
                                    <p>Phút</p>
                                    <input
                                        type="text"
                                        placeholder="Nhập phút"
                                        onChange={handleInput}
                                        name="phut"
                                        value={Math.round(phut)}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('pop_up_button')}>
                                <div
                                    className={cx('pop_up_button_main')}
                                    onClick={() => {
                                        handleEdit();
                                    }}
                                >
                                    <p>Xác nhận</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={checkPopup ? cx('main', 'turnoff_popup_bg') : cx('main')}>
                <div className={cx('main_box')}>
                    <div className={cx('index_container')}>
                        <div className={cx('index_header')}>
                            <div className={cx('index_header_box')}>
                                <p>Các chỉ số</p>
                            </div>
                        </div>
                        <div className={cx('index_main')}>
                            <div className={cx('index_main_box')}>
                                <div className={cx('index_item')}>
                                    <div className={cx('index_item_box')}>
                                        <div className={cx('index_item_left')}>
                                            <p>Công suất đèn: {congsuat * 1000} W</p>
                                        </div>
                                        <div className={cx('index_item_right')}>
                                            <div
                                                className={cx('index_item_right_button')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <p>Thay đổi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('index_item')}>
                                    <div className={cx('index_item_box')}>
                                        <div className={cx('index_item_left')}>
                                            <p>Giá điện: {price} đ</p>
                                        </div>
                                        <div className={cx('index_item_right')}>
                                            <div
                                                className={cx('index_item_right_button')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <p>Thay đổi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('index_item')}>
                                    <div className={cx('index_item_box')}>
                                        <div className={cx('index_item_left')}>
                                            <p>
                                                Thời gian cần thắp sáng: {(index.thoigiancanthapsang / 3600).toFixed(2)}{' '}
                                                giờ
                                            </p>
                                        </div>
                                        <div className={cx('index_item_right')}>
                                            <div
                                                className={cx('index_item_right_button')}
                                                onClick={() => {
                                                    onClickPopup();
                                                }}
                                            >
                                                <p>Thay đổi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('index_item')}>
                                    <div className={cx('index_item_box')}>
                                        <div className={cx('index_item_left', 'font_size')}>
                                            <p>Tổng số điện hệ thống tiêu thụ: {(congsuat * sumtime).toFixed(2)} kWh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('index_item')}>
                                    <div className={cx('index_item_box')}>
                                        <div className={cx('index_item_left', 'font_size')}>
                                            <p>Tổng tiền điện: {Math.round(congsuat * sumtime * price)} đ</p>
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
export default IndexIot;

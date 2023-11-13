import styles from './ManagerLabel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ManagerLabel() {
    return <div className={cx('container')}>IOT</div>;
}

export default ManagerLabel;

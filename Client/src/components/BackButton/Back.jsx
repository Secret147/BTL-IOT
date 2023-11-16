import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Back.module.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Back() {
    return (
        <div>
            <div
                className={cx('back')}
                onClick={() => {
                    window.location.href = '/';
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        </div>
    );
}
export default Back;

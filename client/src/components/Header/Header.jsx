import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import styles from './header.module.scss';
import { Logo } from '../Icons';
import './header.module.scss';
// import { getHistoryOrders } from '~/redux/history/historyOrdersApi';
import { useDispatch, useSelector } from 'react-redux';
function Header() {

    const handleOrderClick = () => {
        // const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber.toString();
        // const userPhoneNumber = phoneNumber.replace('+84', '0');
        // getHistoryOrders(dispatch, userPhoneNumber);
    }
    return (
        <header className={styles.heading}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <i>
                                <Logo />
                            </i>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;

import css from 'components/FriendItem/FriendItem.module.css';
import PropTypes from 'prop-types';


export const FriendItem = ({name, status, avatar}) => {
  return <li className={css.item}>

    {status ? (<span className={`${css.status} ${css.isOnline}`} ></span>)
      : (<span className={`${css.status} ${css.isOffline}`} ></span>)
    }

    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
}

FriendItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

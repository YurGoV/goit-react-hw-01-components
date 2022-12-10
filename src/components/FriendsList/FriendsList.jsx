import css from 'components/FriendsList/FriendsList.module.css';
import PropTypes, { arrayOf } from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';


export const FriendsList = ({friends}) => {
  return <ul className={css.friendsList}>
    {friends.map(({id, avatar, name, isOnline}) => (
      <FriendItem name={name} avatar={avatar} status={isOnline} key={id}
      />
      ))
    }
  </ul>
}

FriendsList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  )
}

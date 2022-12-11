import PropTypes from 'prop-types';
import { Avatar, Card, IsOnline, Name } from './FriendItem.styled';


export const FriendItem = ({name, status, avatar}) => {
  return <Card>

    <IsOnline status={status}></IsOnline>
    <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
    <Name>{name}</Name>
  </Card>
}

FriendItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


// {status ? (<span className={`${css.status} ${css.isOnline}`} ></span>)
//   : (<span className={`${css.status} ${css.isOffline}`} ></span>)
// }

// src={avatar} alt="User avatar" width="48"

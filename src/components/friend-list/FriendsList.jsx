import PropTypes from "prop-types";
import {Item, Status, Avatar, Name} from './FrendsList.styled'
export default function FriendsList({avatar, name, isOnline}) {
    return (
      <Item>
    <Status state={isOnline ? 'online' : 'ofline'}>
     
    </Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>)
}
FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
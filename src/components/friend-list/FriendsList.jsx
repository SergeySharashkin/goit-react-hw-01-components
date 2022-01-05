import PropTypes from "prop-types";
import {Item, Status, Avatar, Name} from './FrendsList.styled'
export default function FriendsList({avatar, name, isOnline}) {
    return (
      <Item className="item">
    <Status className="status" state={isOnline ? 'online' : 'ofline'}>
     
    </Status>
    <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name className="name">{name}</Name>
  </Item>)
}
FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
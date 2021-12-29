import PropTypes from "prop-types";
export default function FriendsList({avatar, name, isOnline}) {
    return (
      <li className="item">
    <span className="status">
     {isOnline ? 'online' : 'ofline'}
    </span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>)
}
FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
import PropTypes from "prop-types";
import FriendsList from "./FriendsList"

function FriendsListRender({ friends }) {
   return( <ul className="friend-list">
   {friends.map((friend) => (
         <FriendsList
         key={friend.id}
         avatar={friend.avatar}
         name={friend.name}
         isOnline={friend.isOnline}
       />
       
     ))}
   </ul>)
}
FriendsListRender.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  ),
};
export default FriendsListRender;

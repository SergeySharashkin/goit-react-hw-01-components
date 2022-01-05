import PropTypes from "prop-types";
import FriendsList from "./FriendsList";
import {FriendList} from './FrendsList.styled'

function FriendsListRender({ friends }) {
   return( <FriendList className="friend-list">
   {friends.map((friend) => (
         <FriendsList
         key={friend.id}
         avatar={friend.avatar}
         name={friend.name}
         isOnline={friend.isOnline}
       />
       
     ))}
   </FriendList>)
}
FriendsListRender.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  ),
};
export default FriendsListRender;

import PropTypes from "prop-types";
import OneFriend from "./OneFriend";
import { Friend } from './FrendsList.styled'

function FriendsList({ friends }) {
   return( <Friend>
   {friends.map(({id,avatar,name,isOnline}) => (
         <OneFriend
         key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline}
       />
       
     ))}
   </Friend>)
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
  }),
  ),
};
export default FriendsList;

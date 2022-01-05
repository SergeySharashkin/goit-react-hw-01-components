import PropTypes from 'prop-types';
import {Profile, Description, Avatar, Name, Tag, Stats, Item} from './SocialProfile.styled';
export default function SocProfRender({userName, tag, place, avatar, stats}) {
    
    return <Profile className="profile">
    <Description className="description">
      
          <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
        
      />
      
      <Name className="name">{userName}</Name>
      <Tag className="tag">@{tag}</Tag>
      <Tag className="location">{place}</Tag>
    </Description>
  
    <Stats className="stats">
      <Item>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </Item>
      <Item>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </Item>
      <Item>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </Item>
    </Stats>
  </Profile>
}
SocProfRender.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
};
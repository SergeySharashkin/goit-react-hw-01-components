import PropTypes from 'prop-types';
export default function SocProfRender({userName, tag, place, avatar, stats}) {
    
    return <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{userName}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{place}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
}
SocProfRender.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    tag: PropTypes.string,
    place: PropTypes.string,
    stats: PropTypes.object
};
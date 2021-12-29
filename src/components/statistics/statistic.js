import PropTypes from "prop-types";

export default function Statistic({ title, stats }) {
  return (
    <li 
    className="item">
    <span className="label">{title}</span>
    <span className="percentage">{stats}%</span>
  </li>)
  
}
Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
    
};

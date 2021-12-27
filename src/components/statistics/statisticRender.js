import PropTypes from "prop-types";

export default function StatisticRender({ title, stats }) {
  return (
    <li key={title}
    className="item">
    <span className="label">{title}</span>
    <span className="percentage">{stats}%</span>
  </li>)
  
}
StatisticRender.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.number
};

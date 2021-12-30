import PropTypes from "prop-types";

function StatisticRender({ data }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(
          (dataItem) => {
            return (
              <li className="item" key={dataItem.id}>
                <span className="label">{dataItem.title}</span>
                <span className="percentage">{dataItem.stats}%</span>
              </li>
            );
          }

        )}
      </ul>
    </section>
  );
}
StatisticRender.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    { id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      stats: PropTypes.number.isRequired, })),
};
export default StatisticRender;

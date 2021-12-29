import PropTypes from 'prop-types'
import Statistic from "./statistic"
function StatisticRender({data}) {
    return(
        <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map((dataItem) => (
            <Statistic
              key={dataItem.id}
              titel={dataItem.label}
              stats={dataItem.percentage}
            />
          ))}
        </ul>
      </section>
    )
};
StatisticRender.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape(
            {id: PropTypes.string.isRequired}
        ),
    )
}
export default StatisticRender
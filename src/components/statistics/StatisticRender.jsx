import PropTypes from "prop-types";
import {Section, Title, StatList, Item, Label, Percentage} from "./Statistics.styled"
export default function StatisticRender({ data }) {
  return (
    <Section className="statistics">
      <Title className="title">Upload stats</Title>
      <StatList className="stat-list">
        {data.map(
          (dataItem) => {
            return (<Item className="item" id={dataItem.id} key={dataItem.id}>
                <Label className="label">{dataItem.label}</Label>
                <Percentage className="percentage">{dataItem.percentage}%</Percentage>
              </Item>
            );
          }

        )}
      </StatList>
    </Section>
  );
}
StatisticRender.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    { id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      
     })),
     
};


import PropTypes from "prop-types";
import {Table,TableHead, TableHeadList, TableHeadItem, TableBody, TableBodyList, TableBodyItem} from './Transactions.styled'
export default function TransHistoryRender({ transactions }) {
  return (
    <Table class="transaction-history">
      <TableHead>
        <TableHeadList>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableHeadList>
      </TableHead>

      <TableBody>
        {transactions.map((trans) => {
          return (
            <TableBodyList key={trans.id}>
              <TableBodyItem>{trans.type}</TableBodyItem>
              <TableBodyItem>{trans.amount}</TableBodyItem>
              <TableBodyItem>{trans.currency}</TableBodyItem>
            </TableBodyList>
          );
        })}
      </TableBody>
    </Table>
  );
}
TransHistoryRender.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

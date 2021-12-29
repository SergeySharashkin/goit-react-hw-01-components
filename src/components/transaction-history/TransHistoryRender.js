import PropTypes from "prop-types"
import TransHistory from "./TransHistory"
export default function TransHistoryRender({transactions}) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      { transactions.map((trans)=> (
          <TransHistory 
          key = {trans.id}
          id={trans.id}
          type = {trans.type}
          amount = {trans.amount}
          currency= {trans.currency}
          />
      ))

      }
    
  </tbody>
</table>
    )
}
TransHistoryRender.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape(
           {id:PropTypes.string.isRequired} 
        )
    )
}
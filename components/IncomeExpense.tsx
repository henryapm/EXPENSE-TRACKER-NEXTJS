import { getIncomeExpense } from "@/app/actions/getIncomeExpense";
import { AddCommas } from "@/lib/utils";

const IncomeExpense = async () => {
const { income, expense } = await getIncomeExpense();

  return ( <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">${ AddCommas(Number(income?.toFixed(2))) }</p>
    </div>
    <div>
      <h4>
        Expense
        <p className="money minus">${ AddCommas(Number(expense?.toFixed(2))) }</p>
      </h4>
    </div>
  </div> );
}
 
export default IncomeExpense;
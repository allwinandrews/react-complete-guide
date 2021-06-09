import ExpenseItem from "../ExpenseItem";
import "./index.css";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
}

export default Expenses;

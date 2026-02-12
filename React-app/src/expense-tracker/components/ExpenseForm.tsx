const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3"><label htmlFor="" className="form-label"></label><select name="" id="" className="form-select"></select></div>
    </form>
  );
};

export default ExpenseForm;

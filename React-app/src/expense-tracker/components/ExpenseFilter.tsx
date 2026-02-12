import { categories  } from "../../App";

interface Props{
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <select  className="form-select" onChange={(event) => onSelectCategory(event.target.value) }>
      <option value="">All Categories</option>
       {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter
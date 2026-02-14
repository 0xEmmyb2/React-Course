import { categories } from "../../App";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .positive({ message: "Amount must be greater than 0." }),
  category: z.string().min(1, { message: "Category is required" }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });


const onSubmit = (data: ExpenseFormData) => {
  console.log("Submitted expenses: ", data);
  reset();
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className={`form-control ${errors.description ? "is-invalid" : ""}`} {...register("description")} />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className={`form-control ${errors.amount ? "is-invalid" : ""}`} {...register("amount", {valueAsNumber: true})}/>
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};


export default ExpenseForm;

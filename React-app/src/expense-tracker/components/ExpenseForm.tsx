import categories from "../categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(1, { message: "Description is required" }).max(100, {message: "Description must be atleast 3 characters."}),
  amount: z.number().min(0.01, {message: "Amount is required"}).max(100_000,{ message: "Amount must be atleast 1" }),
  category: z.enum(categories, {
    error: () => ({message: "Category is required"})
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit} : Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });


  return (
    <form onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset();
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          {...register("description")}
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className={`form-control ${errors.amount ? "is-invalid" : ""}`}
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button disabled={!isValid || isSubmitting} className="btn btn-primary" type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ExpenseForm;

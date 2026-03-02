import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
    onSubmit: (data : SignFormData) => void;
}


const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.email().min(1, { message: "Email is required." }),
  role: z.string(),
  number: z.number().min(1, { message: "Phone Number is required." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type SignFormData = z.infer<typeof schema>;

const Sign = ({onSubmit} : Props) => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid, isSubmitting}
    } = useForm<SignFormData>({resolver: zodResolver(schema), mode: "onChange"})
    
    return (
      <form onSubmit={handleSubmit( data => {
        onSubmit(data);
        reset();
      })}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  {...register("name")} className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="John Doe"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} placeholder="someone@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" {...register("role")} className={`form-control ${errors.number ? "is-invalid" : ""}`} placeholder="student"/>
        </div>
        <div className="mb-3">
            <label htmlFor="number">Phone Number</label>
            <input type="number" className={`form-control ${errors.number ? "is-invalid" : ""}`} placeholder="+250782001211"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} className={`form-control ${errors.password ? "is-invalid" : ""}`} />
        </div>
        <button disabled={!isValid || isSubmitting} className="btn btn-success" type="submit">
            {isSubmitting ? "Signing up": "Sign Up"}
        </button>
      </form>
  );
};

export default Sign;

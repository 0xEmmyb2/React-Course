
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//Schema validation
const schema =z.object({
    name: z.string().min(3 , { message: 'Name must be atleast 3 character(s)'}),
    age: z.number( {invalid_type_error: 'Age field is required.'}).min(18, { message: 'You must be 18 years or older'})
});

type FormData = z.infer<typeof schema>


//Manual Validation
const Form = () => {
  
  const {
    //Initialization of the hook
    register,
    handleSubmit,
    formState : {errors}
  } = useForm<FormData>({resolver: zodResolver(schema)});

  //Function runs if validation passes
  const onSubmit = (data: FormData) => {
    console.log('Form submitted successfully:', data);
  }

 /* The use of controlled components
  const [person, setPerson] = useState({
    name: "",
    age: '',
  });
    const nameRef = useRef<HTMLInputElement>(null);
     const ageRef = useRef<HTMLInputElement>(null);
    const person = {name: '', age: 0};
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
     if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

     console.log(person); 
  };
  */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
        {...register("name")}
        /*
        onChange={(event) =>
             setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
        */
          id="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        {/* This is the message block after conquering an invalid name error*/}
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
        {...register("age", { valueAsNumber: true})}
        /*
        onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          value={person.age}
         */
          id="age"
          type="number"
          className={`form-control ${errors.age ? "is-invalid" : ""}`}
        />
        {/* This is the message error for the invalid age input */}
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

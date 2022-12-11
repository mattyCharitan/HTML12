import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const nevigate = useNavigate();
    const options = {
        name: { required: "Name is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        },
        phone: { required: "Phone number is required" }
    }
    return (
        <form onSubmit={handleSubmit(() => nevigate(`/homePage/${name}`))}>
            <h1>Registration:</h1>
            <div>
                <label>Name</label><br></br>
                <input
                    name="name"
                    type={'text'}
                    {...register('name', options.name)}
                    onChange={(e) => { setName(e.target.value) }} />
                <small className="text-danger" >{errors?.name && errors.name.message}</small>
            </div>
            <div>
                <label>Password</label><br></br>
                <input
                    name="password"
                    type={'password'}
                    {...register('password', options.password)}
                    onChange={(e) => { setPassword(e.target.value) }} />
                <small className="text-danger" >{errors?.password && errors.password.message}</small>
            </div>
            <div>
                <label>Phone number</label><br></br>
                <input
                    name="number"
                    type={'number'}
                    {...register('number', options.number)} />
                <small className="text-danger"> {errors?.number && errors.number.message}</small>
            </div>
            <button>Register</button>
        </form>
    );
}
export default Registration;
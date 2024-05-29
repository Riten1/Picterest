import React from "react";
import Input from "./Input";
import Button from "./Button";
import authentications from "../appwrite/authen";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import { login } from "../store/athenSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const LoginComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitLogin = async (data) => {
    try {
        const session = await authentications.login(data)
        if (session) {
            const userData = await authentications.getCurrentAccount()
            if (userData) dispatch(login({userData}))
            navigate("/")
        }
    } catch (error) {
      throw error
    }
  };

  return (
    <div>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <h2>Welcome to Picterest</h2>
      </div>
      <form onSubmit={handleSubmit(submitLogin)}>
        <Input
          label="Email:"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
          })}
        />

        <Input
          label="Password:"
          placeholder="Enter your password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        <div>
          <Button name="Login" type="submit" />
        </div>
      </form>
      <p>
        Don't have any account?
        <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default LoginComp;

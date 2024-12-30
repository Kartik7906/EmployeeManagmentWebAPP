import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // 2-way binding for form inputs
  const [email, setEmail] = useState("testing- e@e.com"");
  const [password, setPassword] = useState("123");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Form submitted:");
    console.log("Email: ", email);
    console.log("Password: ", password);

    // Clear the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl w-full sm:max-w-xs md:max-w-sm">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 w-full"
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-5 placeholder:text-gray-400 w-full"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="mt-7 text-white outline-none hover:bg-emerald-600 border-none font-semibold bg-emerald-600 rounded-full text-lg py-2 px-8 w-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

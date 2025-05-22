import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext.jsx';
import toast from 'react-hot-toast';

const Login = () => {
  const { setShowUserLogin, setUser, axios, navigate } = useAppContext();

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`/api/user/${state}`, { name, email, password });

      if (data.success) {
        navigate("/");
        setUser(data.user);
        setShowUserLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <motion.form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col gap-5 w-80 sm:w-[360px] px-6 py-10 bg-white rounded-2xl shadow-xl border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-center w-full">
          <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </h2>

        {state === "register" && (
          <div className="w-full">
            <label className="text-sm font-medium">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter name"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              type="text"
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="text-sm font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <label className="text-sm font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            type="password"
            required
          />
        </div>

        <p className="text-sm text-gray-600">
          {state === "register" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("login")}
                className="text-primary hover:underline cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setState("register")}
                className="text-primary hover:underline cursor-pointer"
              >
                Click here
              </span>
            </>
          )}
        </p>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-green-600 text-white font-semibold py-2 rounded-md cursor-pointer transition-all"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </motion.form>
    </div>
  );
};

export default Login;

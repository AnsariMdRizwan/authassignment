import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    // Handle form submission
    const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", data);
            console.log(response.data);

            // Handle success (e.g., store token, redirect user)
            if (response.data.success) {
                navigate("/home"); // Redirect to dashboard after login
                sessionStorage.setItem("userinfo", JSON.stringify(response.data));

            }
        } catch (error) {
            console.error("Error logging in:", error);
        }

    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-center text-xl font-semibold mb-6">Welcome back!</h2>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                            })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#243165] text-white p-3 rounded-md font-medium hover:bg-[#1a234a] transition"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="text-blue-500 hover:text-blue-300 transition-colors"
                        >
                            Register
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

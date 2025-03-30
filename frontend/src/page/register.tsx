import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Define TypeScript Interface for Form Data
interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>();

    // Handle form submission
    const handleRegister: SubmitHandler<RegisterFormInputs> = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", data);
            console.log(response.data);

            // Handle success (e.g., redirect user to login page)
            navigate("/"); // Redirect to login page after successful registration
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-center text-xl font-semibold mb-6">Create an Account</h2>

                <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format",
                                },
                            })}
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
                        Register
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="text-blue-500 hover:text-blue-300 transition-colors"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;

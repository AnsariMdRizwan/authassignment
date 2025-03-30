import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    user: {
        name: string;
        email: string;
    };
}

const Home = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem("userinfo");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                sessionStorage.removeItem("userinfo");
                setUser(null);
                navigate("/");
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                {user ? (
                    <>
                        <h1 className="text-2xl font-bold">Welcome, {user?.user?.name}!</h1>
                        <p className="text-gray-600 mt-2">Email: {user?.user?.email}</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <h1 className="text-2xl font-bold text-red-500">You are not logged in!</h1>
                )}
            </div>
        </div>
    );
};

export default Home;

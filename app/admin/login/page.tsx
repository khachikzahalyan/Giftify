export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-96 text-center">
        <h2 className="text-xl font-bold mb-6">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-gray-800"
        />
        <button className="w-full bg-purple-600 py-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

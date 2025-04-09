export default function AccountStep({ register, errors, darkMode }) {
  return (
    <div className="space-y-4">
      <h2
        className={`text-2xl font-bold text-center ${
          darkMode ? "text-white" : ""
        }`}
      >
        Account Setup
      </h2>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Username
        </label>
        <input
          {...register("username")}
          className={`w-full p-2 rounded border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
          placeholder="Enter Username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className={`w-full p-2 rounded border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className={`w-full p-2 rounded border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300"
          }`}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function PersonalStep({ register, errors, darkMode }) {
  return (
    <div className="space-y-4">
      <h2
        className={`text-2xl font-bold text-center ${
          darkMode ? "text-white" : ""
        }`}
      >
        Personal Information
      </h2>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Full Name
        </label>
        <input
          {...register("fullName")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Email Address
        </label>
        <input
          type="email"
          {...register("email")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="Enter a valid Email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}>
          Phone Number
        </label>
        <input
          type="tel"
          {...register("phone")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}

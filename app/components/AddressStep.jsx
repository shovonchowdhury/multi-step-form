export default function AddressStep({ register, errors, darkMode }) {
  return (
    <div className="space-y-4">
      <h2
        className={`text-2xl font-bold text-center ${
          darkMode ? "text-white" : ""
        }`}
      >
        Address Details
      </h2>

      <div>
        <label
          className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}
        >
          Street Address
        </label>
        <input
          {...register("street")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="Your street address"
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
        )}
      </div>

      <div>
        <label
          className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}
        >
          City
        </label>
        <input
          {...register("city")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="Your city"
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label
          className={`block font-bold mb-1 ${darkMode ? "text-gray-300" : ""}`}
        >
          ZIP Code
        </label>
        <input
          {...register("zip")}
          className={`w-full p-2 rounded border outline-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-gray-100 border-gray-300"
          }`}
          placeholder="ZIP"
        />
        {errors.zip && (
          <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
        )}
      </div>
    </div>
  );
}

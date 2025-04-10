export default function SummaryStep({ data, darkMode }) {
  return (
    <div className="space-y-4 md:space-y-6 px-2 sm:px-4">
      <h2
        className={`text-xl md:text-2xl font-bold text-center ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Review Your Information
      </h2>

      <div
        className={`space-y-4 md:space-y-6 p-3 md:p-4 rounded-lg ${
          darkMode ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        {/* Personal Information */}
        <div>
          <h3
            className={`text-base md:text-lg font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Name
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.fullName}
              </div>
            </div>
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Email
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                } break-all`}
              >
                {data.email}
              </div>
            </div>
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Phone
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.phone}
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3
            className={`text-base md:text-lg font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Address Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Street
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.street}
              </div>
            </div>
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                City
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.city}
              </div>
            </div>
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                ZIP Code
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.zip}
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div>
          <h3
            className={`text-base md:text-lg font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Account Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Username
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.username}
              </div>
            </div>
            <div>
              <p
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Password
              </p>
              <div
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ••••••••
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`text-center text-xs md:text-sm mt-3 md:mt-4 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Please review your information before submitting
      </div>
    </div>
  );
}

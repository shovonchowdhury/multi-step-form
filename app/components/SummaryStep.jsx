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
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="mb-2 md:mb-0">
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Name
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.fullName}
              </dd>
            </div>
            <div className="mb-2 md:mb-0">
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Email
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                } break-all`}
              >
                {data.email}
              </dd>
            </div>
            <div>
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Phone
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.phone}
              </dd>
            </div>
          </dl>
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
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="mb-2 md:mb-0">
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Street
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.street}
              </dd>
            </div>
            <div className="mb-2 md:mb-0">
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                City
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.city}
              </dd>
            </div>
            <div>
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                ZIP Code
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.zip}
              </dd>
            </div>
          </dl>
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
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="mb-2 md:mb-0">
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Username
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {data.username}
              </dd>
            </div>
            <div>
              <dt
                className={`text-xs md:text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Password
              </dt>
              <dd
                className={`text-sm md:text-base ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ••••••••
              </dd>
            </div>
          </dl>
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

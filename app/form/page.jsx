"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import {
  personalSchema,
  addressSchema,
  accountSchema,
  combinedSchema,
  accountBaseSchema,
} from "@/utils/schemas";
import PersonalStep from "../components/PersonalStep";
import AddressStep from "../components/AddressStep";
import AccountStep from "../components/AccountStep";
import SummaryStep from "../components/SummaryStep";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues,
  } = useForm({
    // Always use combined schema for validation
    resolver: zodResolver(combinedSchema),
    // Validate all fields on submission
    mode: "onSubmit",
  });

  const handleNext = async () => {
    // Get base schemas for each step
    const stepSchemas = {
      1: personalSchema,
      2: addressSchema,
      3: accountBaseSchema, // Use the base schema without refinement
    };

    const currentSchema = stepSchemas[currentStep];

    // Validate only current step's fields
    const isValid = await trigger(Object.keys(currentSchema.shape));

    if (isValid) {
      if (currentStep === 3) setShowSummary(true);
      else setCurrentStep((s) => s + 1);
    }
  };

  const handleSubmitForm = (data) => {
    console.log("Form Submitted:", data);
    // Add API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className={`w-full max-w-lg p-6 rounded-xl shadow-lg transition-colors 
        ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <FaLightbulb /> : <MdNightlight />}
        </button>

        {!showSummary ? (
          <>
            <div className="flex justify-center mb-8">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 
                    ${
                      currentStep === step
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-600"
                    }`}
                >
                  {step}
                </div>
              ))}
            </div>

            {currentStep === 1 && (
              <PersonalStep
                register={register}
                errors={errors}
                darkMode={darkMode}
              />
            )}

            {currentStep === 2 && (
              <AddressStep
                register={register}
                errors={errors}
                darkMode={darkMode}
              />
            )}

            {currentStep === 3 && (
              <AccountStep
                register={register}
                errors={errors}
                darkMode={darkMode}
              />
            )}
          </>
        ) : (
          <SummaryStep data={getValues()} darkMode={darkMode} />
        )}

        <div className="flex justify-between mt-8">
          {!showSummary && (
            <>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className={`px-4 py-2 cursor-pointer rounded flex items-center gap-2 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-gray-200"
                  }`}
                >
                  <FiChevronLeft className="h-5 w-5" />
                  Previous
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 cursor-pointer py-2 rounded bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600 transition-colors"
              >
                {currentStep === 3 ? "Review" : "Next"}
                <FiChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {showSummary && (
            <>
              <button
                type="button"
                onClick={() => setShowSummary(false)}
                className={`px-4 py-2 cursor-pointer rounded flex items-center gap-2 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200"
                }`}
              >
                <FiChevronLeft className="h-5 w-5" />
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit(handleSubmitForm)}
                className="ml-auto px-4 py-2 rounded bg-green-500 text-white flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                Submit
                <FiCheck className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

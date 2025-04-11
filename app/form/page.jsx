"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
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
import axios from "axios";
import { toast } from "react-toastify";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const dark = JSON.parse(localStorage.getItem("darkMode"));
  const [darkMode, setDarkMode] = useState(dark || false);

  const [showSummary, setShowSummary] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(combinedSchema),
    mode: "onSubmit",
  });

  const handleNext = async () => {
    const stepSchemas = {
      1: personalSchema,
      2: addressSchema,
      3: accountSchema,
    };

    // Trigger validation for the current step
    let isValid;
    if (currentStep === 3) {
      // Validate specific fields for step 3 (account step)
      isValid = await trigger(["username", "password", "confirmPassword"]);
    } else {
      // For other steps, trigger validation as usual
      isValid = await trigger(Object.keys(stepSchemas[currentStep].shape));
    }

    // Proceed to the next step if validation passes
    if (isValid) {
      if (currentStep === 3) {
        // Show the summary when on step 3
        setShowSummary(true);
      } else {
        setCurrentStep((s) => (s < 3 ? s + 1 : 3));
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    const response = await axios.post("/api/submit", formData);

    return response;
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: handleFormSubmit,
    onSuccess: (response) => {
      // Handle success
      console.log("Form submitted successfully", response.data.data);
      toast.success("Form submitted successfully", {
        position: "top-center",
      });
    },
    onError: (error) => {
      // Handle error
      console.error("Submission error:", error.message);
      toast.error(`Something went wrong!!`, {
        position: "top-center",
      });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className={`w-full max-w-lg p-6 rounded-xl  shadow-lg transition-colors 
        ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              localStorage.setItem("darkMode", JSON.stringify(!darkMode));
            }}
            className="mb-6 p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <FaLightbulb /> : <MdNightlight />}
          </button>
        </div>

        {/* Step Indicator */}
        {!showSummary && (
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
        )}

        {/* Form Content */}
        {!showSummary ? (
          <>
            {currentStep === 1 && (
              <PersonalStep {...{ register, errors, darkMode }} />
            )}
            {currentStep === 2 && (
              <AddressStep {...{ register, errors, darkMode }} />
            )}
            {currentStep === 3 && (
              <AccountStep {...{ register, errors, darkMode }} />
            )}
          </>
        ) : (
          <SummaryStep data={getValues()} darkMode={darkMode} />
        )}

        {/* Navigation Controls */}
        <div className="flex justify-between mt-8">
          {!showSummary ? (
            <>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className={`pl-1 pr-3 py-2 rounded-lg flex cursor-pointer items-center gap-1  ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  <FiChevronLeft className="h-5 w-5" />
                  Previous
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto cursor-pointer pl-3 pr-1 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-1 hover:bg-blue-600 transition-colors"
              >
                {currentStep === 3 ? "Review" : "Next"}
                <FiChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowSummary(false)}
                className={`pl-1 pr-3 py-2 rounded-lg flex cursor-pointer items-center gap-1  ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <FiChevronLeft className="h-5 w-5" />
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit((data) => mutate(data))}
                disabled={isPending}
                className={`ml-auto cursor-pointer pl-2 pr-3 py-2 rounded-lg flex items-center gap-1 
                  bg-green-600 hover:bg-green-700
                 text-white transition-colors`}
              >
                {isPending ? (
                  <>
                    Submitting...
                    <div className="animate-spin">⏳</div>
                  </>
                ) : (
                  <>
                    <FiCheck className="h-5 w-5" />
                    Submit
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

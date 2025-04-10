# Multi-Step Form with Validation

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-green?style=for-the-badge&logo=vercel)](https://multi-step-form-blue-zeta.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)

A modern multi-step form implementation with robust validation, dark mode support, and API simulation. Built using Next.js App Router and modern web technologies.

![Form Screenshot](https://via.placeholder.com/800x400.png?text=Form+Screenshot+Here)  
_Replace with actual screenshots of your form steps and dark mode_

## Live Demo

Experience the form live:  
🔗 [https://multi-step-form-blue-zeta.vercel.app/](https://multi-step-form-blue-zeta.vercel.app/)

## Features

- **Three-Step Form Wizard**
  - Personal Information → Address Details → Account Setup
  - Progress indicator with step tracking
  - Next/Previous navigation
- **Smart Validation**
  - Zod schema validation for each step
  - Real-time error messages
  - Password confirmation matching
- **Modern UI**
  - Dark/Light mode toggle
  - Responsive design
  - Interactive feedback states
  - Animated transitions
- **API Integration**
  - Mock submission endpoint
  - Loading states with spinners
  - Error handling with retry
- **Summary Review**
  - Data confirmation before submission
  - JSON data preview
  - Submission status tracking

## Technologies Used

- **Core Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Form Handling**: React Hook Form + Zod
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: React Query
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Deployment**: Vercel

## Installation

To run the project locally, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/shovonchowdhury/multi-step-form.git
```

2. Navigate into the project directory:
   ```bash
   cd multi-step-form
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:

   ```bash
   npm run dev

   ```

5. Open your browser and go to `http://localhost:3000`.

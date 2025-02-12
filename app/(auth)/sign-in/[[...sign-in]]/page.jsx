import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome to Talent Trail
            </h1>

          </div>
          <SignIn
              appearance={{
                  elements: {
                      rootBox: "bg-gray-50 shadow-md rounded-lg", // Style the main container
                      card: "p-6 bg-white rounded-md",          // Style the card container
                      logoBox: "hidden",
                      headerTitle: "text-2xl font-bold text-gray-800", // Style the title
                      formFieldInput: "border-gray-300 focus:ring-blue-500 focus:border-blue-500", // Input fields
                      formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold", // Buttons
                  },
              }}
          />
        </div>
      </section>
  );
}

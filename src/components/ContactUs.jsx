import React from "react";

export default function ContactUs() {
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-sans">
      <div>
        <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-500 mt-4">
          Have some big idea or brand to develop and need help? Then reach out, we'd love to hear about your project and
          provide help.
        </p>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a href="mailto:info@example.com" className="text-blue-500 text-sm ml-4">
                <small className="block">Mail</small>
                <strong>info@example.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Socials</h2>
          <ul className="flex mt-4 space-x-4">
            {["facebook", "linkedin", "instagram"].map((social, index) => (
              <li
                key={index}
                className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 24 24">
                    {/* Replace with respective icons */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form className="ml-auto space-y-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your email"
          required
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your message"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

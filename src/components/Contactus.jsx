import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        `https://getform.io/f/brooelja`,
        data
      );
      console.log("Response Data:", response.data);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.warn("Failed to send the message. Please try again.");
    }
  };

  return (
    <div name="contact" className="flex flex-col items-center shadow-md shadow-slate-500 mt-3 p-6 bg-gray-900 min-h-screen">
      <ToastContainer/>
      <h1 className="text-4xl font-bold mb-4 text-white">Contact Me</h1>
     
      <p className="text-lg text-white mb-6">
        Please fill out the form below to contact me
      </p>
 
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">
          SEND YOUR MESSAGE
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full hover:bg-blue-500 text-white py-2 px-4 rounded bg-slate-600 focus:outline-double focus:ring focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contactus;

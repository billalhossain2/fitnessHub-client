import { toast } from "react-toastify";
import useAxiosInstance from "../../../hooks/useAxiosInstance";

const NewsLetter = () => {
  const axiosInstance = useAxiosInstance();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newSubscription = { name, email };

    //Save subscription to database
    try {
      const res = await axiosInstance.post("/subscriptions", newSubscription);
      toast.success("Subscription was successful!", { autoClose: 2000 });
      form.reset();
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    }
  };
  return (
    <div className="border-[1px] border-gray-400 p-5 flex flex-col items-center justify-center py-20 mt-32 rounded-md">
      <h3 className="mb-10 font-bold text-3xl">NEWSLETTER SUBSCRIPTION</h3>
      <form
        className="flex md:flex-row flex-col gap-5"
        onSubmit={handleSubscribe}
      >
        <input
          className="outline-none border-[1px] px-3 py-2 rounded-md border-gray-500"
          required
          name="name"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="outline-none border-[1px] px-3 py-2 rounded-md border-gray-500"
          required
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <button className="px-5 py-3 rounded-md bg-[#FF4D31] font-bold text-white">
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

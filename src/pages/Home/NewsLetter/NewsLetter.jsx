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
    <div className="border-[1px] border-gray-400 flex flex-col items-center justify-center py-5 mt-32 rounded-md">
      <h3 className="pl-5 font-bold md:text-3xl text-2xl">NEWSLETTER SUBSCRIPTION</h3>
      <form
        className=""
        onSubmit={handleSubscribe}
      >
        <input
          className="outline-none border-[1px] px-3 py-2 rounded-md border-gray-500 w-full"
          required
          name="name"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="outline-none border-[1px] px-3 py-2 rounded-md border-gray-500 w-full"
          required
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <button className="p-2 rounded-md bg-[#FF4D31] font-bold text-white">
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

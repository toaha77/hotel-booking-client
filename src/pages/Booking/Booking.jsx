import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-[1100px] flex items-center justify-center  mx-auto bg-white absolute -bottom-14 left-60 px-8 py-8">
      <form>
        <div className="flex gap-3">
          <div className="form-control ">
            <label className="label">
              <span className="font-semibold">From</span>
            </label>
            <input type="date" className="input input-bordered" name="" id="" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">To</span>
            </label>
            <input type="date" className="input input-bordered" />
          </div>
           
        </div>
      </form>
      <div className="bg-black">
          <button>Check</button>
      </div>
    </div>
  );
};

export default Booking;

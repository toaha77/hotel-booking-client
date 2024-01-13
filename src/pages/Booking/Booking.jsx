import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-[1100px]  mx-auto">
      <form>
        <div className="flex gap-3">
          <div className="form-control w-1/3">
            <label className="label">
              <span className="font-semibold">From</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select Destination
              </option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Cumilla</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
              <option>Khulna</option>
              <option>Kalkata</option>
              <option>Benapol</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
          <div className="form-control w-1/3">
            <label className="label">
              <span className="font-semibold">To</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select Destination
              </option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Cumilla</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
              <option>Khulna</option>
              <option>Kalkata</option>
              <option>Benapol</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
          <div className="form-control w-1/3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;

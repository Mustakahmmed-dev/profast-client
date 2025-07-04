import React from "react";
import { useForm } from "react-hook-form";

const regions = [
  "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogura", "Brahmanbaria",
  "Chandpur", "Chapai Nawabganj", "Chattogram", "Chuadanga", "Cox's Bazar", "Cumilla",
  "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj",
  "Habiganj", "Jamalpur", "Jashore", "Jhalokathi", "Jhenaidah", "Joypurhat",
  "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur",
  "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
  "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi",
  "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
  "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur",
  "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet",
  "Tangail", "Thakurgaon"
];

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const parcelType = watch("parcelType");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📦 Add Parcel</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Parcel Type */}
        <div className="flex gap-6">
          <label className="label cursor-pointer">
            <input
              type="radio"
              value="Document"
              {...register("parcelType", { required: true })}
              className="radio checked:bg-blue-500"
            />
            <span className="ml-2">Document</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="radio"
              value="Not-Document"
              {...register("parcelType", { required: true })}
              className="radio checked:bg-blue-500"
            />
            <span className="ml-2">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName", { required: true })}
                placeholder="Parcel Name"
                className="input input-bordered w-full"
              />
              {errors.parcelName && <p className="text-red-500 text-sm">Required</p>}
            </div>
            <div>
              <label className="label">Parcel Weight (KG)</label>
              <input
                type="number"
                step="0.01"
                {...register("parcelWeight", { required: true })}
                placeholder="Weight"
                className="input input-bordered w-full"
              />
              {errors.parcelWeight && <p className="text-red-500 text-sm">Required</p>}
            </div>
          </div>
        </div>

        {/* Sender details */}
        <div>
          <h2 className="text-xl font-bold text-gray-600">Sender Details</h2>
        </div>
        {/* Email */}
        <div>
          <label className="label">Email Address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">Required</p>}
        </div>

        {/* Sender Details */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Sender Name</label>
              <input
                {...register("senderName", { required: true })}
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Sender Contact No</label>
              <input
                {...register("senderContact", { required: true })}
                placeholder="Contact Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Pickup Warehouse</label>
              <input
                {...register("senderWarehouse")}
                placeholder="Pickup Warehouse"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Your Region</label>
              <select
                {...register("senderRegion", { required: true })}
                className="select select-bordered w-full"
              >
                {/* <option disabled selected>
                  Select your region
                </option> */}
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="label">Sender Address</label>
              <textarea
                {...register("senderAddress", { required: true })}
                placeholder="Sender Address"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Receiver Details */}
        <div>
          <h2 className="text-xl font-bold text-gray-600">Receiver Details</h2>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Receiver Name</label>
              <input
                {...register("receiverName", { required: true })}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Receiver Contact No</label>
              <input
                {...register("receiverContact", { required: true })}
                placeholder="Contact Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Delivery Warehouse</label>
              <input
                {...register("receiverWarehouse")}
                placeholder="Delivery Warehouse"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Receiver Region</label>
              <select
                {...register("receiverRegion", { required: true })}
                className="select select-bordered w-full"
              >
                {/* <option disabled selected>
                  Select your region
                </option> */}
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="label">Receiver Address</label>
              <textarea
                {...register("receiverAddress", { required: true })}
                placeholder="Receiver Address"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Pickup Instruction</label>
              <textarea
                {...register("pickupInstruction")}
                placeholder="Pickup instruction (optional)"
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction")}
                placeholder="Delivery instruction (optional)"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-600 italic">* PickUp Time: 4pm–7pm Approx.</p>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;

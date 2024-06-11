import React from 'react'

const ShipInfo = () => {
  return (
    <div className="w-full max-w-[max(30%,500px)]">
      <div className="left">
        <p className="text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="flex gap-2">
          <input
            type="text"
            className=" mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="FirstName"
          />
          <input
            type="text"
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
          placeholder="Street"
        />
        <div className="flex gap-2">
          <input
            type="text"
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="City"
          />
          <input
            type="text"
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Zip code"
          />
          <input
            type="text"
            className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
            placeholder="Country"
          />
        </div>
        <input
          type="phone"
          className="mt-4 w-full p-2 border border-solid border-[#c5c5c5] rounded-md outline-orange-700"
          placeholder="Phone No."
        />
      </div>
    </div>
  );
}

export default ShipInfo
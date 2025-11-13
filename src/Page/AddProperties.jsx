import React, { use, useState } from "react";
import { AuthContext } from "../Authorization/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";

const AddProperties = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      price: e.target.price.value,
      location: e.target.location.value,
      shortDescription: e.target.description.value,
      category: e.target.category.value,
      propertyName: e.target.name.value,
      postedBy: user?.displayName,
      thumbnail: e.target.thumbnail.value,
      email: user?.email,
      createdAt: new Date(),
    };

    fetch("https://real-state-server-phi.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Add product mongodb successfully");
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-xl mx-auto shadow-2xl my-8 rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center text-[var(--color-text)] mb-3">
          Add Property
        </h2>
        <form onSubmit={handelSubmit} className="space-y-3">
          {/* Name Field */}
          <div>
            <label className="label font-medium m-2">Property Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium m-2">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-xl focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Property
              </option>
              <option value="Rent">Rent</option>
              <option value="Sale"> Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
              <option value="etc">etc</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium m-2">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[50px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              required
              className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
              placeholder="https://i.ibb.co/Ps29V996/card1.webp"
            />
          </div>
          {/* Location */}
          <label className="label font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location (city, area, address)"
            required
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
          />
          {/* price */}
          <label className="label font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
          />

          {/* username */}
          <label className="label font-medium">User name</label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
          />
          {/* email */}
          <label className="label font-medium">user Email</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user?.email}
            readOnly
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
          />
          {/* Submit Button */}
          {loading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-xl bg-linear-to-r from-[#FF5A3C]/70 to-[#FF5A3C]"
            >
              Add Property
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProperties;

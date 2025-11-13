import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Authorization/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";

const UpdateProperty = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://real-state-server-phi.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);
  console.log(product);
  //   update product
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = {
      price: e.target.price.value,
      location: e.target.location.value,
      shortDescription: e.target.description.value,
      category: e.target.category.value,
      propertyName: e.target.name.value,
      thumbnail: e.target.thumbnail.value,
    };
    fetch(`https://real-state-server-phi.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("update mongodb successfully");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) return <Loading />;
  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-xl mx-auto shadow-2xl my-8 rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center text-[var(--color-text)] mb-3">
            Update Your Property
          </h2>
          <form onSubmit={handelSubmit} className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="label font-medium m-2">Property Name</label>
              <input
                type="text"
                name="name"
                defaultValue={product.propertyName}
                required
                className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium m-2">Category</label>
              <select
                defaultValue={product.category}
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
                defaultValue={product.shortDescription}
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
                defaultValue={product.thumbnail}
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
              defaultValue={product.location}
              placeholder="Location (city, area, address)"
              required
              className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
            />
            {/* price */}
            <label className="label font-medium">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              placeholder="Price"
              required
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
            {/* Update Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-xl bg-linear-to-r from-[#FF5A3C]/70 to-[#FF5A3C]"
            >
              Update Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;

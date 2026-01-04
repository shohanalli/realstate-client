import { Mail } from "lucide-react";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Authorization/AuthContext";
import Rating from "react-rating";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";

const PropertyDetails = () => {
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

  if (loading) return <Loading />;

  const {
    thumbnail,
    shortDescription,
    propertyName,
    price,
    postedBy,
    mediumDescription,
    longDescription,
    location,
    category,
    manIng,
    email,
    _id,
  } = product;

  const handelReview = (e) => {
    e.preventDefault();
    const formData = {
      Description: e.target.description.value,
      propertyName: e.target.name.value,
      rating: e.target.rating.value,
      postedBy: user?.displayName,
      thumbnail: e.target.thumbnail.value,
      createdAt: new Date(),
      email: user?.email
    };

    fetch("https://real-state-server-phi.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Add review successfully");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="py-15 w-11/12 md:max-w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-1 ">
            

<h1 className="text-2xl font-bold text-base-content flex flex-col md:flex-row md:items-center md:gap-3">
  {/* Property Name */}
  <span>
    {propertyName}
  </span>

  {/* Category */}
  <span className="mt-2 md:mt-0 font-normal text-sm text-white bg-[var(--primary-color)]/90 py-1 px-3 rounded-2xl w-fit">
    {category}
  </span>
</h1>

            <p className="text-sm font-bold text-base-content/40">{location}</p>
          </div>
          <div>
            <p className="text-[var(--primary-color)]/80 font-bold text-3xl">
              {price}
            </p>
          </div>
        </div>
        {/* image */}
        <div className="pt-8 w-10/12 mx-auto md:w-9/12">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={thumbnail}
            alt="Property"
          />
        </div>
      </div>
      {/* description and me */}
      <div className="bg-base-200 py-15 ">
        <div className="w-11/12  md:flex items-center gap-5 md:max-w-9/12 mx-auto">
          <div className="md:w-2/3 border mb-5 bg-base-200 shadow-md p-5 rounded-2xl border-black/30">
            <h1 className="font-bold text-3xl text-base-content/80 py-4 ">Overview</h1>
            <p className="leading-relaxed text-base-content/60 text-sm pb-8">
              {shortDescription}
            </p>
            <p className="leading-relaxed text-base-content/60 text-sm pb-8">
              {mediumDescription}
            </p>
            <p className="leading-relaxed text-base-content/60 text-sm pb-8">
              {longDescription}
            </p>
          </div>

<div className="md:w-1/3 w-full bg-base-200 shadow-md border border-black/30 rounded-md py-10 flex flex-col md:flex-col items-center gap-6">
  {/* Image */}
  <img
    className="h-24 w-24 rounded-full object-cover"
    src={manIng || user?.photoURL}
    alt={postedBy}
  />

  {/* Text */}
  <div className="flex flex-col items-center text-center md:text-center gap-2 w-full px-4">
    <h2 className="text-xl font-bold truncate max-w-full">{postedBy}</h2>

    <div className="flex items-center gap-2 w-full justify-center">
      <Mail size={16} />
      <p className="text-md md:text-sm lg:text-md font-normal truncate max-w-[180px] md:max-w-full">
        {email}
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
      {/* product review from */}
      <div className="card-body p-6 relative w-11/12 md:w-6/12 mx-auto">
        <h2 className="text-2xl font-bold text-center text-[var(--color-text)] mb-3">
          Send review This Product
        </h2>
        <form onSubmit={handelReview} className="space-y-3">
          {/* Name Field */}
          <div>
            <label className="label font-medium m-2">Property Name</label>
            <input
              type="text"
              name="name"
              defaultValue={propertyName}
              readOnly
              className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium m-2">Short Review</label>
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
              defaultValue={thumbnail}
              readOnly
              className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
              placeholder="https://i.ibb.co/Ps29V996/card1.webp"
            />
          </div>

          {/* username */}
          <label className="label font-medium">User name</label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
          />
          {/*star Rating*/}
          <label className="label font-medium">Rating</label>
          <input
            type="number"
            name="rating"
            min={0}
            max={5}
            required
            onInput={(e) =>
              (e.target.value = Math.min(Number(e.target.value), 5))
            }
            className="input w-full rounded-xl focus:border-0 focus:outline-gray-200"
            placeholder="<=5"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-xl bg-linear-to-r from-[#FF5A3C]/70 to-[#FF5A3C]"
          >
            Send Review
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertyDetails;

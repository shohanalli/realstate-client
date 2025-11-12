import { CalendarDays, MapPin } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Authorization/AuthContext";

const MyProperty = () => {
  const { user } = use(AuthContext);
  console.log(user)
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setloading(false);
      });
  }, []);
  console.log(products);

  if (loading) return <p>loading.....</p>;

  return (
    <div className="bg-[#F5F7FB]">
      <div className="py-15 w-11/12 md:max-w-9/12 mx-auto">
        <h1 className="text-[var(--color-text)] text-4xl font-bold mb-2 text-center">
          My Property
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">

{products.map((product, index)=>(
          <div key={index}>
            {/* card design start */}
            <div className=" sm:flex ">
              {/* flex 1 */}
              <div className="relative flex-1">
                <img
                  className="h-full w-full rounded-sm object-cover transition-transform duration-500 hover:scale-105"
                  src={product.thumbnail}
                  alt=""
                />
                <div className="absolute top-1 left-1">
                  <button className="bg-[var(--primary-color)]/90 text-white py-1 px-4 rounded-2xl text-sm font-semibold">
                    {product.category}
                  </button>
                </div>
              </div>
              {/* flex 2 */}
              <div className="bg-white py-2 flex-1 pl-5 rounded-r-sm rounded-b-sm">
                {/* property name */}
                <h2 className="text-[var(--color-text)]/90 text-xl lg:text-2xl font-semibold pb-2 ">
                  {product.propertyName}
                </h2>
                {/* location */}
                <div className=" flex items-center gap-1 text-black/50">
                  <MapPin size={20} />
                  <p className="text-sm font-bold ">{product.location}</p>
                </div>
                {/* price and post date */}
                <div className="  flex justify-between py-3 items-center">
                  <div className=" flex items-center gap-1 text-black/50">
                    <CalendarDays size={16} />
                    <p className="text-sm font-bold ">{product.createdAt}</p>
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--primary-color)]/80 mr-2">
                  ${product.price}
                  </h2>
                </div>
                {/* button */}
                <div className="flex justify-between my-3">
                  <Link
                    to={`/update-property/${product._id}`}
                    className="cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800"
                  >
                    Update
                  </Link>
                  <Link
                    to={``}
                    className="mr-2 cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800"
                  >
                    Delete
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/details/${product._id}`}
                    className="block w-10/12 mx-auto text-center cursor-pointer text-[var(--primary-color)]/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-[var(--primary-color)]/90 hover:text-white transition duration-800">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
))}

        </div>
      </div>
    </div>
  );
};

export default MyProperty;

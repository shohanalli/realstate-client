import { Rating } from '@smastrom/react-rating';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Authorization/AuthContext';
import "@smastrom/react-rating/style.css";
import Loading from '../Component/Loading';

const MyRatings = () => {
    const {user} = use(AuthContext)
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/review")
      .then((res) => res.json())
      .then((data) =>{
         setReviews(data)
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, []);
if (loading) return <Loading />;
    return (
<>
    <div className="bg-[#F5F7FB] py-16">
      <div className="w-11/12 md:max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--color-text)] mb-10">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {reviews.map((review)=>(

            <div key={review._id}
              className="bg-white shadow-md rounded-2xl p-5 border border-black/30 hover:shadow-lg transition text-center"
            >
              <img
                src={review.thumbnail}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                {review.propertyName}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                
                <span className="font-medium text-black">
                  {user.displayName}
                </span>
              </p>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={Number(review.rating)}
                />
              </div>

              <p className="text-sm text-gray-700 mb-3 italic">"
                {review.Description} "
              </p>

              <p className="text-xs text-gray-400">
              </p>
            </div>
    ))}     
        </div>
      </div>
    </div>
</>
    );
};

export default MyRatings;
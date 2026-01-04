import React from "react";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

const Blog = () => {
  // Sample blog posts data (you can replace this with real data from a backend later)
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Areas to Rent in Dhaka in 2026",
      excerpt:
        "Discover the most popular and upcoming neighborhoods in Dhaka for families, bachelors, and students. From Uttara to Bashundhara, find out where to live this year.",
      author: "Team RENTER",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "City Guide",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "How to Spot a Fake Property Listing Online",
      excerpt:
        "Protect yourself from rental scams. Learn the red flags and tips to verify genuine listings before paying any advance.",
      author: "Sarah Ahmed",
      date: "December 20, 2025",
      readTime: "5 min read",
      category: "Tips & Safety",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Best Time of Year to Move in Dhaka (And Save Money)",
      excerpt:
        "Timing your move can save you thousands in rent and advance. Find out the best and worst months to shift in the capital.",
      author: "Ayesha Siddika",
      date: "December 5, 2025",
      readTime: "5 min read",
      category: "Tips & Safety",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "How RENTER Verifies Properties: Behind the Scenes",
      excerpt:
        "We go beyond photos. Learn how our team ensures every listing is real, safe, and ready for you to move in.",
      author: "Team RENTER",
      date: "November 28, 2025",
      readTime: "7 min read",
      category: "Inside RENTER",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
           RENTOR Blog
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/80 leading-relaxed">
            Expert tips, city guides, and everything you need to know about renting in Bangladesh.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-base-200 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-base-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-[var(--primary-color)] text-sm font-medium rounded-full mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-base-content/70 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-base-content/60 space-x-4">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <a
                      href={`/blog/${post.id}`}
                      className="mt-5 inline-flex items-center text-[var(--primary-color)] font-medium hover:underline"
                    >
                      Read More <ChevronRight size={18} className="ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* Popular Posts */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-5">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-medium text-[var(--color-text)] line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
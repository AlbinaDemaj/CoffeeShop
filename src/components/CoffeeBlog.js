import React from "react";

const blogPosts = [
  {
    title: "Moka Pot",
    image: "/img/8.jpg",
    description:
      "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    link: "#",
  },
  {
    title: "Chemex Coffee Maker",
    image: "/img/5.jpg",
    description:
      "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    link: "#",
  },
  {
    title: "Aeropress Brewing Guide",
    image: "/img/16.jpg",
    description:
      "Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    link: "#",
  },
];

const CoffeeBlog = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">THE COFFEE BLOG</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href={post.link} className="text-black font-bold hover:text-yellow-500 hover:underline transition duration-200 ease-in-out">
                → READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeBlog;

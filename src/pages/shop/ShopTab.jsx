import { useState } from "react";
import FoodCart from "../../shared/FoodCart";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ShopTab = ({ items }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <FoodCart item={item} key={item._id}></FoodCart>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center my-6 space-x-4">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-full ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          <FaArrowCircleLeft className="text-2xl md:text-3xl fill-[#BB8506]" />
        </button>

        {/* Current Page Indicator */}
        <span className="md:text-lg font-medium">
          {currentPage} / {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-full ${
            currentPage === totalPages ? " cursor-not-allowed" : " "
          }`}
        >
          <FaArrowCircleRight className="text-2xl md:text-3xl fill-[#BB8506]" />
        </button>

        {/* Page Dots */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentPage === index + 1
                  ? "bg-yellow-500 border border-black"
                  : "bg-green-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopTab;

import React, { useState } from "react";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Open Modal
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal} // Close modal when clicking the overlay
        >
          {/* Modal content */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
          >
            {/* Close button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-6 text-2xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            {/* Modal Title */}
            <div className="text-xl font-semibold mb-4">
              Add Title
            </div>

            {/* Modal Content */}
            <div className="max-h-80 overflow-y-auto mb-8 scrollbar-hide">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tincidunt sapien, a volutpat velit. Nulla convallis nisi at massa mollis, vel maximus risus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac scelerisque leo. Etiam nec ante suscipit, auctor arcu ac, facilisis libero. Integer imperdiet orci sit amet augue pretium, sit amet dapibus leo malesuada. Mauris faucibus a lorem at rhoncus. Sed condimentum facilisis arcu at eleifend. Nulla et euismod ex. Donec et mollis odio. Sed nec arcu quis ante sollicitudin lobortis at ac nisi. Nam volutpat vitae lorem sit amet viverra.
              </p>
              <p className="text-gray-700">
                Donec malesuada, neque id tincidunt mollis, augue est dapibus nunc, sit amet hendrerit ante sapien eu neque. Integer ac erat ut ligula suscipit vulputate. Nam sit amet libero magna. Etiam fringilla nibh eu sapien cursus, eget dignissim purus porttitor. Cras sit amet mi nec leo iaculis sollicitudin ac eu risus. Curabitur id velit ut lacus gravida iaculis non vitae mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mollis felis a nisi pharetra, non malesuada sapien vestibulum.
              </p>
              {/* Add more text to simulate large content */}
            </div>

            {/* Modal Footer */}
            <div className="absolute bottom-4 right-6">
              🎭 Footer
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
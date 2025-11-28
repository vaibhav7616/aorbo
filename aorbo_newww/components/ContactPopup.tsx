import React from "react";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-80 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-3 text-brand-dark">Contact Us</h2>

        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> 9398093503
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> info.aorbotreks@gmail.com
        </p>

        <button
          onClick={onClose}
          className="w-full bg-brand-dark text-white py-2 rounded-lg hover:bg-black transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;

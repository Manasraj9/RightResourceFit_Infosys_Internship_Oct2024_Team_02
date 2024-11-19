import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
                <h3 className="text-lg font-semibold">Are you sure you want to delete this application?</h3>
                <div className="mt-4 flex justify-between">
                    <button 
                        onClick={onConfirm} 
                        className="bg-red-500 text-white p-2 rounded"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 text-black p-2 rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

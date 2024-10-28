import React, { useState } from 'react';

const LogoutButton = () => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleLogout = async () => {
        try {
            // Call your backend logout API
            await fetch('/logout', {
                method: 'POST',
                credentials: 'include',
            });
            // Redirect to login page or home page
            window.location.href = '/login';
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <div
                className="py-2 px-4 hover:bg-red-500 hover:text-white cursor-pointer"
                onClick={() => setShowConfirm(true)}
            >
                Logout
            </div>

            {/* Confirmation Dialog */}
            {showConfirm && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
                        <p className="mb-6">Are you sure you want to log out?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                                onClick={() => setShowConfirm(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={handleLogout}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LogoutButton;

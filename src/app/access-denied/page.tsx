import React from 'react';
import Link from 'next/link';

const AccessDeniedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
            <p className="text-lg text-gray-700 mb-6">You do not have permission to view this page.</p>
            <Link href="/">
                <span className="text-blue-500 hover:underline">Go back to Home</span>
            </Link>
        </div>
    );
};

export default AccessDeniedPage;
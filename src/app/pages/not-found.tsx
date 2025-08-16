import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='flex h-full min-h-screen flex-col items-center justify-center p-4 text-center'>
            <img src='/images/ai-robot.png' alt='AI Robot Lost' className='mb-8 h-48 w-48' />
            <h1 className='text-5xl font-bold text-gray-800'>404</h1>
            <h2 className='mt-4 text-2xl font-semibold text-gray-700'>
                Oops! It looks like you're lost.
            </h2>
            <p className='mt-2 max-w-md text-gray-500'>
                The page you're looking for doesn't exist, has been moved, or is under construction.
            </p>
            <Link
                to='/dashboard'
                className='mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition-colors hover:bg-blue-700'
            >
                Go Back to Dashboard
            </Link>
        </div>
    );
};

export default NotFoundPage;
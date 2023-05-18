import React from 'react';
import Lottie from "lottie-react";
import ErrorAnimation from '../../assets/Error.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='mx-auto w-96'>
                <Lottie animationData={ErrorAnimation} />
            </div>
            <div className="">
                <div className="text-center">
                    <p className="text-base font-semibold text-black">404</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        Sorry, we couldn&apos:t find the page you&apos;re looking for.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-x-3">
                        <Link>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

                            >

                                Go back to home
                            </button>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
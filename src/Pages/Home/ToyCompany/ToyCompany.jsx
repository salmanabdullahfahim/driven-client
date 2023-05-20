import React from 'react';
import Marquee from "react-fast-marquee";

const ToyCompany = () => {
    return (
        <div className='my-14'>
            <div className='mt-6'>
                <h2 className="text-4xl font-bold text-center my-6 text-gray-800">Our Amazing Toy Car Manufacturers</h2>
            </div>

            <Marquee className='mt-14' gradient={true} gradientColor={[255, 255, 255]} gradientWidth={200}>
                <div className='mr-3'>
                    <img src="https://i.ibb.co/9TThrPG/pngwing-com-17.png" alt="" className='w-52' />
                </div>
              
                
                <div className="mr-3">
                    <img src="https://i.ibb.co/n7rgvGr/pngwing-com-15.png" alt="" className='w-52' />
                </div>
                <div className="mr-3">
                    <img src="https://i.ibb.co/MMH8yT2/pngwing-com-8.png" alt="" className='w-52' />
                </div>
                <div className="mr-3">
                    <img src="https://i.ibb.co/0FnymbJ/pngwing-com-12.png" alt="" className='w-52' />
                </div>
                <div className="mr-3">
                    <img src="https://i.ibb.co/XbqfpZp/pngwing-com-11.png" alt="" className='w-52' />
                </div>
                
            </Marquee>
        </div>
    );
};

export default ToyCompany;
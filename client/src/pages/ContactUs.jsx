// import { Navbar } from "../components/Navbar"

// export const ContactUs = () => {
//     return (
//         <>
//             <Navbar />

//             <div>
//                 Contact Number: 8329416560
//                 Address: Midtown-Building, Shop-No. 1, Near Central Hospital Road, Near Sevasadan College, Ulhasnagar-421003
//             </div>
//         </>
//     )
// }
import { Navbar } from "../components/Navbar";

export const ContactUs = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>

                    <div className="text-lg text-gray-700 space-y-4">
                        <div>
                            <span className="font-semibold">Contact Number:</span> 8329416560
                        </div>
                        <div>
                            <span className="font-semibold">Address:</span><br />
                            Midtown-Building, Shop-No. 1,<br />
                            Near Central Hospital Road,<br />
                            Near Sevasadan College,<br />
                            Ulhasnagar-421003
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

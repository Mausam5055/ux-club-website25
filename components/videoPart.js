'use client';

export default function VideoPart() {
    return (
        <div className="w-full bg-black lg:pt-30 pb-10 lg:px-6 px-4 ">
            <div  className="flex justify-between items-center text-xs font-bold font-[Neue]  text-white mb-3">
                <h1 className="">
                    005
                    /
                    M_010
                </h1>
                <h1>
                    Dining Table
                </h1>
            </div>
            <video autoPlay loop muted  >
                <source src="/videopart.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
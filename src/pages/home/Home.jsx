export default function Home() {
    return (
        <div className="bg-[#F2F0F1]">
            <div className="flex flex-col gap-y-6 px-4">
                <div className="flex flex-col gap-y-5 pt-10">
                    <h1 className="text-[#000000] font-extrabold text-[36px] font-oswald leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="text-[#00000099] font-normal text-[14px] font-inter leading-5">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="py-[15px] bg-[#000000] text-[#FFFFFF] rounded-[62px] font-medium font-inter text-[16px] leading-[21.6px]">Shop Now</button>
                </div>
                <div className="flex gap-x-[27.5px] flex-wrap justify-center gap-y-3">
                    <div className="flex flex-col">
                        <h3 className="font-inter font-bold text-[#000000] text-[24px] leading-[32.4px]">200+</h3>
                        <p className="font-inter font-normal text-[#00000099] text-[12px] leading-[22px]">International Brands</p>
                    </div>
                    <hr className="w-[1px] h-[52px] bg-[#0000001A] border-none" />
                    <div className="flex flex-col">
                        <h3 className="font-inter font-bold text-[#000000] text-[24px] leading-[32.4px]">2,000+</h3>
                        <p className="font-inter font-normal text-[#00000099] text-[12px] leading-[22px]">High-Quality Products</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-inter font-bold text-[#000000] text-[24px] leading-[32.4px]">30,000+</h3>
                        <p className="font-inter font-normal text-[#00000099] text-[12px] leading-[22px]">Happy Customers</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img className="absolute top-[137px] left-[27px]" src="/home-1.svg" alt="home img" />
                <img className="absolute top-[40px] right-[21px]" src="/home-2.svg" alt="home img" />
                <img className="w-full" src="/home.svg" alt="home svg" />
            </div>
        </div>
    )
}
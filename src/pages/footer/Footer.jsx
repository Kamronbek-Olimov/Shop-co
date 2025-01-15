export default function Footer() {
    return (
        <footer className="px-4 py-16">
            <div className="flex flex-wrap gap-x-[59px] gap-y-6">
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-[14px]">
                        <a href=""><img src="/logo.svg" alt="logo svg" /></a>
                        <p className="text-[#00000099] font-inter font-normal text-[14px] leading-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <a className="xl:hover:border-[#000000] w-7 h-7 flex items-center justify-center hover:bg-[#000000] border border-[#00000033] rounded-full" href=""><img src="/x.svg" alt="x img" /></a>
                        <a className="xl:hover:border-[#000000] w-7 h-7 flex items-center justify-center hover:bg-[#000000] border border-[#00000033] rounded-full" href=""><img src="/facebook.svg" alt="facebook img" /></a>
                        <a className="xl:hover:border-[#000000] w-7 h-7 flex items-center justify-center hover:bg-[#000000] border border-[#00000033] rounded-full" href=""><img src="/instagram.svg" alt="instagram img" /></a>
                        <a className="xl:hover:border-[#000000] w-7 h-7 flex items-center justify-center hover:bg-[#000000] border border-[#00000033] rounded-full" href=""><img src="/github.svg" alt="github img" /></a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[#000000] font-inter font-medium text-[14px] leading-[18px] spacing tracking-[3px]">Company</h4>
                    <div className="flex flex-col gap-y-[14px]">
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">About</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Features</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Works</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Career</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[#000000] font-inter font-medium text-[14px] leading-[18px] spacing tracking-[3px]">HELP</h4>
                    <div className="flex flex-col gap-y-[14px]">
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Customer Support</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Delivery Details</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Terms & Conditions</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[#000000] font-inter font-medium text-[14px] leading-[18px] spacing tracking-[3px]">FAQ</h4>
                    <div className="flex flex-col gap-y-[14px]">
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Account</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Manage Deliveries</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Orders</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Payment</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-[#000000] font-inter font-medium text-[14px] leading-[18px] spacing tracking-[3px]">RESOURCES</h4>
                    <div className="flex flex-col gap-y-[14px]">
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Free eBook</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Development Tutorial</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">How to - Blog</a>
                        <a className="text-[#00000099] font-inter font-normal text-[14px] leading-4" href="">Youtube Playlist</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
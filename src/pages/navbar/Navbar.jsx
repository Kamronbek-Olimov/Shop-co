export default function Navbar() {
  return (
    <nav className="bg-[#ffffff] py-5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
            <button className="py-[4.87px] px-[2.63px]"><img src="/menu.svg" alt="menu svg" /></button>
            <img src="/logo.svg" alt="logo svg" />
        </div>
        <div className="flex items-center gap-x-3">
            <button><img src="/search.svg" alt="search svg" /></button>
            <button><img src="/cart.svg" alt="cart svg" /></button>
            <button><img src="/user.svg" alt="user svg" /></button>
        </div>
    </nav>
  )
}
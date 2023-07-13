import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 items-center py-3 px-4 backdrop-blur bg-slate-800/20 flex justify-between">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-semibold">
            VentureFlow
        </div>
        <div className="hidden md:flex">
          <NavbarButton text={"Features"}/>
          <NavbarButton text={"Privacy"}/>
          <NavbarButton text={"Contact"}/>
        </div>
    </div>
  )
}

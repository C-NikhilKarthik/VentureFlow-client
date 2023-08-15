import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-[100dvh] w-[100dvw] flex flex-col items-center justify-center">
      <div className="text-center text-[clamp(1.6rem,5vw,45px)] bg-clip-text text-transparent bg-gradient-to-r from-[#e7f2f4] to-[#6583aa] font-semibold">
        Unlocking Your Project's Potential with VentureFlow
      </div>
      <div className="text-center  text-[clamp(1rem,3vw,32px)] ">
        Seamlessly Streamline, Collaborate, and Succeed!
      </div>
      <Link href="/login">
        <div className="px-4 py-2 rounded-full bg-slate-600 text-slate-200 text-lg">
          Get Started
        </div>
      </Link>
    </div>
  );
}

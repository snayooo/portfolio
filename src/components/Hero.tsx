import Link from "next/link";
import { FaDiscord, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div>
                <p className="text-md md:text-xl">Hello stranger👋, I am</p>
                <h1 className="text-7xl md:text-9xl font-bold -mt-4 md:-mt-8 font-[var(--font-poppins)] -ml-1 md:-ml-[7px]">maurice</h1>
                <div className="flex flex-row justify-center gap-4">
                    <Link href="https://instagram.com/maurxce09" target="_blank">
                        <FaInstagram size={"2rem"} />
                    </Link>
                    <Link href="https://tiktok.com/@maurxce09" target="_blank">
                        <FaTiktok size={"1.8rem"} />                    
                    </Link>
                    <Link href="https://discord.com/users/807689797828608070" target="_blank">
                        <FaDiscord size={"2rem"} />
                    </Link>
                    <Link href="mailto:maurice@snayo.net">
                        <FaEnvelope size={"1.8rem"} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
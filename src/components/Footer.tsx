import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <hr />
      <div className="sm:mx-40 mx-20 h-80 flex items-center justify-evenly sm:flex-row flex-col">
        <div>
            <div className="space-y-1">
                <h4 className="text-2xl font-medium">Also check this out:</h4>
            </div>
            <Divider className="my-4 bg-neutral-700 w-96" />
            <div className="flex h-5 items-center justify-between space-x-4 text-xl w-96">
                <div>
                    <Link className="font-light hover:text-neutral-500 transition-colors" href="/imprint">Imprint</Link>
                </div>
                <Divider className="bg-neutral-700" orientation="vertical" />
                <div>
                    <Link className="font-light hover:text-neutral-500 transition-colors" href="/privacy-policy">Privacy policy</Link>
                </div>
                <Divider className="bg-neutral-700" orientation="vertical" />
                <div>
                    <Link className="font-light hover:text-neutral-500 transition-colors" href="/#contact">Contact</Link>
                </div>
            </div>
            <Divider className="my-4 bg-neutral-700 w-96" />
            <p>Copyright © 2020-2024</p>
        </div>
        <div className="hidden sm:block">
            <div className="space-y-1">
                <h4 className="text-2xl font-medium">Special thanks to:</h4>
            </div>
            <Divider className="my-4 bg-neutral-700 w-[550px]" />
            <div className="flex items-center justify-between flex-col space-x-4 text-xl w-[550px]">
                <ul className="list-[square]">
                    <li>
                        <p className="font-light"><Link href="https://twitter.com/Tiqantweet" target="_blank" className="underline underline-offset-4 decoration-1">Tiqan</Link> - for all the React and NextJS tutorials ;)</p>
                    </li>
                    <li>
                        <p className="font-light"><Link href="https://discord.gg/ETUJay8e2X" target="_blank" className="underline underline-offset-4 decoration-1">Cyklon73</Link> - for the introductions to Java and Python.</p>
                    </li>
                    <li>
                        <p className="font-light"><Link href="https://alpha6565.de" target="_blank" className="underline underline-offset-4 decoration-1">alpha6565</Link> - for the help with my Python Discord bots.</p>
                    </li>
                    <li>
                        <p className="font-light"><Link href="https://www.instagram.com/danisteffen.raw/" target="_blank" className="underline underline-offset-4 decoration-1">daniL</Link> - for the moral support.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
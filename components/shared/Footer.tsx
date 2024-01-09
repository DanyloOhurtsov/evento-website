import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/" className="w-52 flex items-center gap-1">
                    <Image
                        src="/assets/images/logo.svg"
                        width={48}
                        height={48}
                        alt="Evento logo"
                    />
                    <p className="text-[24px] font-bold">Evento</p>
                </Link>
                <p>2024 Evento. all rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-52 flex items-center gap-1">
                    <Image
                        src="/assets/images/logo.svg"
                        width={48}
                        height={48}
                        alt="Evento logo"
                    />
                    <p className="text-[24px] font-bold">Evento</p>
                    
                </Link>
                <SignedIn>
                    <nav className="md:flex-between hidden w-full maxw-xs">
                        <NavItems />
                    </nav>
                </SignedIn>
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default Header;

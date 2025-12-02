import Link from "next/link";
import config from "@/libs/config";

const Header = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto px-4">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl font-bold">
                    {config.appName}
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li><a href="#features">特徴</a></li>
                    <li><a href="#portfolio">実績</a></li>
                    <li><a href="#contact">お問い合わせ</a></li>
                </ul>
                <div className="md:hidden">
                    {/* Mobile menu could go here */}
                </div>
            </div>
        </div>
    );
};

export default Header;

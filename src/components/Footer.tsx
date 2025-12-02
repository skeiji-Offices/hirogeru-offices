import config from "@/libs/config";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a href="#features" className="link link-hover">特徴</a>
                <a href="#portfolio" className="link link-hover">実績</a>
                <a href="#contact" className="link link-hover">お問い合わせ</a>
            </div>
            <div>
                <p>{config.footer.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;

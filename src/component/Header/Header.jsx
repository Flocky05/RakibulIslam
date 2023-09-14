

const Header = () => {
    return (
        <div className="flex justify-around p-10 text-white text-xl font-semibold">
            <a href="/"> <span className="text-blue-500">Rakibul</span> Islam </a>
            <div className="grid grid-cols-5 w-2/4">
                <a href="/about">About</a>
                <a href="/resume">Resume</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contract">Contract</a>
            </div>
        </div>
    );
};

export default Header;
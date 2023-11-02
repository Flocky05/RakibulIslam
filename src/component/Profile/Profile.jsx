import profile from "../../assets/profile/rakibul2.png"
import location from "../../assets/profile/location-48.png"
import phone from "../../assets/profile/phone-64.png"
import gmail from "../../assets/profile/gmail-48.png"
const Profile = () => {
    return (
        <div className="p-20 grid grid-cols-1 lg:grid-cols-2 mt-10">
            <div>
                <img className="drop-shadow-2xl shadow-blue-500/40 hover:shadow-gray-400 duration-700 ease-in-out rounded-lg" src={profile} alt="" />
            </div>
            <div className="grid grid-cols-1 mt-10 lg:mt-0">
                <div>
                    <h2 className="text-3xl font-bold">I am Md.Rakibul Islam</h2>
                    <p className="mt-3">I&apos;m a dedicated MERN Stack Web Developer with a passion for building innovative and user-friendly web applications.Proficient in JavaScript, React, Node.js, Express.js and MongoDB.</p>
                </div>
                <div className="flex gap-10 text-center">
                    <div className="grid grid-cols-1">
                        <h2 className="text-3xl font-bold text-blue-400">01+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <h2 className="text-3xl font-bold text-blue-400 p-0">10+</h2>
                        <p>Completed Projects</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <h2 className="text-3xl font-bold text-blue-400">01+</h2>
                        <p>Companies Worked</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl  text-blue-400">Contact Me: </h2>
                    <div className="mt-3">
                        <div className="flex items-center gap-4 mt-2">
                            <img className="w-6" src={location} alt="" />
                            <p>Dhaka</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img className="w-9" src={phone} alt="" />
                            <p>+8801799622217</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <img className="w-6" src={gmail} alt="" />
                            <p>md.rakibul.islam.0501@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
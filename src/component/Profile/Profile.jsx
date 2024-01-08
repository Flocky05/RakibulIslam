import profile from "../../assets/profile/rakibul.jpg"
import location from "../../assets/profile/location-48.png"
import phone from "../../assets/profile/phone-64.png"
import gmail from "../../assets/profile/gmail-48.png"
const Profile = () => {
    return (
        <div className="p-2 lg:p-20 grid grid-cols-1 lg:grid-cols-2 bg-blue-950">
            <div>
                <img className="w-full lg:w-2/4 rounded-lg border-2 lg:border-4 border-blue-400" src={profile} alt="" />
            </div>
            <div className="grid grid-cols-1 mt-10 lg:mt-0">
                <div>
                    <p><span className="font-bold text-3xl text-blue-400">"</span> I am a <span className="font-bold text-xl">hardworking</span> and passionate <span className="font-bold text-xl">front-end</span> web Developer.My aim is to utilize my solid academic background, passion for creative problem-solving, and unwavering enthusiasm for innovation to actively contribute to a progressive organization. My primary goal is to not only apply but also further cultivate my skills in software development, data analysis, and technology solutions. My ultimate objective is to drive positive outcomes for the company while advancing my career within the dynamic realm of computer science and engineering <span className="font-bold text-3xl text-blue-400">"</span></p>
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
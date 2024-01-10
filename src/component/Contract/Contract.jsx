
const Contract = () => {
    return (
        <div>
            <div className="mt-16 lg:p-12 text-center">
                <h2 className="text-3xl font-bold text-center p-2 lg:p-4 uppercase">Let&apos;s Contact</h2>
                <h2 className="text-md text-center p-0 lg:p-2 uppercase">Contact or Write Me</h2>
                <div>
                    <div>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="Name"/>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="email" placeholder="Email"/>
                    </div>
                    <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="subject" />
                    <textarea className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <br />
                    <button className="bg-gray-500 text-white w-3/5 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out">send</button>
                    </div>
            </div>
        </div>
    );
};

export default Contract;
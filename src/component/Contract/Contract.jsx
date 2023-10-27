

const Contract = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center p-8 uppercase">Let's Contact</h2>
            <div className="p-12 text-center">
                <div>
                    <div>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="Name"/>
                        <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg  hover:shadow-gray-400 duration-700 ease-in-out" type="email" placeholder="Email"/>
                    </div>
                    <input className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" type="text" placeholder="subject" />
                    <textarea className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <br />
                    <button className="bg-gray-500 text-white w-3/5 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out">send</button>
                    </div>
            </div>
        </div>
    );
};

export default Contract;
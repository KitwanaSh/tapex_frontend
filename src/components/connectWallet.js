export function ConnectWallet({ connect }) {

    return (
        <div className="container flex flex-col justify-center items-center min-h-screen bg-blue-200 sm:p-6">
            <div className="text-3xl font-bold text-white">Please, connect to wallet to enter the application.</div>
            <br />
            <div>
                <button onClick={connect} className="action-button bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform
            hover:scale-105 transition-transform duration-300 ease-in-out text-blue-400 font-semibold hover:bg-blue-400 hover:text-white">
                    Connect to Wallet
                </button>
            </div>
        </div>
    )
}

export default ConnectWallet;

import timelessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-left justify-between items-left py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-left items-left">
        <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="TradeMark Logo"
        />
      </div>


      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header

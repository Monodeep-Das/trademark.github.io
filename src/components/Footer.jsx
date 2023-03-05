import timelessLogo from '../assets/timeless.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>


      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2023 All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer

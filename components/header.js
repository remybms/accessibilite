import Hamburger from "@/components/hamburger"
import Features from "./features"
import Company from "./company"


function Header() {

    return (
        <><div className="header mobile:flex w-screen hidden place-content-between text-gray-500 font-semibold">
            <div className="flex">
                <img src="/images/logo.svg" alt="snap's logo" className='m-5' />

                <div className="flex space-x-20 items-center ">
                    <div className="flex items-center hover:text-black">
                        <Features/>
                    </div>
                    <div className="flex items-center hover:text-black">
                        <Company/>
                    </div>
                    <div>
                        Careers
                    </div>
                    <div className="hover:text-black">
                        About
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="hover:text-black p-5">
                    Login
                </div>
                <div className="px-4 py-2 mx-2 my-3 border-gray-500 border-2 rounded-xl hover:text-black hover:border-black">
                    Register
                </div>
            </div>
        </div>
            <div className="flex justify-between w-screen mobile:hidden items-center">
                <img src="/images/logo.svg" alt="snap's logo" className='m-5' />
                <div className="w-10 h-10 mr-5">
                    <Hamburger />
                </div>


            </div>
        </>
    )
}
export default Header
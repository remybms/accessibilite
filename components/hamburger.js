"use client"

import { slide as Menu } from 'react-burger-menu'
import { IoReorderThree } from 'react-icons/io5'
import { ImCross } from "react-icons/im";
import Features from './features';
import Company from './company';


function Hamburger() {
    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '42px',
            height: '42px',
        },
        bmMenuWrap: {
            width: '50%',
            height: '100%',
            marginTop: '10%',
            padding: '5%',
            backgroundColor: 'white',
            color: '#262626'
        },
        bmCrossButton: {
            height: '30px',
            width: '30px',
        },
        bmCross: {
            background: 'white',
        },
    }
    return (
        <div>
            <Menu customBurgerIcon={<IoReorderThree size={42} />} styles={styles} customCrossIcon={<ImCross size={30} />} right>
                <Features />
                <Company />
                <div className='w-fit'>Careers</div>
                <div className='w-fit'>About</div>
                <div className="hover:text-black p-5">
                    Login
                </div>
                <div className="px-4 py-2 mx-2 my-3 border-gray-500 border-2 rounded-xl hover:text-black hover:border-black">
                    Register
                </div>
            </Menu>
        </div>
    )
}
export default Hamburger
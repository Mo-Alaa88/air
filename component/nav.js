import Link from 'next/link'
import Logo from '../image/logo.png'
const Nav =()=>(
    <nav className="topnav col-12" id="myTopnav">
        <Link href='../'>
            <a className=' col-2 logo'>
                <img src={Logo} alt='Logo'/>  
            </a>
        </Link>
        
        <Link href='../'>
            <a className='col-2'>home</a>
        </Link>
        <Link href='../sharp'>
            <a className='col-2'>sharp</a>
        </Link>
        <Link href='../contact_us'>
            <a className='col-2'> contact us </a>
        </Link>
        <Link href='./content'>
            <a className='col-2'> 3 حصان</a>
        </Link>
        {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a> */}
        <span className="col-9"></span>
        {/* <a href="#" className="icon" onClick="myFunction()">
            <i className="fa fa-bars"></i>

        <Link href='../'>
            <a className='col-2'>home</a>
        </Link>
        <Link href='../sharp'>
            <a className='col-2'>sharp</a>
        </Link>
        <Link href='../contact_us'>
            <a className='col-2'> contact us </a>
        </Link>
        </a> */}
    </nav>
)
export default Nav
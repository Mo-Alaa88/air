import Link from 'next/link'

const Nav =()=>(
    <nav className="topnav col-12" id="myTopnav">
        <a className='img-logo col-2'></a>
            {/* <img src='https://www.elarabygroup.com/skin/frontend/smartwave/elaraby/images/elaraby-group-logo.png' alt='Logo' className='clo-2'/> */}
        
        <Link href='../'>
            <a className='col-2'>home</a>
        </Link>
        <Link href='../sharp'>
            <a className='col-2'>sharp</a>
        </Link>
        {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a> */}
        {/* <a href="#" className="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a> */}
    </nav>
)
export default Nav
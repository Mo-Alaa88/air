import Link from 'next/link'

const Nav =()=>(
    <nav>
            <img src='https://www.elarabygroup.com/skin/frontend/smartwave/elaraby/images/elaraby-group-logo.png' alt='Logo' className='col-m-2'/>
        <div>
            <Link href='../'>
                <a className='col-m-2'>home</a>
            </Link>
            <Link href='../sharp'>
                <a className='col-m-2'>sharp</a>
            </Link>
        </div>
    </nav>
)
export default Nav
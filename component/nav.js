import Link from 'next/link'

const Nav =()=>(
    <nav>
        <img src='../images/logo.webp' alt= 'Logo'/>
        <Link href='../'>
            <a>home</a>
        </Link>
        <Link href='../sharp'>
            <a>sharp</a>
        </Link>
    </nav>
)
export default Nav
import Nav from "./nav";
import Footer from "./footer";

const Layout = (props)=>(
    <section>
        <Nav/>
        <section> 
           {props.children}
        </section>
        <Footer/>
    </section>
)
export default Layout
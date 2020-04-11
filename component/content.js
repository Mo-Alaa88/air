import DB from "../db/db";
import image from '../db/AH-AP24UHE/1.jpg';
const Content = ()=>(
    <>
        <h1>{DB.title}</h1>
        <img src={image}/>
    </>
)
export default Content;
import Card from "../Card";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import "./index.css"

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const cardList = [{name: "My Saved Library 1", date: "dd-mm-yyyy"},{name: "My Saved Library 1", date: "dd-mm-yyyy"},{name: "My Saved Library 1", date: "dd-mm-yyyy"},{name: "My Saved Library 1", date: "dd-mm-yyyy"},{name: "My Saved Library 1", date: "dd-mm-yyyy"}]

const MainPage = () => {
    const date = new Date()
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
const hours = date.getHours()
const minutes = date.getMinutes()
console.log(hours,minutes)

    return(
        <div>
    <div className="header-container">
      <div>
        <h3>Good Morning Akshay!</h3>
        <span>You are subscribed to retail plan</span>
      </div>
      <div className="cal-container">
        <div className="time-container">
        <FaRegCalendar/>
        <p>Today, {day} {month}</p> 
        <IoMdTime className="time-margin"/>
        <p>{hours}:{minutes > 10 ? minutes: `0${minutes}`}</p>
        </div>
        <div>
            <MdNotificationsNone/>
        </div>

      </div>
    </div>
    <div className="card-container">
        {cardList.map((eachItem) => <Card cardDetails  = {eachItem}/>)}
    </div>
    </div>
    )
}

export default MainPage
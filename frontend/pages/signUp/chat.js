import React,{useState} from "react"
import {io} from "socket.io-client"
import styles from "./chat.module.css"
import moment from "moment"

const socket = io("http://localhost:8100",{
  transports:["websocket"]
})

export default function Home(){
    const [name,setName] = useState("")
    const [list,setList] = useState([])

    let date = Date.now()
    let time = moment(date).format("dddd, MMMM, h:mm a")

    const handlePost=(e)=>{
        socket.emit("chat",{post:name})
    }

    socket.on("message",(data)=>{
        setList([...list,data])
    })

    return(
        <div className={styles.chatParent}>
        <h1> Chat with JAM Staff </h1>
        <br/>
        <div className={styles.chatInput}>
            <input type="text" placeholder="Message" required onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handlePost}>send</button>
        </div>
        {list.map((item)=>(
            <div className={styles.chatMessagesDiv}>
                <p>{item.post}</p>
                <p>{time}</p>
            </div>
        ))}
        </div>
    )
}


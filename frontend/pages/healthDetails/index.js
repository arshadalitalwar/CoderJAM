import React,{useState} from 'react'

const index = () => {
    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")
    const [bp,setBp] = useState("")
    const [diabetic,setDiabetic] = useState("")
    const [other,setOther] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        let patientData = {
            height:height,
            weight:weight,
            bp:bp,
            diabetic:diabetic,
            other:other
        }
        localStorage.getItem("patientHealthData")
        localStorage.setItem("patientHealthData",JSON.stringify(patientData))
    }

    return (
        <div>
            <h2>Patient Health Details</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Height in cms" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                <br/>
                <input type="text" placeholder="Weight in kgs" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                <br/>
                <input type="text" placeholder="blood preassure" value={bp} onChange={(e)=>setBp(e.target.value)}/>
                <br/>
                <input type="text" placeholder="diabetic limit" value={diabetic} onChange={(e)=>setDiabetic(e.target.value)}/>
                <br/>
                <input type="text" placeholder="menthion other health complecations" value={other} onChange={(e)=>setOther(e.target.value)}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default index

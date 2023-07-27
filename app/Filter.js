import {useState,useEffect} from 'react'

export default function Filter (props) {
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //       case "change": {
    //         return [...state];
    //       }
    //     }
    //   };

    // const [state,dispatch] = useReducer(reducer,[true,true,true,true])
    const removeDeviceHandler = (e) => {
        const removeDevice = e.target.innerText
        if (removeDevice === "A1000") {
            const newList = props.filterDevice
            newList[0] = !newList[0]
            props.onFilterDeviceChange([...newList])
        }
        else if (removeDevice === "A1030") {
            const newList = props.filterDevice
            newList[1] = !newList[1]
            props.onFilterDeviceChange([...newList])
        }
        else if (removeDevice === "A1031") {
            const newList = props.filterDevice
            newList[2] = !newList[2]
            props.onFilterDeviceChange([...newList])
        }
        else if (removeDevice === "A1042") {
            const newList = props.filterDevice
            newList[3] = !newList[3]
            props.onFilterDeviceChange([...newList])
        }

        if (e.target.className === "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded") {
            e.target.className = "bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        }        
        else if (e.target.className === "bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded") {
            e.target.className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        }
        // props.checkDeviceState(removeDevice)
    }
    const buttons = document.querySelectorAll(".shadow")
    // const changeColors = (removeDevice) => {
    //     if (removeDevice[0]) {
    //         buttons[0].style.backgroundColor = 'green'
    //     } else {buttons[0].style.backgroundColor = 'red'}
    //     if (removeDevice[1]) {
    //         buttons[1].style.backgroundColor = 'green'
    //     } else {buttons[1].style.backgroundColor = 'red'}
    //     if (removeDevice[2]) {
    //         buttons[2].style.backgroundColor = 'green'
    //     } else {buttons[2].style.backgroundColor = 'red'}
    //     if (removeDevice[3]) {
    //         buttons[3].style.backgroundColor = 'green'  
    //     } else {buttons[3].style.backgroundColor = 'red'}
    //     return
    // }
    // useEffect(changeColors(removeDevice),removeDevice)


    const deviceList = Object.keys(props.devices)
    return (
        <div style={{display: "flex" ,flexDirection: "column", alignItems: "center", width: "100%"}}>
            <div style={{fontSize: "25px"}}>
            Filter by Device
            </div>
            <div style={{display: "flex", justifyContent: 'space-around', gap: "20px"}}>
                {deviceList.map((device) => {
                return <button style={{border: "solid"}} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={removeDeviceHandler}>{device}</button>
                })}
            </div>

        </div>
    )
}
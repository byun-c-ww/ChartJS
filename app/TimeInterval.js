import BarGraph from './BarGraph'
const TimeInterval = (data) => {
    const devices = { 
        "A1000" : 0.3,
        "A1030" : 0.5,
        "A1031" : 0.7,
        "A1042" : 0.8,
    }
    const finalPrice = []

    if (Object.keys(data).length > 0) {
        for (let entry of data.data) {
            if (Object.keys(entry).length <= 1) break
            let start = entry['active_time']
            let finish = entry['release_time']
            let device = entry['product_name']
            let year = entry['release_date']
            let startSplit = start.split(":")
            let finishSplit = finish.split(":")
            let startTimeStamp = startSplit[0] * 3600 + startSplit[1] * 60 + startSplit[2]
            let finishTimeStamp = finishSplit[0] * 3600 + finishSplit[1] * 60 + finishSplit[2]
            let price = Math.abs(startTimeStamp-finishTimeStamp)
            finalPrice.push([year,price*devices[device]])
        }
    }
    console.log(finalPrice)
    
    return (
        <><BarGraph price={finalPrice}></BarGraph></>
    )
}

export default TimeInterval;
export default function HistoryEntry(props){

    const currentEntry= props.currentEntry
    return(
        <div className='blink'>
            <h2>{currentEntry.zeit}</h2>
            <h3>{currentEntry.name}</h3>
            <KeyPointList keyPoints={currentEntry.keyPoints}/>
            <p>{currentEntry.description}</p>
        </div>
    )
}
function ListItem(props){
    return(<li>{props.value}</li>)
}
function KeyPointList(props) {
    const keyPoints = props.keyPoints
    const keyPointItems = keyPoints.map((keyPointItem) =>
        <ListItem key={keyPointItem.toString()} value={keyPointItem} /> // <li>{keyPointItem}</li>   eski hali
    )
    return (<ul>{keyPointItems}</ul>)
}
  
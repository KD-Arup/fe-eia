import { GraphRow } from "./GraphRow"

export const InsetGraph = () => {
    const arrayOfObjects = [
        {percent: 0, name: 'domestic dwellings', count: 263},
        {percent: 0, name: 'domestic dwellings', count: 14},
        {percent: 0, name: 'historic monuments', count: 39}
    ]
    
    const maxCount = arrayOfObjects.reduce(function(prev, current) {
        return (prev.count > current.count) ? prev : current
    }).count;
    console.log(`maxCount:`);
    console.log(maxCount);
    arrayOfObjects.forEach((element) => {
        element.percent = Math.round(element.count / maxCount * 100);
    })
    return (
        <div key='inset-graph-card' className='inset-graph-card'>
            <p>Summary</p>
            <div className="graph-box" >
                {arrayOfObjects.map((bar) => {
                    return <GraphRow percent={bar.percent} name={bar.name} count={bar.count}/>
                })}
            </div>
        </div>
    )
}
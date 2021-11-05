import { GraphRow } from "./GraphRow"

export const InsetGraph = () => {
    const testBars = [
        {percent: 90, name: 'historic monuments'},
        {percent: 30, name: 'domestic dwellings'},
        {percent: 60, name: 'historic monuments'}
    ]
    return (
        <div key='inset-graph-card' className='inset-graph-card'>
            <p>Summary</p>
            <div className="graph-box" >
                {testBars.map((bar) => {
                    return <GraphRow percent={bar.percent} name={bar.name}/>
                })}
            </div>
        </div>
    )
}
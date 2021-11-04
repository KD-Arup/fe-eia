import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const TableRow = ({ receptor }) => {
    // console.dir(`printing receptor:${receptor}`)
    const [rowData, setRowData] = useState();
    const [locked, setLocked] = useState();


    const handleLock =() => {
        setLocked(!locked);
    }
    
    useEffect(()=>{
        setRowData(receptor)
        
        // .then((data)=>{
        //     // if (data.comments) {
                
        //     // }
        // }) 
    },[receptor])

    useEffect(() => {
        if (receptor.receptor_assessor_comments === '') {
            setLocked(false)
        } else {
            setLocked(true)
        }
    }, [receptor.receptor_assessor_comments])


    return (
        <tr key={receptor['receptor_id']+'rowNo '}>
            {Object.keys(receptor).map((key) => {
                    return(
                    <td key={receptor['receptor_id']+ `${key}`}>{receptor[key]}</td>
                )
            })}
            <button onClick={event => handleLock()}>
                {locked ? 'locked' : 'unlocked' }
            </button>
        </tr>
    )
}
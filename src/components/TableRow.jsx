import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TableRow = ({ receptor }) => {
    // console.dir(`printing receptor:${receptor}`)
    const [rowData, setRowData] = useState();
    const handleLock =() => {
        // 
    }
    const [locked, setLocked] = useState(false);

    useEffect(()=>{
        setRowData(receptor)
        // .then((data)=>{
        //     // if (data.comments) {
                
        //     // }
        // })
    },[])

    return (
        <tr key={receptor['receptor_id']+'rowNo '}>
            {Object.keys(receptor).map((key) => {
                return(
                    <td key={receptor['receptor_id']+ `${key}`}>{receptor[key]}</td>
                )
            })}
        </tr>
    )
}
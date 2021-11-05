import { useState, useEffect } from 'react';

import { DropDownCell } from './DropDownCell';
import { InputCell } from './InputCell';

export const TableRow = ({ receptor }) => {
    // console.dir(`printing receptor:${receptor}`)
    const [rowData, setRowData] = useState('');
    const [locked, setLocked] = useState();

    const handleLock =() => {
        setLocked(!locked);
    }
    
    useEffect(()=>{
        setRowData(receptor)
        if (receptor.receptor_assessor_comments === '') {
            setLocked(false)
        } else {
            setLocked(true)
        }
        // .then((data)=>{
        //     // if (data.comments) {
                
        //     // }
        // }) 
    },[receptor])
    
    return (
        <tr key={receptor['receptor_id']+'rowNo '}>
            <td>{receptor['receptor_id']}</td>
            <td>{receptor['receptor_name']}</td>
            <td>{receptor['receptor_source']}</td>
            <DropDownCell cellData={rowData.receptor_impact}
                          setRowData={setRowData} 
                          locked={locked}/>
            
            <InputCell  commentData={rowData.receptor_assessor_comments}
                        setRowData={setRowData} 
                        locked={locked}/>
            
            <td>{receptor['comment_date']}</td>
            <td>
                <button onClick={event => handleLock()}>
                    {locked ? 'locked' : 'unlocked' }
                </button>
            </td>
        </tr>
    )
}
import { useState, useEffect } from 'react';
import { postComment } from '../../utils/api';

import { DropDownCell } from './DropDownCell';
import { InputCell } from './InputCell';

export const TableRow = ({ receptor }) => {
    // console.dir(`printing receptor:${receptor}`)
    const [rowData, setRowData] = useState('');
    const [locked, setLocked] = useState();

    const handleLock =() => {
        const rowObj = {
            "newComment": {
            "receptor_id": rowData.receptor_id,
            "impact": rowData.impact,
            "comment": rowData.comment
            }
        }
        if(!locked){
            if (rowData.impact !== '' || rowData.comment !== '') {
                postComment(rowObj);
            }
        }
        // throws switch to opposite
        setLocked(!locked);

    }
    
    // console.log(receptor);
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
        <tr key={receptor.receptor_id +'rowNo '}>
            <td>{receptor.receptor_id}</td>
            <td>{receptor.type}</td>
            <td>{receptor.osm_id}</td>
            <DropDownCell cellData={receptor.impact}
                          setRowData={setRowData} 
                          locked={locked}/>
            
            <InputCell  commentData={rowData.comment}
                        setRowData={setRowData} 
                        locked={locked}/>
            <td>
                <button onClick={event => handleLock()}>
                    {locked ? 'locked' : 'unlocked' }
                </button>
            </td>
        </tr>
    )
}
import { useState, useEffect } from 'react';
import { postComment } from '../../utils/api';

import { DropDownCell } from './DropDownCell';
import { InputCell } from './InputCell';
import { getCommentsByReceptorID } from '../../utils/api';

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
    
    useEffect(()=>{
        setRowData(receptor)
        getCommentsByReceptorID(receptor.receptor_id)
        .then(response => {
            console.log(response[0].impact)
            console.log(response[0].comment)
            setRowData((currentRowData) => {
                return {...currentRowData, 
                        impact: response[0].impact, 
                        comment: response[0].comment}
            })
        })

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

    //console.log(rowData);
    
    return (
        <tr key={receptor.receptor_id +'rowNo '}>
            <td>{receptor.receptor_id}</td>
            <td>{receptor.type}</td>
            <td>{receptor.osm_id}</td>
            <DropDownCell cellData={rowData.impact}
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
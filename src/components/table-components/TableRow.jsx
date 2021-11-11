import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'


import { useState, useEffect } from 'react';
import { postComment } from '../../utils/api';

import { DropDownCell } from './DropDownCell';
import { InputCell } from './InputCell';
import { getCommentsByReceptorID } from '../../utils/api';

export const TableRow = ({ receptor, source, keyStringStart}) => {
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
                console.log('rowObj:');
                console.log(rowObj);
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
    },[receptor])

    return (
        <>
        <tr key={receptor.receptor_id +'rowNo '}
            style={
                {
                    "height": "fit-content"
                }
            }
        >
            <td>{receptor.receptor_id}</td>
            <td>{receptor.properties.desc}</td>
            <td>{receptor.type}</td>
            <td>{source}</td>
            <DropDownCell cellData={rowData.impact}
                          setRowData={setRowData} 
                          locked={locked}/>
            
            <InputCell  commentData={rowData.comment}
                        setRowData={setRowData} 
                        rowData={rowData}
                        locked={locked}
                        keyStringStart={keyStringStart}
                        />
            <td 
            className="lock_column"
            >
                <button onClick={event => handleLock()}
                style={
                    {
                        "border": "none",
                        "backgroundColor": "#ffffff",
                        "transition": "0.2s"
                    }}
                >
                    {locked ? <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> : <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon>}
                </button>
            </td>
        </tr>
        </>
    )
}
//
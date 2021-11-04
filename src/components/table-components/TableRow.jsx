import { useState, useEffect } from 'react';

import { DropDownCell } from './DropDownCell';

export const TableRow = ({ receptor, setProjectData}) => {
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

    console.log('receptor:')
    console.dir(receptor);
    return (
        <tr key={receptor['receptor_id']+'rowNo '}>
            <td>{receptor['receptor_id']}</td>
            <td>{receptor['receptor_name']}</td>
            <td>{receptor['receptor_source']}</td>

            <DropDownCell data={receptor.receptor_impact} setProjectData={setProjectData} locked={locked} />
            <td>{receptor['receptor_assessor_comments']}</td>

            <td>{receptor['comment_date']}</td>
            <td>
                <button onClick={event => handleLock()}>
                    {locked ? 'locked' : 'unlocked' }
                </button>
            </td>
        </tr>
    )
}
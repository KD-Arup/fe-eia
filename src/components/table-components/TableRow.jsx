import { useState, useEffect } from 'react';




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
            <td>{receptor['receptor_id']}</td>
            <td>{receptor['receptor_name']}</td>
            <td>{receptor['receptor_source']}</td>

            <td>
                {/* {receptor['receptor_impact']} */}
            <select name="impact" id="impactDropDown">
                <option value="Severe">Severe</option>
                <option value="Major">Major</option>
                <option value="Moderate">Moderate</option>
                <option value="Minor">Minor</option>
            </select>
            </td>
            <td>{receptor['receptor_assessor_comments']}</td>

            <td>{receptor['comment_date']}</td>
            
            <button onClick={event => handleLock()}>
                {locked ? 'locked' : 'unlocked' }
            </button>
        </tr>
    )
}
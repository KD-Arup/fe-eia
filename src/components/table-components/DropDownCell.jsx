import { useEffect, useState } from "react"

export const DropDownCell = ({ locked, data, setProjectData}) => {
    const [cellData, setCellData] = useState();
    useEffect(() => {
        setCellData(data);

    }, [locked]);

    //   At this point we will have an onChange function attached to select 
    //   that would use the setProjectData useState function.
    return (
        <td>
            {/* {receptor['receptor_impact']} */}
            {locked ? (
                cellData
            ): (
                <select name="impact" id="impactDropDown">
                    <option value="Severe">Severe</option>
                    <option value="Major">Major</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Minor">Minor</option>
                    <option value="Negligible">Negligible</option>
                </select>
            )}
            
        </td>
    )
}
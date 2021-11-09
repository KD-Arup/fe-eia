export const DropDownCell = ({ locked, cellData, setRowData }) => {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRowData(values => ({...values, [name]: value}))
        // patchRowData
      }


    return (
        <td>
            {locked ? cellData : <select name="impact" 
                                        id="impactDropDown"
                                        defaultValue ={cellData}
                                        onChange={(event) => {handleChange(event)}}>
                                    <option value="Severe">Severe</option>
                                    <option value="Major">Major</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Minor">Minor</option>
                                    <option value="Negligible">Negligible</option>
                                </select>
            }
            
        </td>
    )
}
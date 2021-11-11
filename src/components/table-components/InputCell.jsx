import { useEffect, useState } from "react";

export const InputCell = ({ locked, commentData, rowData, setRowData, keyStringStart }) => {
  const [ cellData, setCellData ] = useState(commentData);

  useEffect(()=>{
    setCellData(commentData)
  },[commentData]);
  
    const handleChange = (event) => {
      const value = event.target.innerText;
      setCellData(value);
    }
  
  const handleBlur = (event) => {
    setRowData(values => ({...values, ['comment']: cellData}))
  }
 
  return (
      <td key={`input${keyStringStart}`}
      contentEditable={locked ? 'false' : 'true'}
      suppressContentEditableWarning={true}
      style={
        {
            "height": "fit-content"
        }
      }
      onBlur={handleBlur}
      onKeyUp={handleChange}
      >
        {rowData.comment}
      </td>
  )
}
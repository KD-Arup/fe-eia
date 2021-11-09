import { useState, useContext } from "react";
import { TableContext } from '../../wrappers/TableContext'

export const InputCell = ({ locked, commentData, setRowData }) => {
  const [comment, setComment] = useState({ receptor_assessor_comments: ''});

  const { projData, setProjData } = useContext(TableContext);
  // console.log(projData)


  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setRowData(values => ({...values, [name]: value}))
    }
  
  return (
      <td>
          {locked ? commentData : <input type="text" 
                                      id="commentInput" 
                                      name="comment"
                                      placeholder='add comment'
                                      onChange={handleChange} 
                                      />
          }
      </td>
  )
}
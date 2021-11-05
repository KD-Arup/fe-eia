import { useState } from "react";

export const InputCell = ({ locked, receptorComment, setRowData }) => {
  const [comment, setComment] = useState({ receptor_assessor_comments: ''});


  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setComment(values => ({...values, [name]: value}))
    }
    // patchRowData on blur


  return (
      
      <td>
          {locked ? receptorComment : <input type="text" 
                                      id="commentInput" 
                                      name="receptor_assessor_comments"
                                      onChange={handleChange}
                                      onBlur={console.log('about to send some api data')} 
                                      />
          }
      </td>
  )
}
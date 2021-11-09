export const InputCell = ({ locked, commentData, setRowData }) => {
  
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
                                      value={commentData}
                                      onChange={handleChange} 
                                      />
          }
      </td>
  )
}
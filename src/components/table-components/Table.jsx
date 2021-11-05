import '../../styles/project-table.css';
import { TableRow } from './TableRow';
// const testData = require('../data/testReceptorData.json');

// exports a distinct table component
export const Table = ({ categoryObj, setProjectData }) => {
    const receptors = categoryObj.receptors;
    
    return (
        <section key='project_table_container' className='project_table_container'>
            <h3 key={categoryObj.category}>{categoryObj.category}</h3> 

            <table key={categoryObj.category+'Table'}>

                <thead key={categoryObj.category+'Head'}>
                    <tr key="headerRow">
                        {Object.keys(receptors[0]).map((key) => {
                            return (
                                <th key={key}>{key}</th>
                                )
                            })
                        }
                        <th>edit</th>
                    </tr>
                </thead>

                <tbody key={categoryObj.category+'Body'}>
                {receptors.map((receptor) => {
                    return (
                        <TableRow 
                            key={receptor.receptor_id + 'row'} 
                            receptor={receptor} 
                        />
                        )
                    }
                )}
                </tbody>

            </table>
        </section>
    )
}
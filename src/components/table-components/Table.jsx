import '../../styles/project-table.css';
import { TableRow } from './TableRow';
// const testData = require('../data/testReceptorData.json');


export const Table = ({ categoryObj, setProjectData }) => {
    const receptors = categoryObj.receptors;
    //console.log('here are the receptors\n', receptors);
    console.log('here is the category object\n');
    console.dir(categoryObj)
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
                            key={receptor.receptor_id + 'row-'} 
                            receptor={receptor} 
                            setProjectData={setProjectData}/>
                        )
                    }
                )}
                </tbody>
            </table>
        </section>
    )
}
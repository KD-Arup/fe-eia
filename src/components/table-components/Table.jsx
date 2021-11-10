import '../../styles/project-table.css';
import { TableRow } from './TableRow';
// const testData = require('../data/testReceptorData.json');

// exports a distinct table component
export const Table = ({ receptors, category }) => {
    console.log(receptors);
    let heading = ''
    if (category.keywords === 'water') {
        heading = `${category.category} - waterbody`
    } else {
        heading = `${category.category} - ${category.keywords}`
    }
    
    if (receptors.length > 0) {
        return (
            <section key='project_table_container' className='project_table_container'>
                <h3 key='Receptors'>{heading}</h3> 
    
                <table key={'Table'}>
    
                    <thead key={'TableHead'}>
                        <tr>
                            <th>{'receptor_id'}</th>
                            <th>{'type'}</th>
                            <th>{'osm_id'}</th>
                            <th>{'impact'}</th>
                            <th>{'comment'}</th>
                            {/* {Object.keys(receptors[0]).map((key) => {
                                return (
                                    <th key={key}>{key}</th>
                                    )
                                })
                            } */}
                            <th>edit</th>
                        </tr>
                    </thead>
    
                    <tbody key={'Body'}>
                    {receptors.map((receptor) => {
                        return (
                            <TableRow 
                                key={receptor.receptor_id} 
                                receptor={receptor} 
                            />
                            )
                        }
                    )}
                    </tbody>
    
                </table>
            </section>
        )
    } else{
        return(
            <section key='project_table_container' className='project_table_container'>
                <h3 key='Receptors'>{heading}</h3> 
                <h4>Not Used</h4>
            </section>
        )
    }
    
}
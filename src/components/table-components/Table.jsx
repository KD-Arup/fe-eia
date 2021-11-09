import '../../styles/project-table.css';
import { TableRow } from './TableRow';
// const testData = require('../data/testReceptorData.json');

// exports a distinct table component
export const Table = ({ receptors }) => {
    // console.log('receptors');
    // console.log(receptors);
    return (
        <section key='project_table_container' className='project_table_container'>
            <h3 key='Receptors'>Receptors</h3> 

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
}
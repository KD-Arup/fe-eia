import '../../styles/project-table.css';
import { TableRow } from './TableRow';

// exports a distinct table component
export const Table = ({ receptors, category }) => {
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
                            <th>{'Receptor_id'}</th>
                            <th>{'Description'}</th>
                            <th>{'Type'}</th>
                            <th>{'Source'}</th>
                            <th>{'Impact'}</th>
                            <th>{'Comment'}</th>
                            <th className={'lock_column'}></th>
                        </tr>
                    </thead>
    
                    <tbody key={'Body'}>
                    {receptors.map((receptor) => {
                        return (
                            <TableRow 
                                key={`receptor-${receptor.receptor_id}-${category.category}`} 
                                receptor={receptor} 
                                source={category.source}
                                keyStringStart={`receptor-${receptor.receptor_id}-${category.category}`} 
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
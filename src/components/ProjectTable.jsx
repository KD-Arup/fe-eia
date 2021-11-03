import '../styles/project-table.css';
import { Table } from './Table';
const file  = require('../data/testReceptorData.json');

const testData = file.data;

export const ProjectTable = () => {
    
    return (
        <section className='project_table_container'>
            {testData.map((categoryObj) => {
                return (
                    <Table/>
                )
            })}
        </section>
    )
}
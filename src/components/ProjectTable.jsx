import '../styles/project-table.css';
const file  = require('../data/testReceptorData.json');

const testData = file.data;

export const ProjectTable = () => {
    
    return (
        <section className='project_table_container'>
            {testData.map((categoryObj) => {
                return (
                    <p>Hello</p>
                )
            })}
        </section>
    )
}
import '../styles/project-table.css';
const file  = require('../data/testReceptorData.json');

const testData = file.data;

export const Table = (props) => {
    const { categoryObj } = props;
    const receptors = categoryObj.receptors;
    return (
        <section className='project_table_container'>
            <h3>Historic Monuments</h3>
            <table>
                {Object.keys(receptors[0]).map((key)=>{
                    <th>{key}</th>
                })}
                {receptors.map((receptor) => {
                    return (
                        <p>Hello</p>
                    )
                })}
            </table>
        </section>
    )
}
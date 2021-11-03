import '../styles/project-table.css';
const testData = require('../data/testReceptorData.json');

export const Table = (props) => {
    ///const { categoryObj } = props;
    const receptors = testData.data[0].receptors;
    console.log('here are the receptors\n', testData);
    return (
        <section className='project_table_container'>
            <h3>Historic Monuments</h3>
            <table>
                <tr>
                    {Object.keys(receptors[0]).map((key) => {
                        return (
                            <th key={key}>{key}</th>
                            )
                        })
                    }
                </tr>
                

                {receptors.map((receptor) => {
                    return (
                        <tr>
                        {Object.keys(receptor).map((key) => {
                            return(
                                <td key={receptor['receptor_id']+ `${key}`}>{receptor[key]}</td>
                            )
                        })}
                        </tr>
                        )
                    }
                )}
            </table>
        </section>
    )
}
import React from 'react';
import _ from 'lodash';
const TableBody = ({ movies, columns }) => {

    let renderColumn = (movie, column) => {
        if (column.content) {
            return column.content(movie)
        }
        return _.get(movie, column.path)
    }
    return (
        <tbody>
            {
                movies.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            {
                                columns.map((p, index) => <td key={index}>{renderColumn(item, p)}</td>)
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default TableBody;
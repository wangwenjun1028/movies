import React from 'react'
const TableHead = ({ columns }) => {
    return (<thead>
        <tr>
            {
                columns.map((item, idx) => {
                    return (
                        <th key={idx}><span>{item.label}</span></th>
                    )
                })
            }
        </tr>
    </thead>);
}

export default TableHead;
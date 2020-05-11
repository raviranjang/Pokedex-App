import React from 'react'
import './TableList.css'


const TableList = ({ itemList }) => {
    
    return (
        <div class="table-users">
            <div class="header">Pokemon List</div>
        
            <table cellspacing="0">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Abilities</th>
                    <th>Weakness</th>
                </tr>

                {itemList.map((item, index) => (
                    <tr key={index}>
                        <td><img src={`${item.ThumbnailImage}`} alt={item.ThumbnailAltText} /></td>
                        <td>{item.name}</td>
                        <td>{item.type[0]}</td>
                        <td>{item.abilities[0]}</td>
                        <td>{item.weakness[0]}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default TableList
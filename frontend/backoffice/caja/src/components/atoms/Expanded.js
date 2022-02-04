import React from 'react';
import DataTable from 'react-data-table-component';

import './css/Expanded.css'

const columns = [
	{
		name: 'Nombre',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'cantidad',
		selector: row => row.quantity,
		sortable: true,
	},
	{
		name: '$',
		selector: row => row.price,
		sortable: true,
	},
];

function Expanded ({data}) {
    return (
        <div className="expanded-container">
            <DataTable
                columns={columns}
                data={data.products}
                selectableRows
            />
        </div>
    );
};

export default Expanded
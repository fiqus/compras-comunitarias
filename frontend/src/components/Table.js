import React, { useState, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import DataTable from 'react-data-table-component';
import './css/Table.css'

import TableHeader from './atoms/TableHeader';
import Expanded from './atoms/Expanded';

import { ordersState } from '../state';

const columns = [
	{
		name: 'Nombre',
		selector: row => row.user.name,
		sortable: true,
	},
	{
		name: 'Email',
		selector: row => row.user.email,
		sortable: true,
	},
	{
		name: 'Estado',
		selector: row => row.status,
		sortable: true,
	},
	{
		name: 'Total',
		sortable: true,
		selector: row => {
			let total = 0;
			for(const product of row.products) {
				total += parseFloat(product.price);
			}
			return `$ ${total}`;
		}
	},
	
];

const conditionalRowStyles = [
	{
		when: row => row.status === "paid",
		style: {
			backgroundColor: '#70D49B',
			color: 'white',
		},
	},
	{
		when: row => row.status === "inside",
		style: {
			backgroundColor: '#ec9867',
			color: 'white',
		},
	},
	{
		when: row => row.status === "cancel",
		style: {
			backgroundColor: '#df6279',
			color: 'white',
		},
	},
];

function Table() {
	const [orders, _setOrders] = useRecoilState(ordersState);

	const [filterText, setFilterText] = useState('');
	const [selectedRows, setSelectedRows] = useState([]);
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	
	const filteredItems = orders.filter(
		item => item.user.name && item.user.name.toLowerCase().includes(filterText.toLowerCase()),
	);


	const handleChange = ({ selectedRows }) => {
		setSelectedRows(selectedRows);
	};

	const TableHeaderMemo = useMemo(() => {
		return <TableHeader 
			filterText={filterText} 
			setFilterText={setFilterText} 
			resetPaginationToggle={resetPaginationToggle} 
			setResetPaginationToggle={setResetPaginationToggle} 
			selectedRows={selectedRows} />
	}, [filterText, resetPaginationToggle, selectedRows]);

	return (
		<div className="table-container">
			<DataTable
				columns={columns}
				data={filteredItems}
				pagination
				paginationResetDefaultPage={resetPaginationToggle}
				subHeader
				subHeaderComponent={TableHeaderMemo}
				persistTableHead
				expandableRows
				expandableRowsComponent={Expanded}
				selectableRows
      			onSelectedRowsChange={handleChange}
				conditionalRowStyles={conditionalRowStyles}
			/>
		</div>
	);
};

export default Table;
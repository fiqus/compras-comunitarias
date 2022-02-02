import React, { useState, useMemo } from 'react';

import DataTable from 'react-data-table-component';
import styled from 'styled-components';

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

import ActionButton from './ActionButton'
import './css/Table.css'


const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<div style={{"display": "flex", "flexDirection": "row"}}>
		<TextField
			id="search"
			type="text"
			placeholder="Filtrar por nombre"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			<FontAwesomeIcon icon={faUndo}></FontAwesomeIcon>
		</ClearButton>
	</div>
);

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data.products)}</pre>;

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
	}
];

function Table({orders}) {
	const [filterText, setFilterText] = useState('');
	const [selectedRows, setSelectedRows] = useState([]);
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = orders.filter(
		item => item.user.name && item.user.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};


		return (
			<div style={{"display": "flex", "flexDirection": "row", "alignItems": 'center'}}>
				Marcar como:
				<ActionButton icon={faClock} name={"Para Retirar"} action={() => console.log()}></ActionButton>
				<ActionButton icon={faShoppingBag} name={"Retirando"} action={() => console.log()}></ActionButton>
				<ActionButton icon={faThumbsUp} name={"Entregado"} action={() => console.log()}></ActionButton>
				<ActionButton icon={faThumbsDown} name={"Cancelado"} action={() => console.log()}></ActionButton>
				<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
			</div>
		);
	}, [filterText, resetPaginationToggle, selectedRows]);

	const handleChange = ({ selectedRows }) => {
		setSelectedRows(selectedRows);
	};

	return (
		<div className="table-container">
			<DataTable
				columns={columns}
				data={filteredItems}
				pagination
				paginationResetDefaultPage={resetPaginationToggle}
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				persistTableHead
				expandableRows
				expandableRowsComponent={ExpandedComponent}
				selectableRows
      			onSelectedRowsChange={handleChange}
			/>
		</div>
	);
};

export default Table;
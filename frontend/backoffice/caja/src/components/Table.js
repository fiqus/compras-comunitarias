import React from 'react';
import styled from 'styled-components';
import './css/Table.css'

import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const fakeUsers = [
	{
		id: 1,
		name: "Joaco Mansilla",
		email: "Joaco@test.com",
		address: "Av. Siempre Viva 123",
	},
	{
		id: 2,
		name: "Jero Clinaz",
		email: "Jero@test.com",
		address: "Av. Siempre Viva 321",
	}
]

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
	<>
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
	</>
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
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = orders.filter(
		item => item.user.name && item.user.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (

			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<div className="table-container">
			<DataTable
				columns={columns}
				data={filteredItems}
				pagination
				paginationResetDefaultPage={resetPaginationToggle}
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				selectableRows
				persistTableHead
				expandableRows
				expandableRowsComponent={ExpandedComponent}
			/>
		</div>
	);
};

export default Table;
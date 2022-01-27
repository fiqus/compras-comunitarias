import { MDBDataTable } from 'mdbreact';

function Table() {
    const data = {
        columns: [
            {
            label: 'Nombre',
            field: 'name',
            sort: 'asc',
            width: 150
            },
            {
            label: 'DNI',
            field: 'dni',
            sort: 'asc',
            width: 270
            },
            {
            label: 'Productos',
            field: 'products',
            sort: 'asc',
            width: 200
            },
            {
            label: 'Cantidad',
            field: 'quantity',
            sort: 'asc',
            width: 100
            },
            {
            label: '$',
            field: 'total',
            sort: 'asc',
            width: 150
            },
            {
            label: 'Acciones',
            field: 'Actions',
            sort: 'asc',
            width: 100
            }
        ],
        rows: [
            {
                "name": "Joaquin Mansilla",
                "dni": 40183369,
                "products": [],
                "quantity": [],
                "total": 220,
                "Actions": []
            },
            {
                "name": "Jeronimo Clinaz",
                "dni": 40183369,
                "products": [],
                "quantity": [],
                "total": 220,
                "Actions": []
            },
            {
                "name": "Joaquin Mansilla",
                "dni": 40183369,
                "products": [],
                "quantity": [],
                "total": 220,
                "Actions": []
            },
            {
                "name": "Joaquin Mansilla",
                "dni": 40183369,
                "products": [],
                "quantity": [],
                "total": 220,
                "Actions": []
            }
        ]
    };
    return (
        <div style={{"width": "85%", "marginTop": "5rem"}}>
            <MDBDataTable
                striped
                bordered
                small
                data={data}
            />
        </div>
    );
}

export default Table;

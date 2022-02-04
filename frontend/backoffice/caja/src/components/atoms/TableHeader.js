import React from 'react';
import TableFilter from './TableFilter';

import { useRecoilState } from 'recoil';

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import ActionButton from '../ActionButton';
import { httpPost } from '../../apiClient';
import { userTokensState } from '../../state';

const TableHeader = ({
    selectedRows,
    filterText, setFilterText, 
    resetPaginationToggle, setResetPaginationToggle
}) => {

    const [userTokens, _setUserTokens] = useRecoilState(userTokensState);
    
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    const changeStatus = (newStatus) => {
        for (const row of selectedRows) {
            httpPost(
                "/order/change_status", 
                {"order_id": row.id, "status": newStatus}, 
                {"Authorization": `Token ${userTokens.token}`}
            );
        }
    };

    return (
        <div style={{"display": "flex", "flexDirection": "row", "alignItems": 'center'}}>
            Marcar como:
            <ActionButton icon={faClock} name={"Para Retirar"} action={() => changeStatus("await")}></ActionButton>
            <ActionButton icon={faShoppingBag} name={"Retirando"} action={() => changeStatus("inside")}></ActionButton>
            <ActionButton icon={faThumbsUp} name={"Entregado"} action={() => changeStatus("paid")}></ActionButton>
            <ActionButton icon={faThumbsDown} name={"Cancelado"} action={() => changeStatus("cancel")}></ActionButton>
            <TableFilter onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        </div>
    );
};

export default TableHeader;
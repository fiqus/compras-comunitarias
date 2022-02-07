import React from 'react';
import '../App.css'

import StatusBar from '../components/StatusBar'
import Table from '../components/Table'

function MainPage() {
    return (
        <div className="app-container">
            <div className="listing-name"> 
                8va Compra de Verduras Agroecologicas 
            </div>
            <StatusBar></StatusBar>
            <Table></Table>
        </div>
    )
};

export default MainPage;
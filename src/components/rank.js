import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ranking from '../ranking.js';
export default function BasicDemo() {
    const [topCities, setTopCities] = useState([]);

    useEffect(() => {
        ranking.getTopCitiesByArticleCount().then(data => setTopCities(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={topCities} tableStyle={{ minWidth: '50rem' }}>
                <Column field="city_id" header="縣市"></Column>
                <Column field="articleCount" header="文章數"></Column>
            </DataTable>
        </div>
    );
}
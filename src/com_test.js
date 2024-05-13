
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './test.css'

export default function Testa() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            
        </>
    );

    return (
        <>
        <div className="hero">
            <div>Name</div>
        </div>
        
 
 
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                   c8
                </p>
            </Card>
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                   c8
                </p>
            </Card>
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                   c8
                </p>
            </Card>
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                   c8
                </p>
            </Card>
        </div>
        </>
    )
}
        
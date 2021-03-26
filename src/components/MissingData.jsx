import React from 'react';
import '../styles/styleMissingData.css';

const MissingData = ({input}) => {
    return(
        <>
            <div className="missing-data">
                <p className="missing-data-p">{'Din sökning på "' + input + '" gav inga resultat.'}</p>
            </div>
            
        </>
    );
}

export default MissingData;
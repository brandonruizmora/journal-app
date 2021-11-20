import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{ backgroundSize: 'cover', backgroundImage: 'url(https://i2.wp.com/imagenesparapeques.com/wp-content/uploads/2021/01/Among-Us-imagenes-en-png.png?fit=1288%2C1666&ssl=1)' }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia...</p>
                <p className="journal__entry-content">lorem kdksdvmfkvfsdvk kdmaskvafkv</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

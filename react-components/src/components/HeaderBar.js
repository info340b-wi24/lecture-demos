import React from 'react';

export function HeaderBar(props) {
    
    return (
        <header>
            <h1 className="text-light px-5 py-4">Tim Carlson</h1>
            <div className="container">
                <p>University of Washington iSchool</p>
                <p>
                    <a href="http://getbootstrap.com/" className="btn btn-success">Built with Bootstrap</a>
                </p>
            </div>
        </header>
    )
}
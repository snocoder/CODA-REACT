import React from 'react';
import {Link} from "react-router-dom";

export default function NotFound404() {
    return (
        <div style={{
            paddingTop: '15rem'
        }}>
            <div
                style={{height: '100vh', textAlign: 'center'}}
            >
                <h2 className="text-center">Sorry, can’t find page.</h2>
                <br/>
                <Link to={{pathname: '/recipe'}}
                      style={{textDecoration: 'none', color: '#44475B'}}>
                    <button style={{
                        padding: '10px 15px',
                        cursor: 'pointer'
                    }}>Go To Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
}

import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '200px',
    }}>
        <div style={{
            border: '5px solid hotpink',
            padding: '10px 20px 10px 20px',
        }}>
            <Link to="/blogIndex/" style={{textDecoration: 'none'}}>
                <h3 style={{
                    color: 'hotpink',
                    fontSize: '50px',
                }}>
                    My Blog Posts
                </h3>
            </Link>
        </div>
    </div>
)
import React from 'react';
import { Link } from 'gatsby';

export default () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '200px'
    }}>
        <Link to="/blogIndex/">
            <h3 style={{
                color: 'hotpink',
                fontSize: '50px'
            }}>
                My Posts
            </h3>
        </Link>
    </div>
)
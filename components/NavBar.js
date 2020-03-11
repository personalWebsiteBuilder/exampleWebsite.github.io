import React from 'react';
import Link from 'next/link';

import colors from '../common/colors'

export const Navbar = () => {
    return (
        <>
        <header>
            <div className="container">
                <Link href="/">
                    <img />
                </Link>
            </div>
        </header>
        <style jsx>{`
        container {
            background-color: ${colors.purple};
        }
        `}</style>
        </>
    )
}

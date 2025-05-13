'use client';
import React from 'react';
import Image from 'next/image';

const DropdownList = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="filter-trigger">
                    <figure>
                        <Image
                            src="/assets/icons/hamburger.svg"
                            alt="menu"
                            width={14}
                            height={14}
                        />
                        Most Recent
                    </figure>
                    <Image
                        src="/assets/icons/arrow-down.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            {isOpen && (
                <div className="dropdown">
                    <ul className="dropdown">
                        {['Most Recent', 'Most Popular', 'Most Liked'].map((option) => (
                            <li key={option} className="dropdown-item">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownList;
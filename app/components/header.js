import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b w-full">
      <div className="flex items-center space-x-2 md:space-x-4">
        <UserIcon className="w-6 h-6 text-gray-700" />
        <span className="font-bold text-xs sm:text-sm md:text-base">Smit Tankaiya</span>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="font-bold text-xs sm:text-sm md:text-base">Front-end Developer</span>
        <SearchIcon className="w-6 h-6 text-gray-700" />
      </div>
    </header>
  );
}

export default Header;

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

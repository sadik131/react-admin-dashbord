import React from 'react';

function Footer() {
  return (
    <footer className="dark:bg-slate-900 bg-white text-center mt-4 py-4">
      <p className="text-sm text-gray-800 dark:text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

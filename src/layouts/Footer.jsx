import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-center mt-4 py-4">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

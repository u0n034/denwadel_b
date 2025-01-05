import React from 'react';

const XLogo = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookLogo = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-5 h-5 fill-current"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

export const SocialLinks = () => {
  return (
    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
      <a 
        href="https://x.com/denwadel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-white transition-colors"
        aria-label="X（旧Twitter）でフォロー"
      >
        <XLogo />
      </a>
      <a 
        href="https://facebook.com/denwadel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-white transition-colors"
        aria-label="Facebookでフォロー"
      >
        <FacebookLogo />
      </a>
    </div>
  );
};
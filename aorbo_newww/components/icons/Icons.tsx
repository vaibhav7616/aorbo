import React from 'react';

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const AorboLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 403 154" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZMAAACYCAYAAAAeVrG3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGgAAA4dSURBVHhe7d3/S9t3fcfxbyAQAiGBQBIISCAQCAQCgUAgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IgEAjkQ0IggIArs4aHR0cDovL3dpdG5ld3MudGFudC5jb20uYXUvMjAxMC8wNy8xNS9idXNzaGZpcmUtZnVuZC1ub3ctMjQwLW1pbGxpb24tYS15ZWFyLw==" height="154" width="403" />
    </svg>
);


export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12h18M3 12a9 9 0 009 9m-9-9a9 9 0 019-9" />
    </svg>
);

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

export const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 35.9-64.4 71.5-64.4-24.3-39-59.3-64.4-100-64.4-44.3 0-80.1 26.2-102.3 26.2-21.9 0-54.9-25.6-96.1-25.6-51.5 0-94.3 35.8-121.2 86.1-30.3 56.4-12.7 137.9 14.5 197.3 27.2 59.4 59.7 129.2 104.2 129.2 43.3 0 58.2-27.1 104.2-27.1s61.2 27.1 104.2 27.1c44.9 0 77.4-69.8 104.2-129.2 26.9-59.4 45.1-140.9 14.5-197.3-15.1-28.2-40.3-51.5-71.5-64.4zM245.3 105.4c14.2-16.1 23.3-38.6 23.3-61.1 2.3-.2 4.6-.4 6.9-.4 24.3 0 45.1 20.3 45.1 45.1 0 25.2-20.3 45.1-45.1 45.1-2.3 0-4.6-.2-6.9-.4-1.2-16.1-7.8-31.9-23.3-61.1z"/>
    </svg>
);
export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L103.6 13 47 269.3 47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
    </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.52 3.379 4.734 3.419a9.9 9.9 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.963 13.963 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

export const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`animate-spin ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h17" />
    </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 10C8.433 10 10 8.433 10 6.5S8.433 3 6.5 3 3 4.567 3 6.5 4.567 10 6.5 10zM17.5 10c1.933 0 3.5-1.567 3.5-3.5S19.433 3 17.5 3 14 4.567 14 6.5s1.567 3.5 3.5 3.5zm-11 1.5c-2.488 0-4.5 2.012-4.5 4.5v.5h9v-.5c0-2.488-2.012-4.5-4.5-4.5zm11 0c-2.488 0-4.5 2.012-4.5 4.5v.5h9v-.5c0-2.488-2.012-4.5-4.5-4.5z"/>
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const RupeeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M12 12.75h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm.008-3h.008v.008H12.008v-.008Zm3 3h.008v.008H15v-.008Zm0-3h.008v.008H15v-.008Zm3 3h.008v.008H18v-.008Zm0-3h.008v.008H18v-.008Zm-12 3h.008v.008H6v-.008Zm0-3h.008v.008H6v-.008Z" />
    </svg>
);

export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);

export const MountainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12.093 4.22 6.255a.75.75 0 0 0 1.198-.033l1.5-2.25 1.144 2.06a.75.75 0 0 0 1.366-.021l4.012-7.021a.75.75 0 0 0-.21-1.03l-4.012-3.01a.75.75 0 0 0-.948 0l-1.426 1.07-4.22-6.255a.75.75 0 0 0-1.198.033L2.25 12.093Z" />
    </svg>
);

export const WaveIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h8.25a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25-2.25H8.25a2.25 2.25 0 0 1-2.25-2.25v-3.75a2.25 2.25 0 0 1 2.25-2.25Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v-3.75a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 12.75v3.75m-18 0A2.25 2.25 0 0 0 5.25 18.75h13.5A2.25 2.25 0 0 0 21 16.5m-18 0h18" />
    </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

export const CloudRainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h-1.26A8 8 0 104 16.25V17a4 4 0 004 4h10a4 4 0 004-4v-1.25A6 6 0 0018 10zM12 18v3M16 18v3M8 18v3" />
    </svg>
);

export const BuildingLibraryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
);

export const ForestIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-2.36-1.353m-2.36 1.353a3 3 0 0 1 2.36 1.353m0-1.353v-3.414m2.36 1.353a3 3 0 0 1-4.72 0m4.72 0a3 3 0 0 0-2.36-1.353m-2.36 1.353a3 3 0 0 1 2.36 1.353m0-1.353v-3.414m-2.36 1.353a3 3 0 0 0 0 2.706m-2.36-4.06a3 3 0 0 1 4.72 0m-2.36-1.353a3 3 0 0 0 0-2.706m-2.36 4.06a3 3 0 0 0 4.72 0" />
    </svg>
);

export const TempleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h5.25a3.375 3.375 0 0 1 3.375 3.375v1.875" />
    </svg>
);

export const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string, open?: boolean }> = ({ className, open }) => (
    <svg className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

export const DocumentScannerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5a7.5 7.5 0 1 0 7.5 7.5h-7.5V4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75A10.5 10.5 0 0 0 14.25 8.25A10.5 10.5 0 0 0 3.75 18.75Z" />
    </svg>
);
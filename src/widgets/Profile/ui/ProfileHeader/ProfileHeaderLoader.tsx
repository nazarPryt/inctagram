'use client'
import ContentLoader from 'react-content-loader'

export const ProfileHeaderLoader = () => (
    <ContentLoader
        speed={2}
        width={752}
        height={205}
        viewBox='0 0 700 205'
        backgroundColor='#888181'
        foregroundColor='#f1e9e9'
    >
        <rect x='192' y='39' rx='3' ry='3' width='182' height='32' />
        <circle cx='87' cy='97' r='87' />
        <rect x='191' y='88' rx='3' ry='3' width='92' height='32' />
        <rect x='191' y='137' rx='3' ry='3' width='412' height='87' />
        <rect x='463' y='38' rx='3' ry='3' width='136' height='32' />
        <rect x='308' y='88' rx='3' ry='3' width='87' height='32' />
        <rect x='415' y='88' rx='3' ry='3' width='86' height='32' />
    </ContentLoader>
)

/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'หน้าหลัก',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboards'
    },
    {
        id: 'report',
        title: 'รายงาน',
        type: 'basic',
        icon: 'heroicons_outline:document-chart-bar',
        link: '/report',
    },
    {
        id: 'settings',
        title: 'ตั้งค่า',
        type: 'aside',
        icon: 'heroicons_outline:cog-6-tooth',
        children: [
            {
                id: 'settings.system',
                title: 'ตั้งค่าบริษัท',
                type: 'basic',
                icon: 'heroicons_outline:building-office-2',
                link: '/companies',
            },
            {
                id: 'settings.user',
                title: 'ตั้งค่าผู้ใช้',
                type: 'basic',
                icon: 'heroicons_outline:user',
                link: '/users',
            },
            
        ],
    },
];

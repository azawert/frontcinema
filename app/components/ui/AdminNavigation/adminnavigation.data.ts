import { INavigationItem } from '@/ui/AdminNavigation/adminnavigation.interface'

import { getAdminHomeUrl, getAdminUrl } from '../../../config/url.config'

export const navigationItems: INavigationItem[] = [
	{
		link: getAdminHomeUrl(),
		title: 'Statistics',
	},
	{
		link: getAdminUrl('users'),
		title: 'Users',
	},
	{
		link: getAdminUrl('movies'),
		title: 'Movies',
	},
	{
		link: getAdminUrl('actors'),
		title: 'Actors',
	},
	{
		link: getAdminUrl('genres'),
		title: 'Genres',
	},
]

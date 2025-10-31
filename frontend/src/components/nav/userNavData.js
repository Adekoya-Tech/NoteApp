import {
	images,
	Icons
} from '../images';
// import NoteIcon from '../../assets/note.svg'
import eventsIcon from '../../assets/events.svg';
import archiveIcon from '../../assets/archive.svg';
import notesIcon from '../../assets/note.svg';
import todoIcon from '../../assets/todo.svg';
import settingIcon from '../../assets/setting.svg';

export const userNavs = [
	{
		icon: Icons.NoteIcon,
		name: 'Notes',
		numOfItems: 10,
		path: '/notes',
	},
	{
		icon: Icons.TodoIcon,
		name: 'Todos',
		numOfItems: 10,
		path: '/todos',
	},
	{
		icon: Icons.EventsIcon,
		name: 'Events',
		numOfItems: 2,
		path: '/events',
	},
	{
		icon: Icons.ArchiveIcon,
		name: 'Archives',
		numOfItems: 10,
		path: '/archives',
	},
	{
		icon: Icons.SettingIcon,
		name: 'Settings',
		path: '/settings',
	},
];

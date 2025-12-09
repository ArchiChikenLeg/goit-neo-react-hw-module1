import clsx from "clsx";
import css from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div className = {css.friendListItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.itemName}>{name}</p>
            <p className={clsx(css.itemStatus, isOnline && css.online)}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};
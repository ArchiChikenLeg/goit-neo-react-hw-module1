import css from './Profile.module.css';

export default function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.container}>
            <div className={css.profile}>
                <img className={css.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileInfo}>{'@'+tag}</p>
                <p className={css.profileInfo}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.listItemInfo}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.listItemInfo}>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span className={css.listItemInfo}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};

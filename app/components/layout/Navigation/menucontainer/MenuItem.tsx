import React, {FC} from 'react';
import {IMenuItem} from "@/components/layout/Navigation/menucontainer/menu.interface";
import {useRouter} from "next/router";
import styles from './Menu.module.scss'
import cn from 'classnames'
import Link from "next/link";
import MaterialIcon from "@/ui/MaterialIcon";
const MenuItem:FC<{item:IMenuItem}> = ({item:{icon,link,title}}) => {
    const {asPath} = useRouter()
    return (
        <li className={cn({[styles.active]: asPath === link})}>
            <Link href={link}>
                <a>
                    <MaterialIcon name={icon}/>
                    <span className={styles.title}>{title}</span>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;
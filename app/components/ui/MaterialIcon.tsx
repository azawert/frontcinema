import React, {FC} from 'react';
import {TypeIconName} from "@/shared/types/icons.types";
import * as Icons from 'react-icons/md'
const MaterialIcon:FC<{name:TypeIconName}> = ({name}) => {
   const IconComponent = Icons[name]

    return <IconComponent/> || 'No icon found'
};

export default MaterialIcon;
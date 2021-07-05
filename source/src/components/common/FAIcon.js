import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// document https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
const FAIcon = ({ branch = 'fas', icon, ...rest }) => (
    <FontAwesomeIcon
        icon={typeof icon === 'string' ? [branch, icon] : icon}
        {...rest}
    />
)

export default FAIcon

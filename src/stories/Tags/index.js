import React from 'react'
import classes from './Tags.module.css'

export function Tags({ tags ,customStyle}) {
    return (
        <ul className={classes.tagsUl}>
            {tags?.map(item => {
                return (
                    <li style={{...customStyle}}>{item}</li>
                )
            })}
        </ul>
    )
}

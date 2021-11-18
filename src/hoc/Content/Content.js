import React from 'react'
import cls from './Content.module.css'
import RenderMainContent from "../../Data/Renderhtml";

export const Content = () => {
    return (
        <div className={cls.content} key='content'>
            {
                <RenderMainContent/>
            }
        </div>
    )
};
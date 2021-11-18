import React from 'react'
import cls from './Main.module.css'
import RenderMainContent from "../../Data/Renderhtml";
const Main = () => {
    return (
        <div className={cls.Main} key="Main">
           <RenderMainContent/>
        </div>
    )
};
export default Main;
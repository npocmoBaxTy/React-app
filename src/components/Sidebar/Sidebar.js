import React from 'react'
import cls from './Sidebar.module.css'


class RenderNavbar extends React.Component {
    render() {
        return (
            <div className={cls.sidebar}>
                <ul className={cls.sidebar__list}>
                    {this.props.listItems}
                </ul>
            </div>
        )
    }
}


export default RenderNavbar;
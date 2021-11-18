import React from 'react'
import './Navbar.module.scss'
import {NavLink} from 'react-router-dom';
import cls from './Navbar.module.scss';
import Lang from "./Lang/Lang";

class Navbar extends React.Component {
    render() {
        return (
            <div className={cls.header__top} key="header">
                <div className={cls.logotype} key="logo">
                    <NavLink className={cls.logo_link} key="logo_link" to={"/"} exact>
                        <img key="logo_img" src={"https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"} alt="" width="50" height="34" className="img-fluid rounded"/>
                        FacelessZ
                    </NavLink>
                </div>
                <ul className={cls.header__top_list} key='header__list'>
                    <li key="header_list_item1">
                    <NavLink to={"/Photo"} key="header_list_link1" className={cls.top__list_link}>Photo</NavLink>
                    </li>
                    <li key="header_list_item2">
                    <NavLink to={"/Vector"} key="header_list_link2" className={cls.top__list_link}>Vector</NavLink>
                    </li>
                    <li key="header_list_item3">
                    <NavLink to={"/Video"} key="header_list_link3" className={cls.top__list_link}>Video</NavLink>
                    </li>
                    <li key="header_list_item4">
                    <NavLink to={"/Illustration"} className={cls.top__list_link}>Illustration</NavLink>
                    </li>
                </ul>
                <Lang
                clickHandler = {this.props.linkListener}
                />
            </div>
        )
    }
}
export default Navbar;


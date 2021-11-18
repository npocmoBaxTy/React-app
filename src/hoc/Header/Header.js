import React from 'react'
import cls from './Header.module.scss'
import HeaderInner from "./HeaderInner";

export default class Header extends React.Component {
	render() {
		return (
	        <div className={cls.Header} id="header">
	            <HeaderInner
	            listener = {this.props.listener}
	            inputClickHandler = {this.props.inputClickHandler}
	            formSubmitHandler = {this.props.formSubmitHandler}
	            
	            >
	            </HeaderInner>
	        </div>
    	)
	}
}
// export default Header

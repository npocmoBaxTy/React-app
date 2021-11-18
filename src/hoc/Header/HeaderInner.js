import React from 'react'
import cls from './Header.module.scss'
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from '../../components/SearchForm/searchForm'

export default class HeaderInner extends React.Component {
	render() {

		return (
			<div className={cls.Header__inner}>
	            <Navbar 
	            linkListener = {this.props.listener}
	            />
	            <SearchForm 
	            formSubmitHandler = {this.props.formSubmitHandler}
	            inputClickHandler = {this.props.inputClickHandler}
	           
	            />
	            <div className="header__bottom"></div>
	        </div>
       )
	}

}

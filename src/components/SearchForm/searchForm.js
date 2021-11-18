import React from 'react'
import cls from './searchForm.module.css'


export default class SearchForm extends React.Component {
	
	render() {
		  return (
		  	<div className={cls.header__search_form}>
        	<div className={cls.search__form_title}>Free Images,Videos,Vectors and Illustrations</div>
        	<p className={cls.search__from_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat dicta molestiae autem libero impedit officiis blanditiis.</p>
        	<form action="#" className={cls.search__form} onSubmit={(e)=>{this.props.inputClickHandler(e)}}>
        		<label className={cls.search__input_label}>
        			<input type="text" onChange={(e)=>{this.props.inputClickHandler(e)}} placeholder="example:dark" className={cls.search__input}/>
        			<button className={cls.search__btn} type="button"><i className="fas fa-search"></i></button>
        		</label>
        	</form>
            </div>
            )
	}
}
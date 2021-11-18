import React from 'react'
import cls from './Pagination.module.css'

class Pagination extends React.Component {
	render() {
		return (
			<div className={cls.Pagination__wrapper}>
				<div className={cls.Pagination}>
	  	  	<a href={this.props.url} onClick={(e)=> {this.props.clickHandler(e)}} className={cls.Pagination__link}>Загрузить ещё</a>
	  		</div>
			</div>
  	)
	}
}

export default Pagination
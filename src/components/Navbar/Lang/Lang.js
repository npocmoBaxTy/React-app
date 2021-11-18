import React from 'react'
import cls from './Lang.module.css'

class Lang extends React.Component {
    state = {
        lang: ['cs', 'da', 'de', 'en', 'es', 'fr', 'id', 'it', 'hu', 'nl', 'no', 'pl', 'pt', 'ro', 'sk', 'fi', 'sv', 'tr', 'vi', 'th', 'bg', 'ru', 'el', 'ja', 'ko', 'zh'],
        showClass : false,
        newClass : ''
    };

    showLangListHandler(e) {
        const list = e.target.firstElementChild;
        if(!this.state.showClass) {
            this.setState({
                newClass: cls.lang__list_show,
                showClass: !this.state.showClass
            })
        } else {
            this.setState({
                newClass: '',
                showClass: false

            })
        }

    }

    render() {
        return(
            <div className={cls.lang} key="lang" onClick={(e)=> this.showLangListHandler(e)}>
                <ul className={cls.lang__list + " " + this.state.newClass} key="lang__list">
                    {
                        this.state.lang.map((item,i) => (
                            <li key={i+10}>
                                <a href="" key={i+5} onClick={(e)=> this.props.clickHandler(e)} className={cls.lang__list_link}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
                 <i className="fas fa-globe"></i>
                <span className={cls.lang__choice} key="choice">Lang</span>
            </div>
        )
    }
}
export default Lang;
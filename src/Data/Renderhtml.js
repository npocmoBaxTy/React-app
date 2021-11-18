import React,{Component} from 'react';
import RenderNavbar from './../components/Sidebar/Sidebar';
import axios from 'axios'
import cls from './Render.module.css';
import Header from "../hoc/Header/Header";
import Loader from '../components/Loader/Loader'
import Pagination from '../components/Pagination/Pagination'

export default class RenderMainContent extends Component {
     state = {
        key : '21130902-2d8dc4961826c63f8c3d1e257',
        searchText : 'city',
        counter: 3,
        lang: 'en',
        type: 'photo',
        data:[],
        url: 'google.ru',
        loading: true,
        images: []
    };

    async componentDidMount() {
        try {
            const res = await axios.get(`https://pixabay.com/api/?key=${this.state.key}&min_height=1&lang=${this.state.lang}&image_type=${this.state.type}&per_page=${this.state.counter}&q=${this.state.searchText}`);
            const data = await res.data.hits;
           
            this.setState({
                data,
                loading:false,
            })
           
        }
        catch (error) {
            console.log(error)
        }
    }

    searchHandler = async(e) => {
        e.preventDefault();
        e.stopPropagation();
        this.state.searchText = e.target.innerText;
        this.componentDidMount();
    }

    qwert = async (e) => {
        if(e.target.classList.contains(cls.content_item__img)) {
            
            try {
                const img = [e.target.getAttribute('src')]
                const res = await axios.post('https://ajax-img-default-rtdb.firebaseio.com/image.json',img)
                
            }
            catch (error) {
                console.log(error)
            }


        }
    }

    onImageClickHandler(e) {
     console.log(e.target.getAttribute('src'))   
    }

    langChangeHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        this.state.lang = e.target.innerText;
        console.log(e.target)
        this.componentDidMount();
    }

    inputSubmitHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.type === 'submit') {
            console.log('submit')
            e.preventDefault()
            return false
        }
        this.state.searchText = e.target.value;
        this.componentDidMount();
    }

    paginationClickHandler(e) {
        e.stopPropagation();
        this.state.counter = this.state.counter + 30
        this.componentDidMount();
    }


    renderHTML() {
        return (
            this.state.data.map((item, i) => (
                <div className={cls.content__item} key={"content_item" +i}>
                    <img onClick={(e)=>this.onImageClickHandler(e)} className={cls.content_item__img} key="content_item__img" src={item.webformatURL} alt="type"></img>
                    <div className={cls.tags} key="cls.tags" >
                        <ul className={cls.tags__list} key="cls.tags__list">
                            <a href={item.webformatURL} key="tags__link1" onClick={(e)=> this.searchHandler(e)} className={cls.tags__link}>{item.tags.split(',')[0]}</a>
                            <a href={item.webformatURL} key="tags__link2" onClick={(e)=> this.searchHandler(e)} className={cls.tags__link}>{item.tags.split(',')[1]}</a>
                            <a href={item.webformatURL} key="tags__link3" onClick={(e)=> this.searchHandler(e)} className={cls.tags__link}>{item.tags.split(',')[2]}</a>
                        </ul>
                        <div className="download_like" key="download_like">
				<span className={cls.likes} key='likes'>
				<i className="far fa-heart"></i> {item.likes}
				</span>
                            <span className={cls.downloads} key="download">
				<i className="fas fa-download"></i>{item.downloads}
				</span>
                        </div>
                    </div>
                </div>
            ))
        )
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    render() {
        return (
            <div className={cls.wrapper}>

            <Header
            formSubmitHandler = {(e)=>{this.inputSubmitHandler(e)}}
            inputClickHandler = {(e)=>{this.inputSubmitHandler(e)}}
            listener = {(e)=> {this.langChangeHandler(e)}}
            />
            <div className={cls.Main}>
                <RenderNavbar
                    listItems = {
                        this.state.data.map((item, index) => (
                            <li key={index+1}>
                                <a href={this.state.url} key={index} onClick={(e)=> this.searchHandler(e)} className={cls.sidebar__list_link}>{item.tags.split(',')[this.getRandomInt(3)]}</a>
                            </li>
                        ))
                    }
                />
                    {
                        this.state.loading 
                        ? <Loader/>
                        : <div className={cls.content__wrapper}>
                            <div className={cls.content}>
                                {this.renderHTML()}
                                <Pagination
                                clickHandler = {(e)=> this.paginationClickHandler(e)}
                                />
                            </div>
                        </div> 

                    }
            </div>
            </div>
            
        )

    }

}






import React, { Component } from 'react';
import Displaylist from './Displaylist';
import './style.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


library.add(faTrash)
class ToDo extends Component {
    constructor(props){
        super(props);
            this.state={
                items:[],
                currentItem:{
                            text:"",
                            key:"",
                             }
            }
    }

    enterInput = (e) =>{
            this.setState({
               currentItem:{
                    text:e.target.value,
                    key:Date.now(),
                }
            })
    }

    addButton = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);

        if(newItem.text !=="")
        {
            const newItems = [newItem,...this.state.items]
            console.log(newItems);

            this.setState({
                items : newItems,
                currentItem:{
                    text:"",
                    key:"",
                }
            })
        }
    }


    deleteTodo = ( key ) =>{
        const deletePlan = this.state.items.filter((item) => item.key !== key);

        this.setState({
            items: deletePlan,
        })
    }


    makeUpdate = (text,key) =>{
            const items = this.state.items;
            items.map((item) => {
                if(item.key === key)
                {
                    item.text=text;
                }
            })

            this.setState({
                items: items,
            })
    }

    render() {
        return (
            <div className="app"> 
                <header className="header">
                    <form id="to-do-form" onSubmit={this.addButton}>
                        <h1 className="title"> ToDo List Project</h1>
                        <input type="text" value={this.state.currentItem.text} onChange={this.enterInput} placeholder="Today plane" ></input>
                        <button type="submit">+</button>
                    </form>
                    <Displaylist  items={this.state.items} deleteTodo={this.deleteTodo} makeUpdate={this.makeUpdate}/>
                </header>
            </div>
        )
    }
}
export default ToDo;


/* 
adding inputs
------------------------------------------
constructor(props){
        super(props);
            this.state={
                item: [],
                currentItem:{
                            text:" ",
                            key:" ",
                             }
            }
    }

    enterInput = (e) =>{
            this.setState({
               currentItem:{
                    text:e.target.value,
                    key:Date.now(),
                }
            })
    }

    addButton = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
    }

     <form id="to-do-form" onSubmit={this.addButton}>

    <input type="text" placeholder="Today plane" value={this.state.currentItem.text} onChange={this.enterInput}></input>

    
    */

    /* 
Display inputs items
------------------------------------------

 
 addButton = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);

        if(newItem.text !=="")
        {
            const newItems = [newItem,...this.state.items]
            console.log(newItems);

            this.setState({
                items : newItems,
                currentItem:{
                    text:" ",
                    key:"",
                }
            })
        }
    }


    and create bew component name is displaylist and import the displaylist component
    <Displaylist  items={this.state.items}/>
*/
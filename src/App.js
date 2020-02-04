import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
  this.state={
    items: [],
    id: uuid(),
    item:"",
    editItem:false,
    addItemBtnBlur:true,
    clearListBtnBlur:true
  };
}
  handleChange = (e) =>{
    this.setState({
      item:e.target.value
    },
      ()=>{
        const blur = (this.state.item.length>0?false:true);
        this.setState({
          addItemBtnBlur:blur
        })
      });
  };
  handleSubmit = (e) =>{
    e.preventDefault();   
    if(this.state.item.length>0){
    const newItem={
      id:this.state.id,
      title:this.state.item,
    }
    const updatedItems =[...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false,
      addItemBtnBlur:true,
      clearListBtnBlur:false
    })
  }
  };
  clearList = ()=> {
    this.setState({
      items:[]
    },
    ()=>{
      this.setState({
        clearListBtnBlur:true
      })
    })
  };
  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const blur = (filteredItems.length<1?true:false);
    this.setState({
      items:filteredItems,
      clearListBtnBlur:blur
    });
  };
  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    const blur = (filteredItems.length<1?true:false);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id,
      addItemBtnBlur:false,
      clearListBtnBlur:blur
    });
  };
  render (){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-mid-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} addItemBtnBlur={this.state.addItemBtnBlur}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} clearListBtnBlur={this.state.clearListBtnBlur}/> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;

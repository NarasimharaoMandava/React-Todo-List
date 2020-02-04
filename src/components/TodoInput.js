import React, { Component } from 'react';
import { classBody } from '@babel/types';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem, addItemBtnBlur } = this.props;
        return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepand">
                        <div className="input-group-text bg-primary text-white">
                        <span class="input-group-addon"><i className="fa fa-book" /></span>
                        </div>  
                    </div>
                    <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={item} onChange={handleChange} />
                </div>
        <button type="submit" className={editItem ? "btn btn-block btn-success mt-3 text-capitalize" : "btn btn-block btn-primary mt-3 text-capitalize"} disabled={addItemBtnBlur}>
            {editItem ? 'edit item' :'add item'}
        </button>
            </form>
        </div>
        );
    }
}

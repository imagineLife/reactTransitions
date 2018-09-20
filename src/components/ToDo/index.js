import React, { Component } from 'react';
import Item from '../Item/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Toolbar from '../ToDoListToolBar/index';
import './index.css';

class ItemList extends Component {
  state = {
    items: {}
  };

  addItemHandler = itemName => {
    this.setState({
      items: {
        ...this.state.items,
        [+new Date()]: itemName
      }
    });
  };

  onDeleteHandler = itemKey => {
    let newStateItems = { ...this.state.items };

    delete newStateItems[itemKey];

    this.setState({
      items: {
        ...newStateItems
      }
    });
  };

  render() {
    const itemsList = Object.keys(this.state.items).map(itemKey => {
      return (

/*
  Here is the CSSTransition component, wrapping each item in this.
  See 'move' css for the css details.
  A 750ms timeout for dramatic implementatioin
*/        
        <CSSTransition 
          key={itemKey} 
          timeout={750} 
          classNames="move">

          <Item
            name={this.state.items[itemKey]}
            onDelete={() => {
              this.onDeleteHandler(itemKey);
            }}
          />
        
        </CSSTransition>
      );
    });

    return (
      <React.Fragment>
        <Toolbar onAddHandler={this.addItemHandler} />
        <TransitionGroup className="itemsWrapper">
          {itemsList}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default ItemList;
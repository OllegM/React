import React from 'react';

export class CartWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
    this.props.catalogController.subscribers.push(this.refreshItems);
  }

  componentDidMount() {
    this.props.catalogController.getCartItems().then((items) => {
      this.setState({
        cartItems: items
      });
    });
  }

  refreshItems = (items) => {
    this.props.catalogController.getCartItems().then((items) => {
      this.setState({
        cartItems: items
      });
    });
  }

  CartItemsList = () => {
    let total = 0;
    const cartItems = this.state.cartItems.map((item) => { 
      if (item != null) {
        const price = parseFloat(item.price.replace('$', ''));
        if (false === isNaN(price)) {
          total += price
        }
        return <li>{item.name}({item.price})</li>;
      } else {
        return null;
      }
    })
    
    return <div><ul>
      {cartItems}
    </ul>
    <div>Total: ${Math.round(total*100)/100}</div>
    </div>
  }

  render() {
    return (
      <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Shopping cart</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.CartItemsList()}
          </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
'use client'

import {age, name} from "./data"

export default function Cart() {
    let 장바구니 = ['tomato', 'pasta']

    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명 {age}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem item={장바구니[0]}/>
        <CartItem item={장바구니[1]}/>
        <Banner />
        <OnPay />
      </div>
    )
  }

  const OnPay = () => {
    return <button 
            style={{background: "red"}}
            onClick={() => alert('pay success')}
            >
              결제
            </button>
  }

  const Banner = () => {
    return <h5>현대카드 결제 행사중</h5>
  }
  
  const CartItem = (props) => {
    return (
      <div className="cart-item">
          <p>{props.item}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }
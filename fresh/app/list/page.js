'use client'
//next js에서 기본 컴포넌트는 서버 컴포넌트다
//따라서, client 컴포넌트를 사용하기 위해서 위와 같이 작성해야 한다


import { useState } from "react"


export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let 어레이 = [2,3,4]
    const [수량, 수량변경] = useState(0)
    //map 기능
    //파라미터로 현재 값, 인덱스, map을 호출한 배열을 받는다
    //map 사용 시 key={유니크 값} 넣으면 좋습니다
    return (
      <div>
        <h4 className='title'>상품목록</h4>
        {
            상품.map((item, idx) => {
                return (
                    <div className="food" key={idx}>
                        <img src={`/food${idx}.png`} className="food-img"/>
                        <h4>{item} $40</h4>
                        <span>{수량}</span>
                        <button onClick={() => 수량변경(수량 + 1) }>+</button>
                        <button onClick={() => 수량변경(수량 - 1)}>-</button>
                    </div>
                )
            })
        }
      </div>
    )
  }
  
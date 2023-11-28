// 다음과 같이 작동하는 bill 함수를 클로저를 이용하여 작성하시오.
// 참고) 부가세 = Math.round((금액/1.1) * 0.1)
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 }
};

function bill() {
  const orderList = {};
  let totalVAT = 0;
  let totalPrice = 0;
  function order(orderName) {
    if (orderList[orderName]) {
      orderList[orderName].amount += 1;
    } else {
      const { price, taxfree } = MENU[orderName];
      orderList[orderName] = { amount: 1, taxfree: taxfree || 0 };
    }

    const unitPrice = MENU[orderName].price;

    orderList[orderName].sumVAT = orderList[orderName].taxfree
      ? 0
      : Math.round((unitPrice / 1.1) * 0.1) * orderList[orderName].amount;

    orderList[orderName].sumPrice = orderList[orderName].amount * unitPrice;

    totalVAT += orderList[orderName].sumVAT;
    totalPrice += orderList[orderName].sumPrice;
  }

  function printBill() {
    console.log('='.repeat(24));
    for (let [orderName, orderDetail] of Object.entries(orderList)) {
      console.log(
        '*',
        orderName.padEnd(6, ' '),
        orderDetail.amount.toString().padStart(10, ' '),
        '개'
      );
      console.log(
        '공급가액 :'.padEnd(6, ' '),
        orderDetail.sumPrice.toLocaleString().padStart(10, ' '),
        '원'
      );
      console.log(
        '부가세액 :'.padEnd(6, ' '),
        orderDetail.sumVAT.toLocaleString().padStart(10, ' '),
        '원'
      );
      console.log('-'.repeat(24));
    }
    console.log(
      '주문합계 :'.padEnd(6, ' '),
      totalPrice.toLocaleString().padStart(10, ' '),
      '원'
    );
    console.log(
      '세액합계 :'.padEnd(6, ' '),
      totalVAT.toLocaleString().padStart(10, ' '),
      '원'
    );
    console.log('='.repeat(24));
  }

  return { order, printBill };
}

const table1 = bill();
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

const table2 = bill();
table2.order('짜장');
table2.printBill();

table1.order('탕슉');
table1.printBill();

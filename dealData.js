var fs = require("fs");

fs.readFile("./order-old.json", { encoding: "utf-8" }, function (err, data) {
  // if (err) throw err;

  var obj = JSON.parse(data);
  let productList = [];
  let otherMessage = {};
  let otherMessageKey = ['totalMoney', 'totalRelMoney', 'totalFreight', 'totalWeight', 'orderPriviledges','discountMoney'];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (otherMessageKey.indexOf(key) > -1) {
        otherMessage[key] = value;
      }
      if (key === 'productList') {
        productList = value;
      }
    }
  }

  let selectedData = productList.filter(el => {
    return el.checked;
  });

  let simpleData = selectedData.map(el => {
    const {count,orderPrice,money,showMoney,promotionPrice} = el;
    return {
      count, orderPrice, money, showMoney, promotionPrice
    }
  });
  otherMessage.productList = simpleData;
  otherMessage.productListLength = simpleData.length;
  console.info('otherMessage:');
  console.info(otherMessage);
  console.info('productList:');
  console.info(simpleData);
  fs.writeFile("order-new.json", JSON.stringify(otherMessage), function (err) {
    if (err) throw err;
    console.log("成功!");
  });
});

// why 沒跑
// last question

// 跑很久就爆了 進去的時間點不對
// 在看一下時間刷
// Enter 可以狂按




const reSelectDOMTime = 10

// 張數
// https://www.indievox.com/wearesouthrocks/event-post/21821
const selectTicket =()=>{
    let but = document.querySelector('.event-data button')
    if ( but && but.innerText == '售完'){
        console.log("sold out");
        location.reload()
    }
    console.log("in add-ons");

    
    let buyButton1 = document.querySelectorAll('.btn.btn-buy.btn-block.buy-ticket-btn')
    if (buyButton1.length < 1) return setTimeout(function () { 
        console.log(buyButton1);
        selectTicket() 
    }, reSelectDOMTime)
    // 有兩個購買鍵 兩個購買鍵 分別是看各自的 幾人票決定
    let buttonGroup = document.querySelectorAll('.btn-group.btn-group-vertical.btn-block')
    buttonGroup[0].childNodes[buttonGroup[1].childNodes.length-2].click()
    console.log(buyButton1, "not less than 1");
    buyButton1[1].click()

    // redirect 後 要怎麼處理
    // content_scripts 被迫刷新
    purchase()


    // document.getElementById("mySelect").selectedIndex = "2";
    // 請再次確認訂單 alert ?


    // let nextStepButton = document.querySelector('.btn.btn-3d')
    // // if(nextStepButton) nextStepButton.click()
    // document.onkeydown = function (e) {  //對整個頁面文件監聽 
    //     if (e.keyCode == 13) {
    //         nextStepButton.click()
    //     }
    // };

}

// https://www.indievox.com/m/purchase/buy-ticket-select-payment

const purchase = () =>{

    console.log("purchase");
    
    let SelectPayment = document.querySelectorAll('#buy-ticket-payway')
    if (SelectPayment.length < 1) return setTimeout(function () { 
        console.log('SelectPayment is :', SelectPayment);
        purchase() 
    }, reSelectDOMTime)
    console.log(SelectPayment, "purchase not less than 1");

    let tickets = document.querySelector('#order-quantity')
    // 票卷數量
    tickets.selectedIndex= tickets.length-2
    // 付款方式
    SelectPayment[0].selectedIndex='1'
    let buySubmit = document.querySelector('#buy-ticket-btn')
    buySubmit.click()
    // 之後的 alert
    // 可按 enter 解決
}

selectTicket()
purchase()

window.onload = ()=>{
    selectTicket()
    purchase()
} 
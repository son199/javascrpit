// console.log("Hello CyberSoft");
// /* 
//     Biến-Variable
//     String
//     Number  
//     Boolean
//     Null
//     Undefined
//     Qui đinh đặt tên biến : từ 2 chử trở lên thì viết hoa chữ cái đầu của từ tiếp theo
//     tên biến tránh từ khóa của ngôn ngữ
//     tên biến phải có ý ngĩa
//     không bắt đầu bằng số và khoảng trống
// */
// var name = "CyberSoft"; // kiểu String
// var address = "82 Ung Van Khiem"; // String
// var numberStudent = 32; // number
// var isLogin = true;  // false kiểu dử liệu Boolean
// var lop = null ;
// var age ; // undefined được tạo ra khi tạo biến mà không gán dử liệu cho nó

// console.log(typeof(age));

// console.log("Name: "+ name);
// console.log("Address: " +address +" "+ name + " "+ numberStudent);
// // Hoisting
// // var fullName; 

// var fullName = "Trần Hoài Sơn";
// console.log(fullName);
// firstName = "Son";

// // Hằng số Constant : muốn tạo ra con số có giá trị không đổi thì dùng hằng const
// //  Tạo ra hằng số cần phải gắn giá trị luôn cho nó, Không cho phép gán lại giá trị
// const PI = 3.14;

// /* 
//     CÂU LỆNH  ĐIỀU KIỆN
//     if else chuyện 1 trong 2 theo điều kiện đúng hay sai
//     == so sánh giá trị
//     === so sánh giá trị và kiểu dử liệu
// */

// /* 
//     Toán tử 3 ngôi
//     DK ? "Mệnh đề đúng": "Mệnh đề sai"
// */
//  var kq = 1 == "1" && A == B? "Dk Đúng" : "DK Sai";
//  console.log(kq);
// 1 == "1" && A == B? console.log("Dk Đúng") : console.log("DK Sai");
// if(1 == "1"){
//     console.log("Điều kiện đúng");

// }
// else{
//     console.log("Điều kiện sai");
// }

// var A = true;
// var B = false;
// var C = true;
// // && có 1 giá trị sai là biểu thức sai
// // || trả về false khi cả 2 điều sai
// //  ! phủ định giá trị


// console.log(A && B && C);
// console.log(A || B);
// console.log(!A);
// /*
//     sử dụng switch case phải sài break;
//  */
// var type = 1;
// switch (type) {
//     case 1: 
//         console.log("Đây là số 1");  
//         break;
//     case 2: 
//         console.log("Đây là số 2");
//         break;
//     case 3:
//         console.log("Đây là số 3");
//         break;
//     default:
//         console.log("Không xác định");
//         break;
// }

// var number_1 = 10;
// var number_2 = 5;
// var number_3 = 5;
// var number_4 = 10;
// var number_5 = 20;

// // var sum= number1 + number2;
// // console.log(sum);
// /* khi khai báo function thì nó chưa chạy được
// muốn chạy được thì phải gọi hàm mới chạy được
//  */
// // Định nghĩa hàm
// //  muốn sử dụng các Giá tri  trong hàm thì phải Return;

// /* 
//     Hàm: 
//     - Hàm không có giá trị trả về(chỉ xem được giá trị chứ không tái sử dụng được)
//     - Hàm có giá trị trả về (Phải có return)
//     - Hàm không có tham số
//     - Hàm có tham số

// */
// function sum() {
//     var rs = number_1 + number_2;
//     console.log(rs);
//     return rs ;
// }
// // Gọi hàm
// sum(); 

// var total = number_3 + sum();
// console.log(total);

// // Function có tham số 
// //  mang tính chất tái sử
// function sum2(a, b){
//    var tong = a + b ;
//     console.log(tong);
//     return tong;
// }
// // GỌi hàm lại phải truyền tham số vào
// sum2(number_4, number_5);



// function tinhDTB(a,b,c) {
//     return (a + b + c) / 3;
// }

// // function xepLoai (dtb){
// //     if(dtb >= 9 && dtb <=10){
// //         console.log("XL Xuất Xắc");
// //     }
// //     else if(dtb >=8 && dtb <9){
// //         console.log("XL Giỏi");
// //     }
// //     else if(dtb >=7 && dtb <8){
// //         console.log("XL Khá");
// //     }
// //     else if(dtb >=6 && dtb <7){
// //         console.log("XL TB Khá");
// //     }
// //     else if(dtb >=5 && dtb <6){
// //         console.log("XL TB ");
// //     }
// //     else {
// //         console.log("XL Yếu")
// //     }
// // }

// var Toan = 10;
// var Ly= 10 ;
// var Hoa = 8;

// function xetLoai(dtb) {
//     var loai = "";
//     if (9 <= dtb && dtb <=10){
//         loai = "Xuât xắc";

//     }
//     else if (8 <= dtb && dtb < 9){
//         loai = "Giỏi";

//     }
//     else if (7 <= dtb && dtb < 8){
//         loai = "Khá";

//     }
//     else if (6 <= dtb && dtb < 7){
//         loai = "TB Khá";

//     }
//     else if (5 <= dtb && dtb < 6){
//         loai = "TB";

//     }
//     else{
//         loai = "Yếu";
//     }
//     return loai;
// }
// var dtb = tinhDTB(Toan , Ly , Hoa);
// var loai = xetLoai(dtb);
// console.log("xếp loại: " + loai);

// /* 
//     Mảng
//         0           1       2       3
//     [ "Nguyen", "Son" , "Tran", "Hoai" ]
// */
// var list = [
//     "Nguyen", "Son" , "Tran", "Hoai"
// ];
// console.log(list[0]);

// //  Vòng lập for

// for (var i= 0 ; i < list.length ; i ++){

//     console.log(list[i]);

// }


var input1 = document.getElementById("txt");
console.log(input1.value);  

/* cach 1 */
// function demoClick() {
//     var input = document.getElementById("txt").value;
//     console.log(input);
// }
/*
 cach 2
 */
// document.getElementById("btnClick").onclick = function (){
//     var input = document.getElementById("txt").value;
//     console.log(input);
// };
/*
 cach 3
 lấy dử liệu của input khi click vào btn
 callback function
 .addEventListener (có 2 giá trị )
 */
// document.getElementById("btnClick").addEventListener ("click",function(){
//     var input = document.getElementById("txt").value;
//      console.log(input);

// });

// document.getElementById("btnNhanEmDi").addEventListener("click", function(){
//     // muốn thay đổi thì phải DOM tới thẻ đó
//     // Thay đổi nội dung thẻ là thuộc tính innerHTML
//     // document.getElementById("divContent").innerHTML = "Nội dung sau khi thay đổi";
//     // // thay đổi style của thẻ dùng thuộc tính style
//     // document.getElementById("divContent").style.color = "red";
//     // document.getElementById("divContent").style.backgroundColor = "green";
//     // document.getElementById("divContent").style.border = "2px solid #000000";
//     // document.getElementById("divContent").style.fontSize = "30px";
//     // document.getElementById("divContent").style.textAlign = "center";
//     // document.getElementById("divContent").style.display = "block";
    
//     // thêm class vào thẻ có id (divContent) của thẻ  dùng classList.add
//     // document.getElementById("divContent").classList.add("div-content");

//     // thêm class vào thẻ có Id là divContent :nhưng nó sẽ bỏ tất cả các class trước đó
//     document.getElementById("divContent").className = "div-content";
// });

// // disable 1 thẻ html dùng .disabled
// document.getElementById("btnDisable").addEventListener("click", function(){
//         document.getElementById("btnNhanEmDi").disabled = "true";
     
// });
// // cách xóa thuộc tính đã disable dùng removeArrtribute ("ten thuộc tính đã disable")
// //  có 2 cách để remove disabled
// document.getElementById("btnEnable").addEventListener ("click", function (){
//         // document.getElementById("btnNhanEmDi").removeAttribute("disabled");
//         document.getElementById("btnNhanEmDi").disabled = false;
// });

/* 
thay đổi hình ảnh ( đường dẫn ảnh) dùng thuộc tính Src = "Đường đẫn hình ảnh"*/
document.getElementById("btnOff").addEventListener("click", function(){
    document.getElementById("imgBuld").src = "./imgs/pic_bulboff.gif" ;
});
document.getElementById("btnOn").addEventListener("click", function(){
    document.getElementById("imgBuld").src = "./imgs/pic_bulbon.gif ";
});


function handleLogin (event) {
    // sự kiện chặn load lại trang sử dụng  event.preventDefault();
    event.preventDefault();
       /**
     * Lấy 2 giá trị từ người dụng nhập vào
     * phải tạo ra biến hứng giá trị lại
     * DOM vào input có giá trị .value
     * 
     * sự khác biêt của button với type bằng submit và buton:
     * submit gửi giá trị đi và loại lại trang
     * button không load lại trang
     */
    var taiKhoan = document.getElementById("taiKhoan").value;
    var matKhau = document.getElementById("matKhau").value;

    console.log(taiKhoan,matKhau);


    if (taiKhoan === "Cybersoft" && matKhau=== "Cybersoft"){
       
        document.getElementById("thongBao").innerHTML = "đăng nhập thành công";
        document.getElementById("thongBao").className =("alert alert-success thongBao");
        
    }
    else {
        // add  className cho thêm vào 1 lúc nhiều class
        document.getElementById("thongBao").innerHTML = "đăng nhập thất bại";
        document.getElementById("thongBao").className =("alert alert-danger thongBao");

       
    }
    
    /**
     * DOM class
     * có nhiều class giống nhau  phải lấy đúng thằng cần thiết thì phải biến vị trí của nó
     */
}
var domClass = document.getElementsByClassName("btn")[0];
console.log(domClass);

/**
 * DOM tagName
 * lấy theo tên thẻ
 * sẽ trả về 1 mảng muốn lấy cái nào phải biết số thứ tự
 */

 var tagName = document.getElementsByTagName("input")[0];
console.log (tagName);

/**
 * DOM Selector
 */
var domSelect = document.querySelector("form input#taiKhoan");
console.log (domSelect);
 
/**
 * DOM Selector all
 */

 var domSelectorAll = document.querySelectorAll ("form input")[1];

 console.log(domSelectorAll);
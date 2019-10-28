
// var num1 = 5;
// var num2 = 9;
// console.log("Value of num1: " + num1);
// console.log("Value of num2 :" + num2);
// var res = num1 > num2;
// console.log("num1 greater than num2: " + res);
// res = num1 < num2;
// console.log("num1 lesser than num2: " + res);
// res = num1 >= num2;
// console.log("num1 greater than or equal to num2: " + res);25
// res = num1 <= num2;
// console.log("num1 lesser than or equal to num2: " + res);
// res = num1 == num2;
// console.log("num1 is equal to num2: " + res);
// res = num1 != num2;
// console.log("num1 not equal to num2: " + res);

var chuoi1 = "Hello";
var chuoi2 = "TDC-Cao đẳng công nghệ";
function soSanh()
{
    if(chuoi1 > chuoi2)
    {
        console.log("chuỗi 1 dài hơn chuỗi 2")
    }
    else
    {
        console.log("chuỗi 1 ngắn hơn chuỗi 2")
    }
}
soSanh();

function noiChuoi()
{
    var chuoi = "Welcome";
    var chuoi1 = " to TDC";
    chuoi = chuoi.concat(chuoi1, "!!!");
    console.log("Kết quả sau khi nối chuỗi: " +chuoi);
}
noiChuoi();

function timKiemThayThe()
{
    var chuoi = chuoi1 + chuoi2;
    console.log(chuoi.replace("TDC-Cao đẳng công nghệ"," Trường cao đẳng công nghệ thủ đức"));
}
timKiemThayThe();

function viTri()
{
    console.log("vị trí xuất hiện chuỗi: " + chuoi2.indexOf("Cao"));
}
viTri();





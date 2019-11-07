
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

function phuongTrinh()
{
    var a = 1;
    var b = 2;
    var c = 2;
    var de = (b*b) - (4 * a * c);
    if(de < 0)
    {
        console.log("Phương trình vô nghiệm");
    }
    else if(de = 0)
    {
        var x1  = -b/(2 * a);
        var x2 = -b/(2 * a);
        console.log("phuong trinh có nghiệm kép" +x1 + x2);
    }
    else
    {
        var x1 = (-b + Math.sqrt(de)) / (2 * a);
        var x2 = (-b -  Math.sqrt(de)) / (2 * a);
        console.log("phuong trinh có 2 nghiệm" +x1 + x2);
    }
}
phuongTrinh();





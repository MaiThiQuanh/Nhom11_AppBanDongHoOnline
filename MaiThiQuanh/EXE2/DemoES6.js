

function DemoES6(){
    var values = [];
    var num1 = 15;
    var num2 = 3;
    for (var i = 0; i < 10; i++)
    {
        values.push([
            //Cac phep toan tu giua hai so
            //So sanh hai so
            num1 > num2,
            num1 < num2,
            num1 == num2,
            num1 != num2,
            num1 + num2,
            num1 - num2,
            num1 * num2,
            num1 / num2,
            num1 % num2,
            num1 & num2,
            num1 ^ num2,
            num1 | num2,
            ~ num1,
            num1 << num2,
            num1 >> num2,
            num1 >>> num2,
        ])
    };

console.table(values);

}
DemoES6();



var nhanVien = [ 
    { name: 'Đoàn Thị Yến Nhi', job: "nhân viên văn phòng" }, 
    { name: 'Nguyễn Văn A', job: "kế toán" }, 
    { name: 'Cao Văn C', job: "nhân viên văn phòng" } ,
    { name: 'Trương Kim Văn Cao', job: "nhân viên văn phòng" } 
];
console.log("DANH SÁCH NHÂN VIÊN")
for(var giatri of nhanVien)
{
    
    console.log(giatri.name, giatri.job);
}
console.log("TIM DANH SÁCH NHÂN VIÊN")
let tim = nhanVien.filter((value) => {
    return value.job === "nhân viên văn phòng"
       
    
})
console.log(tim);
for(var giatritim of tim)
{
    
    console.log(giatritim.name, giatritim.job);
}


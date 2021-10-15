/**
 * Bài 1 : sắp xếp 3 số 
 * 
 * Khối 1: 
 * + 3 số nguyên (a,b,c)
 * 
 * Khối 2:
 * +B1: lấy giá trị
 * +B2: 
 * c < b < a 
 * b < c < a
 * b < a < c
 * c < a < b
 * a < c < b
 * a < b < c
 * 
 * 
 * Khối 3:
 * + Kết quả sắp xếp (resultSort)
 */

function sapXep(){
    var a = document.getElementById("txtNum1").value;
    var b = document.getElementById("txtNum2").value;
    var c = document.getElementById("txtNum3").value;

    if(c < b && b < a){
        document.getElementById("txtSapXep").innerHTML = c + "<" + b + "<" + a ;
        console.log(c + "<" + b + "<" + a );
    }else if(b < c && c < a){
        document.getElementById("txtSapXep").innerHTML = b + "<" + c + "<" + a ;
    }else if(b < a && a < c){
        document.getElementById("txtSapXep").innerHTML = b + "<" + a + "<" + c ;
    }else if(c < a && a < b){
        document.getElementById("txtSapXep").innerHTML = c + "<" + a + "<" + b ;
    }else if(a < c && c < b){
        document.getElementById("txtSapXep").innerHTML = a + "<" + c + "<" + b ;
    }else{
        document.getElementById("txtSapXep").innerHTML = a + "<" + b + "<" + c ;
    }
}

document.getElementById("btnSapXep").onclick = sapXep;


/**
 * Bài 2 : Chương trình chào hỏi
 * 
 * Khối 1:
 * + Chọn thành viên (whoPeople)
 * 
 * Khối 2:
 * +B1 : lấy giá trị từ form
 * +B2 : ràng buộc điều kiện
 * whoPeople === "" =>
 * whoPeople === "bo"
 * whoPeople === "me"
 * whoPeople === "anhTrai"
 * whoPeople === "emGai"
 * 
 * Khối 3:
 * + Xuất kết quả hiển thị trùng với câu trả lời
 */

function chaoHoi(){
    var whoPeople = document.getElementById("selectMember").value;
    console.log(whoPeople);
    
    if(whoPeople === "bo"){
        document.getElementById("txtLoiChao").innerHTML = "Xin chào Bố";
    }else if(whoPeople === "me"){
        document.getElementById("txtLoiChao").innerHTML = "Xin chào Mẹ";
    }else if(whoPeople === "anhTrai"){
        document.getElementById("txtLoiChao").innerHTML = "Xin chào Anh Trai";
    }else if(whoPeople === "emGai"){
        document.getElementById("txtLoiChao").innerHTML = "Xin chào Em Gái";
    }else{
        document.getElementById("txtLoiChao").innerHTML = "Chưa chọn thành viên";
    }

}

document.getElementById("btnLoiChao").onclick = chaoHoi;



/**
 * Bài 3 : Đếm số chẵn lẻ
 * 
 * Khối 1:
 * + 3 số người dùng nhập vào (num01,num02,num03)
 * + sochan
 * + sole
 * Khối 2:
 * 
 * Khối 3:
 * + Xuất kết quả đếm 
 */

function demChanLe(){
    var num01 = document.getElementById("txtNum3_1").value;
    var num02 = document.getElementById("txtNum3_2").value;
    var num03 = document.getElementById("txtNum3_3").value;
    var soChan = 0;
    var soLe = 3 - soChan;

    if(num01 % 2 == 0 && num02 % 2 == 0 && num03 % 2 == 0){
        soChan += 3;
        document.getElementById("txtDem").innerHTML = "Số chẵn là " + soChan + "," + "Số lẻ là " + soLe;
    }else{
        document.getElementById("txtDem").innerHTML = "Số chẵn là " + soChan + "," + "Số lẻ là " + soLe;
        soChan = 0;
    }
}

document.getElementById("btnDem").onclick = demChanLe;



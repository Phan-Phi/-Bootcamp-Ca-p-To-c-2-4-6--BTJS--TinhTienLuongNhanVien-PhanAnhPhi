//Bài Tập 1: Tính Tiền Lương Nhân Viên
var luong1Ngay = 100000;
var btnTinhNgay = (document.getElementById("btn-tinhNgay").onclick =
  function () {
    console.log("tính ngay");

    //lấy giá trị nhập vào
    var soNgay = document.getElementById("soNgayLamViec").value;
    console.log(soNgay);

    var tinhTienNe = soNgay * luong1Ngay;
    alert(tinhTienNe);
  });

//Bài Tập 2: Tính Giá Trị Trung Bình

var tinh5So = (document.getElementById("btn-tinh5So").onclick = function () {
  console.log("Tính 5 số");

  //lấy giá trị nhập vào
  var so1 = +document.getElementById("soThuNhat").value;
  console.log("Số thứ:", so1);
  var so2 = +document.getElementById("soThuHai").value;
  console.log("Số thứ:", so2);
  var so3 = +document.getElementById("soThuBa").value;
  console.log("Số thứ:", so3);
  var so4 = +document.getElementById("soThuTu").value;
  console.log("Số thứ:", so4);
  var so5 = +document.getElementById("soThuNam").value;
  console.log("Số thứ:", so5);

  var tong5So = (so1 + so2 + so3 + so4 + so5) / 5;
  alert(tong5So);
});

//Bài Tập 3: Quy Đổi Tiền

var tienViet = 23500;
var tinhTienUSD = (document.getElementById("btn-tinhUSD").onclick =
  function () {
    console.log("tiền Đô La");
    //lấy giá trị nhập vào
    var soTienUSD = document.getElementById("tienDoLa").value;
    console.log("số tiền USD");

    var soTienQuyDoi = soTienUSD * tienViet;
    alert(soTienQuyDoi);
  });

//Bài Tập 4: Tính Diện Tich, Chu Vi Hình Chữ Nhật

var tinhDienTich = (document.getElementById("btn-tinhDienTich").onclick =
  function () {
    console.log("Diện Tích Nè");
    //lấy giá trị nhập vào
    var soChieuDaiNe = +document.getElementById("soChieuDai").value;
    var soChieuRongNe = +document.getElementById("soChieuRong").value;

    var tinhSoDienTich = soChieuDaiNe * soChieuRongNe;
    alert(tinhSoDienTich);
  });

var tinhChuVi = (document.getElementById("btn-tinhChuVi").onclick =
  function () {
    console.log("Chu Vi Nè");
    //lấy giá trị nhập vào
    var soChieuDaiNe = +document.getElementById("soChieuDai").value;
    var soChieuRongNe = +document.getElementById("soChieuRong").value;

    var tinhSoChuVi = (soChieuDaiNe + soChieuRongNe) * 2;
    alert(tinhSoChuVi);
  });

//Bài Tập 5: Tính Tổng 2 Ký Số

var tinhTongHaiSo = (document.getElementById("btn-tongHaiSo").onclick =
  function () {
    console.log("tổng 2 số");
    //lấy giá trị nhập vào
    var tongCuaHaiSo = document.getElementById("tongHaiSo").value;

    var giaTri2So = tongCuaHaiSo % 10;
    var giaTri2So1 = tongCuaHaiSo / 10;

    //Khi tính em bị ra số có (,) nen em thẹm Math.floor vào để nó ko bị , nữa
    var tongCua2So = Math.floor(giaTri2So1 + giaTri2So);

    alert(tongCua2So);
  });

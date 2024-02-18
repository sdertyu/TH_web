let txtNS = document.getElementById("txtNgaySinh");
let txtCung = document.getElementById("txtCung");

click_btnXem = () => {
  if (txtNS.value.trim() === "") {
    alert("Bạn cần nhập ngày sinh");
    txtNS.focus()
  } else {

    let date = new Date(txtNS.value);
    let ngay = date.getDate();
    
    let thang = date.getMonth() + 1;

    HandleCung(ngay, thang);

    // let list = txtNS.value.split("/");
    // list.forEach((element) => {
    //   console.log(element);
    // });
    // let ngay = parseInt(list[0]);
    
  }
};

click_btnXoa = () => {
    txtNS.value = ""
    txtCung.value = ""
};

HandleCung = (ngay, thang) => {
  switch (thang) {
    case 1:
      if (ngay <= 19) txtCung.value = "Ma Kết";
      else if (ngay > 19) txtCung.value = "Bảo Bình";
      break;
    case 2:
      if (ngay <= 18) txtCung.value = "Bảo Bình";
      else if (ngay > 18) txtCung.value = "Song";
      
      break;
    case 3:
      if (ngay <= 20) txtCung.value = "Ma Kết";
      else if (ngay > 20) txtCung.value = "Bạch Dương";
      
      break;
    case 4:
      if (ngay <= 20) txtCung.value = "Bạch Dương";
      else if (ngay > 20) txtCung.value = "Kim Ngưu";
      
      break;
    case 5:
      if (ngay <= 20) txtCung.value = "Kim Ngưu";
      else if (ngay > 20) txtCung.value = "Song Tử";
      
      break;
    case 6:
      if (ngay <= 21) txtCung.value = "Song Tử";
      else if (ngay > 21) txtCung.value = "Cự Giải";
      
      break;
    case 7:
      if (ngay <= 22) txtCung.value = "Cự Giải";
      else if (ngay > 22) txtCung.value = "Sư Tử";
      
      break;
    case 8:
      if (ngay <= 22) txtCung.value = "Sư tử";
      else if (ngay > 19) txtCung.value = "Xử Nữ";
      
      break;
    case 9:
      if (ngay <= 22) txtCung.value = "Xử Nữ";
      else if (ngay > 22) txtCung.value = "Thiên Bình";
      
      break;
    case 10:
      if (ngay <= 23) txtCung.value = "Thiên Bình";
      else if (ngay > 23) txtCung.value = "Bọ Cạp";
      
      break;
    case 11:
      if (ngay <= 22) txtCung.value = "Bọ Cạp";
      else if (ngay > 22) txtCung.value = "Nhân Mã";
      
      break;
    case 12:
      if (ngay <= 21) txtCung.value = "Nhân Mã";
      else if (ngay > 21) txtCung.value = "Ma Kết";
      
      break;
  }
}
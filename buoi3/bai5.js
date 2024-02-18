let txtChuoi = document.getElementById("txtChuoi");

let lst = document.getElementById("list");

// let selects = document.getElementById

btnThucHien_click = () => {
  let new_lst = [];

    // let option = document.getElementsByClassName("opt");

  

  if (txtChuoi.value.trim() === "") {
    alert("Bạn cần nhập nội dung cho chuỗi");
    txtChuoi.focus();

    // txtChuoi.autofocus()
  } else {
    let ml = txtChuoi.value.split(",");
    for (let i = 0; i < ml.length; i++) {
      
      if(ml[i] === "") continue;
      if(new_lst.indexOf(ml[i].trim().toUpperCase()) !== -1) continue;
      
      let new_option = document.createElement("option");
      new_option.textContent = ml[i].trim().charAt(0).toUpperCase() + ml[i].trim().slice(1).toLowerCase();
      lst.appendChild(new_option);
      new_lst.push(ml[i].trim().toUpperCase())
    }
  }

};


changeSelect = () => {
  alert(`Bạn đã chọn mục: ${lst.value}`);
};

btnHuy_click = () => {
  txtChuoi.value = null;
  while (lst.firstChild) {
    lst.removeChild(lst.firstChild);
  }
};



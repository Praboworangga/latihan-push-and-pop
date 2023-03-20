var penumpang = []; 
var tambahPenumpang = function(namaPenumpang, penumpang) {

  if (penumpang.length == 0){ // untuk menghitung isi panjang data
    penumpang.push(namaPenumpang); //untuki menambah data kedalam array
    return penumpang; //untuk mengulang isi function
  } else {
    for (i=0; i<penumpang.length; i++){ //untuk mencari ulang isi panjang data yang sudah diisi
      if (penumpang[i] == undefined){ //jika ini penumpang kosong/undefined
        penumpang[i] = namaPenumpang; //menambah isi kursi yang kosong
        return penumpang;
      } else if (namaPenumpang == penumpang[i]) { //untuk mencari data yang telah diinput datanya
        console.log('Penumpang tersebut sudah ada di dalam angkot.'); //memberikan informasi data yang sama/sudah ada
        return penumpang;
      } else if (i == penumpang.length - 1) { //untuk menghitung array selanjutnya lebih dari 0
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
# CRUD APP

<img src="./gif/gif.gif" />


<p>Create Read Update Delete</p>
<p>Oluştur Oku Düzenle Sil</p>
<ul>
    <li>
        Projeye bootstrapı dahil et
        > index.html bootstrap cdn ekle 
    </li>
    <li>
        1- Yeni eklenecek elemanı almak için form oluştur:
    form içerisinden gelen verileri al ve state aktar
    ekle butonuna basıldığı anda forma girilen bilgilerle beraber yeni obje oluştur.
    oluşan objeyi kitaplar isminde bir diziye aktar
    obje oluşturlduktan sonra inputu sıfırla.
    </li>
    <li>
        2- Books stateinde tutulan kitapları al ve map metodu şle listele(ekrana bas)
        > eğer state boşssa ekrana "henüz kitap eklnemedi" yaz.
        > BookCard bileşenine kitap bilgilerini prop olarak gönder.
        > BookCard bileşenin kitapla ilgili bütün özellikleri göster.
    </li>
    <li>
        3- Kitap Silme: 
        > Herhangi bir kitabın sil butonuna basıldığında çalışan
        fonksiyonun silinecek olanın id si gitsin
        > Gelen id yi fonksiyona parametre olarak al
        >Silinecek id ye eşit olmayan objeleri al ve bir diziye aktar.
        > oluşan diziyi state aktar
    </li>

    <li>
        4-Kitabı Okundu olarak işaretle:
        > okundu butonuna basılınca çalışan fonksiyona kitabı gönder
        > kitabın isRead değerini tersine çevir
        > Dizi içerisinde değişecek olan elemanı bul
        > o elemanı çıkar ve yenisini ekle
    </li>
    <li>
        5- Düzenleme İşlemini Yap:
        > düzenle butonuna tıklandığında ekraa bir modal çıksın
        > ve düzenlenecek kitabı App.js e aktarsın (editItem)
        > Modalda Kitap ismini değiştirmek için bir input
        > İnpu her güncellendiğinde editItem değişkenini günceller ve App.je aktarır
        > vazgeç butonu > Modalı Kapatır
        > Kaydet Butonu > App.js de bulunan handleEditBook çalıştırır.
        > Çalışan fonksiyon diziden eski elemanı çıkarır yerine yenisini koyar.
    </li>

    

</ul>
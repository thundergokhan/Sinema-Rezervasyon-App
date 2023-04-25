const seats = document.querySelectorAll(".seat");
const selectedSeats = [];
let totalPrice = 0;

// Koltuklara tıklandığında veya seçim iptal edildiğinde tetiklenen fonksiyon
function toggleSeat() {
  this.classList.toggle("selected"); // Koltuğun seçili durumunu değiştirme
  const seatIndex = Array.from(seats).indexOf(this); // Seçilen koltuğun indexini bulma
  if (selectedSeats.includes(seatIndex)) {
    selectedSeats.splice(selectedSeats.indexOf(seatIndex), 1); // Koltuk zaten seçili ise seçimden çıkarma
    totalPrice -= 10; // Koltuk seçimi iptal edildiğinde fiyatı düşürme
  } else {
    selectedSeats.push(seatIndex); // Koltuğu seçili koltuklar listesine ekleme
    totalPrice += 10; // Koltuk seçildiğinde fiyatı artırma
  }
  updateSelectedSeats(); // Seçili koltukları güncelleme
  updateTotalPrice(); // Toplam fiyatı güncelleme
}

// Seçili koltukları güncelleme
function updateSelectedSeats() {
  const selectedSeatsElement = document.getElementById("selected-seats");
  selectedSeatsElement.textContent =
    "Seçili Koltuklar: " + selectedSeats.length;
}

// Toplam fiyatı güncelleme
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = "Toplam Fiyat: " + totalPrice + " TL";
}

// Satın Al butonuna tıklandığında tetiklenen fonksiyon
function buyTickets() {
  // Seçili koltukları satın alma işlemini burada gerçekleştirebilirsiniz
  // Örneğin, seçili koltukları bir API'ye göndererek rezervasyon işlemi yapılabilir
  // Burada sadece bir alert mesajı gösterildi
  alert(
    "Toplam Fiyat: " +
      totalPrice +
      " TL\nSeçili Koltuklar: " +
      selectedSeats.length
  );
}

// Koltuklara tıklama olayını dinleme
seats.forEach(seat => {
  seat.addEventListener("click", toggleSeat);
});

// Satın Al butonuna tıklama olayını dinleme
const buyButton = document.getElementById("buy-button");
buyButton.addEventListener("click", buyTickets);

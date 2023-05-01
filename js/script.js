function shareToInstagram() {
    let imageUrl = "https://example.com/image.jpg"; // ganti dengan URL gambar yang ingin dibagikan
    let caption = "Ini adalah caption"; // ganti dengan caption yang diinginkan
  
    let url = "https://www.instagram.com/share/create/?url=" + encodeURIComponent(imageUrl) + "&caption=" + encodeURIComponent(caption);
  
    window.open(url, "_blank");
  }
  
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('download-cv-button');

  if (!button) {
    console.warn("Tombol download tidak ditemukan.");
    return;
  }

  button.addEventListener('click', function (e) {
    e.preventDefault();

    const fileUrl = this.getAttribute('href');
    if (!fileUrl) return alert("File tidak tersedia.");

    // Feedback UI
    const originalText = button.innerHTML;
    button.innerHTML = 'Mengunduh... <i class="ri-loader-2-line ri-spin"></i>';
    button.disabled = true;

    // Trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Alvan_Fullstack_Developer_CV.pdf';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset UI setelah download dimulai
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 500);
  });
});
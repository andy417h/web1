document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const hamburger = document.querySelector(".hamburger");
  const mask = document.getElementById("mask");
  const navLinks = document.querySelectorAll(".gnav a");

  // ハンバーガークリック
  hamburger.addEventListener("click", function () {
    header.classList.toggle("open");
  });

  // maskクリックで閉じる
  mask.addEventListener("click", function () {
    header.classList.remove("open");
  });

  // メニュー内のリンククリックで閉じる
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("open");
    });
  });

  /*=================================================
  トップに戻る
  ===================================================*/
  const pagetop = document.getElementById("to-top");

  // 最初は非表示
  pagetop.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      // フェードイン
      pagetop.style.opacity = "1";
      pagetop.style.pointerEvents = "auto";
      pagetop.style.display = "block";
    } else {
      // フェードアウト
      pagetop.style.opacity = "0";
      pagetop.style.pointerEvents = "none";
      setTimeout(() => {
        if (window.scrollY <= 700) {
          pagetop.style.display = "none";
        }
      }, 200);
    }
  });

  pagetop.addEventListener("click", function (e) {
    e.preventDefault(); // aタグのデフォルト動作を止める
    window.scrollTo({ top: 0, behavior: "smooth" }); // スムーズにトップへ
  });
});

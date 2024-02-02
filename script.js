const belum = "https://www.canva.com/design/DAF7jTyjzro/view?embed";

const contentData = [
  {
    src: "https://www.canva.com/design/DAF7eJV5Ex8/y-BuRXCEUmGNj7j2fb6VtA/view?embed",
    title: "Zahid Abdullah Nur Mukhlisin",
  },
  { src: belum, title: "Aditya Dwi Putra Hestialvin" },
  { src: belum, title: "Afdal Elang Arifin" },
  { src: belum, title: "Ararya Arka Anugaraha" },
  { src: belum, title: "Arkha Digda Gallerin Putra" },
  { src: belum, title: "Ayub Dwi Romadhon" },
  { src: belum, title: "Azka Arif Sudibya" },
  { src: belum, title: "Brilliant Lucky Finaltianto" },
  { src: belum, title: "Danar Abisatya Hidayat" },
  { src: belum, title: "Dzikri Faisal Husaini" },
  { src: belum, title: "Faiq Muntashir" },
  { src: belum, title: "Febriano" },
  { src: belum, title: "Hammam Al Rosyid Mudhoffar" },
  {
    src: "https://www.canva.com/design/DAF7arfMp7c/view?embed",
    title: "Hudaifa Dzaky Akbar Mahardika",
  },
  { src: belum, title: "Muhammad Abidzar Al Ghifari" },
  {
    src: "https://www.canva.com/design/DAF7jWJhwFw/796B2ok8d0UiJHGLfcbDsw/view?embed",
    title: "Muhammad Abu Bakar As Shidiq Abdul Aziz",
  },
  { src: belum, title: "Muhammad Adji Al Mahfudz" },
  { src: belum, title: "Muhammad Akmal Hartas" },
  { src: belum, title: "Muhammad Aryaputra Wahyu Pratama" },
  { src: belum, title: "Muhammad Faiz Prasetyo" },
  { src: belum, title: "Muhammad Fauzi Al Maududi" },
  { src: belum, title: "Muhammad Rasyid" },
  {
    src: "https://www.canva.com/design/DAF7jWJhwFw/796B2ok8d0UiJHGLfcbDsw/view?embed",
    title: "Muhammad Zaidan Abhinaya",
  },
  { src: belum, title: "Ngariful Qowam Ghozali Zaini" },
  { src: belum, title: "Rachmatannas Yulian Firdaus" },
  {
    src: "https://www.canva.com/design/DAF7pBqbYv4/j51UgnB7ozOLYsg4WyMugw/view?embed",
    title: "Rafa Haya Narundana",
  },
  { src: belum, title: "Rakan Raditya Kurniawan" },
  { src: belum, title: "Satria Widya Pamungkas" },
  { src: belum, title: "Wahyu Hadi Ramadhan" },
  { src: belum, title: "Yusuf Ghani Akbar" },
];

let currentIndex = 0;

function changeContent(direction) {
  if (direction === "prev") {
    currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
  } else if (direction === "next") {
    currentIndex = (currentIndex + 1) % contentData.length;
  }

  const canva = document.querySelector(".canva");
  canva.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = contentData[currentIndex].src;
  iframe.frameBorder = 0;
  canva.appendChild(iframe);

  const nameDiv = document.querySelector(".name");
  nameDiv.innerHTML = "";

  const h1Element = document.createElement("h1");
  h1Element.textContent = contentData[currentIndex].title;
  nameDiv.appendChild(h1Element);
}

changeContent("next");

function hideMipa5() {
  const mipa5Element = document.querySelector(".mipa5");
  mipa5Element.style.display = "none";
}

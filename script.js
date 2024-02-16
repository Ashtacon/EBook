const belum = "https://www.canva.com/design/DAF7jTyjzro/view?embed";

const contentData = [
  {
    src: "https://www.canva.com/design/DAF7eJV5Ex8/y-BuRXCEUmGNj7j2fb6VtA/view?embed",
    title: "Zahid Abdullah Nur Mukhlisin",
  },
  {
    src: "https://www.canva.com/design/DAF8E7OYW7g/kpO5d2NOJzCLUB5r8V5-9A/view?embed",
    title: "Aditya Dwi Putra Hestialvin",
  },
  {
    src: "https://www.canva.com/design/DAF8EqysVnc/VWo4fadLBd0i6RVtpIZ7uA/view?embed",
    title: "Afdal Elang Arifin",
  },
  { src: belum, title: "Ararya Arka Anugaraha" },
  {
    src: "https://www.canva.com/design/DAF8mp5JjTg/Fbtr66GT53SGNZIR0VITwg/view?embed",
    title: "Arkha Digda Gallerin Putra",
  },
  {
    src: "https://www.canva.com/design/DAF8glevJaw/6DvCs8cFqe8cQz1aFX8ejQ/view?embed",
    title: "Ayub Dwi Romadhon",
  },
  {
    src: "https://www.canva.com/design/DAF7dnOSGYs/qjWnlblfIH2MqGXt1U9RNQ/view?embed",
    title: "Azka Arif Sudibya",
  },
  {
    src: "https://www.canva.com/design/DAF8fguDmAM/KEvOZqKW58KZ0HZ-wdx3NA/view?embed",
    title: "Brilliant Lucky Finaltianto",
  },
  { src: belum, title: "Danar Abisatya Hidayat" },
  { src: belum, title: "Dzikri Faisal Husaini" },
  { src: belum, title: "Faiq Muntashir" },
  { src: belum, title: "Febriano" },
  {
    src: "https://www.canva.com/design/DAF8EjUzICE/_T37iqYpr639NhyhbtTLhQ/view?embed",
    title: "Hammam Al Rosyid Mudhoffar",
  },
  {
    src: "https://www.canva.com/design/DAF7arfMp7c/view?embed",
    title: "Hudaifa Dzaky Akbar Mahardika",
  },
  {
    src: "https://www.canva.com/design/DAF71mRhVFI/gvEybtBQM_fQXkS1k44O0g/view?embed",
    title: "Muhammad Abidzar Al Ghifari",
  },
  {
    src: "https://www.canva.com/design/DAF7pUKBllU/7lemhlFrZheMlNhCAQcbuQ/view?embed",
    title: "Muhammad Abu Bakar As Shidiq Abdul Aziz",
  },
  {
    src: "https://www.canva.com/design/DAF8ElmBWW8/mUB9Vv-q9Ek7If09PfUvag/view?embed",
    title: "Muhammad Adji Al Mahfudz",
  },
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

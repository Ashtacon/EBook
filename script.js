const belum = "";

const contentData = [
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Zahid Abdullah Nur Mukhlisin",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Aditya Dwi Putra Hestialvin",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Afdal Elang Arifin",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Ararya Arka Anugaraha",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Arkha Digda Gallerin Putra",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Ayub Dwi Romadhon",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Azka Arif Sudibya",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Brilliant Lucky Finaltianto",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Danar Abisatya Hidayat",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Dzikri Faisal Husaini",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Faiq Muntashir",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Febriano",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Hammam Al Rosyid Mudhoffar",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Hudaifa Dzaky Akbar Mahardika",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Abidzar Al Ghifari",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Abu Bakar As Shidiq Abdul Aziz",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Adji Al Mahfudz",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Akmal Hartas",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Aryaputra Wahyu Pratama",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Faiz Prasetyo",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Fauzi Al Maududi",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Rasyid",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Muhammad Zaidan Abhinaya",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Ngariful Qowam Ghozali Zaini",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Rachmatannas Yulian Firdaus",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Rafa Haya Narundana",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Rakan Raditya Kurniawan",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Satria Widya Pamungkas",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Wahyu Hadi Ramadhan",
  },
  {
    src: "https://www.canva.com/design/DAF7jTyjzro/view?embed",
    title: "Yusuf Ghani Akbar",
  },
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

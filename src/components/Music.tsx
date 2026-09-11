import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const MUSIC = [
  {
    id: 1,
    title: "About You",
    artist: "The 1975",
    link: "https://www.youtube.com/watch?v=tGv7CUutzqU",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDi9WbbFUjX5EnT8V1Ry9oek0Tz-zV1_zkEdbsO3MsZXmbFRj7loznAog&s=10",
    background: "#8d6a52",
  },
  {
    id: 2,
    title: "Raf",
    artist: "A$AP Mob",
    link: "https://www.youtube.com/watch?v=JHUhFN3G4T8",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/20/ASAP_Mob_-_RAF.png",
    background: "#a83025",
  },
  {
    id: 3,
    title: "Punching In A Dream",
    artist: "The Naked And Famous",
    link: "https://www.youtube.com/watch?v=OCcUXEC5_eU",
    cover: "https://i.scdn.co/image/ab67616d0000b273324fa2cba6ecec820b19f331",
    background: "#a23640",
  },
  {
    id: 4,
    title: "Wash",
    artist: "Jon Bellion",
    link: "https://www.youtube.com/watch?v=W1eMrPpvvKE",
    cover:
      "https://m.media-amazon.com/images/I/91q8STqlIqL._UF894,1000_QL80_.jpg",
    background: "#be3b15",
  },
  {
    id: 5,
    title: "Zombie",
    artist: "The Cranberries",
    link: "https://www.youtube.com/watch?v=6Ejga4kJUts",
    cover:
      "https://i1.sndcdn.com/artworks-Bhi4dxjYRLNzmB56-daJ3Ug-t500x500.jpg",
    background: "#237b6b",
  },
  {
    id: 6,
    title: "Coconut Tree",
    artist: "Mohombi & Nicole Scherzinger",
    link: "https://www.youtube.com/watch?v=gOfOt76D3MM",
    cover:
      "https://cdn-images.dzcdn.net/images/cover/0e2fa01469bc8e30135a947cc15bbca2/1900x1900-000000-80-0-0.jpg",
    background: "#097f2b",
  },
  {
    id: 7,
    title: "Pieces",
    artist: "Sum 41",
    link: "https://www.youtube.com/watch?v=By7ctqcWxyM",
    cover: "https://i.scdn.co/image/ab67616d0000b273cb38dd3dba8a0801bc1ee03a",
    background: "#878432",
  },
  {
    id: 8,
    title: "La Gozadera",
    artist: "Gente De Zona",
    link: "https://www.youtube.com/watch?v=VMp55KH_3wo",
    cover:
      "https://cdn-images.dzcdn.net/images/cover/b9f1bde0a2dcd416294ddc3736279739/1900x1900-000000-80-0-0.jpg",
    background: "#15211b",
  },
  {
    id: 9,
    title: "Pill Breaker",
    artist: "Trippie Redd & Travis Barker & MGK",
    link: "https://www.youtube.com/watch?v=4vtw-B1Sbu4",
    cover:
      "https://i1.sndcdn.com/artworks-WvYl82e60Hi92zcm-3sctzw-t500x500.jpg",
    background: "#0d0720",
  },
  {
    id: 10,
    title: "L'aventurier",
    artist: "Indochine",
    link: "https://www.youtube.com/watch?v=M7X6oYg6iro",
    cover:
      "https://indoprisme.com/wp-content/uploads/2020/10/81-laventurier-single.jpg",
    background: "#020102",
  },
  {
    id: 11,
    title: "Family Ties",
    artist: "Kendrick Lamar & Baby Keem",
    link: "https://www.youtube.com/watch?v=v6HBZC9pZHQ",
    cover: "https://i.scdn.co/image/ab67616d0000b2733bcf586e8df6f8ef4a36ca3c",
    background: "#66707d",
  },
  {
    id: 18,
    title: "Marly-Gomont",
    artist: "Kamini",
    link: "https://www.youtube.com/watch?v=rP6x1FCd7ko",
    cover:
      "https://m.media-amazon.com/images/I/81RGYAz6+DL._UF894,1000_QL80_.jpg",
    background: "#362c30",
  },
  {
    id: 19,
    title: "J't'emmène au vent",
    artist: "Louise Attaque",
    link: "https://www.youtube.com/watch?v=BRTDC9Z5UdE",
    cover:
      "https://cdn-images.dzcdn.net/images/cover/0b2be6637d8afd3dfc1bc77d5585054f/1900x1900-000000-80-0-0.jpg",
    background: "#cf9d5e",
  },
];

export default function Music() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        loopAddBlankSlides
      >
        {MUSIC.map((music) => (
          <SwiperSlide key={music.id}>
            <a href={music.link} target="_blank" rel="noreferrer">
              <div className="music-card-container">
                <div
                  className="music-card"
                  //   style={{ backgroundColor: music.background }}
                >
                  <div className="music-cover">
                    <img src={music.cover} alt={music.title} />
                  </div>
                  <div className="music-info">
                    <strong>{music.title}</strong>
                    <span>{music.artist}</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="music-controls">
        <button onClick={() => swiperRef.current?.slidePrev()}>←</button>
        <button onClick={() => swiperRef.current?.slideNext()}>→</button>
      </div>
    </>
  );
}

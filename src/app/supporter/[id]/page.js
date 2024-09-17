import React from 'react'
import { Hero, Profil, Video, Space } from '@/components/module/supporter/detail/page'
import Footer from '@/components/layout/Footer'
import { NotFound } from '../../not-found'

export const metadata = {
  title: 'Detail Supporter',
  description: 'Detail penjelasan supporter dari masing-masing fakultas',
}

const data = [
  {
    id: 'feb',
    nama1: 'ECONOLYMPUS',
    nama2: 'Econolympus',
    desc: 'Econolympus merupakan pendukung bersemangat dan setia dari Fakultas Ekonomika dan Bisnis UGM. Mereka selalu hadir dengan semangat tinggi untuk mendukung tim mereka, memberikan energi positif, dan menciptakan atmosfer kompetitif yang mendukung prestasi olahraga yang luar biasa.',
    link: 'https://www.youtube.com/embed/2Q3-UWlBG4M',
  },
  {
    id: 'biologi',
    nama1: 'DOUBLE HELIX',
    nama2: 'Double Helix',
    desc: 'Supporter Double Helix dari Fakultas Biologi UGM adalah pendukung yang solid dan penuh tekad, mengadopsi maskot Burung Cangak Ardea cinerea. Logo mereka menampilkan sorot mata tajam, merepresentasikan kekuatan mereka, sementara sayap terbuka melambangkan solidaritas dan dukungan tanpa batas untuk para atlit. Tulisan "Double Helix" membentuk ikatan kuat dalam keluarga Fakultas Biologi yang terikat satu.',
    link: 'https://www.youtube.com/embed/64pIC79do5M',
  },
  {
    id: 'ftp',
    nama1: 'ULTRAS TRAKTOR',
    nama2: 'Ultras Traktor',
    desc: 'Ultras Traktor, adalah kelompok Ultras dari Fakultas Teknologi Pertanian UGM yang menyatukan mahasiswa dengan cinta untuk tim mereka. Mereka selalu hadir dengan semangat yang tinggi, memberikan dukungan luar biasa, dan menciptakan atmosfer yang memompa di setiap pertandingan.',
    link: 'https://www.youtube.com/embed/OxQvBjwyk_o',
  },
  {
    id: 'fisipol',
    nama1: 'SOSPOLIGAN',
    nama2: 'Sospoligan',
    desc: 'Sospoligan atau Sosial Politik Hooligan adalah pendukung setia dari Fakultas Ilmu Sosial dan Politik UGM, Sospoligan adalah pilar semangat olahraga yang tak tergoyahkan. Mereka menjunjung tinggi sportivitas dan semangat kompetitif dalam setiap pertandingan, dan selalu menjadi penyemangat utama untuk tim dan atlit mereka.',
    link: 'https://www.youtube.com/embed/Ur1goOCAMbo',
  },
  {
    id: 'fib',
    nama1: 'SASTRO CONTHONG',
    nama2: 'Sastro Conthong',
    desc: 'Sastro Conthong adalah supporter Fakultas Ilmu Budaya UGM dengan logo berisi Ganesha, simbol pengetahuan dan kebijaksanaan. Ganesha melambangkan pengetahuan dan rintangan mahasiswa Ilmu Budaya. Mulut Ganesha simbolisasi suara mahasiswa yang mendukung dan menghadapi tantangan. Mereka mendorong komunikasi, ekspresi, dan semangat menghadapi tantangan sebagai identitas mahasiswa Ilmu Budaya UGM.',
    link: 'https://www.youtube.com/embed/Wse9BfD9ugw',
  },
  {
    id: 'hukum',
    nama1: 'ULTRAS JUSTICIA',
    nama2: 'Ultras Justicia',
    desc: 'Ultras Justicia, merupakan supporter olahraga dari Fakultas Hukum UGM, Ultras Justicia adalah pendukung setia yang bersemangat dan berdedikasi untuk mendukung prestasi tim olahraga kampus. Dengan slogannya "Stand For Justice, Strive For Glory," mereka menekankan pentingnya keadilan dalam persaingan olahraga sambil menginspirasi tim mereka untuk meraih kejayaan.',
    link: 'https://www.youtube.com/embed/BqIq2eA6qwQ',
  },
  {
    id: 'geografi',
    nama1: 'SGM GEOGRAFI',
    nama2: 'SGM Geografi',
    desc: 'SGM Geografi, didukung oleh mahasiswa Fakultas Geografi UGM, adalah tim penuh semangat yang siap berkompetisi dalam berbagai cabang olahraga Porsenigama. Mereka menjunjung tinggi semangat kompetisi dan kebersamaan dalam upaya mencapai prestasi terbaik di lapangan.',
    link: '',
  },
  {
    id: 'filsafat',
    nama1: 'PHILOSCONTONG',
    nama2: 'Philoscontong',
    desc: 'Philoscontong, mahasiswa dari Fakultas Filsafat UGM, adalah seorang supporter berdedikasi dalam dunia olahraga. Dengan pengetahuan filsafatnya, ia membawa perspektif unik ke dalam setiap pertandingan, memberikan dukungan emosional yang mendalam kepada timnya, dan menginspirasi semangat kompetitif dengan filosofi yang mendalam.',
    link: 'https://www.youtube.com/embed/N-aLTaJda5k',
  },
  {
    id: 'farmasi',
    nama1: 'FARMASI MANIA',
    nama2: 'Farmasi Mania',
    desc: 'Farmasi Mania, atau FA Mania, adalah kelompok pendukung yang berdiri pada tahun 2010 oleh Mas Adityo Idhi dan rekan dari Departemen PPM di Fakultas Farmasi UGM. Mereka mengusung filosofi keabadian (EMAS), menggunakan simbol pedang ke bawah untuk mengintimidasi lawan tanpa memicu konflik, dan saling melindungi dengan tameng, semuanya mewakili semangat dan dedikasi mereka terhadap Fakultas Farmasi UGM.',
    link: 'https://www.youtube.com/embed/37sHGZG6TLo',
  },
  {
    id: 'fkg',
    nama1: 'PESUT KG',
    nama2: 'Pesut KG',
    desc: 'Pesut KG adalah kelompok supporter bersemangat dari Fakultas Kedokteran Gigi UGM yang memberikan dukungan luar biasa selama kompetisi olahraga. Mereka mengibarkan semangat tim dengan yel-yel dan atribut khas, menciptakan atmosfer yang membara di setiap pertandingan.',
    link: 'https://www.youtube.com/embed/rJEe_VDiwMQ',
  },
  {
    id: 'fkh',
    nama1: 'KEWANNIAN',
    nama2: 'Kewannian',
    desc: 'Kewannian, tim pendukung olahraga dari Fakultas Kedokteran Hewan UGM, telah aktif sejak tahun 2012. Mereka adalah kelompok mahasiswa yang penuh semangat dan setia dalam mendukung prestasi olahraga di kampus. Dengan suara dan semangat yang menggebu, mereka selalu hadir untuk memberikan dukungan tak tergoyahkan kepada atlet-atlet mereka dalam berbagai kompetisi. Kewannian adalah pilar penting dalam menciptakan atmosfer positif dan kompetitif dalam dunia olahraga kampus.',
    link: '',
  },
  {
    id: 'teknik',
    nama1: 'SUPERSONIK',
    nama2: 'Supersonik',
    desc: 'Supersonik adalah singkatan dari Suporter Solid Teknik. Supersonik adalah suporter dari mahasiwa Teknik UGM yang lahir pada Porsenigama pertama pada tahun 2012. Berawal dari persamaan nasib dan semangat untuk mendukung kontingen Teknik UGM di Porsenigama, maka terbentuklah suporter Fakultas Teknik UGM yaitu Supersonik.',
    link: 'https://www.youtube.com/embed/x29T6eTsQKs',
  },
  {
    id: 'sv',
    nama1: 'GARASI',
    nama2: 'Garasi',
    desc: 'Supporter "Garasi" (Garis Keras Vokasi) adalah kelompok pendukung yang berkomitmen untuk mendukung dan mempromosikan Sekolah Vokasi di Universitas Gadjah Mada (UGM). Garasi berperan aktif dalam memberikan dukungan kepada mahasiswa dan program-program akademik yang ada di Sekolah Vokasi UGM. Dengan semangat yang tinggi, mereka membangun komunitas yang solid dan penuh semangat dalam mendukung keberhasilan serta prestasi-prestasi Sekolah Vokasi UGM.',

    link: 'https://www.youtube.com/embed/oI-XaIHhRBU',
  },
  {
    id: 'pasca',
    nama1: 'ORANG TUA',
    nama2: 'Orang Tua',
    desc: 'Orang Tua, supporter olahraga Pasca Sarjana UGM, ditandai oleh logo mereka yang menggambarkan semangat kerjasama dan dedikasi. Dengan 10 garis daun yang bersatu, mereka mewakili solidaritas dalam olahraga. Daun melambangkan kenyamanan dan kebermanfaatan, mencerminkan dukungan yang dinamis dan berkomitmen saat mereka mendukung tim mereka di berbagai pertandingan.',
    link: 'https://www.youtube.com/embed/_5CIsqZvboc',
  },
  {
    id: 'psikologi',
    nama1: 'TRISULA PURBA',
    nama2: 'Trisula Purba',
    desc: 'Trisula Purba merupan supporter dari Fakultas Psikologi UGM yang merangkul prinsip-prinsip kehormatan, persatuan, dan kekeluargaan. Mereka membawa semangat Psikologi (yang direpresentasikan oleh huruf Yunani "Psi") dengan tekad mendukung tradisi dan autentisitas dalam pendidikan mereka. Mereka adalah elemen tak terpisahkan dalam Fakultas Psikologi, berusaha untuk terbang bebas sambil mempertahankan warisan mereka.',
    link: 'https://www.youtube.com/embed/_pUh66qtzng',
  },
  {
    id: 'peternakan',
    nama1: 'ONGOLIGANS',
    nama2: 'Ongoligans',
    desc: 'Ongoligans adalah kelompok supporter yang didirikan pada tahun 2012 oleh para alumni dengan tujuan memperkuat persatuan antar angkatan di Fakultas Peternakan Universitas Gadjah Mada. Logo mereka, sebuah piala berbentuk sapi Ongole, mencerminkan semangat kuat, keberanian, dan mentalitas juara. Warna merah dalam gradasi melambangkan keberagaman dalam kesatuan, sementara maskot Olle menambah dukungan kepada tim olahraga fakultas.',
    link: 'https://www.youtube.com/embed/MQYOG-Nq00Q',
  },
  {
    id: 'pertanian',
    nama1: 'HOLLIDJON',
    nama2: 'Hollidjon',
    desc: 'Hollidjon atau Holligan Laskar Hardjono Danoesastro merupakan salah satu kelompok supporter yang ada di UGM. Hollidjon didirikan pada tahun 2010. Lahirnya Hollidjon dilatarbelakangi oleh respon atas munculnva pergerakan untuk mendukung atlet Fakultas Pertanian diajang Porsenigama. Nama Hollidjon berasal dari dekan pertama Fakultas Pertanian UGM',
    link: 'https://www.youtube.com/embed/wddyyqMEw7o',
  },
  {
    id: 'mipa',
    nama1: 'BADAI ALAM',
    nama2: 'Badai Alam',
    desc: 'Badai Alam adalah perkumpulan pendukung atlet-atlet Fakultas MIPA UGM, berdiri pada 2014. Awalnya terdiri dari beberapa mahasiswa departemen, kini telah berkembang menjadi organisasi inklusif yang melibatkan semua prodi MIPA. Mereka berkomitmen untuk memberikan dukungan penuh dalam Porsenigama dan menerapkan kaderisasi sejak 2014.',
    link: 'https://www.youtube.com/embed/tymbyk5DwrM',
  },
  {
    id: 'kehutanan',
    nama1: 'KAPAK RIMBA',
    nama2: 'Kapak Rimba',
    desc: 'Supporter Kapak Rimba adalah wadah kreativitas mahasiswa program Diploma dan Sarjana Kehutanan UGM yang didirikan pada tahun 1999 oleh Mas Riza Yuda, yang dikenal sebagai Mas Londo. Kapak Rimba bertujuan untuk meningkatkan semangat dan dukungan terhadap kontingen kehutanan di UGM, dengan logo berarti semangat, kekompakan, dan keberanian seorang rimbawan. Slogan mereka, "Satu Korsa Sama Rata!", menggambarkan semangat persatuan di Kapak Rimba.',
    link: 'https://www.youtube.com/embed/v7FYguULdPY',
  },
  {
    id: 'fkkmk',
    nama1: 'CRANUM',
    nama2: 'Cranum',
    desc: 'Cranum adalah pendukung bersemangat dari Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan (FK-KMK) UGM yang selalu mendukung tim olahraga mereka dengan antusiasme luar biasa. Dengan semangatnya yang membara, Cranum menjadi pilar penting dalam mendorong prestasi olahraga di fakultas tersebut.',
    link: '',
  },
]

export async function getStaticPaths() {
  // Ambil semua nilai yang mungkin untuk parameter dinamis 'id'
  const paths = data.map((item) => ({
    params: { id: item.id },
  }))

  return {
    paths,
    fallback: false, // Ubah menjadi true jika Anda ingin menangani halaman yang belum dibangun secara statis
  }
}

export default async function detailSupporter({ params }) {
  const supporter = data.find((item) => item.id === params.id)

  try {
    const logo = `/assets/supporter/barisan/${supporter.id}.png`
    const foto = `/assets/supporter/detail/foto/${supporter.id}.png`
    return (
      <>
        <Hero path={logo} nama={supporter.nama1} foto={foto} />
        <Profil nama={supporter.nama2} desc={supporter.desc} />
        {supporter.link ? <Video link={supporter.link} /> : null}
        <Space />
        <Footer />
      </>
    )
  } catch (error) {
    return <NotFound />
  }
}

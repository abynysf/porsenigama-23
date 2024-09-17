import Hero from '../../../components/module/cabang/detail/Hero'
import Bagan from '../../../components/module/cabang/detail/Bagan'
import Calendar from '../../../components/module/cabang/detail/Calendar'
import Jadwal from '../../../components/module/cabang/detail/Jadwal'
import Kontingen from '../../../components/module/cabang/detail/Kontingen'

import PropTypes from 'prop-types'

// import {Hero,Bagan,Calendar,Jadwal,Kontingen} from "../../../components/module/cabang/detail/page"

import { NotFound } from '../../not-found'
import Footer from '../../../components/layout/Footer'

export const metadata = {
  title: 'Detail Cabang',
  description: 'Detail Cabang yang diperlombakan',
}

const data = [
  {
      type: 'olahraga',
      id: 'basket',
      nama: 'BASKET',
      alt : 'Maskot Olahraga Basket',
      desc: 'Basket merupakan salah satu cabang olahraga yang dimainkan secara berkelompok berisikan 5 orang, dimana tim akan bekerja sama  untuk mencetak poin dengan memasukkan bola ke keranjang lawan sebanyak-banyaknya.'
    },
    {
      type: 'olahraga',
      id: 'voli',
      nama: 'VOLI',
      alt : 'Maskot Olahraga Voli',
      desc: 'Voli  adalah olahraga yang mengharuskan dua tim berjuang untuk mengirim bola ke sisi lawan dengan cara melintasi jaring demi menghasilkan poin tanpa membiarkan bola menyentuh tanah.'
    },
    {
      type: 'olahraga',
      id: 'softball',
      nama: 'SOFTBALL',
      alt : 'Maskot Olahraga Softball',
      desc: 'Softball adalah olahraga bola kecil beregu yang dimainkan oleh dua tim yang berusaha mencetak poin dengan memukul bola menggunakan tongkat  dan berlari mengelilingi basis.'
    },
    {
      type: 'olahraga',
      id: 'tenis-meja',
      nama: 'TENIS MEJA',
      alt : 'Maskot Olahraga Tenis Meja',
      desc: 'Tenis meja atau pingpong adalah olahraga dimana pemain atau tim berusaha mencetak poin dengan mengayunkan bola kecil melintasi meja ke sisi lawan menggunakan raket kecil yang biasa disebut dengan bet.'
    },
    {
      type: 'olahraga',
      id: 'atletik',
      nama: 'ATLETIK',
      alt : 'Maskot Olahraga Atletik',
      desc: 'Atletik adalah kumpulan berbagai cabang olahraga yang mencakup lari, lompat, dan lempar yang membutuhkan kombinasi kecepatan, ketangkasan dan ketahanan fisik yang baik.'
    },
    {
      type: 'olahraga',
      id: 'panjat-tebing',
      nama: 'PANJAT TEBING',
      alt : 'Maskot Olahraga Panjat Tebing',
      desc: 'Panjat tebing adalah olahraga yang dihadapkan dengan tantangan berupa rute pendakian yang berbeda-beda dalam  suatu dinding permukaan buatan dimana mengharuskan adanya solusi untuk menaklukkan rute tersebut.'
    },
    {
      type: 'olahraga',
      id: 'renang',
      nama: 'RENANG',
      alt : 'Maskot Olahraga Renang',
      desc: 'Renang merupakan cabang olahraga yang menggunakan teknik tertentu untuk bergerak dalam air dari satu titik ke yang lainnya. Olahraga tersebut mempromosikan kebugaran, keterampilan, dan daya tahan yang tinggi.'
    },
    {
      type: 'olahraga',
      id: 'berkuda',
      nama: 'BERKUDA',
      alt : 'Maskot Olahraga Berkuda',
      desc: 'Berkuda adalah kompetisi di mana atlet dan kuda mereka bersaing dalam berbagai disiplin seperti balap cepat, loncatan rintangan, atau tampilan elegan. Lomba ini menguji keahlian mengendalikan kuda serta memadukan kekuatan, keterampilan, dan keindahan.'
    },
    {
      type: 'olahraga',
      id: 'hockey',
      nama: 'HOCKEY',
      alt : 'Maskot Olahraga Hockey',
      desc: 'Hockey adalah olahraga yang dimainkan dengan menggunakan tongkat untuk mengendalikan bola atau puck, dimana prosesnya bertujuan untuk memasukan bola ke gawang lawan dengan kerjasama antar tim.'
    },
    {
      type: 'olahraga',
      id: 'catur',
      nama: 'CATUR',
      alt : 'Maskot Olahraga Catur',
      desc: 'Catur adalah permainan strategi papan yang penuh dengan taktik dimana dua pemain akan menggunakan bidak masing-masing yang memiliki kemampuan bergerak tertentu untuk menggiring raja lawan dalam posisi skakmat.'
    },
    {
      type: 'olahraga',
      id: 'bridge',
      nama: 'BRIDGE',
      alt : 'Maskot Olahraga Bridge',
      desc: 'Bridge adalah permainan kartu yang dimainkan oleh empat pemain yang terbagi menjadi dua tim untuk mencapai skor tertentu dengan mengambil sebanyak mungkin kontrak lelang yang telah ditentukan sebelumnya.'
    },
    {
      type: 'olahraga',
      id: 'tenis-lapangan',
      nama: 'TENIS LAPANGAN',
      alt : 'Maskot Olahraga Tenis Lapangan',
      desc: 'Tenis lapangan adalah olahraga raket yang bertujuan untuk mencetak poin sebanyak mungkin dengan memukul bola kembali ke daerah lawan, sambil menjaga bola agar tetap berada dalam batas lapangan.'
    },
    {
      type: 'olahraga',
      id: 'selam',
      nama: 'SELAM',
      alt : 'Maskot Olahraga Selam',
      desc: 'Selam, atau menyelam, adalah olahraga air di mana seorang atlet berenang di bawah permukaan air, biasanya menggunakan peralatan seperti tabung oksigen, selam, dan kacamata selam. Olahraga selam membutuhkan keterampilan teknis dan kesadaran lingkungan yang tinggi.'
    },
    {
      type: 'olahraga',
      id: 'e-sport',
      nama: 'E-SPORT',
      alt : 'Maskot Olahraga E-Sport',
      desc: 'E-sport adalah cabang olahraga yang bertanding dengan media elektronik. Pemain menggunakan keterampilan, strategi, dan koordinasi tim untuk bersaing. Cabang olahraga e-sport, terdiri dari Mobile Legend, PUBG Mobile,  Magic Chess, Dota 2, dan Valorant.'
    },
    {
      type: 'olahraga',
      id: 'sepak-bola',
      nama: 'SEPAK BOLA',
      alt : 'Maskot Olahraga Sepak Bola',
      desc: 'Sepak bola adalah olahraga yang dimainkan oleh dua tim yang terdiri 11 orang pemain inti. Masing-masing tim berupaya untuk menang dan mencetak gol ke gawang lawan sebanyak mungkin.'
    },
    {
      type: 'olahraga',
      id: 'futsal',
      nama: 'FUTSAL',
      alt : 'Maskot Olahraga Futsal',
      desc: 'Futsal adalah permainan bola yang dimainkan oleh dua tim, yang masing-masing beranggotakan lima orang. Tujuannya adalah memasukkan bola ke gawang lawan sebanyak mungkin.'
    },
    {
      type: 'olahraga',
      id: 'bulu-tangkis',
      nama: 'BULU TANGKIS',
      alt : 'Maskot Olahraga Bulu Tangkis',
      desc: 'Bulu tangkis merupakan olahraga raket yang berusaha untuk memenangkan poin dengan menjatuhkan shuttlecock ke area lawan.'
    },
    {
      type: 'olahraga',
      id: 'judo',
      nama: 'JUDO',
      alt : 'Maskot Olahraga Judo',
      desc: 'Judo adalah olahraga bela diri yang menitik beratkan pada bantingan, bukan pukulan maupun tendangan dimana tujuan utamanya adalah untuk menjatuhkan lawan ke lantai dengan kekuatan, teknik, dan keterampilan yang tepat.'
    },
    {
      type: 'olahraga',
      id: 'taekwondo',
      nama: 'TAEKWONDO',
      alt : 'Maskot Olahraga Taekwondo',
      desc: 'Taekwondo adalah sebuah cabang olahraga bela diri yang menekankan pada teknik tendangan. Taekwondo membutuhkan kekuatan, kelincahan, serta keseimbangan, dan strategi.'
    },
    {
      type: 'olahraga',
      id: 'panahan',
      nama: 'PANAHAN',
      alt : 'Maskot Olahraga Panahan',
      desc: 'Panahan adalah cabang olahraga yang dilakukan dengan menembakkan anak panah menggunakan busur untuk mencapai target atau sasaran tembak pada jarak yang sudah ditentukan.'
    },
    {
      type: 'olahraga',
      id: 'kempo',
      nama: 'KEMPO',
      alt : 'Maskot Olahraga Kempo',
      desc: 'Kempo adalah seni bela diri yang melibatkan berbagai teknik serangan, pertahanan, dan gerakan tubuh. Ini adalah seni bela diri yang menuntut komitmen tinggi dan dedikasi dalam rangka mengembangkan keterampilan dan kekuatan diri.'
    },
    {
      type: 'olahraga',
      id: 'karate',
      nama: 'KARATE',
      alt : 'Maskot Olahraga Karate',
      desc: 'Karate adalah kompetisi fisik yang menilai keahlian dan teknik berkelahi dengan menggunakan tangan kosong atau dengan senjata seperti nunchaku. Teknik dasar karate ada tiga, yaitu kihon, kata, dan kumite.'
    },
    {
      type: 'olahraga',
      id: 'pencak-silat',
      nama: 'PENCAK SILAT',
      alt : 'Maskot Olahraga Pencak Silat',
      desc: 'Pencak silat adalah seni bela diri tradisional yang merujuk pada keahlian dalam mempertahankan diri dengan keahlian menangkis, menyerang serta membela diri menggunakan atau tanpa senjata.'
    },
    {
      type: 'seni',
      id: 'lukis-tradisional',
      nama: 'LUKIS TRAD.',
      alt: 'Maskot Seni Lukis Tradisional',
      desc:
        'Seni lukis tercipta dari imajinasi seniman yang diekspresikan melalui media garis, warna, tekstur, gelap terang, maupun bidang dan bentuk yang bertujuan melestarikan dan mempromosikan seni lukis tradisional.',
    },
    {
      type: 'seni',
      id: 'fotografi',
      nama: 'FOTOGRAFI',
      alt: 'Maskot Seni Fotografi',
      desc:
        'Fotografi adalah kompetisi di mana para fotografer bersaing untuk menciptakan karya visual yang unik dan menarik. Peserta diharapkan untuk mengungkapkan kreativitas dalam mengambil gambar serta menyampaikan pesan atau cerita melalui hasil jepretan mereka.',
    },
    {
      type: 'seni',
      id: 'band',
      nama: 'BAND',
      alt: 'Maskot Kompetisi Musik Band',
      desc:
        'Band adalah kompetisi musik di mana berbagai band atau grup musik tampil dan bersaing dalam berbagai genre musik. Mereka menampilkan bakat musik mereka dengan menggunakan berbagai instrumen untuk menciptakan karya seni musik yang unik dan menghibur.',
    },
    {
      type: 'seni',
      id: 'cipta-puisi',
      nama: 'CIPTA PUISI',
      alt: 'Maskot Kompetisi Cipta Puisi',
      desc:
        'Cipta Puisi adalah kompetisi kreatif di mana peserta mengungkapkan perasaan, pemikiran, dan imajinasi dalam bentuk puisi. Lomba ini memberikan kesempatan kepada para penulis untuk mengeksprsikan seni sastra mereka dalam karya puisi yang menginspirasi.',
    },
    {
      type: 'seni',
      id: 'vokal-group',
      nama: 'VOKAL GROUP',
      alt: 'Maskot Kompetisi Vokal Group',
      desc:
        'Vokal Group adalah kompetisi musik vokal di mana grup vokal, biasanya terdiri dari beberapa penyanyi, bersaing dalam penampilan vokal yang memukau. Peserta akan menampilkan harmoni vokal yang sempurna dan kreativitas dalam penyampaian lagu.',
    },
    {
      type: 'seni',
      id: 'naskah-lakon',
      nama: 'NASKAH LAKON',
      alt: 'Maskot Naskah Lakon',
      desc:
        'Naskah lakon disebut pula dengan skenario. Naskah ini menjadi bentuk penuangan ide cerita ke dalam alur cerita dan susunannya. Mereka harus mengembangkan cerita, karakter, dialog, dan arahan panggung untuk menghasilkan karya seni yang menarik dan berkesan.',
    },
    {
      type: 'seni',
      id: 'vokal-keroncong',
      nama: 'VOKAL KERONCONG',
      alt: 'Maskot Kompetisi Vokal Keroncong',
      desc:
        'Vokal Keroncong adalah kompetisi seni vokal yang menonjolkan genre musik keroncong. Para peserta akan bersaing dalam menyanyikan lagu-lagu keroncong dengan penuh gaya, harmoni, dan nuansa tradisional yang khas.',
    },
    {
      type: 'seni',
      id: 'vokal-seriosa',
      nama: 'VOKAL SERIOSA',
      alt: 'Maskot Kompetisi Vokal Seriosa',
      desc:
        'Vokal Seriosa adalah kompetisi vokal yang mempertandingkan penyanyi dengan gaya seriosa, yang biasanya melibatkan penampilan vokal klasik dengan penggunaan teknik vokal yang sangat terlatih.',
    },
    {
      type: 'seni',
      id: 'tari-modern',
      nama: 'TARI MODERN',
      alt: 'Maskot Kompetisi Tari Modern',
      desc:
        'Tari Modern adalah kompetisi di mana para penari menampilkan koreografi tari yang menggabungkan elemen-elemen seni modern dalam gerakan mereka.',
    },
    {
      type: 'seni',
      id: 'monolog',
      nama: 'MONOLOG',
      alt: 'Maskot Kompetisi Monolog',
      desc:
        'Monolog merupakan ilmu yang mengajarkan tentang seni peran yang mana didalamnya dibutuhkan satu orang atau dialog bisu untuk melakukan adegan seni peran tersebut.',
    },
    {
      type: 'seni',
      id: 'tari-tradisional',
      nama: 'TARI TRADISIONAL',
      alt: 'Maskot Kompetisi Tari Tradisional',
      desc:
        'Tari Tradisional adalah sebuah kompetisi yang menampilkan keindahan tarian tradisional dari berbagai budaya di seluruh dunia. Para peserta akan berkompetisi dalam menampilkan gerakan, kostum, dan ekspresi.',
    },
    {
      type: 'seni',
      id: 'komik-strip',
      nama: 'KOMIK STRIP',
      alt: 'Maskot Kompetisi Komik Strip',
      desc:
        'Komik strip adalah kompetisi di mana para peserta diminta untuk membuat cerita singkat dalam bentuk komik strip. Mereka harus menggunakan gambar dan teks untuk menyampaikan pesan atau cerita dengan cara yang kreatif dan menghibur.',
    },
    {
      type: 'seni',
      id: 'poster',
      nama: 'POSTER',
      alt: 'Maskot Kompetisi Poster',
      desc:
        'Poster adalah kompetisi di mana peserta diundang untuk menciptakan poster kreatif yang menyampaikan pesan atau tema tertentu dengan menggunakan elemen seni visual, seperti gambar, warna, dan teks.',
    },
]

export async function getStaticPaths() {
  // Ambil semua nilai yang mungkin untuk parameter dinamis 'id'
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false, // Ubah menjadi true jika Anda ingin menangani halaman yang belum dibangun secara statis
  };
}


const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

const backgroundStyle = {
  backgroundImage: `url('${basePath}/assets/cabang/detail/bg_detail.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
}

export default async function DetailCabang({ params }) {
  try {
    const cabang = data.find((item) => item.id === params.id)
    const isSeni = cabang.type === 'seni'

    const kategori = isSeni ? 'hidden' : ''

    const pathMaskotOlahraga = `/assets/cabang/maskot/olahraga/${cabang.id}.png`
    const pathMaskotSeni = `/assets/cabang/maskot/seni/${cabang.id}.png`

    const pathMaskot = isSeni ? pathMaskotSeni : pathMaskotOlahraga

    return (
      <main>
        <Hero path={pathMaskot} nama={cabang.nama} desc={cabang.desc} alt={cabang.alt} />
        <div style={backgroundStyle}>
          <Bagan />
          {/* <div className={kategori}>
                        <Calendar/>
                        <Jadwal/>
                    </div> */}
        </div>
        <Kontingen olahraga={params.id} />
        <Footer />
      </main>
    )
  } catch (error) {
    // Code to handle the error
    return <NotFound />
  }
}

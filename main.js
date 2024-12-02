import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { 
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig ={
apiKey: "AIzaSyDMO3xd5lxLSHai-zQe4Xr-pXmt3sAaJ5M",
  authDomain: "insan-cemerlang-4c124.firebaseapp.com",
  projectId: "insan-cemerlang-4c124",
  storageBucket: "insan-cemerlang-4c124.firebasestorage.app",
  messagingSenderId: "417276823956",
  appId: "1:417276823956:web:f6acb8627c2592c1c4e781",
  measurementId: "G-EZGWT6E9Y9"
};

// Inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDataPelanggan() {
  const refDokumen = collection(basisdata, "PELANGGAN");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikankueri = await getDocs(kueri);
  
  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      alamat: dokumen.data().alamat,
      notlpn: dokumen.data(). notlpn
    })
  })
  
  return hasilkueri;
}

export async function tambahDataPelanggan(nama,alamat, notlpn) {
  try {
    // menyimpan data ke firebase
    const refDokumen = await addDoc(collection(basisdata, "PELANGGAN"), {
      nama: nama,
      alamat: alamat,
      notlpn: notlpn
    })
    
    // menampilkan pesan berhasil
    console.log("berhasil menyimpan data pelanggan")
  } catch (error) {
  // menampilkan pesan gagal
  console.console.log("gagal menyimpan data pelanggan")
  }
}

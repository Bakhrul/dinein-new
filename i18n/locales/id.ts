export default defineI18nLocale(async locale => {
    return {
      utility:{
        startFrom: 'Mulai Dari',
        cs: 'Obrolan Layanan Pelanggan',
        getStartedForFree: 'Mulai Gratis',
        readyJoin: 'Siap untuk merevolusi bisnis F&B Anda dengan DineIn',
      },
      home:{
        header:{
            title: 'Optimalkan Restoran Anda dengan DineIn',
            desc: 'Kelola seluruh bisnis F&B Anda dengan mudah - dari order sampai pembayaran dan kontrol stock. Semua dalam 1 platform terkini.',
            buttonText: 'Get Started for Free',
        },
        aboutUs: {
            title: 'Apa itu DineIn?',
            desc: 'DineIn adalah solusi lengkap yang dirancang untuk bisnis restoran, café dan bisnis makanan lainnya.  DineIn akan memudahkan pengambilan order, meningkatkan pengalaman pelanggan dan meningkatkan efisiensi operasional',
            features:{
                pointOfSales: {
                    title: 'Point of Sale',
                    desc: 'Sistem POS yang efisien untuk mengelola pesanan dan pembayaran',
                },
                selfOrder:{
                    title: 'Order Mandiri',
                    desc: 'Memungkinkan pelanggan untuk memesan langsung dari handphone mereka.'
                },
                cashlessPayment:{
                    title: 'Pembayaran Non Tunai',
                    desc: 'Mendukung banyak pilihan pembayaran digital untuk kenyamanan pelanggan'
                },
                selfPayment:{
                    title: 'Pembayaran Mandiri',
                    desc: 'Memungkinkan pelanggan untuk langsung membayar secara mandiri tanpa harus menunggu waiter',
                },
                kitchenIntegration: {
                    title: 'Integrasi Dapur',
                    desc: 'Sinkronisasi dengan bagian Dapur untuk memproses pesanan dengan cepat.'
                },
                inventoryControl:{
                    title: 'Kontrol Stock',
                    desc: 'Mengontrol aliran persediaan dan mengurangi stock sisa dengan efisien'
                },
                reservation:{
                    title: 'Sistem Reservasi Terkini',
                    desc: 'Memungkinkan pelanggan untuk melakukan reservasi, mendapatkan notifikasi sehingga dapat mengoptimalkan kapasitas restoran Anda'
                },
                financialReport:{
                    title: 'Laporan Keuangan dan Penjualan',
                    desc: 'Menghasilkan laporan penjualan dan keuangan secara instant sehingga memudahkan pengambilan keputusan secara cepat'
                }
            }            
        },
        ourAdvantages:{
            title: 'Kelebihan Kami',
            features:{
                lowCostFullManagedSubs: {
                    title: 'Support Penuh dengan Biaya Rendah',
                    desc: 'Harga langganan yang sangat kompetitif dengan support penuh bebas repot'
                },
                customizeWithYourOwnBrand:{
                    title: 'Kustomisasi dengan Merk Anda Sendiri',
                    desc: 'Opsi untuk kustomisasi aplikasi untuk dapat menyesuaikan dengan bisnis Anda yang unik'
                },
                fullSystemOwnershipWithLowInvestment:{
                    title: 'Opsi Kepemilikan secara Lengkap dengan Investasi Rendah',
                    desc: 'Miliki semua sistem secara penuh tanpa ada keterikatan untuk jangka panjang dan dengan investasi yang rendah.'
                }
            }
        }
      }
    }
  })

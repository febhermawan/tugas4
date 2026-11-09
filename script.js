<!-- JavaScript untuk Interaktivitas -->

        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Nunito', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#fff7ed', // sangat terang (krem)
                            100: '#ffedd5',
                            200: '#fed7aa',
                            300: '#fdba74',
                            400: '#fb923c', // oranye hangat
                            500: '#f97316',
                            800: '#9a3412', // teks gelap
                        },
                        dark: '#334155' // slate-700
                    }
                }
            }
        }


        document.addEventListener('DOMContentLoaded', () => {
            // 1. Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                menu.classList.toggle('hidden');
                if(menu.classList.contains('hidden')) {
                    icon.classList.remove('ph-x');
                    icon.classList.add('ph-list');
                } else {
                    icon.classList.remove('ph-list');
                    icon.classList.add('ph-x');
                }
            }

            btn.addEventListener('click', toggleMenu);

            // Tutup menu mobile ketika link diklik
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });

            // 2. Accordion Logic
            const accordionHeaders = document.querySelectorAll('.accordion-header');

            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    // Tutup accordion lain jika ingin tipe yang satu terbuka saja (opsional)
                    // Hapus komentar blok di bawah jika ingin mode "accordion eksklusif"
                    /*
                    accordionHeaders.forEach(otherHeader => {
                        if (otherHeader !== header) {
                            otherHeader.classList.remove('active');
                            otherHeader.nextElementSibling.classList.remove('active');
                            otherHeader.nextElementSibling.style.padding = '0';
                        }
                    });
                    */

                    // Toggle status active
                    header.classList.toggle('active');
                    const content = header.nextElementSibling;
                    content.classList.toggle('active');

                    // Adjust padding secara dinamis (karena padding di css sulit ditransisikan jika display none)
                    // Namun kita pakai max-height dan opacity, jadi aman.
                });
            });

            // 3. Navbar scroll effect (tambahkan bayangan saat di-scroll)
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-md');
                    navbar.classList.remove('shadow-sm', 'bg-white/80');
                    navbar.classList.add('bg-white/95');
                } else {
                    navbar.classList.remove('shadow-md', 'bg-white/95');
                    navbar.classList.add('shadow-sm', 'bg-white/80');
                }
            });
        });
 

export const useFooter = () => {
  const footerContent = ref([
    {
      col: 1,
      title: 'Head Office',
      contact: {
        address:
          'Jalan Gading Batavia Blok LC No. 21-22 <br> Kelapa Gading – Jakarta Utara 14420 – Indonesia',
        phone: '+62 21 4585-3491',
        email: 's6TtD@example.com'
      },
      social: {
        facebook: 'https://www.facebook.com',
        twitter: 'https://www.twitter.com',
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com'
      }
      
    },
    {
      col: 2,
      title: 'Representative Office',
      contact: {
        address:'PO Box 774, Warners Bay, NSW 2282, Australia',
        phone: '+61-41-424-0017',
        email: 'victor.bhave@gajafberglass.com'
      }
     
    },
    {
      col: 3,
      title: 'Company',
      links: [
        { name: 'Policy & Capability', link: '#' },
        { name: 'Awwards & Acreditation', link: '#' }
      ],
      certificate: ['cer-1.png', 'cer-2.png', 'cer-3.png']
    },
    {
      col: 4,
      title: 'Products',
      links: [
        { name: 'FRP / GRP Panel Tank', link: '#' },
        { name: 'FRP Gutter', link: '#' },
        { name: 'FRP Lining', link: '#' },
        { name: 'FRP Molded Grating', link: '#' },
        { name: 'FRP Tank', link: '#' },
        { name: 'GRP/FRP Pipe & Fitting', link: '#' },
        { name: 'GFRP Roof & Cladding', link: '#' },
        { name: 'Skylight FRP Roof & Cladding', link: '#' },
        { name: 'Air Polutant System', link: '#' }
      ]
    }
  ])
  return {
    footerContent
  }
}

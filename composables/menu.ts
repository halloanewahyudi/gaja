export const useMenu = () => {
 const menu = ref([
   {
     name: 'Home',
     slug:'',
     link: '/'
   },
   {
     name: 'Company',
     slug:'company',
     link: '/',
     children: [
      {
        name: 'Company Overview',
        slug:'company-overview',
        link: '/'
      },{
        name:'Vision & Mission',
        slug:'vision-mission',
        link:'/'
      },
       {
         name: 'Policy & Capability',
         slug:'policy-capability',
         link: '/'
       },
       {
         name: 'Awwards & Acreditation',
         slug:'awwards-acreditation',
         link: '/'
       }
     ],
     image: './tangki1.jpg',
     class:'sub-menu image-menu'
   },
   {
    name: 'Products',
    slug:'products',
    link: '/',
    children: [
      {
        name: 'FRP / GRP Panel Tank',
        slug:'frp-grp-panel-tank',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },
      {
        name: 'FRP Gutter',
        slug:'frp-gutter',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },
      {
        name: 'FRP Lining',
        slug:'frp-lining',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },
      {
        name: 'FRP Molded Grating',
        slug:'frp-molded-grating',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },{
        name: 'FRP Tank',
        slug:'frp-tank',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },
      {
        name: 'GRP/FRP Pipe & Fitting',
        slug:'frp-pipe-fitting',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },{
        name: 'GFRP Roof & Cladding',
        slug: 'gfrp-roof-cladding',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },{
        name: 'Skylight FRP Roof & Cladding',
        slug:'skylight-frp-roof-cladding',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      },{
        name: 'Air Polutant System',
        slug:'air-polutant-system',
        link: '/',
        image: './tangki1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae?'
      }

    ],
     class: 'sub-menu mega-menu'
  },
   {
     name: 'Projects',
     slug:'porjects',
     link: '/'
   },
   {
     name: 'Export',
     slug:'export',
     link: '/'
   },
   {
    name: 'QA/QC',
    slug:'qa-qc',
    link: '/'
  },
  {
    name: 'News',
    slug:'news',
    link: '/'
  },
  {
    name: 'Contact',
    slug:'contact',
    link: '/'
  }

 ])
 return {
   menu
 }

}

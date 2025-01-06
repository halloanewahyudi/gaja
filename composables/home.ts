export const useHome = () => {
  const featured = ref([
    {
      image: './tangki1.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      subtitle: 'Project  1',
     
    },
    {
      image: './work.jpg',
      title: 'Expedita dolore voluptate ipsa recusandae optio saepe molestiae.',
      subtitle: 'Project  2',
    },
    {
      image: './city.jpg',
      title: 'Debitis explicabo aspernatur, error placeat consectetur repellat.',
      subtitle: 'Project  3',
    },
    {
      image: './cover.jpg',
      title: 'adipisci id ab maxime accusamus assumenda.',
      subtitle: 'Project  4',
    },
  ])

  const counter = ref([
    {
      no: 250,
      title: 'Kilometers and still growing',
      suffix: 'Produced <br> Pipes',
    },
    {
      no: 10000,
      title: 'Cubic meters and still growing',
      suffix: 'Fabricated <br> Onsite',
    },
    {
      no: 34500,
      title: 'Square meters',
      suffix: 'Plant <br> Land Area',
    },
    {
      no: 50,
      title: 'Companies',
      suffix: 'Key <br> Partners',
    }
  ])
  return {
    featured,
    counter
  }
}

export const useHome = () => {
  const featured = ref([
    {
      image: './tangki1.jpg',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      subtitle: 'Subtitle 1',
     
    },
    {
      image: './work.jpg',
      title: 'Expedita dolore voluptate ipsa recusandae optio saepe molestiae.',
      subtitle: 'Subtitle 2',
    },
    {
      image: './city.jpg',
      title: 'Debitis explicabo aspernatur, error placeat consectetur repellat.',
      subtitle: 'Subtitle 3',
    },
    {
      image: './cover.jpg',
      title: 'adipisci id ab maxime accusamus assumenda.',
      subtitle: 'Subtitle 4',
    },
  ])

  const counter = ref([
    {
      no: 100,
      title: 'Lorem ipsum dolor sit amet.',
      suffix: 'Klien',
    },
    {
      no: 200,
      title: 'Expedita dolore  molestiae.',
      suffix: 'Project',
    },
    {
      no: 300,
      title: 'Debitis explicabo  repellat.',
      suffix: 'Klien',
    },
    {
      no: 400,
      title: 'adipisci id assumenda.',
      suffix: 'Project',
    }
  ])
  return {
    featured,
    counter
  }
}

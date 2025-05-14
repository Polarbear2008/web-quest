export interface Resource {
  id: number;
  title: string;
  url: string;
  description: string;
  category: 'video' | 'data' | 'guide' | 'image' | 'tool';
  imageUrl?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'NASA Climate Kids',
    url: 'https://climatekids.nasa.gov/',
    description: 'Learn about Earth\'s climate, impacts of climate change, and solutions through games, activities, and articles.',
    category: 'guide',
    imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg'
  },
  {
    id: 2,
    title: 'NOAA Climate Data Portal',
    url: 'https://www.climate.gov/maps-data',
    description: 'Access real-time and historical climate data from the National Oceanic and Atmospheric Administration.',
    category: 'data',
    imageUrl: 'https://images.pexels.com/photos/7213532/pexels-photo-7213532.jpeg'
  },
  {
    id: 3,
    title: 'National Geographic - Climate Change',
    url: 'https://www.nationalgeographic.com/environment/topic/climate-change',
    description: 'Articles, photos, and videos exploring climate change causes, effects, and solutions from National Geographic.',
    category: 'guide',
    imageUrl: 'https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg'
  },
  {
    id: 4,
    title: 'Climate 101 with Bill Nye',
    url: 'https://www.youtube.com/watch?v=3v-w8Cyfoq8',
    description: 'Bill Nye explains the science of climate change and the effects of human activity in a short video.',
    category: 'video',
    imageUrl: 'https://images.pexels.com/photos/6005850/pexels-photo-6005850.jpeg'
  },
  {
    id: 5,
    title: 'Canva - Design Tool',
    url: 'https://www.canva.com/',
    description: 'Create infographics, posters, and presentations for your climate action campaign.',
    category: 'tool',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  },
  {
    id: 6,
    title: 'IPCC Reports',
    url: 'https://www.ipcc.ch/reports/',
    description: 'Scientific reports from the Intergovernmental Panel on Climate Change on the state of climate change.',
    category: 'data',
    imageUrl: 'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg'
  },
  {
    id: 7,
    title: 'Climate Visuals',
    url: 'https://climatevisuals.org/',
    description: 'Evidence-based photography for climate change communication.',
    category: 'image',
    imageUrl: 'https://images.pexels.com/photos/3933992/pexels-photo-3933992.jpeg'
  },
  {
    id: 8,
    title: 'Flipgrid',
    url: 'https://info.flipgrid.com/',
    description: 'Create video discussions for your climate action campaign.',
    category: 'tool',
    imageUrl: 'https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg'
  }
];
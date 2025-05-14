export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;
  resources: {
    title: string;
    description?: string;
    type: 'video' | 'download' | 'link';
    url: string;
    fileType?: string;
  }[];
}

export const processSteps = [
  {
    id: 1,
    title: 'Climate Change Basics',
    description: 'Learn the fundamental concepts of climate change.',
    resources: [
      {
        title: 'Climate 101 Video',
        description: 'An introduction to climate change concepts',
        type: 'video',
        url: 'https://www.youtube.com/embed/oJAbATJCugs'
      },
      {
        title: 'Causes & Effects Graphic Organizer',
        description: 'A worksheet to help identify causes and effects of climate change',
        type: 'download',
        url: 'https://docs.google.com/document/d/1iLyFMCEvmXTdBrvrqEcUl-XwVrckynWiN6cL-Emk1oM/edit?usp=sharing',
        fileType: 'DOC'
      }
    ]
  },
  {
    id: 2,
    title: 'Analyze Data',
    description: 'Explore and analyze real climate data.',
    resources: [
      {
        title: 'NOAA Climate Data Portal',
        description: 'Access real climate data from the National Oceanic and Atmospheric Administration',
        type: 'link',
        url: 'https://www.climate.gov/maps-data'
      },
      {
        title: 'Data Detective Worksheet',
        description: 'A guide to analyzing climate data',
        type: 'download',
        url: 'https://www.canva.com/design/DAGmMAk_6d8/AvXrJgAKC1V4nqyF1pxzRw/edit?utm_content=DAGmMAk_6d8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        fileType: 'Canva'
      }
    ]
  },
  {
    id: 3,
    title: 'Investigate Impacts',
    description: 'Research the various impacts of climate change.',
    resources: [
      {
        title: 'Impact Infographic Template',
        description: 'A template to create your own climate impact infographic',
        type: 'download',
        url: 'https://www.canva.com/design/DAGmMFeb-UY/-3c_ccH0fqh67TcWUiPNDg/edit?utm_content=DAGmMFeb-UY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        fileType: 'Canva'
      }
    ]
  },
  {
    id: 4,
    title: 'Brainstorm Solutions',
    description: 'Explore and evaluate potential solutions to climate change.',
    resources: [
      {
        title: 'UN\'s 10 Climate Actions',
        description: 'United Nations climate action suggestions for individuals',
        type: 'link',
        url: 'https://www.un.org/en/actnow'
      },
      {
        title: 'Solution Ranking Chart',
        description: 'Tool for evaluating climate solutions',
        type: 'download',
        url: 'https://www.canva.com/design/DAGmMM9Brcw/lBpmffU0UWvmQeiXflfVJQ/edit',
        fileType: 'Canva'
      }
    ]
  },
  {
    id: 5,
    title: 'Design Your Campaign',
    description: 'Create a climate action campaign to raise awareness.',
    resources: [
      {
        title: 'Campaign Checklist',
        description: 'A checklist to ensure your campaign is effective',
        type: 'download',
        url: 'https://www.canva.com/design/DAGmMBmtG0A/8btTGp5AXE_qgNBsYN2F2w/edit?utm_content=DAGmMBmtG0A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        fileType: 'Canva'
      }
    ]
  },
  {
    id: 6,
    title: 'Present & Advocate',
    description: 'Prepare to present your campaign and advocate for change.',
    resources: [
      {
        title: 'Presentation Tips',
        description: 'Tips for effective presentations',
        type: 'link',
        url: 'https://www.skillsyouneed.com/present/presentation-tips.html',
        fileType: 'Web'
      }
    ]
  },
  {
    id: 7,
    title: 'Reflect & Take Action',
    description: 'Reflect on what you\'ve learned and commit to action.',
    resources: [
      {
        title: 'Reflection Questions',
        description: 'Questions to guide your reflection',
        type: 'download',
        url: 'https://resourcecentre.savethechildren.net/pdf/Climate-change-quiz-and-reflection.pdf/',
        fileType: 'PDF'
      }
    ]
  }
];
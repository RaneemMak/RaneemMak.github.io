// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'RaneemMak', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 3, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['RaneemMak/Microbiome', 'RaneemMak/genomeanalysis1streport','transcriptome'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SNP RS7903146 to understand my genotype and its clinical significance',
          description:
            'Here I looked at a specific SNP that I have analyzed.',
          imageUrl:
            'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/SNP.png',
          link: 'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/SNP.pdf',
        },
        {
          title: 'Biotechnology Alternative to Petroleum-based Plastics',
          description:
            'This paper demonstrates the dangers of relying on petroleum-based plastics as they pose both health and environmental issues and suugest the use of alternatives',
          imageUrl:
            'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/Research.png',
          link: 'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/Research-Bio230.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Raneem Makrai Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'raneemmakrai',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://raneemmak.github.io',
    phone: '',
    email: 'raneemmakrai2@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/MakraiCV-1.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Agarose Gel',
    'Genetics',
    'Bioinformatics',
    'Statistics',
  ],
  experiences: [
    {
      company: 'CSU Stanisluas',
      position: 'Graduate Teaching Associate',
      from: 'August 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'CSU East Bay',
      position: 'Undergraduate Research',
      from: 'Aug 2021',
      to: 'May 2022',
      companyLink: '',
    },
  ],
  educations: [
    {
      institution: 'Skyline College',
      degree: 'Associates in Biology',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'California State University, East Bay',
      degree: 'Bachelors in Cell and Molecular Biology',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'California State University, Stanislaus',
      degree: 'Masters Degree in Biological Sciences',
      from: '2024',
      to: 'present',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Intestinibacter bartletti DSM 16795, a Human Gut Isolate Associated with Autism Microbiome Studies ',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Christina Johne,Mason Kramer, Raneem Makrai, Holly Moffett, Fiona Shavilof, Tricia A. Van Laar',
      link: 'https://github.com/RaneemMak/RaneemMak.github.io/raw/main/Draft_Genome%20_Sequence_of%20_Intestinibacter_bartletti%20DSM%2016795.docx',
      description:
        'This is a manuscript in submission: Here we present the draft genome sequence of Intestinibacter bartletti DSM 16795, a human gut isolate of interest in autism-associated microbiome studies. The genome spans 2.97 Mb across 22 contigs, with a GC content of 28.84% and 100% estimated completeness. Key genomic features include virulence factors, antibiotic resistance genes, biosynthetic clusters, and CRISRP-Cas loci.'
        },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

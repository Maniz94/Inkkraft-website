// Replace the editable values and image URLs here when the artist's details and portfolio are ready.
export const artist = {
  name: 'Sawon Dyola',
  role: 'Independent Tattoo Artist',
  email: 'inkkraft86@gmail.com',
  phone: '9841042829',
  instagram: '@yourusername',
  studio: 'Ghalate, Bhaktapur',
  portrait: '/assets/sawon-dyola-portrait.jpg',
  social: { instagram: '#', facebook: '#', tiktok: '#' },
};

const photo = (id, width = 960) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// Cards marked placeholder: false use artist-supplied portfolio photos; the others are labeled placeholders.
export const works = [
  { title: 'Two Little Friends', category: 'Minimal', image: '/assets/minimal-paired-characters.jpg', alt: 'Matching fine-line character tattoos on two arms', placeholder: false },
  { title: 'Blue Butterflies', category: 'Minimal', image: '/assets/minimal-blue-butterflies.jpg', alt: 'Matching small blue butterfly tattoos on two forearms', placeholder: false },
  { title: 'Medusa Linework', category: 'Fine Line', image: '/assets/fine-line-medusa.jpg', alt: 'Fine-line Medusa tattoo with snakes across the upper chest', placeholder: false },
  { title: 'Mandala Shoulder Piece', category: 'Fine Line', image: '/assets/fine-line-mandala.jpg', alt: 'Fine-line mandala tattoo across the shoulder and upper arm', placeholder: false },
  { title: 'Pharaoh Leg Sleeve', category: 'Blackwork', image: '/assets/blackwork-pharaoh-leg.jpg', alt: 'Detailed blackwork pharaoh tattoo sleeve covering a lower leg', placeholder: false },
  { title: 'Red Demon Sleeve', category: 'Realism', image: '/assets/realism-red-demon.jpg', alt: 'Color shaded demon tattoo sleeve with red details', placeholder: false },
  { title: 'Buddha Color Sleeve', category: 'Realism', image: '/assets/realism-buddha-color-sleeve.jpg', alt: 'Color shaded Buddha portrait tattoo on an upper arm', placeholder: false },
  { title: 'Wolf and Forest Sleeve', category: 'Realism', image: '/assets/realism-wolf-sleeve.jpg', alt: 'Realistic wolf portrait tattoo with forest details on a leg', placeholder: false },
  { title: 'Tiger Portrait', category: 'Realism', image: '/assets/realism-tiger-sleeve.jpg', alt: 'Shaded tiger portrait tattoo on a forearm', placeholder: false },
  { title: 'Shiva Portrait', category: 'Realism', image: '/assets/realism-shiva-portrait.jpg', alt: 'Detailed Shiva portrait tattoo on an upper arm', placeholder: false },
  { title: 'Buddha in Black and Grey', category: 'Realism', image: '/assets/realism-buddha-blackwork.jpg', alt: 'Black and grey Buddha portrait tattoo with cloud details on a leg', placeholder: false },
  { title: 'Quiet Geometry', category: 'Fine Line', image: photo('photo-1590246814883-57c6a4fc992d') },
  { title: 'The Wild Within', category: 'Blackwork', image: photo('photo-1611501275019-9b5cda994e8d') },
  { title: 'A Study in Form', category: 'Minimal', image: photo('photo-1565058379802-bbe93b2f703a') },
  { title: 'Memory in Bloom', category: 'Realism', image: photo('photo-1598373182133-b7ebf8f6c7cb') },
  { title: 'Soft Symbols', category: 'Fine Line', image: photo('photo-1611848990745-6e7f8d7b61cf') },
  { title: 'Made Personal', category: 'Custom', image: photo('photo-1597852074816-d933c7d2b988') },
];

export const articles = [
  { slug: 'prepare-first-tattoo', title: 'How to Prepare for Your First Tattoo', category: 'Getting started', date: '[Date]', image: photo('photo-1598373182133-b7ebf8f6c7cb'), excerpt: 'A little preparation can make your first tattoo feel less daunting and a lot more personal.' },
  { slug: 'choose-tattoo-style', title: 'How to Choose the Right Tattoo Style', category: 'Inspiration', date: '[Date]', image: photo('photo-1565058379802-bbe93b2f703a'), excerpt: 'Explore the visual language that feels like you, then bring those references into the conversation.' },
  { slug: 'right-placement', title: 'Choosing the Right Tattoo Placement', category: 'Planning', date: '[Date]', image: photo('photo-1611501275019-9b5cda994e8d'), excerpt: 'Placement, scale and shape work together. Here are a few things to think about before you decide.' },
  { slug: 'tattoo-consultation', title: 'What Happens During a Tattoo Consultation?', category: 'The process', date: '[Date]', image: photo('photo-1590246814883-57c6a4fc992d'), excerpt: 'A first conversation is a relaxed space to talk through the idea, ask questions and find a direction.' },
  { slug: 'aftercare-basics', title: 'Tattoo Aftercare Basics', category: 'Aftercare', date: '[Date]', image: photo('photo-1598373182133-b7ebf8f6c7cb'), excerpt: 'A thoughtful aftercare routine helps support your skin while it heals. Follow the guidance you receive.' },
  { slug: 'small-vs-large', title: 'Small Tattoos vs. Large Tattoos', category: 'Planning', date: '[Date]', image: photo('photo-1611848990745-6e7f8d7b61cf'), excerpt: 'Scale changes how a design reads, where it fits and how much detail it can hold.' },
  { slug: 'find-inspiration', title: 'How to Find Inspiration for Your Tattoo', category: 'Inspiration', date: '[Date]', image: photo('photo-1597852074816-d933c7d2b988'), excerpt: 'Collecting references is a starting point. The most meaningful ideas often begin with your own story.' },
  { slug: 'questions-before-tattoo', title: 'Questions to Ask Before Getting Tattooed', category: 'Getting started', date: '[Date]', image: photo('photo-1565058379802-bbe93b2f703a'), excerpt: 'Good questions help you feel comfortable, informed and ready to make a decision that feels right.' },
];

export const articleBody = [
  'A tattoo begins long before the appointment. It begins with an idea: a memory, an image, a feeling, or a question you keep returning to. Giving that idea a little room to grow can help make the whole experience more considered.',
  'Start with what matters to you. Gather a few references if they help, and notice what draws you to them: the linework, the feeling, the scale, or the way the design sits on the body. References are useful conversation starters, not a checklist to reproduce exactly.',
  'Think about placement and size together. The same idea can feel very different at different scales, and the shape of a design often responds to the area where it will live. There is no one answer for everyone; your preferences and comfort are part of the process.',
  'A consultation gives us time to talk through the details before deciding what comes next. You can ask questions, share what you are imagining and take time to find a direction that feels personal. You never need to have every detail figured out before starting the conversation.',
];

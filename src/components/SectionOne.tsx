import TitleDescription from './TitleDescription';
import PhotoSlider from './PhotoSlider';
import ExpandableCard from './ExpandableCard';
import CardsSection from './CardsSection';
import ImageTextOverlay from './ImageTextOverlay';

export default function SectionOne() {
  const sections = [
    {
      title: 'Photo-realistic',
      description:
        'Create realistic images of landscapes, plants, people and animals with true-to-life details.',
      images: [
        '/images/s1-2.webp',
        '/images/s1-3.webp',
        '/images/s1-4.webp',
        '/images/s1-5.webp',
        '/images/s1-6.webp',
        '/images/s1-7.webp',
        '/images/s1-8.webp',
        '/images/s1-9.webp',
        '/images/s1-10.webp',
        '/images/s1-11.webp',
      ],
    },
    {
      title: 'Fine details',
      description:
        'Capture extreme close-ups with richer colors, textures and gradients — for images that look like they can be touched.',
      images: [
        '/images/s21.webp',
        '/images/s22.webp',
        '/images/s23.webp',
        '/images/s24.webp',
        '/images/s25.webp',
        '/images/s26.webp',
        '/images/s27.webp',
        '/images/s28.webp',
      ],
    },
    {
      title: ['Advanced spelling', 'and typography'],
      description:
        'Comics, packaging and collectibles come to life with improved spelling, longer text strings and new layouts and styles.',
      images: [
        '/images/s31.webp',
        '/images/s32.webp',
        '/images/s33.webp',
        '/images/s34.webp',
        '/images/s35.webp',
      ],
    },
  ];

  const cardSection = {
    title: 'Diverse art styles',
    description:
      'Imagen 4 can render diverse art styles with greater accuracy — from photo realism and impressionism to abstract and illustration.',
    items: [
      {
        image: '/images/c1.webp',
        text: 'Prompt: Vibrant graphic illustration in a style reminiscent of contemporary fashion posters, featuring three figures standing shoulder-to-shoulder against a flat, vivid coral background. The mood is playful confidence and bold stylistic expression. Rendered with crisp, consistent black outlines defining forms filled with completely flat, high-saturation colors, omitting gradients entirely. Form and volume are implied through silhouette and the juxtaposition of color shapes, not shading. The figures wear exaggerated, oversized suits mixing wildly clashing patterns: one wears a suit covered in bright red hearts on a pink base; the central figure wears a jarring black-and-white checkerboard jacket with electric blue star-patterned trousers; the third wears a dense, vintage-inspired floral pattern in cream, blue, and yellow. Lighting is flat and non-directional, like a studio fashion shot, ensuring patterns read clearly. Composition is a stable, centered medium shot focusing on the figures from the waist up, emphasizing the outfits. Faces have stylized, simple features and detached, cool expressions. Detail level is high in the patterns, but minimal elsewhere. The overall effect is graphically arresting, clean, and instantly eye-catching.',
      },
      {
        image: '/images/c2.webp',
        text: "Prompt: Whimsical landscape illustration depicting rolling green hills under a soft pink sky, where one of the hills subtly takes the form of a colossal, peacefully sleeping giant covered in grassy turf. The style uses simple, expressive linework and visibly textured color fills, resembling colored pencil, pastel, or textured gouache applied in broad strokes. The mood is gentle folklore, peaceful slumber, and hidden magic within nature. The giant's form is gentle, suggested by the contours of the hill, perhaps with simple linework indicating a closed eye or a relaxed hand forming a smaller mound. Small, stylized houses or trees might dot the landscape for scale. Soft, rounded clouds drift in the pink sky, possibly with simple, sleepy faces drawn on them. Lighting is flat and diffused, like a soft morning or late afternoon, with simple, textured block shadows cast by hills. Composition is a wide, panoramic view emphasizing the undulating landscape and the hidden giant. The color palette is soft and slightly muted: various greens and earthy tones for the hills, pastel pinks and lavenders for the sky. The visible texture within the color areas is paramount to the style.",
      },
      {
        image: '/images/c3.webp',
        text: 'Prompt: Expressive landscape painting depicting a winding coastal path overlooking a churning sea, rendered with thick, visible brushstrokes or palette knife marks creating significant surface texture (impasto). The style emphasizes the physical application of paint to build simplified forms and convey raw energy. The mood is rugged beauty, windswept motion, and dramatic nature. The coastal path, cliffs, grasses, and the turbulent sea are represented by distinct, blocky shapes and masses of thick paint. Individual brushstrokes are clearly visible and contribute to the texture of grass, rock, and swirling water. Light, perhaps dramatic late afternoon sun breaking through clouds, creates strong contrasts between brightly lit planes and deep, shadowy areas, all defined by the application of thick, textured color. Reflections on the water are broken and textural. Composition might be a dynamic view looking along the path towards the sea, using the curve of the path to lead the eye, emphasizing the energy of the scene through the textured application. The color palette uses rich, possibly heightened natural colors: deep blues and teals for the sea, earthy browns and vibrant greens for the cliffs and path, perhaps dramatic yellows or oranges in the sky, all applied with tangible thickness.',
      },
      {
        image: '/images/c4.webp',
        text: "Prompt: A delicate and precise watercolor illustration showcasing a small branch laden with ripe raspberries, presented in the style of a vintage botanical study. The mood is gentle, naturalistic, and scientifically observant. The raspberry branch, with several attached green leaves showing fine veins, curves gracefully across a textured, off-white watercolor paper background. Several plump, multi-segmented raspberries in varying shades of red and pink cling to the stem, rendered with soft, layered washes of color to capture their form and subtle translucency. Tiny, hair-like styles are visible on the berries. Highlights are achieved by leaving the white paper untouched or using minimal pigment. Shadows are soft and blended, suggesting gentle, natural light. The focus is sharpest on the central cluster of berries and leaves, capturing details with fine linework overlaying the washes where necessary. The composition is elegant and slightly asymmetrical, focusing attention on the botanical subject. The color palette is soft and natural – reds, pinks, greens, and browns, with plenty of white space. Visible paper texture and subtle water blooms enhance the medium's character. The overall feeling is one of quiet beauty, detailed observation, and the delicate touch of the watercolor medium.",
      },
      {
        image: '/images/c5.webp',
        text: 'Prompt: Atmospheric narrative illustration depicting a young woman with dark hair styled with a single star clip, eating dumplings at a small round table in a bustling, late-night eatery reminiscent of a vintage Hong Kong diner. The style blends clean linework with textured color fields, evoking a sense of place and story. The mood is intimate contentment amidst vibrant surroundings. Soft, warm overhead lighting from unseen hanging lamps casts gentle highlights on her face and the porcelain plate of dumplings, creating soft-edged shadows on the tiled tabletop and floor. The background features detailed elements like wall menus with stylized illustrations, a retro wall clock, steam rising from a soup bowl, and glimpses of other patrons blurred slightly for depth. The woman, viewed from a slightly high angle, crouches slightly on her chair, intensely focused on her food, rendered with expressive linework defining her pose and features. The color palette mixes muted teal wall tiles and green chairs with pops of warm yellow in her top, pink trousers, red chili oil dish, and ambient light, creating a cozy yet lively feel. Subtle paper texture or digital grain is visible throughout. Focus is sharp on the character and her immediate table setting.',
      },
      {
        image: '/images/c6.webp',
        text: 'Prompt: Painterly landscape featuring a simple, isolated wooden cabin nestled amongst tall pine trees on the shore of a calm, reflective lake. The style employs blocky, distinct brushstrokes or palette knife marks to build forms, emphasizing shape, color, and texture over fine detail. The mood is remote serenity, quiet isolation, and natural harmony. The cabin, trees, water, and distant hills are rendered as simplified planes and masses of color applied with visible texture. Reflections in the lake are handled with similar blocky strokes, slightly blurred or broken. Light is clear, perhaps late afternoon, creating distinct areas of light and shadow on the cabin walls, tree trunks, and water surface, all defined by shifts in color and value applied texturally. Composition is a stable, possibly wide landscape view, focusing on the relationship between the cabin, trees, and water, perhaps with horizontal bands of color creating depth. The color palette uses naturalistic but potentially heightened colors: deep greens, rich blues, warm wood tones, perhaps a bright accent color on the cabin door, applied with visible impasto or brushwork texture.',
      },
      {
        image: '/images/c7.webp',
        text: "Prompt: This single-panel splash page is rendered in a traditional Sumi-e ink wash style, emphasizing stark contrasts between deep blacks and untouched whites, conveying a sense of serene power and ancient wisdom. A majestic Eastern dragon, its serpentine body coiling gracefully, rests atop a mist-shrouded mountain peak. The dragon's scales are suggested by varying ink densities and delicate brushstrokes, its long whiskers flowing in the implied wind. Wisps of cloud curl around the mountain's base, created by skillful gradations of ink, giving the impression of both immense height and ethereal presence. The dragon's head is held high, its eyes—mere dots of intense black—fixed on a distant horizon, exuding a calm, watchful aura. Sparse, sharp lines suggest the jagged rocks of the mountain summit, contrasting with the smooth, fluid lines of the dragon's form. The overall composition is balanced and contemplative, capturing a moment of quiet strength amidst the vastness of nature, with the dragon appearing as a timeless guardian of the mountain.",
      },
      {
        image: '/images/c8.webp',
        text: 'Prompt: A richly textured oil painting capturing a rustic still life arrangement featuring food, evoking a sense of quiet contemplation and the passage of time. The scene is dominated by deep shadows, with a single, dramatic light source (like candlelight or a narrow window beam) illuminating key elements from the side. Centered is a half-cut loaf of dark, crusty sourdough bread resting on a heavy, dark wooden table. Beside it sits a wedge of aged, veined cheese (perhaps Stilton or Roquefort) showing crumbling texture, a few plump, deep purple figs – one cut open revealing its seeds – and a pewter goblet reflecting the dim light. Visible brushstrokes add tangible texture to the canvas surface and the depicted objects – the rough crust, the creamy cheese, the smooth fig skin. The light catches the highlights intensely: the moist interior of the bread, the glistening edge of the cheese, a reflection on the goblet, while much of the scene falls into deep, ambiguous shadow. The color palette is muted and earthy – deep browns, ochres, dark greens, purplish blues, and shadowy blacks, with warm highlights. The composition is stable and grounded, likely a slightly low angle. Focus is on the dramatic interplay of light and shadow (chiaroscuro) and the realistic, tactile rendering of textures within the dimly lit space.',
      },
    ],
  };

  const cards = [
    {
      imageSrc: '/images/imagen.svg',
      title: 'Ultra-fast option',
      description:
        'Test dozens of ideas instantly. Imagen 4 comes with a mode that’s up to 10x faster than our previous model.',
    },
    {
      imageSrc: '/images/imagenClarity.svg',
      title: 'Realize your vision',
      description:
        'Push the limits of creativity further than ever before with enhanced colors, styles, details and text rendering.',
    },
    {
      imageSrc: '/images/imagenVision.svg',
      title: 'Exceptional clarity',
      description:
        'Imagen 4 is optimized for creativity, generating images with up to 2k resolution..',
    },
  ];

  const cardTitleDes = {
    title: ['What’s new', 'in Imagen 4?'],
    description: 'The latest iteration of Imagen 4 brings marked improvements to its capabilities.',
  };

  const sliderTitleDes = {
    title: 'Imagine it — visualize it',
    description: 'Express your ideas like never before — with Imagen, creativity has no limits.',
    images: [
      '/images/s41.webp',
      '/images/s42.webp',
      '/images/s43.webp',
      '/images/s44.webp',
      '/images/s45.webp',
      '/images/s46.webp',
      '/images/s47.webp',
      '/images/s48.webp',
      '/images/s49.webp',
    ],
  };

  return (
    <>
      {sections.map((section, index) => (
        <div key={index} className="mb-16">
          <TitleDescription title={section.title} description={section.description} />
          <PhotoSlider images={section.images} />
        </div>
      ))}
      <TitleDescription title={cardSection.title} description={cardSection.description} />
      <ExpandableCard items={cardSection.items} />
      <TitleDescription title={cardTitleDes.title} description={cardTitleDes.description} />
      <CardsSection cards={cards} />
      <TitleDescription title={sliderTitleDes.title} description={sliderTitleDes.description} />
      <PhotoSlider images={sliderTitleDes.images} />
      <ImageTextOverlay
        imageSrc="/images/textImage.webp"
        line1="See what else Imagen 4 can do"
        buttonText="View Images"
        buttonLink="/images"
      />
    </>
  );
}

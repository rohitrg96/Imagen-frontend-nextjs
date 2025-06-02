export const sliderImages = ['images/b1.svg', 'images/b2.svg', 'images/b3.svg'];
export const benchMarkTitle = {
  title: 'Benchmarks',
  titleSize: 'text-2xl md:text-5xl lg:text-4xl',
  description:
    'In tests, people prefer the latest version of Imagen to previous models — and other leading text-to-image models. Find out more about the methodology and our performance in the model card.',
};

export const creativeTitle = {
  title: 'Creative limitations',
  titleSize: 'text-2xl md:text-5xl lg:text-4xl',
  description:
    'Creativity is an evolution. Imagen 4 is our best model yet — but we’re still working on improving key capabilities.',
};

export const SafetyTitle = {
  title: 'Safety & Responsibility',
  titleSize: 'text-xl md:text-4xl lg:text-3xl',
  description:
    'We use extensive filtering and data labeling to minimize harmful content in datasets and reduce the likelihood of harmful outputs. We also conduct red teaming and evaluations on content safety, including child safety, and representation. We are releasing Imagen 4 with our latest privacy, safety and security features. This includes SynthID, our tool that embeds an invisible digital watermark directly into an image, allowing it to be identified as AI generated.',
};

export const infoCards = [
  {
    title: 'Factual representation',
    description:
      'Diffusion models don’t have the real-world knowledge of LLMs. Users may still see artefacts on complicated compositions — especially in images with small faces, text rendering, and thin structures.',
  },
  {
    title: 'Centered images',
    description:
      'Imagen sometimes struggles to create centered images — like a circle perfectly aligned in the center of the image.',
  },
  {
    title: 'Incomprehensible prompts',
    description:
      'Imagen responds reliably to text prompts, but when it’s given nonsensical prompts (like emojis or a random string of characters), the outputs can be unpredictable.',
  },
];

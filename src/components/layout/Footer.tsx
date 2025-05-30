export const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 lg:grid-cols-5 mb-12">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-4">Follow us</h2>
          <div className="flex space-x-4">
            <div className="footer__x">X</div>
            <div className="footer__instagram">Instagram</div>
            <div className="footer__youtube">YouTube</div>
            <div className="footer__linkedin">LinkedIn</div>
            <div className="footer__github">GitHub</div>
          </div>
          <p className="mt-6 text-sm text-white/80">Build AI responsibly to benefit humanity</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Models</h2>
          <p className="text-sm text-white/80 mb-2">Build with our next generation AI systems</p>
          <div className="space-y-1">
            <div>Gemini</div>
            <div>Gemma</div>
            <div>Veo</div>
            <div>Imagen</div>
            <div>Lyria</div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Science</h2>
          <p className="text-sm text-white/80 mb-2">Unlocking a new era of discovery with AI</p>
          <div className="space-y-1">
            <div>AlphaFold</div>
            <div>SynthID</div>
            <div>WeatherNext</div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Learn more</h2>
          <div className="space-y-1">
            <div>About</div>
            <div>News</div>
            <div>Careers</div>
            <div>Research</div>
            <div>Responsibility & Safety</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 text-xs text-white/60">
        <div className="space-x-4">
          <span>About Google</span>
          <span>Google products</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

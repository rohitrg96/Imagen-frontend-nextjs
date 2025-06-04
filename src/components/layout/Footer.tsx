import { footerLinks } from '@/content/footerContent';

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 lg:grid-cols-5 mb-12">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold mb-4">Follow us</h2>
          <div className="flex space-x-4">
            {footerLinks.social.map((social, idx) => (
              <div key={idx} className={`footer__${social.toLowerCase()}`}>
                {social}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/80">
            {footerLinks.slogans.followUs}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Models</h2>
          <p className="text-sm text-white/80 mb-2">
            {footerLinks.slogans.modelsDesc}
          </p>
          <div className="space-y-1">
            {footerLinks.models.map((model, idx) => (
              <div key={idx}>{model}</div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Science</h2>
          <p className="text-sm text-white/80 mb-2">
            {footerLinks.slogans.scienceDesc}
          </p>
          <div className="space-y-1">
            {footerLinks.science.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Learn more</h2>
          <div className="space-y-1">
            {footerLinks.learnMore.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 text-xs text-white/60">
        <div className="space-x-4">
          {footerLinks.bottomLinks.map((link, idx) => (
            <span key={idx}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

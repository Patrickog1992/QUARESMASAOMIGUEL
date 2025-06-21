export function VSLSection() {
  return (
    <section className="mb-12 md:mb-20">
      <div className="max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden">
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            id="js_video_iframe"
            src="https://jumpshare.com/embed/jlQnaieHvAHRbTgPHvLE?autoplay=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

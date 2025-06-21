export function VSLSection() {
  return (
    <section className="mb-12 md:mb-20">
      <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
        <iframe
          id="js_video_iframe"
          src="https://jumpshare.com/embed/jlQnaieHvAHRbTgPHvLE?autoplay=1&muted=1"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="h-full w-full border-0"
        ></iframe>
      </div>
    </section>
  );
}

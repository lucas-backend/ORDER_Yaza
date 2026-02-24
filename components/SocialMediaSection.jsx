export default function SocialMediaSection() {
  return (
    <section
      id="social-media"
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-[#FBF3E8][#0c0c0c]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col justify-center h-full">
          <p className="text-sm font-medium tracking-widest uppercase opacity-70 mb-6">
            Portfolio - Social Media
          </p>
          <h2 className="text-6xl md:text-8xl font-display text-[#0F1035] uppercase  mb-8 leading-none tracking-wider">
            NUEVA FACE
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-light opacity-80 mb-8">
            Nueva Face is a student opinion group. Engaging content was created
            for its platforms, covering events, announcements, and annual
            student voting campaigns.
          </p>
          <p className="text-sm font-medium opacity-80">Date: 2023 - now</p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhODVpJOjqv-QgdHXQXd5-WHJOQ3PyEzRPFUSSdwCDBIoqer2XQ_yG85n7ScRTDZu_YV0gJFR3h4z2oR21Bakc8ZXupf7T7LRHe__ZHgd-ZODX2u-i_0AU0RaksrR0VqZ3R_3T5O2fcJu1TggTYKMY6bF7CX1U6cq5vJHjddQJZ2jthHLOm7L89ZEhZ7IYVf0PVQS4T1jvWa-DNtG6Xu2oENSq9ZdSyrv5o8jwS6310HXr0RZmR2XdlAgKO0gPi9bd1xusVar18hZA"
            alt="Social Media Mockup 1"
            className="w-full h-full object-cover rounded-[2rem] shadow-xl transition hover:scale-105"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiqlwmifym02X4tt0PhYDjl7UMn_W9FXbspq9E_nmztI8QmmFQiK8DB9-mIRZ9t_UIsd2OeDmx7udYlkEjoG2Ehe-WYtIyhlp6owVvygTbLlQH8l9MmGf9OQxT4meVLWK1HWsG_TINZizQvW3mgymHinXb8c1pexc2oOat3G5ebNIlV0AJKrHdEsuBGPHnrunXt98Ky9xx35wO7OI3yyQgR_3om7ErIutp4Pa2X8Tq40NtVq5quiiM25sz2e1A9Bok5rwF9_VxEPEH"
            alt="Social Media Mockup 2"
            className="w-full h-full object-cover rounded-[2rem] shadow-xl transition hover:scale-105"
          />
          <img
            src="https://placehold.co/400x400/0c0c0c/eab308?text=Nueva+Face+Feed+1"
            alt="Social Media Mockup 3"
            className="w-full h-full object-cover rounded-[2rem] shadow-xl transition hover:scale-105"
          />
          <img
            src="https://placehold.co/400x400/0c0c0c/eab308?text=Nueva+Face+Feed+2"
            alt="Social Media Mockup 4"
            className="w-full h-full object-cover rounded-[2rem] shadow-xl transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

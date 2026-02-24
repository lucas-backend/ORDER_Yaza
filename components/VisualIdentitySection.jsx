export default function VisualIdentitySection() {
  return (
    <section
      id="visual-identity"
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-[#fbf2e5][#111111]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-4 flex flex-col justify-center h-full">
          <p className="text-sm font-light uppercase tracking-widest opacity-80 mb-6">
            Portfolio - Visual Identity
          </p>
          <h2 className="text-5xl lg:text-7xl font-display font-bold text-visual-primary uppercase  mb-8 leading-none tracking-wider">
            FESTILEC
          </h2>
          <p className="text-base leading-relaxed font-light opacity-90 mb-4">
            Festilec, the Reading Festival in Arequipa, is a platform that
            promotes literature and the arts.
          </p>
          <p className="text-base leading-relaxed font-light opacity-90 mb-8">
            For its 2023 edition, it aimed to expand by integrating its
            Amazonian identity and blending the culture of Tarapoto with that of
            the White City.
          </p>
          <p className="text-sm font-medium opacity-80">Date: 2023</p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5ISTZG35ODTz3rucfauUU0L4GGLPVrBzYW0UWidc8qM5_rESPel1910AhSSFs3fno4PbJkL-ktk4YxEjl2lpQhiQvKM7XVbJSp1CVG4CAbpXg4NVjj7uAz-0kvvasGyQ_Va7wLxmpgNd0JlMtwfkz53f1yzNEn0-7W1pY5B2vcpKVkM0_DLRbjpT9zV-qTediedyWzdGuOV8He54njScR_ci75eXYtkhWYlUkFrvRkuAcaTqg_enWIX_TUr7jm0ICo6QuHbkzdU1"
            alt="Festilec dark"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfbl8F9WdChtW3dI4Dks1xRTN6Wpn7Ah5NwFB_OKWPj9lM-_ZjbzKTkF3n-GvLqemBu_nGz3uGSvc2qoeEPc6v5uu4PeafolSDL893Bk9IET3FSmWiCaLizoR1_DhVu_XURjjyeeaRNWVX-b3a90aOcqrFl0-3bWbp4YhDiZWfD_Diq1gp4CNaCUQv9_8wJZSfmgpN05A8DKiJqS0oacab4tZSh53wMbU8L9y4GBYfCLSZrlrzk3g9zkEOn7NlNucFoaRFYId1nFuh"
            alt="Festilec light"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEW2H6CJX1VmOyhgvp4RXldD-dVLHIu1P83jexo_M7ENYWfUI8XvhOCXGaCJIKfn5KNq63peHBxSAge1h1_O7kb5HQiqQSAAEcwPsZcOwrd5tq61hgaOrSja9ad7Rrjyd3TD3nBqYTk1m38qq2jfXvWG4xAdUWAD0QJoIfm_qYE3t9xsoZ5fj_NPUnEEgOjiv5NSE27Ldvm6oN2Nq1mHFh4H9XDDIJeZJoLGt9HGHuDwwUym92mOTXvs1ybczrA8rQOn68ZENweg2_"
            alt="Business cards text"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHIbTk0Jowl0uQ7ES4KKAxgs_vyU3XbUI5AscHQaKPtvnbxpBe7hPjEHYCTfeAkV8-S7OaOI3iSbtUVX0MAqzFrBVf7mpEY_EQ41shkt-AxZDY1q5YM9WPW49xYVoIquLinAsF5AgPXJoFclJFLpswYplZAp8oWLuGLd_6ky1JHM_WvfSiq3O9K2188FIBICdMcquoKqp1xlS552DlimvY0-6PMdp0ILXO3pDMHnz1hY9ssU958jYWNu6yubcY27qGh2p8FPx0uur"
            alt="Mockup"
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

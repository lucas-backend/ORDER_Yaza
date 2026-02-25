import { worksData } from "@/data/worksdata";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function WorkDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Find the exact matching work object from ID
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-primary/20 selection:text-primary relative overflow-x-hidden pt-28">
      <Navbar />

      {/* Top Navigation Back Banner */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-4 md:px-8 pb-32">
        {/* Header Section */}
        <header className="mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {work.category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 font-display mb-6 tracking-tight">
            {work.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {work.description}
          </p>
        </header>

        {/* Hero Banner Thumbnail */}
        <div className="w-full aspect-video rounded-4xl overflow-hidden shadow-2xl mb-24 relative bg-gray-200">
          <img
            src={work.image}
            alt={`${work.title} thumbnail`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Sections Iterate */}
        <div className="flex flex-col gap-24">
          {work.sections?.map((section, idx) => (
            <section key={idx} className="w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 font-display">
                {section.sectionTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {section.workImages.map((imgSrc, imgIdx) => (
                  <div
                    key={imgIdx}
                    className={`rounded-2xl overflow-hidden shadow-md bg-gray-100 relative aspect-video ${
                      section.workImages.length === 1
                        ? "md:col-span-2 aspect-21/9"
                        : ""
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${section.sectionTitle} detail ${imgIdx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}

'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: "DIRTi",
    description: "A motorcross platform built to simplify track manament and event bookings with an integrated payment gateway.",
    image: "https://dirti.co/_ipx/h_80/DIRTi-word-light.svg",
    link: "https://dirti.co"
  },
  {
    id: 2,
    title: "Leadgevity",
    description: "Created optimised landing pages and marketing funnels for promotional campaigns.",
    image: "/leadgevity.jpg",
  },
  {
    id: 3,
    title: "CheckInDocs",
    description: "A platform for generating and managing check-in documents for businesses in the travel industry such as hotels, hostels and colivings",
    image: "https://dirti.co/_ipx/h_80/DIRTi-word-light.svg",
    link: "https://demo.pitahayalabs.com"
  }
];

export default function CaseStudyCard() {
  const [activeTab, setActiveTab] = useState(1);

  const CardContent = ({ study }: { study: typeof caseStudies[0] }) => (
    <>
      <div className="relative h-48 bg-black">
        <Image
          src={study.image}
          alt={study.title}
          fill
          style={{ objectFit: 'contain' }}
          className="p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-4">{study.title}</h3>
        <p>{study.description}</p>
        {study.link && (
          <span className="inline-block mt-4 text-yellow hover:underline font-medium">
            View Case Study →
          </span>
        )}
      </div>
    </>
  );

  return (
    <div className="w-full col-span-3 h-full">
      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {caseStudies.map((study) => (
          study.link ? (
            <Link 
              key={study.id}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <CardContent study={study} />
            </Link>
          ) : (
            <div 
              key={study.id}
              className="block bg-white rounded-lg shadow-md overflow-hidden"
            >
              <CardContent study={study} />
            </div>
          )
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="w-40 bg-white border-r border-light-gray flex flex-col">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`h-24 flex items-center justify-center px-6 transition-colors ${
                activeTab === study.id
                ? 'bg-light-gray border-l-8 border-yellow'
                : 'hover:bg-white/50'
              }`}
            >
              <div className="font-medium text-start">
                {study.title}
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {caseStudies.map((study) => (
            study.id === activeTab && (
              <div key={study.id} className="h-full flex flex-col">
                <div className="relative flex-1 bg-black">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-8"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-4">{study.title}</h3>
                  <p className="text-lg mb-6">{study.description}</p>
                  {study.link && (
                    <Link 
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-yellow hover:underline font-medium"
                    >
                      View Case Study →
                    </Link>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 
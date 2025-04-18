import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Welcome to Belgian Pup Paradise</h1>
        <p className="text-muted-foreground">Your source for 100% Belgian puppies</p>
      </header>

      <section id="available-puppies" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Puppies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Puppy Profile - Replace with actual data */}
          <PuppyProfile
            name="Bella"
            breed="Malinois"
            imageUrl="https://picsum.photos/id/237/300/200"
            dateOfBirth="2024-01-15"
            description="A playful and energetic Malinois puppy looking for a loving home."
          />
          <PuppyProfile
            name="Rocky"
            breed="Tervuren"
            imageUrl="https://picsum.photos/id/238/300/200"
            dateOfBirth="2024-02-01"
            description="A smart and loyal Tervuren puppy, great for active families."
          />
          <PuppyProfile
            name="Luna"
            breed="Groenendael"
            imageUrl="https://picsum.photos/id/239/300/200"
            dateOfBirth="2024-02-10"
            description="A beautiful and intelligent Groenendael puppy, excellent as a companion."
          />
        </div>
      </section>

      <section id="breed-information" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Breed Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BreedInfoCard
            breed="Malinois"
            characteristics="Highly intelligent, agile, and trainable."
            careRequirements="Requires a lot of exercise and mental stimulation."
            temperament="Loyal, protective, and can be reserved with strangers."
          />
          <BreedInfoCard
            breed="Tervuren"
            characteristics="Intelligent, alert, and versatile."
            careRequirements="Regular grooming and moderate exercise."
            temperament="Loyal, devoted, and good with families."
          />
        </div>
      </section>

      <section id="care-guides" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Care Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example Care Guide Links - Replace with actual links */}
          <CareGuideLink title="Feeding Your Puppy" href="#" />
          <CareGuideLink title="Basic Training Tips" href="#" />
          <CareGuideLink title="Healthcare Essentials" href="#" />
        </div>
      </section>

      <section id="ai-chatbot" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI Chatbot</h2>
        <p className="text-muted-foreground">Have questions? Our AI Chatbot can help!</p>
        {/* Implement AI Chatbot Component Here */}
        <AIChatbotPlaceholder />
      </section>

      <section id="testimonials">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Example Testimonials - Replace with actual testimonials */}
          <TestimonialCard
            author="John Doe"
            text="We couldn't be happier with our Malinois puppy! He's smart, energetic, and a great addition to our family."
          />
          <TestimonialCard
            author="Jane Smith"
            text="The Tervuren puppy we got from here is amazing. She's so gentle with our kids and very easy to train."
          />
        </div>
      </section>

      <footer className="text-center mt-12">
        <p className="text-muted-foreground">
          © 2024 Belgian Pup Paradise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function PuppyProfile({ name, breed, imageUrl, dateOfBirth, description }: { name: string; breed: string; imageUrl: string; dateOfBirth: string; description: string }) {
  return (
    <div className="card rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={200}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-foreground">Breed: {breed}</p>
        <p className="text-muted-foreground">Date of Birth: {dateOfBirth}</p>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-accent hover:bg-accent-foreground text-white font-bold py-2 px-4 rounded">
          Contact Breeder
        </button>
      </div>
    </div>
  );
}

function BreedInfoCard({ breed, characteristics, careRequirements, temperament }: { breed: string; characteristics: string; careRequirements: string; temperament: string }) {
  return (
    <div className="card rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{breed}</h3>
      <p className="text-muted-foreground">Characteristics: {characteristics}</p>
      <p className="text-muted-foreground">Care Requirements: {careRequirements}</p>
      <p className="text-muted-foreground">Temperament: {temperament}</p>
    </div>
  );
}

function CareGuideLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block card rounded-lg shadow-md p-4 hover:bg-secondary">
      {title}
    </Link>
  );
}

function AIChatbotPlaceholder() {
  return (
    <div className="card rounded-lg shadow-md p-4 text-center">
      {/* Placeholder for AI Chatbot Integration */}
      <p>AI Chatbot Integration Coming Soon!</p>
    </div>
  );
}

function TestimonialCard({ author, text }: { author: string; text: string }) {
  return (
    <div className="card rounded-lg shadow-md p-4">
      <h4 className="font-semibold">{author}</h4>
      <p className="text-gray-600 mt-2">"{text}"</p>
    </div>
  );
}

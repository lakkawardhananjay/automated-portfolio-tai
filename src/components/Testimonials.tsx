
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// These are placeholder testimonials - you should replace them with real ones
const testimonials = [
  {
    name: "Jane Doe",
    role: "Project Manager",
    company: "TechFinance Corp",
    text: "Payal delivered exceptional test automation for our banking application. Her expertise in Java-Selenium and BDD framework significantly improved our release quality and reduced testing time by 40%.",
    stars: 5
  },
  {
    name: "John Smith",
    role: "CTO",
    company: "InsureTech Solutions",
    text: "We hired Payal for a critical insurance platform project. Her thorough manual and automation testing approach uncovered critical issues early in the development cycle, saving us time and resources.",
    stars: 5
  },
  {
    name: "Sarah Williams",
    role: "Development Lead",
    company: "Global Banking Systems",
    text: "Payal's expertise in Appian Low Touch Automation helped us validate complex business workflows efficiently. Her attention to detail and technical knowledge make her an asset to any QA team.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          Here's what clients have to say about my testing services and collaboration experience.
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground mb-4 flex-grow">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

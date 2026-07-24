"use client";

import { Component as BookTestimonial } from "@/components/ui/3d-book-testimonial";
import { VOICES_TESTIMONIALS } from "@/lib/voices-of-danovix/constants";

import { voicesCarousel } from "./voices-of-danovix.styles";

const BOOK_TESTIMONIALS = VOICES_TESTIMONIALS.map((testimonial) => ({
  image: testimonial.portrait.src,
  text: testimonial.quote,
  name: testimonial.name,
  jobtitle: testimonial.city,
  rating: 5,
}));

export function VoicesOfDanovixBook() {
  return (
    <div data-voices="carousel" className={voicesCarousel}>
      <BookTestimonial testimonials={BOOK_TESTIMONIALS} />
    </div>
  );
}

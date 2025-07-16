"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonLink?: string;
  onViewMore?: () => void;
};

export default function ServiceCard({
  title,
  description,
  imageUrl,
  buttonLabel = "VIEW MORE",
  buttonLink,
  imageAlt = "Product image",
  onViewMore,
}: ServiceCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-48 md:h-full min-h-[200px]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover rounded-l-lg md:rounded-l-lg md:rounded-r-none rounded-r-lg md:rounded-tr-none"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center text-left">
            <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">
              {title}
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>

            <Button
              variant="outline"
              className="self-start group hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent cursor-pointer max-sm:w-full md:ml-auto"
              asChild
              onClick={onViewMore}
            >
              <a href={buttonLink} target="_blank">
                {buttonLabel}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

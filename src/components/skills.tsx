"use client";
import { useEffect, useState } from "react";
import useSupabase from "@/hooks/useSupabase";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/title";
import { Globe } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SkillsTypes {
  id: number;
  created_at: string;
  title: string;
  icon: string;
}
interface Skills {
  id: number;
  created_at: string;
  title: string;
  icon: string;
  type: number;
}

export default function Skills() {
  const supabase = useSupabase();
  const [skills_types, setSkills_types] = useState([] as SkillsTypes[]);
  const [skills, setSkills] = useState([] as Skills[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkillsTypes() {
      let { data: skills_types, error } = await supabase
        .from("skills_types")
        .select("*")
        .order("id");
      setSkills_types(skills_types as SkillsTypes[]);
    }
    async function fetchSkills() {
      let { data: skills, error } = await supabase
        .from("skills")
        .select("*")
        .order("id");
      setSkills(skills as Skills[]);
      setLoading(false);
    }
    fetchSkillsTypes();
    fetchSkills();
  }, [supabase]);
  return (
    <section id="skills" className="p-12">
      <Title text="My skills" />
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {skills_types?.map((skill_type) => (
            <CarouselItem key={skill_type.id} className="pl-1 basis-1/3">
              <div className="p-1">
                <Card className="max-w-96" key={skill_type.id}>
                  <CardHeader>
                    <CardTitle>
                      <div className="flex justify-center items-center gap-2">
                        {skill_type.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      {skills
                        .filter((skill) => skill.type === skill_type.id)
                        .map((skill) => (
                          <div
                            key={skill.id}
                            className="flex border border-white/10 px-4 py-2 rounded-full flex-wrap gap-2 items-center"
                          >
                            {skill.icon && (
                              <img
                                src={skill.icon}
                                width={28}
                                height={28}
                                alt="Icon"
                                className="fill-white"
                              />
                            )}
                            <p>{skill.title}</p>
                          </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {skills
                        .filter((skill) => skill.type === skill_type.id)
                        .map((skill) => (
                          <div
                            key={skill.id}
                            className="flex hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full flex-wrap gap-2 items-center"
                          >
                            {skill.icon && (
                              <img
                                src={skill.icon}
                                width={28}
                                height={28}
                                alt="Icon"
                                className="fill-white"
                              />
                            )}
                            <p>{skill.title}</p>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black hover:bg-white/10 border-[#2E2E2E]" />
        <CarouselNext className="bg-black hover:bg-white/10 border-[#2E2E2E]" />
      </Carousel>
    </section>
  );
}

"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Title } from "@/components/ui/title";
import useSupabase from "@/hooks/useSupabase";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  created_at: string;
  illustration: string;
}

export default function Projects() {
  const [projects, setProjects] = useState([] as Project[]);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();
  useEffect(() => {
    async function fetchData() {
      let { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      setProjects(projects as Project[]);
      setLoading(false);
    }
    fetchData();
  }, [supabase]);
  return (
    <section id="projects" className="p-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 bg-white/10 rounded-3xl p-4 flex flex-col gap-4">
          <p className="font-bold text-2xl">nathanguianvarch.fr</p>
          <div>
            <p className="text-sm text-gray-300">
              My online portfolio website brings together my skills and
              professional experiences to provide a comprehensive view of my
              journey and accomplishments.
            </p>
            <Image
              src="/projects/portfolio.png"
              alt="nathanguianvarch.fr"
              className="h-full w-full"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <Title text="My projects" />
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {loading && (
            <Card className="max-w-96">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-8 w-[250px]" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-48 w-[320px]" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-6 w-[200px]" />
              </CardFooter>
            </Card>
          )}
          {projects?.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="max-w-96" key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Image
                      src={project.illustration}
                      alt={project.title}
                      sizes="100vw"
                      className="w-full h-auto"
                      width={500}
                      height={300}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-gray-400 bg-white/10 px-2 py-1 rounded-lg flex items-center gap-2">
                    <CalendarDays className="w-5 h-5" />
                    <span>
                      Published on{" "}
                      {format(new Date(project.created_at), "dd MMMM yyyy")}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

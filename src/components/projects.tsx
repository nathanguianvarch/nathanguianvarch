"use client";
import { useEffect, useState } from "react";
<<<<<<< Updated upstream
import supabase from "@/components/connectionSupabase";
import { format } from "date-fns";
=======
import useSupabase from "@/hooks/useSupabase";
import { format, set } from "date-fns";
>>>>>>> Stashed changes
import { CalendarDays } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  created_at: string;
  illustration: string;
}
interface Skills {
  id: number;
  created_at: string;
  title: string;
  icon: string;
  type: number;
}

export default function Projects() {
  const [projects, setProjects] = useState([] as Project[]);
  const [projectSkills, setProjectSkills] = useState([] as Skills[]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      let { data: projectSkills } = await supabase
        .from("project_skills")
        .select("*");
      setProjects(projects as Project[]);
      setProjectSkills(projectSkills as Skills[]);
      setLoading(false);
    }
    fetchData();
<<<<<<< Updated upstream
  }, []);
=======
  }, [supabase]);
  console.log(projectSkills);
>>>>>>> Stashed changes
  return (
    <section id="projects" className="p-12">
      <h4 className="text-5xl font-semibold text-center mb-8">Projects</h4>
      <div className="flex flex-wrap justify-center gap-4 m-4">
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
                <h4 className="font-semibold text-2xl	">{project.title}</h4>
              </CardHeader>
              <Divider />
              <CardBody>
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
              </CardBody>
              <CardFooter>
                <Chip
                  radius="sm"
                  size="lg"
                  className="text-gray-400"
                  startContent={<CalendarDays />}
                >
                  Published on{" "}
                  {format(new Date(project.created_at), "dd MMMM yyyy")}
                </Chip>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

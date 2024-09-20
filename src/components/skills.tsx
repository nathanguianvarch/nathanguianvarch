"use client";
import { useEffect, useState } from "react";
<<<<<<< Updated upstream
import supabase from "@/components/connectionSupabase";
=======
>>>>>>> Stashed changes
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import useSupabase from "@/hooks/useSupabase";
import Image from "next/image";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/chip";
import * as Icons from "lucide-react";

interface SkillsTypes {
  id: number;
  created_at: string;
  title: string;
  icon: keyof typeof Icons;
}
interface Skills {
  id: number;
  created_at: string;
  title: string;
  icon: string;
  type: number;
}

export default function Skills() {
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
  }, []);
  return (
    <section id="skills" className="p-12">
      <h4 className="text-5xl font-semibold text-center mb-8">Skills</h4>
      <div className="flex flex-wrap gap-4 m-4 justify-center">
        {skills_types?.map((skill_type) => {
          const IconComponent = Icons[skill_type.icon] as React.ComponentType<{
            size?: number;
          }>; // Typecasting pour informer TypeScript
          return (
            <motion.div
              key={skill_type.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="h-full" key={skill_type.id}>
                <CardHeader className="flex gap-2">
                  {IconComponent && <IconComponent size={24} />}
                  <p className="text-2xl text-center font-semibold">
                    {skill_type.title}
                  </p>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="flex flex-wrap gap-2 w-64 justify-items-stretch">
                    {skills
                      .filter((skill) => skill.type === skill_type.id)
                      .map((skill) => (
                        <div key={skill.id} className="inline-block">
                          <Chip
                            size="lg"
                            startContent={
                              <Image
                                src={skill.icon}
                                width={22}
                                height={22}
                                alt="Icon"
                                className="fill-white"
                              />
                            }
                          >
                            {skill.title}
                          </Chip>
                        </div>
                      ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import supabase from "@/components/connectionSupabase";
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Chip } from "@nextui-org/chip";

interface Experience {
  id: number;
  created_at: string;
  name: string;
  location: string;
  logo: string;
  start_date: string;
  end_date: string;
  description: string[];
  address: string;
}

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function fetchExperiences() {
      const { data: experiences, error } = await supabase
        .from("experiences")
        .select("*")
        .order("end_date", { ascending: false });
      if (error) console.error(error.message);
      setExperiences(experiences || []);
    }
    fetchExperiences();
  }, []);

  const formatDate = (date: string) => {
    return (
      format(new Date(date), "MMMM yyyy").charAt(0).toUpperCase() +
      format(new Date(date), "MMMM yyyy").slice(1)
    );
  };

  return (
    <section id="experiences" className="p-12">
      <h4 className="text-5xl font-semibold text-center mb-8">Experiences</h4>
      <div className="flex flex-wrap justify-center items-center gap-4 m-4">
        {experiences.map((experience) => (
          <Card key={experience.id} className="w-[500px]">
            <CardHeader>
              <div className="flex gap-4 items-center">
                {experience.logo && (
                  <Image
                    src={experience.logo}
                    alt={experience.name}
                    width={50} // largeur de l'image
                    height={50} // hauteur de l'image
                    style={{ maxHeight: "200px", objectFit: "cover" }} // définir max-height
                  />
                )}
                <h4 className="font-semibold text-2xl	">{experience.name}</h4>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="list-disc mx-4">
                {experience.description.map((desc, index) => (
                  <li key={index} className="text-gray-400">
                    {desc}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <div className="flex gap-2">
                <Chip
                  radius="sm"
                  size="lg"
                  className="text-gray-400"
                  startContent={<CalendarDays />}
                >
                  {formatDate(experience.start_date)}
                  {experience.start_date !== experience.end_date &&
                    ` - ${formatDate(experience.end_date)}`}
                </Chip>
                <Tooltip content={experience.address}>
                  <Chip
                    radius="sm"
                    size="lg"
                    className="text-gray-400"
                    startContent={<MapPin />}
                  >
                    {experience.location}
                  </Chip>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

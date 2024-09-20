"use client";
import { useEffect, useState } from "react";
import supabase from "@/components/connectionSupabase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Chip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

interface Schools {
  id: number;
  created_at: string;
  name: string;
  location: string;
  logo: string;
  start_date: string;
  end_date: string;
  description: string;
  address: string;
}

export default function Schools() {
  const [schools, setSchools] = useState([] as Schools[]);
  useEffect(() => {
    async function fetchSchools() {
      let { data: schools, error } = await supabase
        .from("schools")
        .select("*")
        .order("end_date", { ascending: false });
      setSchools(schools as Schools[]);
    }
    fetchSchools();
  }, []);
  return (
    <section id="schools" className="p-12">
      <h4 className="text-5xl font-semibold text-center mb-8">Schools</h4>
      <div className="flex flex-wrap gap-4 justify-center">
        {schools?.map((school) => (
          <Card key={school.id} className="w-96">
            <CardHeader>
              <div className="flex gap-4 items-center">
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={50}
                  height={50}
                  className="h-auto w-auto"
                />
                <h4 className="font-semibold text-2xl	">{school.name}</h4>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-col m-2">
                <p className="text-gray-400">{school.description}</p>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex gap-2">
                <Chip
                  radius="sm"
                  size="lg"
                  className="text-gray-400"
                  startContent={<CalendarDays />}
                >
                  {new Date(school.start_date).getFullYear()} -{" "}
                  {new Date(school.end_date).getFullYear()}{" "}
                </Chip>
                <Tooltip content={school.address}>
                  <Chip
                    radius="sm"
                    size="lg"
                    className="text-gray-400"
                    startContent={<MapPin />}
                  >
                    {school.location}
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

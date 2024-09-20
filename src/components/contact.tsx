import { Linkedin, Github, Mail, FileDown } from "lucide-react";
import { Button, Link } from "@nextui-org/react";
import download from "downloadjs";

export default function Socials() {
  return (
    <section id="contact" className="p-12">
      <h4 className="text-5xl font-semibold text-center mb-8">Contact</h4>
      <div className="flex justify-center items-center gap-4">
        <Button
          href="https://www.linkedin.com/in/nathanguianvarch/"
          as={Link}
          size="lg"
          className="bg-sky-600"
          startContent={<Linkedin />}
        >
          Connect on LinkedIn
        </Button>
        <Button
          href="https://github.com/nathanguianvrch"
          as={Link}
          size="lg"
          color="secondary"
          startContent={<Github />}
        >
          Follow me on GitHub
        </Button>
        <Button
          href="mailto:nathanguianvarch@gmail.com"
          as={Link}
          size="lg"
          color="primary"
          startContent={<Mail />}
        >
          Contact me
        </Button>
        <Button
          size="lg"
          color="success"
          startContent={<FileDown />}
          onPress={() =>
            download(
              "https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
            )
          }
        >
          Download CV
        </Button>
      </div>
    </section>
  );
}

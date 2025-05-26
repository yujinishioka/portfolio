import Link from "next/link";
import { useTranslations } from "next-intl";
import { MidiaButton } from "@/components/atoms/MidiaButton";
import EmailIcon from "@/components/icons/EmailIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Contact() {
  const t = useTranslations("Contact");
  const urls = t.raw("urls") as {
    name: string;
    url: string;
  };

  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center bg-black/80 text-white">
      <h2
        id="contact"
        className="text-primary-light text-4xl scroll-mt-24 md:text-6xl lg:text-8xl"
      >
        {t("title")}
      </h2>
      <p className="mt-6 p-6 md:max-w-[900px] md:mt-6 md:text-lg md:text-center">{t("description")}</p>
      <div className="flex mt-6 gap-4 md:gap-8">
        {Array.isArray(urls) &&
          urls.map((item: { name: string; url: string }, index: number) => {
            if (item.name === "E-mail") {
              return (
                <a
                  key={"contact-" + index}
                  href={`mailto:${item.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MidiaButton>
                    <EmailIcon className="w-13 h-13 m-1" />
                  </MidiaButton>
                </a>
              );
            } else if (item.name === "LinkedIn") {
              return (
                <Link
                  key={"contact-" + index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MidiaButton>
                    <LinkedInIcon className="w-10 h-10 m-3" />
                  </MidiaButton>
                </Link>
              );
            } else if (item.name === "GitHub") {
              return (
                <Link
                  key={"contact-" + index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MidiaButton>
                    <GitHubIcon className="w-16 h-16" />
                  </MidiaButton>
                </Link>
              );
            }
            return null;
          })}
      </div>
    </section>
  );
}

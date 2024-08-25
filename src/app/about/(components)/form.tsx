"use client";
import React, { useRef } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/utils/cn";
import { PiGithubLogo, PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { FaX } from "react-icons/fa6";

export function ContactForm({ onClose }: { onClose: () => void }) {
  const formRef = useRef<null | HTMLFormElement>(null);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (formRef.current && serviceId && templateId && publicKey) {
      const req = emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      );

      toast.promise(req, {
        success: {
          title: "Email Sent",
          description: "Your email was sent successfully!",
          duration: 5000,
          isClosable: true,
        },
        error: {
          title: "Error",
          description: "There was an issue sending your email.",
          duration: 5000,
          isClosable: true,
        },
        loading: {
          title: "Sending...",
          description: "Your email is being sent.",
          duration: null,
          isClosable: true,
        },
      });
    }
  };

  return (
    <div
      className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative h-fit max-w-xs rounded-2xl border-[1px] border-neutral-700 bg-white p-4 shadow-input dark:bg-bg sm:max-w-md md:p-8"
        onClick={(e) => e.stopPropagation()}
        onDrag={(e) => e.stopPropagation()}
      >
        <FaX
          onClick={onClose}
          className="visible absolute right-5 top-5 text-accent sm:hidden"
        />
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Get in Touch
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Specializing in full-stack development and always eager to tackle new
          challenges.
        </p>
        <form className="mt-4 md:mt-8" onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Guy"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Cohen"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="Message">Message</Label>
            <Input
              id="message"
              name="message"
              placeholder="Your Message"
              type="text"
            />
          </LabelInputContainer>
          <button
            className="group/btn clickable relative block h-10 w-full cursor-none rounded-md bg-gradient-to-br from-bg to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
          <div className="my-6 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 sm:block" />
          <div className="flex flex-row justify-between space-y-4 sm:flex-col sm:gap-0">
            <p className="hidden max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-300 sm:block">
              Or find me here!
            </p>
            <a
              href="https://www.linkedin.com/in/guy-cohen-96a6141ab/"
              target="_blank"
              className="clickable group/btn relative flex h-10 w-fit items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] sm:w-full"
            >
              <PiLinkedinLogo className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="hidden text-sm text-neutral-700 dark:text-neutral-300 sm:block">
                LinkedIn
              </span>
              <BottomGradient />
            </a>
            <a
              href="https://github.com/guycdev"
              target="_blank"
              className="clickable group/btn relative flex h-10 w-fit items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] sm:w-full"
            >
              <PiGithubLogo className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="hidden text-sm text-neutral-700 dark:text-neutral-300 sm:block">
                GitHub
              </span>
              <BottomGradient />
            </a>
            <a
              href="https://github.com/guycdev"
              target="_blank"
              className="clickable group/btn relative flex h-10 w-fit items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] sm:w-full"
            >
              <PiTwitterLogo className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="hidden text-sm text-neutral-700 dark:text-neutral-300 sm:block">
                Twitter
              </span>
              <BottomGradient />
            </a>
            <a
              href="https://devpost.com/gcWDev"
              target="_blank"
              className="clickable group/btn relative flex h-10 w-fit items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] sm:w-full"
            >
              <SiDevpost className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="hidden text-sm text-neutral-700 dark:text-neutral-300 sm:block">
                Devpost
              </span>
              <BottomGradient />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+62)895391482096",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "septiyan.jobs@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Depok, Jawa Barat, indonesia",
  },
];


const Contact = () => {
  
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_fwj6rmn",
      "template_q8ilg3e",
      form.current,
      "y-eHurDe0EbXANS7T"
    ).then(
      (result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send message. Please try again later.");
      }
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">let's work together</h3>
              <p className="text-sm text-white/60">Have a problem or want to consult about your website?<br/>
I am ready to help you find the best solution for your digital needs.<br/>
Please send me a message through the contact form or call me directly.<br/>
I will respond as soon as possible!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="first_name" placeholder="FirstName"/>
                <Input type="text" name="last_name" placeholder="LastName"/>
                <Input type="email" name="email" placeholder="Email Address"/>
                <Input type="phone" name="phone" placeholder="Phone Number"/>
              </div>
              <Textarea className="h-[200px]" name="message" placeholder="Type Your Message here."/>
              <Button type="submit" size="md" className="max-w-40 h-[40px]">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end xl:order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return (
                  <li key={index} className="flex items-center gap-6">

                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark"/>
    </motion.div>
  );
};

export default Contact;

"use client";
import React from "react";
import ContactsBg from "./components/ContactsBg";
import ContactsForm from "./components/ContactsForm";
import ContactsInfo from "./components/ContactsInfo";

const ContactsPage: React.FC = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-12 sm:py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="mx-4 flex flex-wrap justify-center lg:justify-between">
            <div className="order-2 w-full px-4 lg:order-1 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg p-8 shadow-2xl sm:p-12">
                <ContactsForm />
                <ContactsBg />
              </div>
            </div>
            <div className="order-1 w-full px-4 lg:order-2 lg:w-1/2 xl:w-6/12">
              <ContactsInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;

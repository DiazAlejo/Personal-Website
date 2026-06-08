"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AvailabilitySection } from "@/components/contact/availability-section";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactMethods } from "@/components/contact/contact-methods";
import { contactPage } from "@/content/contact";

function ContactView() {
  return (
    <article>
      <Container>
        <ContactHeader header={contactPage.header} />
      </Container>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-section-y lg:grid-cols-2 lg:gap-element-xl lg:items-start">
            <div className="flex flex-col gap-section-y">
              <ContactMethods methods={contactPage.methods} />
              <AvailabilitySection availability={contactPage.availability} />
            </div>

            <ContactForm form={contactPage.form} />
          </div>
        </Container>
      </Section>
    </article>
  );
}

export { ContactView };

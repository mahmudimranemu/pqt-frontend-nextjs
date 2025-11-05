import PageHeader from "@/components/PageHeader";
import FullContactForm from "./ContactForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { pqtData } from "@/lib/data/pqtData";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title='Contact'
        backgroundImage='/images/slide2.jpg'
        description='Get in touch with our expert team for all your property needs'
      />
      <main className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex'>
        <div className='w-2/4 flex flex-col gap-6'>
          <h1 className="font-extrabold text-dark-red text-4xl tracking-tighter leading-9 [font-family:'Inter',Helvetica]">
            Contact
          </h1>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-4 '>
              <div className='w-[48px] h-[48px] flex items-center justify-center rounded border'>
                <Mail className='text-[#b3b8c8]' />
              </div>
              <div className='flex flex-col gap-0'>
                <p className='text-[#b3b8c8]'>Email</p>
                <Link
                  href='mailto:info@propertyquestturkey.com'
                  className='text-text hover:text-primary transition-colors'>
                  {pqtData.email}
                </Link>
              </div>
            </div>

            <div className='inline-flex items-center gap-4'>
              <div className='w-[48px] h-[48px] flex items-center justify-center rounded border'>
                <Phone className='text-[#b3b8c8]' />
              </div>
              <div className='flex flex-col gap-0'>
                <p className='text-[#b3b8c8]'>Phone</p>
                <Link
                  href={pqtData.whatsAppLink}
                  target='_blank'
                  className='text-text hover:text-primary transition-colors'>
                  {pqtData.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Card className='w-2/4'>
          <CardHeader className='text-center font-bold tracking-tight text-2xl'>
            <h2>Get in Touch</h2>
          </CardHeader>
          <CardContent>
            <FullContactForm />
          </CardContent>
        </Card>
      </main>
    </>
  );
}

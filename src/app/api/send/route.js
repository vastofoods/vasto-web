import { EmailTemplate } from "@/lib/email";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['pattindev@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),    
      });

      if (error) {
        return new Response(error, { status: 400 })
      }else{
       return new Response(data, { status: 200 });
      }
  }
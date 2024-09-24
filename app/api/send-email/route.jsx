// app/api/send-email/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
      const { user_name, user_email, message } = await req.json();
  
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['humanityinapack@gmail.com'], 
        subject: `New message from ${user_name}`,
        react: (
          <div>
            <h1>Message from {user_name} ({user_email})</h1>
            <p>{message}</p>
          </div>
        ),
      });
  
      console.log("Email sent successfully:", data);  // <-- Log the response from Resend
  
      return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
  }
  
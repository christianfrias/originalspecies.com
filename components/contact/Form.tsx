import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useState } from 'react';

function Form() {
    const [token, setToken] = useState();

    return (
        <div>
            <form
                action="https://formspree.io/f/mqknnkpe"
                method="POST"
                className="flex flex-col w-full"
            >
                <label>Name</label>
                <input type="text" name="name" placeholder="Name*" required />
                <label>Email</label>
                <input type="email" name="email" placeholder="Email*" required />
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Subject*" required />
                <label>Message</label>
                <textarea name="message" placeholder="Message*" required />
                <p className="mb-4 text-slate-400">Please note, all fields are required.</p>
                <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
                    <GoogleReCaptcha onVerify={token => {
                        setToken(token);
                    }} />
                </GoogleReCaptchaProvider>
                <button type="submit" className="bg-slate-900 text-white p-4 hover:bg-ribbon">Send</button>
            </form>
        </div>


    )
}

export default Form

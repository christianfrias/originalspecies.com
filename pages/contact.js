import {Fragment } from 'react';
import Link from 'next/link';

function Contact() {
    return (
        <Fragment>
            <h1>Contact Page</h1>
            <ul>
                <li><Link href="/work/hello">Hello 1</Link></li>
                <li><Link href="/work/hello2">Hello 2</Link></li>
            </ul>
        </Fragment>
    ) 
}

export default Contact;
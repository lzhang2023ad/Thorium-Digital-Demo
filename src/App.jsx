import { useState } from 'react';
import logo from './assets/logo.png';
import front from './assets/front.png';
import menu from './assets/menu.png';
function MainContainer({ labels }) {
    return (
        <div className='main-container'>
            <PageHeader labels={labels} />
            <FrontPage labels={labels} />
            <ExpandPage labels={labels} />
        </div>
    );
}
function PageHeader({ labels }) {
    return (
        <div className='page-header'>
            {labels.header}
        </div>
    );
}
function FrontPage({ labels }) {
    return (
        <div className='front-page'>
            <FrontPageLogo labels={labels} />
            <FrontPageMenu labels={labels} />
            <FrontPageImg labels={labels} />
            <FrontPageDesc labels={labels} />
            <FrontPageForm labels={labels} />
        </div>
    );
}

function FrontPageLogo({ labels }) {
    return <img className='logo' src={logo} alt={labels.logo_alt} />;
}
function FrontPageMenu({ labels }) {
    return <img className='menu' src={menu} alt={labels.menu_alt} />;
}
function FrontPageImg({ labels }) {
    return <img className='front-img' src={front} alt={labels.front_page_img_alt} />;
}
function FrontPageDesc({ labels }) {
    return (
        <div className='front-page-desc'>
            <h1>{labels.front_title1} <span>{labels.front_title2}</span> {labels.front_title3}</h1>
            <p>{labels.front_desc}</p>
        </div>
    );
}
function FrontPageForm({ labels }) {
    const [emailText, setEmailText] = useState('');
    return (
        <form className='learn-more-form'>
            <input
                type="text" aria-label={labels.email_address}
                value={emailText} placeholder={labels.email_address}
                onChange={(e) => setEmailText(e.target.value)} />
            <button type="button" aria-label={labels.learn_more}>{labels.learn_more}</button>
        </form>
    );
}
function ExpandPage({ labels }) {
    return (
        <div className='expand-page'>
            <ExpandPageDesc labels={labels} />
        </div>
    );
}

function ExpandPageDesc({ labels }) {
    return (
        <div className='expand-desc'>
            <h1>{labels.expand_title1} <span>{labels.expand_title2}</span> {labels.expand_title3}</h1>
            <p>{labels.expand_desc1}</p>
            <p><b>{labels.expand_desc2}</b></p>
            <p>{labels.expand_desc3}</p>
        </div>
    );
}

const staticLabels = {
    header: 'This is an example of a notification message.It can be used to promote a specific campaign, etc.',
    front_title1: 'Expand your provider network',
    front_title2: 'anywhere',
    front_title3: 'in the country.',
    front_desc: 'Or lease just the network locations you need. With MagnaCare Access, the choice is yours.',
    email_address: 'Email Address',
    learn_more: 'Learn more',
    front_page_img_alt: 'front_page_img_alt',
    logo_alt: 'logo_alt',
    menu_alt: 'menu_alt',
    expand_page_img_alt: 'expand_page_img_alt',
    expand_title1: 'Need to offer',
    expand_title2: 'nationwide',
    expand_title3: 'access to health care providers?',
    expand_desc1: 'MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico, with top-rated doctors and hospitals, as well as inpatient and outpatient services such as rehab centers, urgent care centers and ambulatory surgery centers.',
    expand_desc2: 'Want to lease just a portion of our network?',
    expand_desc3: 'We\'ll build you a network according to ZIP codes, provider types or any other criteria that fits your client\'s needs. You decide what to include and we\'ll build your network accordingly. Don\'t want chiropractors? No problem. Need a custom network just for Indiana? Done. You can opt for a physician-only or hospital-only network. It\'s your choice!'
};
export default function App() {
    return <MainContainer labels={staticLabels} />;
}

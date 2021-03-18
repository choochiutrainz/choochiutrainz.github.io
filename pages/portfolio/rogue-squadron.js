import Head from 'next/head'

export default function roguesquadron() {
    return (
        <div>
            <Head>
                <title>Rogue Squadron | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Keeping our troops safe from drone threats" />
                <meta property="og:description" content="We're the US Military's sole team for providing drones to our troops and protecting them from drone threats. See how my passion for modern, quality tools helps keep this military startup stay ahead." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/rogue-squadron" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-6 sm:px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Dowding Story</h1>
                <p className="text-2xl text-gray-300">In 2017, ISIS began using comercially available drones to drop grenades on troops. The Department of Defense (DoD) needed a quality, modern solution to detect and protect against them. So we built Dowding.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../dowding-homepage.png" alt="Dowding homepage" />
                <p className="text-2xl text-gray-300">Dowding fuses various data sources into a central interface that law enforcement and national defense forces can use to detect and track drone incursions in realtime. I helped build it as a Software Engineer.</p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16 px-6 text-center">
                <h1 className="text-4xl pt-16 p-6 font-bold">We built Dowding on these principles:</h1>
                <li className="text-2xl">Realtime detecting, tracking, and alerting</li>
                <li className="text-2xl">Mobile-Centric</li>
                <li className="text-2xl">Built with a modern tech stack</li>
                <li className="text-2xl">Clean, minimal UI's that our users love</li>
                <p className="px-6 sm:px-24 text-xl text-center">(Fun Fact: Dowding was named for the <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://en.wikipedia.org/wiki/Dowding_system">Dowding System</a>, the world’s first integrated air defense system that helped win the Battle of Britain)</p>
            </div>
            <div className="w-screen px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left">
                <h1 className="text-center text-4xl font-bold">About Rogue Squadron</h1>
                <img className="w-64 sm:h-auto sm:float-left px-10 pb-6 sm:pb-0" src="../rogue-squadron-logo.png" alt="Rogue Squadron Logo"></img>
                <p className="text-2xl"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/diux-rogue-squadron">Rogue Squadron</a> is the DoD's premier UAS/Counter-UAS team, focused on detecting, penetration testing, and hardening commercially available drones for national defense use.</p>
                <p className="text-2xl">We're the only organization with the resources and capability to meet immediate operational needs around drones, and we have been providing support to over 200 organizations across the Departments of Defense, Homeland Security, Interior, and Justice as well as allied partners.</p>
                <p className="text-2xl">Rogue Squadron was originally part of the <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.diu.mil/">Defense Innovation Unit</a>. In March 2020, RS went through a <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://dds.mil/media/announcements/2020-05-rogue-squadron-transitions-from-defense-innovation-unit-to-defense-digital-service">successful acquisition</a> by the Defense Digital Service (DDS).</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center text-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/defense-innovation-unit">Drone Medical Resupply</a></h1>
            </div>
        </div>
    )
}
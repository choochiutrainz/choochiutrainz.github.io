import Head from 'next/head'

const passions = () => {
    return (
        <div>
            <Head>
                <title>Passions | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="My passions and personality" />
                <meta property="og:description" content="Product Manager by day, Penetration Tester by night, Photographer capturing memories when the moment is just right. Glimpse at the other side of my life and how I live every second of it." />
                <meta property="og:image" content="thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/passions" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 px-6 py-24 lg:px-24">
                <h1 className="text-5xl font-bold text-yellow-300">A few fun facts about myself.</h1>
                <img className="text-gray-100 rounded-md" src="wes-with-parents.jpg" alt="with my parents" />
                <p className="text-2xl text-gray-100 leading-normal">I'm second generation Taiwanese-American, and my name in Mandarin is "邱凡遠" which means "far from ordinary." I love bikepacking and rockclimbing, I have two cats named Byakko and Tofu, I like a nice strong soju, my favorite food is Taiwanese beef noodle soup, and I had to get stitches on my head<br className="sm:hidden"/>...once, thankfully.</p>
            </div>
            <div className="bg-gray-200 px-6 sm:px-16 lg:px-24 pt-24 text-4xl font-bold leading-normal text-center">I also love to photograph priceless, split-second moments. Check out some special memories that I had so much fun capturing.</div>
            <div className="bg-gray-200 px-6 sm:px-16 pt-8 text-xl italic leading-normal text-center">“What I like about photographs is that they capture a moment that’s gone forever, impossible to reproduce.” - Karl Lagerfeld</div>
            <div className="lg:grid grid-cols-3 gap-4 bg-gray-200 p-6 sm:p-16 md:px-24 lg:px-36 space-y-6 lg:space-y-0">
                <img className="rounded-md" src="birthday.jpg"></img>
                <img className="rounded-md" src="bird-house.jpg"></img>
                <img className="rounded-md row-span-2" src="dress-photoshoot.jpg"></img>
                <img className="rounded-md row-span-2" src="manzanar-internment-camp.png"></img>
                <img className="rounded-md" src="wedding.jpg"></img>
                <img className="rounded-md" src="grandma.jpg"></img>
                <img className="rounded-md" src="getty.jpg"></img>
                <img className="rounded-md col-span-2" src="rockclimbing.jpg"></img>
                <img className="rounded-md row-span-2" src="new-year.jpg"></img>
                <img className="rounded-md col-span-3" src="ferris-wheel.jpg"></img>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-16 justify-center items-center">
                <h1 className="text-center w-screen text-4xl font-bold px-6">Want to learn more about my main hustle?</h1>
                <h1 className="text-center w-screen text-2xl px-6 sm:px-16">Feel free to dive deeper into what I've accomplished and see what I can do for you and your team.</h1>
                <a href="/resume">
                    <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                    <span className="pr-1">View My Resume</span>
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                </a>
            </div>
        </div>
    )
}

export default passions
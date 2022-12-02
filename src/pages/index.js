import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { BoltIcon, UserGroupIcon, ScaleIcon } from '@heroicons/react/24/outline'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  }



const features = [
  {
    name: 'Clojure',
    description: `Clojure's philosophy of simplicity and stability means you can stop fighting your language and focus on real features.`,
    Icon: UserGroupIcon,
  },
  {
    name: 'Code',
    description: `Donut builds on proven libraries for single-page app development, taking care of the grunt work so you can do the work that matters.`,
    icon: ScaleIcon,
  },
  {
    name: 'Community',
    description: `Whether you want to create an app or hack on the framework, join a kind and enthusiastic community as we help each other build something cool!`,
    icon: BoltIcon,
  },
]

// bg-gradient-to-r from-fuchsia-600 to-pink-600
// pink neon bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
// blue coral bg-gradient-to-r from-blue-400 to-emerald-400
// darker-blue bg-gradient-to-r from-blue-600 to-sky-800

export function Features() {
  return (
    <div className="
      bg-gradient-to-r from-teal-100 to-sky-200

         py-12
">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
      <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              {/* <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"> */}
              {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
              {/* </div> */}
              <p className="text-xl font-bold leading-6 mb-0 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-900">{feature.description}</dd>
          </div>
        ))}
        </dl>
      </div>
    </div>
  )
}

function handleSubmit(e){
  e.preventDefault();
  const form=e.target;
  const data = new FormData(form);
  console.log(form, form.querySelector("input[type=email]"), form.querySelector("input[type=text]"), form.querySelector("button"));
  form.querySelector("input[type=email]").disabled=true;
  form.querySelector("input[type=text]").disabled=true;
  form.querySelector("button").disabled=true;
  form.querySelector("span.submitting").classList.remove("hidden");

  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  }).then(() => {
    form.reset();
    form.querySelector("input[type=email]").disabled=false;
    form.querySelector("input[type=text]").disabled=false;
    form.querySelector("button").disabled=false;
    form.querySelector("span.submitting").classList.add("hidden");
    form.querySelector("span.submitted").classList.remove("hidden");
    alert("Success! Thank you :)");
  })
}


export default function Home() {
  return (
      <div>
        <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-20 xl:pb-20">

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-pink-600 xl:inline">Sweet tools</span>{' '}
                  <span className="block xl:inline">to build your online business</span>
                </h1>

                <p className="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-8 md:text-xl lg:mx-0">

                  Donut is a framework for building, deploying, and growing your
                  software-as-a-service business. It's designed to let you focus
                  on your core product, not on endless unrelated chores. Coming soon!

                </p>

                <div className="text-gray-700">
                  Get notified when Donut is released:
                </div>

                <div className="mt-2 sm:mt-2 sm:flex sm:justify-center lg:justify-start">
                  <form method="POST"
                        action="https://script.google.com/macros/s/AKfycbyA2z74G7c3TxuRl5eoX0RbiJNP6_sGat-XHmQvzKApuMqnvpVtJ7fI-ggISwCfNaXg/exec"
                        onSubmit={handleSubmit}>
                    <div>
                      <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-48 mr-2
                             border sm:text-sm border-gray-300 rounded-md px-3 py-2"
                             name="Email"
                             type="email"
                             placeholder="Email"
                             required/>
                      <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-48
                             border sm:text-sm border-gray-300 rounded-md px-3 py-2"
                             name="Name"
                             type="text"
                             placeholder="Name"/>
                    </div>
                    <div className="mt-2">
                      <button className="p-2 bg-pink-600 border-0 text-white font-bold rounded-md"
                              type="submit">Join mailing list</button>
                      <span className="submitting ml-2 text-sm text-gray-700 italic hidden">submitting...</span>
                      <span className="submitted ml-2 text-sm text-gray-700 hidden">success! thank you!</span>
                    </div>
                  </form>
                </div>
              </div>

            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:flex hidden justify-center items-center sm:hidden md:flex">
                   <img
                     className="max-w-sm md:max-w-xs sm:max-w-xs lg:max-w-sm"
            src="/img/DonutLogoDonutColorRGB.png"
            alt=""
          />

        </div>
      </div>

     {/* break */}

      <div className="relative overflow-hidden
                      bg-gradient-to-r from-teal-100 to-sky-200 ">
        <div className="mx-auto max-w-5xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-20 xl:pb-20">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left space-y-10">
                <div>
                <h2 className="text-3xl">Start fast</h2>
                <p>
                  Donut's goal is to ridiculously reduce the amount of effort it takes to release
                  your product. Creating any SaaS product involves innumerable tasks that are incidental
                  to your product's core value proposition, and Donut is meant to handle those for you.
                </p>
                <p>
                  Such tasks include: figuring out how to handle forms and navigation, handling API requests
                  and responses, wiring up OAuth, and a lot more. The Donut design approach is to identify
                  these burdensome tasks and provide the underlying structure that lets us build an ecosystem
                  of solutions for these tasks - without compromising your code's maintainability and
                  extensibility. And it provides many of the solutions itself :)
                </p>
                </div>
                <div>
                <h2 className="text-3xl">Stay Fast</h2>
                <p>
                  Frameworks have a reputation for saving work in the short term but creating more work in the
                  long term by obscuring how your code works (magic!) and creating a walled garden.
                </p>
                <p>
                  Donut attempts to avoid these pitfalls by adding just a little structure on top of libraries
                  that are already widely-adopted in the Clojure community, like reitit and re-frame. If Donut
                  doesn't do what you need, you're not locked in: you can just use these well-supported tools.
                </p>
                </div>
                <div>
                <h2 className="text-3xl">Beyond the app: Build your business</h2>
                  <p>
                    Building your business is more than just creating core product. It's managing payments,
                    customers, monitoring, integrations, and on and on.
                  </p>
                  <p>
                    Donut's still in its infancy, but long-term it aims to take a wholistic approach to product
                    development to support you in building your business.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-yellow-100 ">
        <div className="mx-auto max-w-5xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-20 xl:pb-20">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left space-y-10">
                <div>
                <h2 className="text-3xl">Donut Vision</h2>
                <p>
                  My vision for Donut is to empower anybody to be productive with Clojure. By creating
                  a starting place that's as close as possible to the finish line, we make Clojure
                  more appealing and help newcomers stay motivated as they learn the language.
                </p>
                <p>
                  I specifically want to empower people in a way that can benefit them financially. It's tough
                  out there, and if we could give people great tools to improve their situations, that'd
                  be awesome!
                </p>
                <p>
                  Along the way, I'd like to build a supportive community. With Clojure and kindness, there's
                  no limit to what we can achieve! <a href="https://clojurians.slack.com/archives/C030C4Z2W0Y">Join us in the #donut channel in Clojurians slack</a>
                </p>
                </div>
             </div>
            </main>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-20 xl:pb-20">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left space-y-10">
              <div>
                <h2 className="text-3xl">Libraries</h2>
                <p>
                  Most of Donut's libraries are useful on their own:
                </p>
                <p>
                  <a href="https://github.com/donut-party/system" className="text-sky-600 font-bold">donut.system</a> is a dependency injection
                  library that introduces system and component abstractions to:

                  <ul>
                    <li>help you organize your application</li>
                    <li>manage your application's startup and shutdown behavior</li>
                    <li>provide a light virtual environment for your application, making it easier to mock services for testing</li>
                  </ul>

                </p>
                <p>
                  <a href="https://github.com/donut-party/datapotato" className="text-sky-600 font-bold">datapotato</a> lets
                  you manage test fixtures in a way that's clear, concise, and easy to maintain. It's great
                  for dramatically reducing test boilerplate.
                </p>
                <p>
                  <a href="https://github.com/donut-party/dbxray" className="text-sky-600 font-bold">dbxray</a> provides metadata about JDBC databases
                  and uses that data to generate specs/schemas that you can copy into your application.
                  It can save you some time if you're just getting started with spec, malli, or plumatic schema.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>




            { /* <Features/> */ }
    </div>
  )
}

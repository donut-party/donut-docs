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
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"> */}
                  {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                {/* </div> */}
                <p className="text-lg font-bold leading-6 text-gray-900">{feature.name}</p>
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
};


export default function Home() {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-pink-600 xl:inline">Sweet tools</span>{' '}
                  <span className="block xl:inline">to build your online business</span>
                </h1>

                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">

                  Donut is a framework for building, deploying, and growing your
                  software-as-a-service business. It's designed to let you focus
                  on your core product, not on endless unrelated chores.

                </p>

                <div className="text-gray-500">
                  Get notified when Donut is officially released:
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
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center">
          <img
            className="lg:h-96 md:h-64 sm:h-32 xs:h-32 h-32"
            src="/img/donut-pink-sprinkles.jpg"
            alt=""
          />
        </div>
      </div>
      <Features/>
    </Layout>
  )
}

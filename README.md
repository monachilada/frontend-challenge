# GovData Dashboard

[GovData.de](https://www.govdata.de/) is the data portal for Germany. The federal, state and local governments can share their data. Although the "Open Data Act" makes it obligatory to share data, only about 52,000 data sets are online so far.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Dependencies

Install dependencies with `npm install`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run tests

To run tests and view the results, run `npm run test` from the command line.

## Tech Stack

I chose to broadly interpret "non-proprietary tech stack" as being allowed to use any well vetted OSS software. As a result, I chose Next.js for it's fast set-up and for the features that it provides for "free", such as routing, API routes, and performance optimisations. That said, I can anticipate that within the context of projects that DigitalService Bund undertakes, such freedoms may be limited. The major libraries I've chosen are listed below with a short note describing why and potential alternate approaches.

### NextJS (Vercel)

Popular React meta-framework that offers a lot of functionality out of the box. Alternatives would include create-react-app or manually configuring webpack to get started, but these are time consuming and error prone while offering very little benefit over Next or similar meta-frameworks such as Remix.

### useSWR (Vercel)

SWR = Stale While Revalidate. An data fetching hook that intelligently refetches and revalidates data while enabling optimistic display of data to the user in cases of limited internet connectivity or refocussing a stale browser tab.

---

## Your Task

Create a small web application that provides a dashboard showing how many data sets each federal ministry has made available on GovData. The dashboard should provide the possibility to filter the currently shown result set. It should be easy to tell from the dashboard which ministries have provided the most data.

Data for the dashboard is going to be provided by a backend in the future, but such an API is not in place yet (imagine your colleagues are working on it). Provided already is an exemplary JSON file that resembles a response from the planned API.

Use a non-proprietary tech stack of your choice and explain in a readme how to run your solution. Please use version control (git is preferred).

## Submitting your solution

You have two options for submitting your solution:

1. Hosted repository (preferred)

Please email a link to a GitHub/Bitbucket/GitLab/etc. repo to [challenge@digitalservice.bund.de](mailto:challenge@digitalservice.bund.de). Make sure to make the repo private 3 days after the interview.

2. Email

Alternatively, you can email your solution as a zip file to [challenge@digitalservice.bund.de](mailto:challenge@digitalservice.bund.de). Make sure to include the commit history in your submission.

## Evaluation

We want to use this challenge to understand how you would approach such a problem in a work setting.

We are going to pay attention to:

- an accessible and usable solution
- how you structure your application and your source code,
- a robust understanding of HTML, CSS and JavaScript
- how you test your application and what kinds of tests you're writing,
- how you document your application, including instructions to run the project,
- what your commits look like,
- what tooling you use,
- overall consistency & attention to detail.

You should turn in a complete and runnable solution, but do not gold-plate it: we don't expect you to spend more than a few hours on this exercise.

In the technical interview that follows we would like to discuss your approach, and that includes talking about areas you would want to improve if given more time.

## Have fun! 🚀

We look forward to your submission! Please [let us know](mailto:challenge@digitalservice.bund.de) if you have any questions or concerns.

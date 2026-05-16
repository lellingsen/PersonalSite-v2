---
title: Agentic Coding and Bottlenecks
description: 'What are the knock-on effects of speeding up one area of the dev process?'
pubDate: 'Apr 17 2026'
tags:
  - ai
  - process
---

The software development industry is going through what might be its largest
change - potentially ever. Agentic AI tools like Claude Code, OpenAI Codex, and
Cursor have significantly impacted the day-to-day experience of developers
everywhere. No matter what anyone might say, no one is sure about what the
long-term effects of this revolution will be. Will engineers become a career of
the past, automated away by our own doing? Will pay actually continue to rise
with increased productivity? Is SaaS "dead", as [many people are
predicting](https://changelog.com/friends/126)? Despite the apparent certainty
of many commentators, the future is truly unknowable.

## Metrics

However, one thing I have been thinking about lately is the knock-on effect
that speeding up the coding process is having. One problem in our industry is
that we do not have great metrics on velocity and productivity. Comparing
tickets to each other is hard, story points are made up, the codebase and
environment you're working in has an effect on how quickly you can move, and
every piece of software is unique from the others - not to mention more
problems that make it hard to standardize measurements. We rely largely on
qualitative measurements for how "good" an individual engineer is. Even Abi
Noda from DX - a company built around qualitative and quantitative measurements
of engineering teams - seems to have a hard time measuring the boost from AI
tools, based on an [interview last year](https://changelog.com/friends/101).
This is not meant as an insult to Abi or DX - on the contrary, I love what they
are doing, but this is just _hard_. Here's an excerpt from that interview that
frames things well:

> Let’s assume that at most companies engineers spend 20%, 30% of their 40-hour
> workweek writing code. So then if you take that 30%, and then you start
> playing in these numbers… Like, okay, let’s say they’re twice as more
> effective; double the productivity. So then you take 30%, you double that…
> What’s that? So that means like 15% net – like I said, I’m going to get this
> wrong doing this live. So when you start backing into it that way – again,
> the 10% actually, you can see how you kind of get there… Even with a pretty
> high acceleration of the coding part of the job, you’re kind of limited by
> these other factors. And that’s not even factoring in all the other areas of
> friction, as we’ve talked about before on the podcast, that are holding
> developers back, and that are still currently constraints, even when the
> writing code part of their job is greatly accelerated.

For the sake of this post, I am going to assume that coding has been sped up by
more than other processes in the [SDLC
process](https://en.wikipedia.org/wiki/Systems_development_life_cycle) in most
teams. I don't have any data to back this up, but it is based on my own
experience, as well as what I'm seeing in posts, hearing from friends, and so
on. Just how much it is speeding up is something of great debate (or whether it
does at all), but as models and agents have improved I have certainly noticed
it being an overall positive for me - at least in terms of pure speed of
implementation.

## SDLC as Queues

These changes have been reminding me of a great [blog
post](https://www.lucasfcosta.com/blog/engineering-metrics) I read by Lucas
Costa. In it, he explains cumulative flow diagrams, and explains how he thinks
of software development stages as a series of queues, and how to analyze the
metrics around those different stages. Thinking in a similar manner, I have
been wondering what the effect will be of agentic coding in the next few years.
PR reviews are the obvious answer - as the coding part of the job moves faster,
more PRs get created, and there is more review work for everyone to be doing.
This can possibly be compensated by agentic reviews, although I imagine many
teams and companies will want to maintain a human-in-the-loop here to verify
outputs and assumptions, look for security or scale risks, and take
responsibility if something goes wrong.

But one other area that I see becoming a problem is on the requirements side -
in other words, Product and Design. If SWEs can build faster, that means that
requirements and product roadmaps will need to be developed at a faster pace,
at least _per developer_ (unless engineers work fewer hours, but we all know
that's not likely to happen). There are two obvious ways to approach this
problem that come to mind:

1. Speed up the decision-making process and/or use AI to enhance that process
2. Adjust how teams are structured to have more Product and Design per engineer

My guess is that companies will likely try to do both of these. I'm not sure
what the ultimate effect will be on engineers, but my hypothesis is that we
will be seeing more Product roles, especially - possibly with agentic design
tools that have rules coming from those with a stronger Design background.
Otherwise, most of this (supposed) productivity boost on the engineering side
will not be utilized. The "left" side of the process is going to become more
and more of the bottleneck... but maybe that means engineers will have more
time for things like cleaning up the code that their agents are writing?

## Disclaimer

Clearly I am using agentic coding in a specific way, and have a certain point
of view. Compared to what I'm seeing on places like LinkedIn, I am more
cautious than most, and analyze the code created by my agents pretty carefully,
a result both of my nature and the industry I work in. But, I suspect
there are more developers like me that simply aren't as represented, given the
hype cycle of AI that we're in right now.

That said, even with my own more restrained approach, I am still seeing an
increase in output - so I believe my prediction here will stand.

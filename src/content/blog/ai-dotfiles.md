---
title: One of My Favorite Use Cases for Coding Agents
description: 'Agents are pretty great at fixing local dev setup issues'
pubDate: 'Aug 29 2026'
tags:
  - ai
  - terminal
  - development
---

Like most other engineers in the software industry as of late, I have been
using coding agents to augment a lot of my work. This has been a huge shift in
the day-to-day work for developers, and there are conflicting feelings about it
all over the place, but this particular use case has sparked joy for me.

## How It Has Been

In the past, when I had an issue with my Neovim config acting up or a CLI tool
not working as expected, I typically had to figure it out myself with a
combination of troubleshooting, documentation, and Google searches. This often
led to me to just "dealing with" things that didn't work quite right - like if
a Neovim linter plugin wasn't picking up the correct configuration from my
project, perhaps because the config lived at the root of the repo and I was in
a sub-project, for example. Such things can be annoying to figure out, and
given that I could always just use such tools from the command line, and when I
was working on those I was not making progress on my _actual_ work, they would
often go unfixed.

This is one of the unfortunate things about working in a less mainstream setup
(Neovim, tmux, and so on) while working in a variety of languages and setups.
My teammates are all using VS Code or Jetbrains products, Google searches often
don't reveal much, and there are in general fewer people to look to for help.
It's an acceptable downside for the benefits - like being able to have much
more control and customization - but that customization obviously comes with a
cost, when you're not using a "cookie cutter" setup and different plugins and
tools can interact in strange ways.

## Enter Coding Agents

However, one thing I've been using coding agents for - in addition to normal
work - is to fix such problems. The agent can analyze some of my dotfiles that
I haven't looked at in a while, providing me a solution, or at least some
hypotheses on what the issue might be. Similarly, I can much more easily swap
to more recent versions or modern alternatives and get a quick understanding of
what features I might be losing or options I should get to keep things
relatively consistent. I recently did this to upgrade to
[Blink.cmp](https://github.com/Saghen/blink.cmp) for auto-complete within
Neovim, something I've been meaning to do for a while, and the process was
quite straightforward. In addition, I ran into a display issue with `gh stack`
not properly detecting whether I was on a light or dark theme, and the agent
was able to quickly find the environment variable used to override the defaults
and provide a patch alias for it:

```sh
gh() {
  if [[ $1 == "stack" ]]; then
    if [[ "$(defaults read -g AppleInterfaceStyle 2>/dev/null)" == "Dark" ]]; then
      GH_STACK_THEME=dark command gh "$@"
    else
      GH_STACK_THEME=light command gh "$@"
    fi
  else
    command gh "$@"
  fi
}
```

## Why this Works

I think there are a few reasons for why this has been working well:

- Context is pretty small. My dotfiles are not very large, many of the tools
  will be in the LLM's training set, and there is documentation available via
  `man` pages and/or the GitHub repo. This means the agent is more efficient,
  and faster.
- Many issues are diagnosable and testable by the agent itself. As I'm mostly
  using terminal-based tools, a coding agent can often test them out easily
  itself - similar to why [tmux works well with agents](../tmux-and-claude-code/)
  too.
- Prompting is cheap. These fixes often end up costing below $1 in tokens. It
  takes about as much effort on my part to prompt an agent to investigate the
  problem as it does for me to write it down so I don't forget later.
- I am the subject matter expert. I can easily verify that the fix is working
  as intended. Granted, some are a little trickier - like checking which config
  file an LSP tool is pulling from - but generally it is pretty fast.

This is a trend I really hope to continue for myself. I believe that we don't
have to _only_ use AI to code for us, but we can also use it to make "trad
coding" more efficient and enjoyable. In any case, I hope this was helpful, and
that it sparks you to similarly fix some of those nagging issues that you
haven't had time to get to!

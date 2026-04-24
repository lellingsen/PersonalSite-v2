---
title: tmux and Claude Code
description: "How an old technology is helping me navigate the AI Era"
pubDate: "Apr 24 2026"
tags:
  - ai
  - tmux
  - terminal
---

## What is tmux

If you're not familiar with tmux, it is short for "terminal multiplexer." I
have previously [written a post](../tmux) on it that you can refer to.

## Claude Code

Claude Code being a TUI (terminal user interface) was one of the things that
got me excited to use it. As someone who spends most of their time in the
terminal - at least when working on code - tools like Cursor were not as
appealing to me. The terminal actually seemed like a natural fit in my mind -
everything is text-based, which is _perfect_ for a language model. While some
of my colleagues were less comfortable and wanted a GUI application, I was very
happy to keep things as text.

## Setup

The main thing for me is that it is a natural fit in my pre-existing flow. I
typically have one Window per repo or project, with a pane on top for editing
(Neovim), and multiple other panes down below - usually one for running the app
(e.g. `npm run dev`), and one for dealing with Git (shoutout to
[lazygit](https://github.com/jesseduffield/lazygit)). This meant that I could
easily slot in Claude to one of those panes, or add another one.

## Result

This is a pretty simple setup, and what I imagine many others are doing too,
but what it means in practice is that it is trivial for me to have a Claude
Code session per repo - or even per Git
[worktree](https://git-scm.com/docs/git-worktree) if needed. Despite what I see
many people talk about online, I actually try to focus in on one session at a
time, so that I can keep my focus and understanding in one place; this is
likely because I am less trusting and still reviewing code myself, at least
before committing. _But_, even then I still see a benefit: I can have separate
contexts for each project as I have to jump around for various tasks throughout
the day, which means fewer compactions or context resets.

In any case - it is nice to see gains from using relatively old tools (tmux is
actually not _that_ old, coming out in 2007) that I'm already comfortable with,
even in the age of AI.

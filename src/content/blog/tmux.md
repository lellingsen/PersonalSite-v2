---
title: tmux - What is it, and why use it?
description: "Another excellent tool for the terminal"
pubDate: "Sep 9 2024"
tags:
  - tmux
  - vim
  - terminal
---

## Introduction

After [getting started in VIM](/blog/my-start-in-vim/), I knew that I wanted to
continue learning how to better leverage the terminal by spending time to learn
[tmux](https://github.com/tmux/tmux/wiki). "tmux" is short for "terminal
multiplexer," which means that you can host multiple terminal sessions inside of
a single one. If this is starting to sound like _Inception_, then you're on the
right track to understanding what's going on!

tmux has a few main concepts to be aware of: sessions, windows, and panes. A
session is a collection of windows, and windows are a collection of panes. Each
pane is an individual terminal session. These can be combined in any way you see
fit, and everyone has their own use cases and patterns. Sessions can be
disconnected from without terminating them

## Typical Use Cases

### Multiple Terminal Windows

Imagine you are working on a project that requires you to launch two backend
servers, a frontend server, and then Cypress to run end-to-end tests against the
whole system. If each one of those is running in its own terminal session so that
you can see the logs, you are now running four terminal windows, tabs, or some
sort of pane that needs to be tiled. Without tmux, this often looks like a lot of
clicking and dragging, and possibly dealing with individual windows being hidden
by something like a browser. However, in tmux, this is a common scenario and can
be accomplished in the same terminal window with a few keystrokes, making it much
more of a joy to work with and helping people embrace the command line.

### Multiple Projects

Another case I've heard of is those who work on many projects at once, whether
it is a multitude of personal projects or contractors working with many clients.
If your work is focused around the terminal - like using a terminal-based editor
such as VIM or Emacs - it becomes quite nice to have a Session or a Window for
each project or client, making it easy to jump back and forth between things
without the need for closing and opening folders, editors, and so on.

### SSH Sessions

Using tmux within an ssh connection can also be a great experience. It makes it
trivial to have multiple terminal windows for doing different things on a remote
machine. Even more useful is the fact that the session is stateful; if you get
disconnected from the ssh session, once you reconnect, you can simply re-attach
to the tmux session and your terminal windows will re-appear!

## How I use tmux

Every day at work, I use tmux for all of my coding and command-line related
work. My own personal preference, especially as I'm working out of a monorepo,
is to have a single tmux session, in which I have three primary windows:

1. Editor (Neovim) and terminal windows for our monorepo
2. "Utility" window for checking on Kubernetes resources, utilizing the AWS
   CLI, and so on
3. Editor and terminal window for our design system
4. (Optionally) Window for my dotfiles folder, if I'm actively tweaking configs

This allows me jump back and forth with only a few keystrokes - tmux leader +
`p` or `n` for jumping between windows, tmux leader + `hjkl` to jump between
panes, and so forth. I do not have to start new instances of VS Code, keep my
resource utilization low, and feel streamlined. This also encourages me to
focus on using CLI-based tools, such as using Git on the command line or with
[lazygit](https://github.com/jesseduffield/lazygit) and administering Kubernetes
with [k9s](https://k9scli.io/).

## How to Get Started

If all of this sounds interesting, you might be wondering how to get started.
If you're on MacOS, you can simply `brew install tmux`; otherwise, you should
refer to the [installation instructions](https://github.com/tmux/tmux/wiki/Installing).
I found a [helpful guide](https://hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)
to get me started as well, plus there are things like
[sensible defaults](https://github.com/tmux-plugins/tmux-sensible) for tmux
that you may find helpful. Ham Vocke also published a
[guide to customization](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
that I found even more helpful than tmux-sensible. As with most things it is
probably best to get hands on as quickly as possible and just start trying it!

## Next-level tmux

If you find yourself enjoying tmux and want to customize it more, there are
many options available. Similar to other popular tools, there are tmux plugins
that you can try out using something like
[tmux plugin manager](https://github.com/tmux-plugins/tpm). One that I
recently installed was
[tmux ressurect](https://github.com/tmux-plugins/tmux-resurrect), which
allows you to save your tmux environment so that you can restore it after
restarting your machine. As you might imagine with any tool people are
passionate about, there is a plethora of options available.

Plugins are created by scripting tmux, which is also available to you as a
normal user. I don't have much experience at all here, but the sky is basically
the limit for what you can do. There is
[documentation](https://github.com/tmux/tmux/wiki/Advanced-Use#scripting-tmux)
available that helps to describe the possibilities, although I'd recommend
starting with the basics first to feel things out.

I'm not (yet) a power user like some are - I've only been using tmux for a
couple years or so, and mostly just using the basics. But there are plenty of
videos and blog posts out there with others going beast mode if you are
interested!

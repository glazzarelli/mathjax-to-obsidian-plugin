# Replace MathJax Notation Plugin for Obsidian

## Overview

The Replace MathJax Notation plugin replaces MathJax notations with Obsidian friendly math environments making it easier to copy markdown from other sources (for example chatGPT) that do not use `$` by default for their math environments.

## What it does

The plugin replaces the following MathJax notations with equivalent obsidian math environments:
- `\\(` and `\\)` with `$` and `$`
- `\\[` and `\\]` with `$$` and `$$`

In doing so it also deletes all whitespaces between the opening and closing math environments that could prevent rendering issues, e.g., `$ eq$` would not render correctly in Obsidian.

## How to use

Open the command palette and search for "Replace MathJax Notation". Click on the command to run it. The plugin will replace all MathJax notations in the current note with LaTeX notations.
I suggest creating a hotkey for this command to make it easier to use.
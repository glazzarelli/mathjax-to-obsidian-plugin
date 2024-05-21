# Replace MathJax Notation Plugin for Obsidian

## Overview

The Replace MathJax Notation plugin replaces MathJax notations with Obsidian friendly math environments making it easier to copy markdown from other sources (for example chatGPT) that do not use `$` by default for their math environments.

## What it does

The plugin replaces the following MathJax notations with equivalent obsidian math environments:
- `\\(` and `\\)` with `$` and `$`
- `\\[` and `\\]` with `$$` and `$$`

In doing so it also deletes all whitespaces between the opening and closing math environments that could prevent rendering issues, e.g., `$ eq$` would not render correctly in Obsidian.

## Installation

### From within Obsidian

As of right now the plugin is not available in the Obsidian community plugins. You can still install it manually by following the instructions below.

### From GitHub

1. Download the source code from the latest release, unzip it and place the folder in your `.obsidian/plugins/` directory of the obsidian vault you want to use.
2. (Optional) Rename the folder to `replace-mathjax-notation`.
3. Reload Obsidian.
4. Enable the plugin in the settings.
5. Use the plugin as described below.

## How to use

Insided Obsidian:
- Open the note that has math environments that are not supported
- Open the command palette and search for "Replace MathJax Notation"
- Click on the command to run it, the plugin will replace all MathJax notations in the current note with LaTeX notations.

I suggest creating a hotkey for this command to make it easier to use.
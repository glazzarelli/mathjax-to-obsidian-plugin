import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class ReplaceMathJax extends Plugin {

	async onload() {
		// This adds an editor command to convert between equivalent math environments
		this.addCommand({
			id: 'replace-mathjax-notation',
			name: 'Replace MathJax Notation',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let text = editor.getValue();
				text = text.replace(/\\\(\s*(.*?)\s*\\\)/g, (match, p1) => `\$${p1.trim()}\$`);
				text = text.replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (match, p1) => `\$\$${p1.trim()}\$\$`);
				editor.setValue(text);
			}
		});
	}

	onunload() {

	}
}

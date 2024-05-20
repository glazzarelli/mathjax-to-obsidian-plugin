import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class ReplaceMathJax extends Plugin {

	async onload() {
		// This adds an editor command to convert between equivalent math environments
		this.addCommand({
			id: 'replace-mathjax-notation',
			name: 'Replace MathJax Notation',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let text = editor.getValue();
				text = text.replace(/\\\((.*?)\\\)/g, '$$$1$');
				text = text.replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$');
				editor.setValue(text);
			}
		});
	}

	onunload() {

	}
}

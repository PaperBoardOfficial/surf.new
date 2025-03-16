"use client";

import React, { useState } from 'react';
import { MarkdownText } from '../../components/markdown';

const examples = {
  simple: "This is a simple paragraph with **bold** and _italic_ text.",
  link: "Here is a [link to Google](https://www.google.com).",
  codeBlock: "```javascript\nconst hello = () => {\n  console.log('Hello, world!');\n};\n\nhello();\n```",
  codeBlockNoLanguage: "```\nThis is a code block without a language specified.\n```",
  heading: "# Heading 1\n## Heading 2\n### Heading 3",
  list: "- Item 1\n- Item 2\n  - Nested item\n- Item 3",
  orderedList: "1. First item\n2. Second item\n3. Third item",
  blockquote: "> This is a blockquote\n> It can span multiple lines",
  table: "| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |",
  memory: "*Memory*: This is a memory block with **formatted** text and `code`.",
  goal: "*Next Goal*: This is a goal block with a [link](https://example.com).",
  mixed: "# Mixed Example\n\nHere's some text with **bold** and _italic_ formatting.\n\n```python\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"World\"))\n```\n\n- List item 1\n- List item 2\n\n> A blockquote with some text\n\n*Memory*: Remember this important information.",
  nestedFormatting: "**This is bold text with _italic text_ inside it**\n\n**_This entire text is both bold and italic_**",
  nestedCodeInBlockquote: "> This is a blockquote containing a code block:\n> \n> ```javascript\n> function example() {\n>   return 'Code inside blockquote';\n> }\n> ```\n> \n> And here's more text after the code block.",
  complexNesting: "# Complex Nesting Example\n\n> **Blockquote with _italic_ and `inline code`**\n> \n> ```python\n> # Code block inside blockquote\n> def nested_function():\n>     print('This is nested inside a blockquote')\n> ```\n> \n> - List item inside blockquote\n> - Another item with **bold _and italic_**\n\n**Bold paragraph with a [link](https://example.com) and _italic text_ and `code` inside**",
  tableWithLinks: "# Table with Links\n\n| Name | Website | Description |\n| ---- | ------- | ----------- |\n| Google | [Google](https://www.google.com) | Search engine |\n| GitHub | [GitHub](https://github.com) | Code hosting platform |\n| **Bold Company** | [_Italic Link_](https://example.com) | Company with **formatted** _text_ |\n| Code Example | [`Code Link`](https://example.com/code) | Link with `inline code` formatting |",
  listWithTable: "# List with Table\n\n## Unordered List\n- First item\n- Second item with a table:\n  | Column 1 | Column 2 |\n  | -------- | -------- |\n  | Data 1   | Data 2   |\n  | [Link](https://example.com) | **Bold** |\n- Third item\n\n## Ordered List\n1. First ordered item\n2. Second ordered item with a table:\n   | Header A | Header B |\n   | -------- | -------- |\n   | _Italic_ | `Code`   |\n   | [Link in table](https://example.org) | Normal text |\n3. Third ordered item",
  listInTable: "# Lists Inside Table Cells\n\n| Category | Items | Description |\n| -------- | ----- | ----------- |\n| Fruits | <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul> | Common fruits |\n| Vegetables | <ul><li>Carrot</li><li>Broccoli</li><li>Spinach</li></ul> | Healthy veggies |\n| Programming | <ol><li>HTML</li><li>CSS</li><li>JavaScript</li></ol> | Web technologies |\n| Mixed | <ul><li><strong>Bold item</strong></li><li><em>Italic item</em></li><li><code>Code item</code></li><li><a href=\"https://example.com\">Link item</a></li></ul> | Formatted list items |",
  tableInCodeBlock: "# Table Inside Code Block\n\n```\n| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |\n```\n\nThe table above should be displayed as plain text in a code block, not rendered as a table.",
};

export default function MarkdownTestPage() {
  const [selectedExample, setSelectedExample] = useState('mixed');
  const [customMarkdown, setCustomMarkdown] = useState(examples.mixed);
  const [showCustom, setShowCustom] = useState(false);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Markdown Component Test</h1>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-semibold mr-4">Select Example:</h2>
          <select 
            value={selectedExample}
            onChange={(e) => {
              setSelectedExample(e.target.value);
              setCustomMarkdown(examples[e.target.value as keyof typeof examples]);
            }}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {Object.keys(examples).map(key => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
          
          <div className="ml-4">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={showCustom}
                onChange={() => setShowCustom(!showCustom)}
                className="mr-2"
              />
              Edit Custom Markdown
            </label>
          </div>
        </div>
        
        {showCustom && (
          <div className="mb-4">
            <textarea
              value={customMarkdown}
              onChange={(e) => setCustomMarkdown(e.target.value)}
              className="w-full h-64 p-3 border border-gray-300 rounded font-mono"
            />
          </div>
        )}
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-4">Rendered Output:</h2>
        <div className="p-4 border border-gray-100 rounded bg-gray-50">
          <MarkdownText content={customMarkdown} />
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Raw Markdown:</h2>
        <pre className="p-4 bg-gray-100 rounded overflow-x-auto">
          {customMarkdown}
        </pre>
      </div>
    </div>
  );
} 
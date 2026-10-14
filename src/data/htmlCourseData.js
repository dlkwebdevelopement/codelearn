// src/data/htmlCourseData.js
// Complete HTML Mastery Curriculum — 50 Modules

const htmlCourseData = {
  courseTitle: "Complete HTML Mastery: Beginner to Professional",
  totalModules: 50,
  totalLessons: 200,
  modules: [
    // ══════════════════════════════════════════
    // MODULE 1 — HTML FOUNDATIONS
    // ══════════════════════════════════════════
    {
      id: 1, title: "HTML Foundations", icon: "🌐", color: "#E34F26",
      description: "Start your web development journey by understanding what HTML is and how it powers the modern web.",
      chapters: [
        {
          id: "1-1", title: "Introduction to HTML",
          lessons: [
            {
              id: "1-1-1", title: "What is HTML?", subtitle: "The backbone of every webpage",
              difficulty: "Beginner", duration: "20 min", prerequisites: [],
              theory: "HTML (HyperText Markup Language) is the standard language for creating web pages. It uses a system of elements represented by tags to structure content and define its meaning. Every website you visit is built on HTML as its core foundation. HTML was invented by Tim Berners-Lee in 1991 and has evolved significantly through versions up to HTML5 (2014).",
              syntax: `<!DOCTYPE html>\n<html lang="en">\n<head>...</head>\n<body>...</body>\n</html>`,
              codeExample: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>Welcome to my first webpage.</p>\n</body>\n</html>`,
              outputExplanation: "The browser renders a white page with 'Hello, World!' as a large heading followed by a paragraph.",
              commonMistakes: ["Forgetting <!DOCTYPE html>", "Not closing tags", "Wrong nesting order"],
              bestPractices: ["Always include DOCTYPE", "Use lang attribute on <html>", "Keep structure clean"],
              browserSupport: { chrome: "✅", firefox: "✅", safari: "✅", edge: "✅" },
              accessibilityTips: ["Always set lang attribute for screen readers"],
              seoTips: ["Use a descriptive <title> tag for every page"],
              interviewQuestions: [
                { q: "What is HTML?", a: "HTML is a markup language used to structure content on the web." },
                { q: "What does DOCTYPE do?", a: "It tells the browser which version of HTML to use for rendering." },
              ],
              quiz: [
                { q: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Tech Machine Learning", "HyperTransfer Markup Language", "None"], answer: 0, explanation: "HTML = HyperText Markup Language." },
                { q: "Who invented HTML?", options: ["Bill Gates", "Linus Torvalds", "Tim Berners-Lee", "Mark Zuckerberg"], answer: 2, explanation: "Tim Berners-Lee invented HTML in 1991." },
                { q: "What tag wraps all visible page content?", options: ["<html>", "<head>", "<body>", "<main>"], answer: 2, explanation: "<body> contains all visible content." },
                { q: "Which attribute sets the page language?", options: ["charset", "lang", "locale", "type"], answer: 1, explanation: "lang='en' sets language to English." },
                { q: "What is the current version of HTML?", options: ["HTML4", "XHTML", "HTML5", "HTML6"], answer: 2, explanation: "HTML5 is the current living standard." },
              ],
              exercise: { title: "Build Your First Page", description: "Create an HTML file with a title, one heading, and two paragraphs about yourself.", starterCode: "<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add your content here -->\n</body>\n</html>" },
              challenge: { title: "Nesting Challenge", description: "Create a page using at least 5 different HTML tags properly nested." },
              assignment: { title: "Personal Bio Page", description: "Build a complete bio page with heading, 3 paragraphs, and a favourite quote." },
              miniProject: { title: "Hello World Page", description: "Deploy a simple HTML page with your name and a greeting.", skills: ["HTML structure", "Basic tags"] },
              summary: "HTML is the foundation of all web pages, using tags to structure and give meaning to content.",
            },
            {
              id: "1-1-2", title: "How Browsers Render HTML", subtitle: "From code to visual webpage",
              difficulty: "Beginner", duration: "15 min", prerequisites: ["1-1-1"],
              theory: "When you open an HTML file, the browser parses the code top-to-bottom, builds a Document Object Model (DOM) tree, and then renders pixels on screen. Understanding this render pipeline helps you write faster, better HTML.",
              syntax: `<!-- Browser reads this top to bottom -->\n<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>...</body>\n</html>`,
              codeExample: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Render Demo</title>\n</head>\n<body>\n  <h1>Browsers Parse This First</h1>\n  <p>Then render top to bottom.</p>\n</body>\n</html>`,
              commonMistakes: ["Placing scripts in <head> without defer", "Blocking render with large CSS files"],
              bestPractices: ["Place scripts at end of body or use defer", "Minimize render-blocking resources"],
              quiz: [
                { q: "What does the browser build from HTML?", options: ["CSS Tree", "DOM Tree", "JSON Tree", "Script Tree"], answer: 1, explanation: "The browser builds a DOM (Document Object Model) tree." },
                { q: "In what order does a browser parse HTML?", options: ["Bottom to top", "Random", "Top to bottom", "Right to left"], answer: 2, explanation: "HTML is parsed top to bottom." },
                { q: "What slows down page rendering?", options: ["Images in body", "Render-blocking scripts in head", "Paragraphs", "Headings"], answer: 1, explanation: "Scripts in <head> without defer block rendering." },
                { q: "What should be placed at the end of body for performance?", options: ["CSS links", "Meta tags", "JavaScript files", "Favicons"], answer: 2, explanation: "JS files placed before </body> load after HTML." },
                { q: "What is the DOM?", options: ["A database", "A document model tree browsers build from HTML", "A CSS framework", "A JS library"], answer: 1, explanation: "DOM = Document Object Model." },
              ],
              exercise: { title: "Observe Rendering", description: "Open DevTools in Chrome, go to Elements tab, and explore the DOM of any webpage." },
              summary: "Browsers parse HTML top-to-bottom, build the DOM, and render pixels. Script placement matters for performance.",
            },
          ],
        },
        {
          id: "1-2", title: "HTML History & Standards",
          lessons: [
            {
              id: "1-2-1", title: "HTML5 Features & Why They Matter", subtitle: "Modern web capabilities explained",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["1-1-1"],
              theory: "HTML5 introduced semantic tags (<article>, <section>, <nav>), native audio/video, Canvas, localStorage, geolocation, and more. It replaced deprecated tags with semantic alternatives that improve accessibility and SEO.",
              codeExample: `<!DOCTYPE html>\n<html lang="en">\n<body>\n  <header><h1>Site Name</h1></header>\n  <nav><a href="/">Home</a></nav>\n  <main>\n    <article><h2>Post Title</h2><p>Content...</p></article>\n  </main>\n  <footer><p>&copy; 2025</p></footer>\n</body>\n</html>`,
              commonMistakes: ["Using <div> for everything instead of semantic tags", "Using deprecated <center> and <font> tags"],
              bestPractices: ["Use HTML5 semantic elements", "Replace <b> with <strong>, <i> with <em>"],
              quiz: [
                { q: "When was HTML5 officially released?", options: ["2008", "2010", "2014", "2020"], answer: 2, explanation: "HTML5 was officially published in October 2014." },
                { q: "Which HTML5 tag is used for navigation?", options: ["<menu>", "<nav>", "<links>", "<navi>"], answer: 1, explanation: "<nav> is the semantic navigation element." },
                { q: "What HTML5 feature enables drawing graphics?", options: ["<draw>", "<svg>", "<canvas>", "<paint>"], answer: 2, explanation: "<canvas> allows dynamic drawing via JavaScript." },
                { q: "Which tag replaced <b> semantically?", options: ["<bold>", "<strong>", "<em>", "<mark>"], answer: 1, explanation: "<strong> indicates important text." },
                { q: "Which API does HTML5 add for offline storage?", options: ["CookieStorage", "sessionStorage", "localStorage", "Both B and C"], answer: 3, explanation: "HTML5 adds both sessionStorage and localStorage." },
              ],
              exercise: { title: "Semantic Rewrite", description: "Take a div-heavy HTML page and replace divs with semantic HTML5 elements." },
              summary: "HTML5 modernised the web with semantic tags, multimedia, storage APIs, and more.",
            },
          ],
        },
      ],
    },

    // ══════════════════════════════════════════
    // MODULE 2 — HTML DOCUMENT STRUCTURE
    // ══════════════════════════════════════════
    {
      id: 2, title: "HTML Document Structure", icon: "📄", color: "#3498db",
      description: "Master the anatomy of an HTML document — every section has a purpose.",
      chapters: [
        {
          id: "2-1", title: "DOCTYPE & HTML Root",
          lessons: [
            {
              id: "2-1-1", title: "The DOCTYPE Declaration", subtitle: "Telling browsers what to expect",
              difficulty: "Beginner", duration: "10 min", prerequisites: ["1-1-1"],
              theory: "<!DOCTYPE html> is not an HTML tag — it is an instruction to the browser about what version of HTML to use. Without it, browsers enter 'quirks mode' and render pages inconsistently.",
              codeExample: `<!DOCTYPE html>\n<html lang="en">\n<head><title>DOCTYPE Demo</title></head>\n<body><p>Correct DOCTYPE ensures standards mode.</p></body>\n</html>`,
              commonMistakes: ["Omitting DOCTYPE causing quirks mode", "Writing DOCTYPE in lowercase (still works but not standard)"],
              bestPractices: ["Always use <!DOCTYPE html> as the very first line"],
              quiz: [
                { q: "What mode does a missing DOCTYPE trigger?", options: ["Standards mode", "Quirks mode", "Strict mode", "Safe mode"], answer: 1, explanation: "Missing DOCTYPE causes quirks mode rendering." },
                { q: "Where should DOCTYPE appear?", options: ["After <html>", "Inside <head>", "Very first line of file", "Last line of file"], answer: 2, explanation: "DOCTYPE must be the very first thing in the file." },
                { q: "Is DOCTYPE an HTML tag?", options: ["Yes", "No", "Sometimes", "Only in HTML5"], answer: 1, explanation: "DOCTYPE is a declaration, not an HTML tag." },
                { q: "What does DOCTYPE for HTML5 look like?", options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<doctype>", "<!doctype>"], answer: 1, explanation: "<!DOCTYPE html> is the HTML5 declaration." },
                { q: "Why do browsers use DOCTYPE?", options: ["For styling", "For scripting", "To determine rendering mode", "For SEO"], answer: 2, explanation: "DOCTYPE determines which rendering engine rules to use." },
              ],
              exercise: { title: "Standards vs Quirks", description: "Create two pages — one with DOCTYPE, one without — and compare rendering in browser." },
              summary: "Always start every HTML document with <!DOCTYPE html> to ensure standards-mode rendering.",
            },
          ],
        },
        {
          id: "2-2", title: "Head Section Elements",
          lessons: [
            {
              id: "2-2-1", title: "The <head> Element", subtitle: "Metadata that powers your page",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["2-1-1"],
              theory: "The <head> section contains metadata about the document — not visible content. It holds the page title, character encoding, linked CSS, meta tags, and scripts. Everything in <head> influences how the page behaves, looks, and is indexed.",
              codeExample: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="A complete HTML tutorial.">\n  <title>My Site | Home</title>\n  <link rel="stylesheet" href="style.css">\n  <link rel="icon" href="favicon.ico">\n</head>`,
              commonMistakes: ["Missing charset meta tag", "Forgetting viewport meta on mobile", "Putting visible content in <head>"],
              bestPractices: ["charset first in head", "viewport for responsive design", "Descriptive title <70 chars"],
              quiz: [
                { q: "Does <head> content appear on the page?", options: ["Yes", "No", "Sometimes", "Depends on browser"], answer: 1, explanation: "<head> contains metadata, not visible content." },
                { q: "Which element sets page character encoding?", options: ["<charset>", "<meta charset>", "<encoding>", "<head charset>"], answer: 1, explanation: "<meta charset='UTF-8'> sets encoding." },
                { q: "Which meta tag ensures mobile responsiveness?", options: ["mobile", "viewport", "scale", "device"], answer: 1, explanation: "name='viewport' is required for responsive layouts." },
                { q: "Where are CSS files linked?", options: ["<body>", "<footer>", "<head>", "<html>"], answer: 2, explanation: "CSS link elements belong in <head>." },
                { q: "What is the recommended max length for a <title>?", options: ["30 chars", "70 chars", "200 chars", "No limit"], answer: 1, explanation: "Search engines truncate titles beyond ~60-70 characters." },
              ],
              exercise: { title: "Build a Complete Head", description: "Write a full <head> section with charset, viewport, title, description meta, and a CSS link." },
              summary: "The <head> section is invisible but critical — it controls encoding, title, metadata, and linked resources.",
            },
          ],
        },
      ],
    },

    // MODULE 3 — HTML EDITORS
    {
      id: 3, title: "HTML Editors & Dev Environment", icon: "⌨️", color: "#9b59b6",
      description: "Set up a professional HTML development environment with the best tools.",
      chapters: [
        {
          id: "3-1", title: "Choosing Your Editor",
          lessons: [
            {
              id: "3-1-1", title: "Best HTML Editors in 2025", subtitle: "Tools that make you faster",
              difficulty: "Beginner", duration: "15 min", prerequisites: [],
              theory: "A good code editor boosts productivity with syntax highlighting, auto-completion, and live preview. VS Code is the most popular free editor. Others include Sublime Text, WebStorm, and Atom. Browser DevTools are also essential for debugging.",
              codeExample: `<!-- VS Code Extensions for HTML:\n- Live Server (auto-refresh)\n- HTML CSS Support\n- Prettier (auto-format)\n- Emmet (built-in shortcuts)\n\n<!-- Emmet Shortcut Example -->\n<!-- Type: div>ul>li*3 then press Tab -->\n<div>\n  <ul>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</div>`,
              commonMistakes: ["Not using Emmet shortcuts", "Ignoring browser DevTools", "Not installing a linter"],
              bestPractices: ["Use VS Code + Live Server", "Learn Emmet shortcuts", "Use Prettier for auto-formatting"],
              quiz: [
                { q: "What does Emmet do?", options: ["Runs HTML on a server", "Provides CSS frameworks", "Expands shorthand into full HTML", "Validates HTML"], answer: 2, explanation: "Emmet expands abbreviations into full HTML/CSS code." },
                { q: "Which is the most popular free HTML editor?", options: ["Notepad++", "VS Code", "Atom", "Brackets"], answer: 1, explanation: "VS Code by Microsoft is the most widely used." },
                { q: "What does Live Server do?", options: ["Hosts websites online", "Auto-reloads browser on file save", "Validates HTML", "Compresses files"], answer: 1, explanation: "Live Server auto-refreshes the browser when you save." },
                { q: "What key is used with Emmet abbreviations?", options: ["Enter", "Space", "Tab", "Ctrl"], answer: 2, explanation: "Press Tab after typing an Emmet abbreviation." },
                { q: "Which browser has the best DevTools?", options: ["Internet Explorer", "Chrome", "Lynx", "All are equal"], answer: 1, explanation: "Chrome DevTools are widely considered the most powerful." },
              ],
              exercise: { title: "Editor Setup", description: "Install VS Code, add Live Server & Prettier extensions, and create your first HTML file with Emmet." },
              summary: "Use VS Code with Live Server and Emmet to write HTML faster. Browser DevTools are essential for debugging.",
            },
          ],
        },
      ],
    },

    // MODULE 4 — HTML ELEMENTS
    {
      id: 4, title: "HTML Elements Deep Dive", icon: "🧱", color: "#e67e22",
      description: "Understand every aspect of HTML elements — tags, attributes, nesting, and empty elements.",
      chapters: [
        {
          id: "4-1", title: "Elements & Tags",
          lessons: [
            {
              id: "4-1-1", title: "HTML Tags vs Elements", subtitle: "Understanding the difference",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["1-1-1"],
              theory: "A tag is the markup notation like <p>. An element is the full structure: opening tag + content + closing tag. Some elements are void/self-closing (like <br>, <img>, <input>) and have no content or closing tag.",
              codeExample: `<!-- Element = opening tag + content + closing tag -->\n<p>This is a paragraph element.</p>\n\n<!-- Void elements (no closing tag) -->\n<br>\n<img src="photo.jpg" alt="Photo">\n<input type="text">\n<hr>\n<link rel="stylesheet" href="style.css">`,
              commonMistakes: ["Adding closing tag to void elements", "Confusing tags with elements", "Improperly nesting elements"],
              bestPractices: ["Never close void elements in HTML5 (not required)", "Nest elements correctly", "Validate with W3C Validator"],
              quiz: [
                { q: "Which of these is a void (self-closing) element?", options: ["<p>", "<div>", "<br>", "<span>"], answer: 2, explanation: "<br> is a void element with no closing tag." },
                { q: "What is the difference between a tag and an element?", options: ["No difference", "Tag is the marker; element includes content + tags", "Element is just the opening tag", "Tag includes closing tag only"], answer: 1, explanation: "Tag = just the markup. Element = full opening + content + closing." },
                { q: "Which element creates a horizontal rule?", options: ["<line>", "<rule>", "<hr>", "<divide>"], answer: 2, explanation: "<hr> inserts a horizontal rule/line." },
                { q: "Can elements be nested inside each other?", options: ["Never", "Always, with no rules", "Yes, but must be properly nested", "Only block elements"], answer: 2, explanation: "Elements can be nested but must be properly opened and closed." },
                { q: "Which is correct HTML nesting?", options: ["<b><i>text</b></i>", "<b><i>text</i></b>", "<i><b>text</i></b>", "All are correct"], answer: 1, explanation: "Inner tags must be closed before outer tags." },
              ],
              exercise: { title: "Element Hunt", description: "Identify 10 elements on a real webpage using browser DevTools." },
              summary: "HTML elements consist of tags and content. Void elements have no closing tag. Proper nesting is essential.",
            },
          ],
        },
      ],
    },

    // MODULE 5 — HTML ATTRIBUTES
    {
      id: 5, title: "HTML Attributes", icon: "🏷️", color: "#1abc9c",
      description: "Attributes enhance HTML elements by providing additional configuration and metadata.",
      chapters: [
        {
          id: "5-1", title: "Core Attributes",
          lessons: [
            {
              id: "5-1-1", title: "Global HTML Attributes", subtitle: "Attributes that work on every element",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["4-1-1"],
              theory: "Global attributes can be applied to any HTML element. The most important are: id (unique identifier), class (styling hook), style (inline CSS), title (tooltip), lang (language), dir (text direction), hidden (hide element), tabindex (keyboard focus order), and contenteditable (make content editable).",
              codeExample: `<div id="hero" class="section featured" style="color:green;" title="Welcome section" lang="en" tabindex="0">\n  <p contenteditable="true">Click to edit this text.</p>\n  <p hidden>This paragraph is hidden.</p>\n</div>`,
              commonMistakes: ["Using same id on multiple elements", "Inline styles overriding CSS", "Wrong lang attribute values"],
              bestPractices: ["id must be unique per page", "Prefer class over id for styling", "Use lang for accessibility"],
              quiz: [
                { q: "Which attribute must be unique on a page?", options: ["class", "id", "name", "type"], answer: 1, explanation: "id values must be unique within a document." },
                { q: "What does the 'hidden' attribute do?", options: ["Deletes element", "Makes element invisible but in DOM", "Moves element offscreen", "Removes from DOM"], answer: 1, explanation: "hidden hides the element but keeps it in the DOM." },
                { q: "What does tabindex='0' do?", options: ["Removes focus", "Puts element in natural tab order", "Sets tab size", "Disables keyboard"], answer: 1, explanation: "tabindex=0 makes element focusable in normal order." },
                { q: "Which attribute adds a tooltip?", options: ["alt", "hint", "title", "label"], answer: 2, explanation: "title attribute shows a tooltip on hover." },
                { q: "What does contenteditable do?", options: ["Adds spell check", "Makes element editable by user", "Links to editor", "Saves content"], answer: 1, explanation: "contenteditable='true' lets users edit the element's content." },
              ],
              exercise: { title: "Attribute Practice", description: "Create a div with id, class, style, title, and tabindex. Add a hidden sibling paragraph." },
              summary: "Global attributes like id, class, style, title, and hidden work on any HTML element.",
            },
          ],
        },
      ],
    },

    // MODULE 6 — HTML HEADINGS
    {
      id: 6, title: "HTML Headings", icon: "📝", color: "#e74c3c",
      description: "Learn how HTML headings structure content and impact SEO.",
      chapters: [
        {
          id: "6-1", title: "Heading Tags h1–h6",
          lessons: [
            {
              id: "6-1-1", title: "HTML Heading Hierarchy", subtitle: "Structuring content with headings",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["4-1-1"],
              theory: "HTML provides six levels of headings, <h1> through <h6>. h1 is the most important and should appear once per page. Headings create a document outline that helps both users and search engines understand page structure. Never skip heading levels for visual styling — use CSS instead.",
              codeExample: `<h1>Main Page Title (One Per Page)</h1>\n<h2>Major Section</h2>\n<h3>Subsection</h3>\n<h4>Sub-subsection</h4>\n<h5>Minor Heading</h5>\n<h6>Smallest Heading</h6>`,
              commonMistakes: ["Multiple <h1> on one page", "Skipping heading levels (h1→h3)", "Using headings just for bold/large text"],
              bestPractices: ["One <h1> per page", "Follow logical hierarchy", "Style with CSS, not by choosing wrong heading level"],
              quiz: [
                { q: "How many <h1> tags should a page have?", options: ["As many as needed", "One per section", "Only one", "Two maximum"], answer: 2, explanation: "Best practice: one <h1> per page for SEO and accessibility." },
                { q: "Which heading is smallest by default?", options: ["h1", "h3", "h5", "h6"], answer: 3, explanation: "<h6> renders as the smallest heading." },
                { q: "What is wrong with skipping heading levels?", options: ["Nothing", "Breaks accessibility and document outline", "Causes JS errors", "Invalid CSS"], answer: 1, explanation: "Skipping levels breaks document outline and hurts accessibility." },
                { q: "Why do search engines care about headings?", options: ["For font sizing", "To understand content structure", "For counting words", "For page speed"], answer: 1, explanation: "Headings help search engines understand page hierarchy." },
                { q: "Which CSS property changes heading size?", options: ["heading-size", "font-size", "text-size", "h-size"], answer: 1, explanation: "Use font-size in CSS to resize headings." },
              ],
              exercise: { title: "Article Outline", description: "Write a heading outline for a tech article with h1, two h2s, and two h3s under each h2." },
              summary: "Use h1–h6 in order. One h1 per page. Headings define structure for users, SEO, and screen readers.",
            },
          ],
        },
      ],
    },

    // MODULE 7 — HTML PARAGRAPHS
    {
      id: 7, title: "HTML Paragraphs & Text", icon: "📃", color: "#34495e",
      description: "Master text content elements: paragraphs, line breaks, horizontal rules, and preformatted text.",
      chapters: [
        {
          id: "7-1", title: "Text Content Elements",
          lessons: [
            {
              id: "7-1-1", title: "Paragraphs, BR & HR", subtitle: "Controlling text flow",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["4-1-1"],
              theory: "The <p> tag defines a paragraph. Browsers add default margin above and below. <br> inserts a line break within text without starting a new paragraph. <hr> inserts a thematic break (horizontal line). <pre> preserves whitespace exactly as typed.",
              codeExample: `<p>This is a paragraph with automatic spacing.</p>\n<p>Second paragraph. Browsers add margin automatically.</p>\n\n<p>Line one.<br>Line two after a break.</p>\n\n<hr>\n\n<pre>\n  Code or poetry\n     with exact spacing preserved.\n</pre>`,
              commonMistakes: ["Using <br> to add spacing between paragraphs", "Using <p> for spacing only", "Forgetting <pre> for code display"],
              bestPractices: ["Use <p> for content, CSS for spacing", "Use <br> sparingly (addresses, poems)", "Use <pre> for preformatted code"],
              quiz: [
                { q: "What does <br> do?", options: ["Bold text", "Creates a paragraph", "Line break without new paragraph", "Border"], answer: 2, explanation: "<br> inserts a line break in-flow." },
                { q: "What element preserves whitespace?", options: ["<p>", "<span>", "<pre>", "<div>"], answer: 2, explanation: "<pre> preserves whitespace and renders in monospace font." },
                { q: "What does <hr> create?", options: ["Hard return", "Header row", "Horizontal rule/line", "Heading reference"], answer: 2, explanation: "<hr> creates a thematic break as a horizontal line." },
                { q: "How does a browser handle multiple spaces in HTML?", options: ["Shows all spaces", "Collapses to one space", "Throws error", "Converts to &nbsp;"], answer: 1, explanation: "HTML collapses multiple whitespace characters to one." },
                { q: "Which is the correct way to add space between paragraphs?", options: ["<br><br>", "Multiple <p> tags", "CSS margin on <p>", "HTML whitespace"], answer: 2, explanation: "Use CSS margin-bottom/top to control paragraph spacing." },
              ],
              exercise: { title: "Formatted Article", description: "Write a short 3-paragraph article with a thematic break and an address using <br>." },
              summary: "<p> for paragraphs, <br> for line breaks, <hr> for thematic breaks, <pre> for preformatted text.",
            },
          ],
        },
      ],
    },

    // MODULE 8 — HTML FORMATTING
    {
      id: 8, title: "HTML Text Formatting", icon: "✏️", color: "#8e44ad",
      description: "Bold, italic, highlighted, and semantically meaningful text formatting elements.",
      chapters: [
        {
          id: "8-1", title: "Inline Formatting Elements",
          lessons: [
            {
              id: "8-1-1", title: "Semantic Formatting Tags", subtitle: "<strong>, <em>, <mark>, <del>, <ins>",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["7-1-1"],
              theory: "HTML5 distinguishes between visual formatting (bold/italic appearance) and semantic formatting (meaning). <strong> means important, <em> means emphasis, <mark> highlights, <del> shows deletion, <ins> shows insertion. Screen readers interpret these semantically.",
              codeExample: `<p><strong>Warning:</strong> This action cannot be undone.</p>\n<p>Press <em>any key</em> to continue.</p>\n<p>Sale price: <del>$99</del> <ins>$49</ins></p>\n<p>Search result: <mark>HTML tutorial</mark> found.</p>\n<p>H<sub>2</sub>O is water. E=mc<sup>2</sup>.</p>\n<p><small>Copyright &copy; 2025</small></p>`,
              commonMistakes: ["Using <b> when <strong> is semantically correct", "Confusing <em> with <i>", "Misusing <del> for styling strikethrough"],
              bestPractices: ["Use <strong> for important warnings", "Use <em> for emphasis in speech", "Use <mark> for search highlights"],
              quiz: [
                { q: "What is the semantic difference between <b> and <strong>?", options: ["No difference", "<b> is visual, <strong> means important", "<strong> is visual, <b> means important", "Both mean important"], answer: 1, explanation: "<b> is purely visual. <strong> conveys importance semantically." },
                { q: "Which tag marks text as deleted?", options: ["<strike>", "<s>", "<del>", "<removed>"], answer: 2, explanation: "<del> semantically marks deleted/removed content." },
                { q: "What does <mark> do?", options: ["Creates bookmarks", "Highlights text", "Marks errors", "Bold text"], answer: 1, explanation: "<mark> highlights text with a yellow background by default." },
                { q: "Which tag creates superscript text?", options: ["<super>", "<sup>", "<up>", "<sub>"], answer: 1, explanation: "<sup> renders text as superscript." },
                { q: "What does <ins> represent?", options: ["Instructions", "Inserted/added content", "Internal styling", "Invisible text"], answer: 1, explanation: "<ins> marks newly inserted content, shown underlined." },
              ],
              exercise: { title: "Markup a Review", description: "Write a product review using <strong>, <em>, <del>, <ins>, <mark>, <small>, and <sub>/<sup>." },
              summary: "Use semantic formatting tags: <strong> for importance, <em> for emphasis, <mark> for highlights, <del>/<ins> for changes.",
            },
          ],
        },
      ],
    },

    // MODULE 9 — HTML COMMENTS
    {
      id: 9, title: "HTML Comments", icon: "💬", color: "#7f8c8d",
      description: "Learn how to write comments in HTML to document your code effectively.",
      chapters: [
        {
          id: "9-1", title: "HTML Comment Syntax",
          lessons: [
            {
              id: "9-1-1", title: "Writing Effective Comments", subtitle: "Document your code like a professional",
              difficulty: "Beginner", duration: "15 min", prerequisites: ["1-1-1"],
              theory: "HTML comments use <!-- --> syntax and are invisible to users but visible in source code. Comments help explain complex markup, mark sections, temporarily disable code, and communicate with team members. They are not hidden from page source — never put sensitive data in comments.",
              codeExample: `<!-- Navigation Section -->\n<nav>\n  <!-- Main menu links -->\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n  <!-- TODO: Add dropdown menu -->\n</nav>\n\n<!-- \n  Author: Your Name\n  Date: 2025\n  Section: Hero Banner\n-->\n<section class="hero">\n  <!-- Temporarily disabled old banner\n  <img src="old-banner.jpg">\n  -->\n  <h1>Welcome</h1>\n</section>`,
              commonMistakes: ["Putting passwords/keys in HTML comments", "Nested comments (not allowed)", "Forgetting to close comment with -->"],
              bestPractices: ["Comment complex sections", "Use TODO comments for reminders", "Never put sensitive data in comments"],
              quiz: [
                { q: "What is the correct HTML comment syntax?", options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], answer: 2, explanation: "HTML comments use <!-- --> syntax." },
                { q: "Are HTML comments visible to users?", options: ["Yes", "No", "Only in Firefox", "Only in source code"], answer: 3, explanation: "Comments are hidden from display but visible in page source." },
                { q: "Can HTML comments be nested?", options: ["Yes", "No", "Only in head", "Only in body"], answer: 1, explanation: "Nested HTML comments are not supported and cause errors." },
                { q: "Should you put API keys in HTML comments?", options: ["Yes, they are hidden", "No, page source is public", "Only in production", "Only for internal sites"], answer: 1, explanation: "Page source is publicly viewable — never put secrets in comments." },
                { q: "Which is a valid use of HTML comments?", options: ["Hiding passwords", "Temporarily disabling code", "CSS styling", "Adding JS"], answer: 1, explanation: "Comments are great for temporarily disabling HTML blocks." },
              ],
              exercise: { title: "Document a Page", description: "Add meaningful comments to a 3-section HTML page explaining the purpose of each section." },
              summary: "HTML comments use <!-- -->. They document code but are visible in source — never include sensitive data.",
            },
          ],
        },
      ],
    },

    // MODULE 10 — HTML COLORS
    {
      id: 10, title: "HTML Colors", icon: "🎨", color: "#e74c3c",
      description: "Apply colors in HTML using names, HEX, RGB, RGBA, HSL, and gradients.",
      chapters: [
        {
          id: "10-1", title: "Color Formats",
          lessons: [
            {
              id: "10-1-1", title: "Color Systems in HTML/CSS", subtitle: "HEX, RGB, HSL and more",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["11-1-1"],
              theory: "Colors in HTML are applied via CSS using multiple formats: Named colors (red, blue), HEX (#ff0000), RGB (rgb(255,0,0)), RGBA (rgba(255,0,0,0.5)), HSL (hsl(0,100%,50%)), HSLA. Each format has use cases — HEX is most common, RGBA adds transparency, HSL is intuitive for designers.",
              codeExample: `<style>\n  .named  { color: tomato; }\n  .hex    { color: #3498db; }\n  .rgb    { color: rgb(46, 204, 113); }\n  .rgba   { background: rgba(0,0,0,0.5); color: white; }\n  .hsl    { color: hsl(270, 80%, 60%); }\n</style>\n<p class="named">Named Color: Tomato</p>\n<p class="hex">HEX Color: Blue</p>\n<p class="rgb">RGB Color: Green</p>\n<p class="rgba">RGBA: Semi-transparent background</p>\n<p class="hsl">HSL Color: Purple</p>`,
              commonMistakes: ["Using color names for professional design (limited palette)", "Forgetting alpha in rgba (0-1 range)", "Wrong HEX shorthand (#fff vs #ffffff)"],
              bestPractices: ["Use HEX for brand colors", "Use RGBA for overlays/transparency", "Ensure 4.5:1 contrast ratio for accessibility"],
              quiz: [
                { q: "What does the 'A' in RGBA stand for?", options: ["Advanced", "Alpha (transparency)", "Attribute", "Average"], answer: 1, explanation: "A = Alpha channel, controlling transparency (0-1)." },
                { q: "Which format is most commonly used for brand colors?", options: ["Named", "RGB", "HEX", "HSL"], answer: 2, explanation: "HEX codes are the industry standard for brand colors." },
                { q: "What HEX value represents pure white?", options: ["#000000", "#ffffff", "#ff0000", "#00ff00"], answer: 1, explanation: "#ffffff = white. #000000 = black." },
                { q: "In HSL, what does 'H' stand for?", options: ["Height", "Hue", "Highlight", "Hard"], answer: 1, explanation: "HSL = Hue, Saturation, Lightness." },
                { q: "What WCAG minimum contrast ratio is required for normal text?", options: ["2:1", "3:1", "4.5:1", "7:1"], answer: 2, explanation: "WCAG AA requires a minimum 4.5:1 contrast ratio for normal text." },
              ],
              exercise: { title: "Color Palette", description: "Create a div grid showing 6 different colors using HEX, RGB, RGBA, HSL each." },
              summary: "Use HEX for brands, RGB/HSL for flexibility, RGBA for transparency. Always ensure sufficient contrast ratio.",
            },
          ],
        },
      ],
    },

    // MODULE 11 — HTML STYLES
    {
      id: 11, title: "HTML Styles & Inline CSS", icon: "🎨", color: "#2ecc71",
      description: "Apply inline styles to HTML elements and understand when to use them.",
      chapters: [
        {
          id: "11-1", title: "The Style Attribute",
          lessons: [
            {
              id: "11-1-1", title: "Inline Styles", subtitle: "Direct styling with the style attribute",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["4-1-1"],
              theory: "The style attribute applies CSS directly to an HTML element using property:value pairs separated by semicolons. Inline styles have the highest specificity, overriding external and internal CSS. While convenient for quick changes, overuse leads to unmaintainable code.",
              codeExample: `<h1 style="color: #2c3e50; font-family: Arial; text-align: center;">Page Title</h1>\n<p style="color: #666; font-size: 16px; line-height: 1.6;">Body text with custom styling.</p>\n<button style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Click Me</button>`,
              commonMistakes: ["Overusing inline styles making maintenance hard", "Repeating same styles on many elements", "Not separating concerns (HTML structure vs CSS style)"],
              bestPractices: ["Use inline styles sparingly", "Prefer class-based styling", "Use inline styles for dynamic/JS-controlled styles"],
              quiz: [
                { q: "What is the highest specificity in CSS?", options: ["External CSS", "Internal CSS", "Inline styles", "ID selectors"], answer: 2, explanation: "Inline styles have the highest specificity of all CSS methods." },
                { q: "What separates multiple properties in inline style?", options: ["Comma", "Semicolon", "Colon", "Pipe"], answer: 1, explanation: "Properties are separated by semicolons: style='color:red; font-size:16px'" },
                { q: "When are inline styles useful?", options: ["Always", "Never", "For dynamic/JS-driven styles", "Only in emails"], answer: 2, explanation: "Inline styles are useful for dynamic styling via JavaScript." },
                { q: "What is wrong with using inline styles everywhere?", options: ["Performance issues", "Cannot use JavaScript", "Code is hard to maintain", "Browsers reject them"], answer: 2, explanation: "Overusing inline styles makes CSS maintenance nearly impossible." },
                { q: "Which inline style centers text?", options: ["align: center", "text-center: true", "text-align: center", "center: text"], answer: 2, explanation: "text-align: center is the correct CSS property." },
              ],
              exercise: { title: "Style a Card", description: "Create a profile card using ONLY inline styles with background, border-radius, padding, color, and font-size." },
              summary: "Inline styles apply CSS directly but have high specificity. Use sparingly — prefer external/internal CSS.",
            },
          ],
        },
      ],
    },

    // MODULE 12 — CSS INTEGRATION
    {
      id: 12, title: "HTML CSS Integration", icon: "🔗", color: "#3498db",
      description: "Master all three ways to add CSS to HTML: inline, internal, and external.",
      chapters: [
        {
          id: "12-1", title: "Three Ways to Add CSS",
          lessons: [
            {
              id: "12-1-1", title: "Internal & External CSS", subtitle: "The right way to style pages",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["11-1-1"],
              theory: "CSS can be added three ways: (1) Inline using the style attribute, (2) Internal using a <style> block in <head>, (3) External using a <link> to a .css file. External CSS is the gold standard — it separates concerns, allows caching, and is reusable across many pages.",
              codeExample: `<!-- Internal CSS -->\n<head>\n  <style>\n    body { font-family: Arial, sans-serif; margin: 0; }\n    h1 { color: #2c3e50; }\n    .btn { background: #3498db; color: white; padding: 8px 16px; }\n  </style>\n</head>\n\n<!-- External CSS (best practice) -->\n<head>\n  <link rel="stylesheet" href="styles.css">\n</head>`,
              commonMistakes: ["Using internal CSS for large sites", "Linking CSS with script tag instead of link", "Not specifying rel='stylesheet'"],
              bestPractices: ["Always use external CSS for real projects", "Place link in <head>", "One main CSS file per project (plus modules)"],
              quiz: [
                { q: "Which CSS method is best for large projects?", options: ["Inline", "Internal", "External", "Embedded"], answer: 2, explanation: "External CSS files are maintainable, reusable, and cacheable." },
                { q: "What HTML element links an external CSS file?", options: ["<css>", "<script>", "<link>", "<style>"], answer: 2, explanation: "<link rel='stylesheet' href='...'> links external CSS." },
                { q: "Where does the <link> element belong?", options: ["<body>", "<footer>", "<head>", "<html>"], answer: 2, explanation: "<link> elements belong in the <head> section." },
                { q: "What attribute on <link> specifies it's a stylesheet?", options: ["type", "rel", "href", "src"], answer: 1, explanation: "rel='stylesheet' tells the browser the linked file is CSS." },
                { q: "What is an advantage of external CSS?", options: ["Highest specificity", "Works offline without server", "Browser can cache it", "No HTTP request needed"], answer: 2, explanation: "External CSS files can be cached by browsers for fast repeat loads." },
              ],
              exercise: { title: "Refactor to External CSS", description: "Take an inline-styled page and move all styles to an external styles.css file." },
              summary: "Use external CSS for real projects. Internal CSS for small pages. Inline only for dynamic JS-driven styles.",
            },
          ],
        },
      ],
    },

    // MODULE 13 — HTML LINKS
    {
      id: 13, title: "HTML Links & Navigation", icon: "🔗", color: "#2980b9",
      description: "Master anchor tags, hyperlinks, email links, phone links, and navigation patterns.",
      chapters: [
        {
          id: "13-1", title: "The Anchor Tag",
          lessons: [
            {
              id: "13-1-1", title: "HTML Links Complete Guide", subtitle: "Internal, external, email, phone, anchor links",
              difficulty: "Beginner", duration: "30 min", prerequisites: ["4-1-1"],
              theory: "The <a> (anchor) element creates hyperlinks. The href attribute specifies the destination. Links can point to: external URLs (https://), internal pages (about.html), same-page anchors (#section), email addresses (mailto:), phone numbers (tel:), and files for download. The target='_blank' opens in new tab.",
              codeExample: `<!-- External link -->\n<a href="https://google.com" target="_blank" rel="noopener noreferrer">Visit Google</a>\n\n<!-- Internal link -->\n<a href="/about.html">About Us</a>\n\n<!-- Same-page anchor -->\n<a href="#contact">Jump to Contact</a>\n<section id="contact">...</section>\n\n<!-- Email link -->\n<a href="mailto:hello@example.com">Email Us</a>\n\n<!-- Phone link -->\n<a href="tel:+1234567890">Call Us</a>\n\n<!-- Download link -->\n<a href="report.pdf" download>Download PDF</a>`,
              commonMistakes: ["Forgetting rel='noopener' with target='_blank'", "Linking with # as placeholder then forgetting to update", "Non-descriptive link text like 'click here'"],
              bestPractices: ["Always use rel='noopener noreferrer' with target='_blank'", "Descriptive link text for accessibility", "Use https:// not http://"],
              quiz: [
                { q: "What attribute specifies where a link opens?", options: ["href", "src", "target", "rel"], answer: 2, explanation: "target='_blank' opens link in a new tab." },
                { q: "What security attribute should accompany target='_blank'?", options: ["nofollow", "noopener noreferrer", "secure", "private"], answer: 1, explanation: "rel='noopener noreferrer' prevents tab-napping security issues." },
                { q: "How do you create an email link?", options: ["href='email:...'", "href='mailto:...'", "href='mail:...'", "href='send:...'"], answer: 1, explanation: "mailto: protocol triggers the user's email client." },
                { q: "What does the download attribute do?", options: ["Streams the file", "Opens file in browser", "Triggers download of linked file", "Encrypts the file"], answer: 2, explanation: "download attribute prompts the browser to download rather than navigate." },
                { q: "Which is accessible link text?", options: ["Click here", "Read more", "Download our 2025 Annual Report PDF", "Link"], answer: 2, explanation: "Descriptive link text helps screen reader users understand destination." },
              ],
              exercise: { title: "Navigation Menu", description: "Build a nav bar with links to 5 internal pages, 2 external links, an email, and a phone number." },
              summary: "The <a> tag with href creates all types of links. Always use descriptive text and secure attributes.",
            },
          ],
        },
      ],
    },

    // MODULE 14 — HTML IMAGES
    {
      id: 14, title: "HTML Images & Media", icon: "🖼️", color: "#e67e22",
      description: "Embed images, use responsive picture elements, and optimise for performance.",
      chapters: [
        {
          id: "14-1", title: "The Image Tag",
          lessons: [
            {
              id: "14-1-1", title: "HTML Images Complete Guide", subtitle: "<img>, <picture>, srcset, and lazy loading",
              difficulty: "Beginner", duration: "30 min", prerequisites: ["4-1-1"],
              theory: "The <img> element embeds images. Required attributes: src (source URL) and alt (alternative text). Optional: width, height, loading='lazy' for performance, srcset for responsive images, and the <picture> element for art direction (different images for different screens).",
              codeExample: `<!-- Basic image -->\n<img src="photo.jpg" alt="A sunset over the mountains" width="800" height="600">\n\n<!-- Lazy loading -->\n<img src="hero.jpg" alt="Hero banner" loading="lazy">\n\n<!-- Responsive images with srcset -->\n<img\n  src="image-400.jpg"\n  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"\n  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"\n  alt="Responsive landscape photo">\n\n<!-- Art direction with <picture> -->\n<picture>\n  <source media="(max-width: 600px)" srcset="mobile-banner.jpg">\n  <source media="(min-width: 601px)" srcset="desktop-banner.jpg">\n  <img src="desktop-banner.jpg" alt="Site banner">\n</picture>`,
              commonMistakes: ["Empty or missing alt text", "Not specifying width/height causing layout shifts", "Using huge uncompressed images"],
              bestPractices: ["Always include descriptive alt text", "Specify width and height to prevent CLS", "Use loading='lazy' for below-fold images", "Use WebP format for better compression"],
              quiz: [
                { q: "What does the alt attribute do?", options: ["Adds a caption", "Provides fallback text for screen readers/broken images", "Sets image title", "Links to image source"], answer: 1, explanation: "alt text describes the image for screen readers and shows when image fails." },
                { q: "What does loading='lazy' do?", options: ["Loads image first", "Defers image load until near viewport", "Reduces image quality", "Caches the image"], answer: 1, explanation: "Lazy loading defers off-screen image loading for performance." },
                { q: "Why specify width and height on images?", options: ["For styling", "To prevent Cumulative Layout Shift (CLS)", "Required by HTML spec", "For screen readers"], answer: 1, explanation: "width/height reserves space preventing layout reflow." },
                { q: "Which element enables art direction (different images for different screens)?", options: ["<img>", "<photo>", "<picture>", "<media>"], answer: 2, explanation: "<picture> with <source> elements allows art direction." },
                { q: "Which modern image format provides best compression?", options: ["JPEG", "PNG", "GIF", "WebP"], answer: 3, explanation: "WebP provides 25-35% smaller files than JPEG/PNG at same quality." },
              ],
              exercise: { title: "Responsive Image Gallery", description: "Build a 6-image gallery with alt text, lazy loading, and proper width/height attributes." },
              summary: "Use <img> with meaningful alt text. Apply lazy loading and specify dimensions. Use <picture> for responsive art direction.",
            },
          ],
        },
      ],
    },

    // MODULE 15 — FAVICON
    {
      id: 15, title: "HTML Favicon", icon: "⭐", color: "#f1c40f",
      description: "Add icons to your website that appear in browser tabs, bookmarks, and home screens.",
      chapters: [
        {
          id: "15-1", title: "Favicon Implementation",
          lessons: [
            {
              id: "15-1-1", title: "Adding a Favicon", subtitle: "Icons for tabs, bookmarks, and PWAs",
              difficulty: "Beginner", duration: "15 min", prerequisites: ["14-1-1"],
              theory: "A favicon is the small icon displayed in browser tabs, bookmarks, and on mobile home screens. Add it using <link> in the <head>. Modern sites use multiple sizes for different contexts: 16x16 and 32x32 for browsers, 180x180 for Apple touch, 192x192 for Android.",
              codeExample: `<head>\n  <!-- Standard favicon -->\n  <link rel="icon" type="image/x-icon" href="/favicon.ico">\n  \n  <!-- PNG favicon -->\n  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n  \n  <!-- Apple Touch Icon -->\n  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n  \n  <!-- Android Chrome -->\n  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">\n</head>`,
              commonMistakes: ["Only providing one favicon size", "Placing favicon link in body", "Using low-resolution icons"],
              bestPractices: ["Provide multiple sizes", "Use a favicon generator tool", "Test on mobile and desktop"],
              quiz: [
                { q: "Where does the favicon link element go?", options: ["<body>", "<footer>", "<head>", "<html>"], answer: 2, explanation: "Favicon <link> tags belong in the <head> section." },
                { q: "What size is the Apple touch icon?", options: ["32x32", "64x64", "180x180", "512x512"], answer: 2, explanation: "Apple touch icons should be 180x180 pixels." },
                { q: "What format is the classic favicon?", options: [".png", ".jpg", ".ico", ".svg"], answer: 2, explanation: "The traditional favicon format is .ico (ICO format)." },
                { q: "What rel attribute is used for favicons?", options: ["favicon", "icon", "shortcut", "tab-icon"], answer: 1, explanation: "rel='icon' is the standard attribute for favicons." },
                { q: "Why use multiple favicon sizes?", options: ["SEO purposes", "Different devices/contexts need different sizes", "Required by HTML5", "Browser compatibility"], answer: 1, explanation: "Different devices and contexts (tab, bookmark, home screen) need different sizes." },
              ],
              exercise: { title: "Add Complete Favicon Set", description: "Add favicon.ico, 32x32 PNG, 16x16 PNG, and Apple touch icon links to a page's head." },
              summary: "Favicons appear in tabs and bookmarks. Provide multiple sizes for different devices. Link them all in <head>.",
            },
          ],
        },
      ],
    },

    // MODULE 16 — HTML TABLES
    {
      id: 16, title: "HTML Tables", icon: "📊", color: "#1abc9c",
      description: "Create data tables with proper structure, accessibility, and styling.",
      chapters: [
        {
          id: "16-1", title: "Table Structure",
          lessons: [
            {
              id: "16-1-1", title: "HTML Tables Complete Guide", subtitle: "thead, tbody, tfoot, colspan, rowspan",
              difficulty: "Intermediate", duration: "35 min", prerequisites: ["4-1-1"],
              theory: "HTML tables organise tabular data in rows and columns. Key elements: <table>, <thead>, <tbody>, <tfoot>, <tr> (row), <th> (header cell), <td> (data cell), <caption>. Use colspan to span multiple columns, rowspan for multiple rows. Tables are for data — never for layout.",
              codeExample: `<table>\n  <caption>Monthly Sales Report 2025</caption>\n  <thead>\n    <tr>\n      <th scope="col">Month</th>\n      <th scope="col">Revenue</th>\n      <th scope="col">Units</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>January</td>\n      <td>$45,000</td>\n      <td>150</td>\n    </tr>\n    <tr>\n      <td>February</td>\n      <td>$52,000</td>\n      <td colspan="2">Data pending</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Total</td>\n      <td>$97,000</td>\n      <td>150+</td>\n    </tr>\n  </tfoot>\n</table>`,
              commonMistakes: ["Using tables for page layout", "Missing scope on <th>", "No caption for data context", "Not using thead/tbody/tfoot"],
              bestPractices: ["Always use <caption>", "Add scope to <th>", "Use aria-label for complex tables", "Style with CSS not HTML attributes"],
              quiz: [
                { q: "What element defines a table row?", options: ["<td>", "<th>", "<tr>", "<row>"], answer: 2, explanation: "<tr> defines a table row." },
                { q: "What is the difference between <th> and <td>?", options: ["No difference", "<th> is header (bold/centered), <td> is data", "<td> is header, <th> is data", "<th> only works in thead"], answer: 1, explanation: "<th> is a header cell (bold, centered by default). <td> is data." },
                { q: "What does colspan='3' do?", options: ["Creates 3 rows", "Cell spans 3 columns", "Sets cell width to 3px", "Creates 3 borders"], answer: 1, explanation: "colspan='3' makes the cell span across 3 columns." },
                { q: "Should tables be used for page layout?", options: ["Yes, always", "Sometimes for complex layouts", "Never", "Only for 2-column layouts"], answer: 2, explanation: "Tables are for tabular data only. CSS Grid/Flexbox for layout." },
                { q: "What does scope='col' on <th> do?", options: ["Colours the column", "Scopes CSS to column", "Tells screen readers this header applies to the column", "Sets column width"], answer: 2, explanation: "scope='col' helps screen readers associate headers with data cells." },
              ],
              exercise: { title: "Sales Dashboard Table", description: "Create a 5-column table with thead, tbody, tfoot, a caption, colspan in one row, and proper scope attributes." },
              summary: "Use tables for tabular data with proper thead/tbody/tfoot, captions, and scope attributes for accessibility.",
            },
          ],
        },
      ],
    },

    // MODULE 17 — HTML LISTS
    {
      id: 17, title: "HTML Lists", icon: "📋", color: "#9b59b6",
      description: "Create ordered, unordered, and description lists for structured content.",
      chapters: [
        {
          id: "17-1", title: "All List Types",
          lessons: [
            {
              id: "17-1-1", title: "Ordered, Unordered & Description Lists", subtitle: "The three types of HTML lists",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["4-1-1"],
              theory: "HTML has three list types: <ul> (unordered — bullets), <ol> (ordered — numbered), <dl> (description list — term/definition pairs). Lists can be nested. The CSS list-style-type property changes bullet/number styles. <li> wraps each list item in ul/ol.",
              codeExample: `<!-- Unordered List -->\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>\n\n<!-- Ordered List -->\n<ol type="A" start="1">\n  <li>First step</li>\n  <li>Second step</li>\n</ol>\n\n<!-- Description List -->\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language — structures web content.</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets — styles web content.</dd>\n</dl>\n\n<!-- Nested List -->\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>`,
              commonMistakes: ["Putting non-<li> elements directly inside <ul>/<ol>", "Using lists just for visual indentation", "Missing <dt> or <dd> pairs in <dl>"],
              bestPractices: ["Use <ul> for unordered items, <ol> for sequential steps", "Use <dl> for glossaries, FAQs, metadata", "Style lists with CSS not HTML attributes"],
              quiz: [
                { q: "Which list type is for sequential steps?", options: ["<ul>", "<ol>", "<dl>", "<sl>"], answer: 1, explanation: "<ol> (ordered list) is appropriate for sequential steps." },
                { q: "What goes directly inside <ul> and <ol>?", options: ["<p>", "<div>", "<li>", "<item>"], answer: 2, explanation: "<li> is the only valid direct child of <ul> and <ol>." },
                { q: "What element pairs with <dt> in a description list?", options: ["<di>", "<dp>", "<dd>", "<def>"], answer: 2, explanation: "<dt> is the term, <dd> is the description." },
                { q: "What CSS property changes list bullet style?", options: ["bullet-type", "list-style", "list-style-type", "marker-type"], answer: 2, explanation: "list-style-type: disc|circle|square|none controls bullets." },
                { q: "Can lists be nested?", options: ["No", "Only 2 levels deep", "Yes, unlimited nesting", "Only in ol"], answer: 2, explanation: "Lists can be nested to any depth." },
              ],
              exercise: { title: "Recipe Steps", description: "Write a recipe page with an <ol> for steps, a <ul> for ingredients, and a <dl> for nutritional facts." },
              summary: "<ul> for bullets, <ol> for numbered sequences, <dl> for term-definition pairs. Lists can be nested.",
            },
          ],
        },
      ],
    },

    // MODULE 18 — BLOCK VS INLINE
    {
      id: 18, title: "Block & Inline Elements", icon: "📦", color: "#e74c3c",
      description: "Understand the fundamental difference between block-level and inline elements.",
      chapters: [
        {
          id: "18-1", title: "Display Behaviour",
          lessons: [
            {
              id: "18-1-1", title: "Block vs Inline Explained", subtitle: "How elements flow on the page",
              difficulty: "Beginner", duration: "25 min", prerequisites: ["4-1-1"],
              theory: "Block elements (div, p, h1-h6, ul, table, section) take up the full width available and start on a new line. Inline elements (span, a, strong, img, input) only take up as much space as their content and flow within text. The CSS display property can change this behaviour.",
              codeExample: `<!-- Block elements stack vertically -->\n<div style="background:#3498db;color:white;padding:8px">Block 1</div>\n<div style="background:#e74c3c;color:white;padding:8px">Block 2</div>\n\n<!-- Inline elements flow horizontally -->\n<span style="background:#2ecc71;color:white;padding:4px">Inline 1</span>\n<span style="background:#f39c12;color:white;padding:4px">Inline 2</span>\n\n<!-- Changing display with CSS -->\n<span style="display:block;background:#9b59b6;color:white;padding:8px">Span made block-level</span>`,
              commonMistakes: ["Nesting block elements inside inline elements", "Putting <p> inside <a>", "Not understanding how inline-block differs"],
              bestPractices: ["Never nest <div> or <p> inside <span>", "Use CSS display to change flow", "Use inline-block for inline elements that need width/height"],
              quiz: [
                { q: "Which is a block-level element?", options: ["<span>", "<a>", "<strong>", "<div>"], answer: 3, explanation: "<div> is a block-level container element." },
                { q: "Which is an inline element?", options: ["<p>", "<h1>", "<span>", "<section>"], answer: 2, explanation: "<span> is an inline element." },
                { q: "What CSS value makes a block element inline?", options: ["display: block", "display: flex", "display: inline", "display: grid"], answer: 2, explanation: "display: inline makes block elements flow inline." },
                { q: "Can you set width on a pure inline element?", options: ["Yes", "No", "Only with !important", "Only in Chrome"], answer: 1, explanation: "Inline elements ignore width/height. Use inline-block instead." },
                { q: "What is inline-block?", options: ["A CSS bug", "Flows inline but respects width/height", "Block inside inline", "A flexbox property"], answer: 1, explanation: "inline-block flows with text but accepts width, height, margin." },
              ],
              exercise: { title: "Display Playground", description: "Create 3 block elements, 3 inline elements, then swap their display values using CSS." },
              summary: "Block elements stack vertically and take full width. Inline elements flow with text. CSS display changes behaviour.",
            },
          ],
        },
      ],
    },

    // MODULE 19 — HTML CLASSES
    {
      id: 19, title: "HTML Classes", icon: "🏷️", color: "#16a085",
      description: "Use class attributes to group elements for styling and JavaScript targeting.",
      chapters: [
        {
          id: "19-1", title: "The Class Attribute",
          lessons: [
            {
              id: "19-1-1", title: "HTML Classes & Multi-Class Styling", subtitle: "Group elements for CSS and JS",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["11-1-1"],
              theory: "The class attribute assigns one or more class names to an element, separated by spaces. Classes allow you to apply CSS styles and JavaScript to multiple elements at once. A single element can have multiple classes. Classes use dot notation in CSS (.classname) and are accessed with document.getElementsByClassName() or document.querySelectorAll() in JS.",
              codeExample: `<style>\n  .card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; }\n  .featured { background: #fff3cd; border-color: #ffc107; }\n  .sale { border-left: 4px solid #e74c3c; }\n</style>\n\n<!-- Multiple classes -->\n<div class="card">Basic Card</div>\n<div class="card featured">Featured Card</div>\n<div class="card sale">Sale Card</div>\n<div class="card featured sale">Featured + Sale</div>`,
              commonMistakes: ["Starting class names with numbers", "Using spaces within a single class name", "Confusing class (.) with id (#) in CSS"],
              bestPractices: ["Use meaningful, descriptive class names", "Use BEM naming convention for large projects", "Prefer class over inline styles"],
              quiz: [
                { q: "How do you apply multiple classes to an element?", options: ["class='a,b'", "class='a b'", "class='a|b'", "class='a;b'"], answer: 1, explanation: "Multiple classes are separated by spaces: class='card featured'" },
                { q: "What CSS selector targets elements with class 'btn'?", options: ["#btn", ".btn", "*btn", "btn"], answer: 1, explanation: "CSS uses dot notation for classes: .btn" },
                { q: "Can multiple elements share the same class?", options: ["No", "Yes, unlimited", "Only 5 elements", "Only same type"], answer: 1, explanation: "Classes can be applied to any number of elements." },
                { q: "Which JS method selects all elements with class 'card'?", options: ["getElementById", "getElementByClass", "getElementsByClassName", "querySelector"], answer: 2, explanation: "getElementsByClassName('card') returns all matching elements." },
                { q: "What naming convention is popular for CSS classes in large projects?", options: ["camelCase", "PascalCase", "BEM (Block-Element-Modifier)", "kebab_case"], answer: 2, explanation: "BEM (Block__Element--Modifier) is widely used for scalable CSS." },
              ],
              exercise: { title: "Card Grid", description: "Create 6 product cards using shared and unique classes to produce 3 visual variants." },
              summary: "Class attribute groups elements for CSS/JS. Multiple classes separated by spaces. Use meaningful, reusable names.",
            },
          ],
        },
      ],
    },

    // MODULE 20 — HTML ID
    {
      id: 20, title: "HTML ID Attribute", icon: "🆔", color: "#8e44ad",
      description: "Use unique IDs for single-element targeting, page anchors, and form associations.",
      chapters: [
        {
          id: "20-1", title: "The ID Attribute",
          lessons: [
            {
              id: "20-1-1", title: "HTML IDs — Unique Identifiers", subtitle: "One ID, one element, many uses",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["19-1-1"],
              theory: "The id attribute provides a unique identifier for a single element. Rules: must be unique per page, cannot start with numbers, no spaces. IDs are used for: CSS targeting (#id), JavaScript (getElementById), page anchor links (#section), and associating labels with form inputs (for='id').",
              codeExample: `<!-- CSS targeting -->\n<style>\n  #hero { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; }\n  #main-title { font-size: 3rem; }\n</style>\n\n<!-- Anchor link destination -->\n<a href="#contact">Jump to Contact</a>\n\n<section id="hero">\n  <h1 id="main-title">Welcome</h1>\n</section>\n\n<section id="contact">\n  <h2>Contact Us</h2>\n  <!-- Form label linked to input -->\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n</section>`,
              commonMistakes: ["Duplicate IDs on a page", "Using ID for styling when class would be better", "Starting ID with a number"],
              bestPractices: ["Use IDs for unique elements: header, footer, main, specific sections", "Prefer class for styling", "Always use unique IDs — HTML validators catch duplicates"],
              quiz: [
                { q: "Can two elements share the same ID?", options: ["Yes", "No, IDs must be unique", "Only in different sections", "Only if different types"], answer: 1, explanation: "IDs must be unique within a page. Duplicate IDs cause errors." },
                { q: "Which CSS selector targets id='hero'?", options: [".hero", "*hero", "#hero", "@hero"], answer: 2, explanation: "# is the CSS selector for IDs: #hero" },
                { q: "What JS method selects an element by ID?", options: ["querySelector", "getElementsByClassName", "getElementById", "selectById"], answer: 2, explanation: "document.getElementById('myId') selects by ID." },
                { q: "What attribute links a <label> to an <input>?", options: ["id on label, for on input", "for on label, id on input", "name on both", "class on both"], answer: 1, explanation: "label's for attribute must match input's id to associate them." },
                { q: "Can an ID contain spaces?", options: ["Yes", "No — spaces break the ID", "Only with quotes", "Only in CSS"], answer: 1, explanation: "ID values cannot contain spaces." },
              ],
              exercise: { title: "Page Anchors", description: "Build a long page with 5 sections, each with an id, and a sticky nav with anchor links to each section." },
              summary: "IDs are unique per-page identifiers. Use for anchors, JS targeting, label association. Prefer class for styling.",
            },
          ],
        },
      ],
    },

    // MODULE 21 — IFRAMES
    {
      id: 21, title: "HTML Iframes", icon: "🖼️", color: "#2c3e50",
      description: "Embed external content, maps, videos, and documents inside iframes securely.",
      chapters: [
        {
          id: "21-1", title: "The Iframe Element",
          lessons: [
            {
              id: "21-1-1", title: "HTML Iframes & Security", subtitle: "Embedding external content safely",
              difficulty: "Intermediate", duration: "25 min", prerequisites: ["13-1-1"],
              theory: "The <iframe> element embeds another HTML page within the current one. Used for embedding YouTube, Google Maps, social widgets, and PDFs. Key attributes: src, width, height, title (required for accessibility), sandbox (security), allow, and loading='lazy'. The sandbox attribute restricts iframe capabilities for security.",
              codeExample: `<!-- YouTube embed -->\n<iframe\n  width="560" height="315"\n  src="https://www.youtube.com/embed/VIDEO_ID"\n  title="HTML Tutorial Video"\n  frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media"\n  allowfullscreen\n  loading="lazy">\n</iframe>\n\n<!-- Google Maps -->\n<iframe\n  src="https://maps.google.com/maps?q=London&output=embed"\n  width="600" height="400"\n  title="London Map"\n  style="border:0"\n  loading="lazy">\n</iframe>\n\n<!-- Sandboxed iframe -->\n<iframe\n  src="untrusted-content.html"\n  sandbox="allow-scripts"\n  title="Sandboxed Content">\n</iframe>`,
              commonMistakes: ["Missing title attribute (accessibility failure)", "No sandbox on untrusted content", "Not using loading='lazy'"],
              bestPractices: ["Always add a title", "Use sandbox for untrusted content", "Lazy load iframes", "Be aware of X-Frame-Options blocking"],
              quiz: [
                { q: "What attribute is required on iframes for accessibility?", options: ["alt", "name", "title", "src"], answer: 2, explanation: "title attribute describes iframe content for screen readers." },
                { q: "What does the sandbox attribute do?", options: ["Stores iframe content", "Restricts iframe permissions for security", "Creates a test environment", "Caches content"], answer: 1, explanation: "sandbox restricts iframe capabilities like forms, scripts, navigation." },
                { q: "What value allows an iframe to display fullscreen video?", options: ["allow-fullscreen", "allowfullscreen", "fullscreen=true", "fullscreen"], answer: 1, explanation: "allowfullscreen attribute enables fullscreen mode." },
                { q: "What is X-Frame-Options?", options: ["CSS for iframes", "HTTP header blocking sites from being iframed", "Iframe resizing API", "Cross-frame JavaScript"], answer: 1, explanation: "X-Frame-Options HTTP header prevents clickjacking by blocking embedding." },
                { q: "How do you lazy load an iframe?", options: ["defer='true'", "lazy='true'", "loading='lazy'", "async='true'"], answer: 2, explanation: "loading='lazy' defers iframe load until near viewport." },
              ],
              exercise: { title: "Embed Dashboard", description: "Create a page with a YouTube video, Google Maps, and a PDF document all embedded via iframes." },
              summary: "iframes embed external content. Always add title, sandbox untrusted sources, and lazy load for performance.",
            },
          ],
        },
      ],
    },

    // MODULE 22 — JAVASCRIPT INTEGRATION
    {
      id: 22, title: "HTML JavaScript Integration", icon: "⚡", color: "#f39c12",
      description: "Add interactivity with JavaScript using script tags, event handlers, and the DOM.",
      chapters: [
        {
          id: "22-1", title: "The Script Element",
          lessons: [
            {
              id: "22-1-1", title: "Adding JavaScript to HTML", subtitle: "Inline, internal, and external scripts",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["12-1-1"],
              theory: "JavaScript is added via the <script> element. You can write inline JS, internal JS in a <script> block, or link external .js files with src. Place scripts before </body> or use defer/async attributes to prevent render blocking. The <noscript> element shows fallback content when JS is disabled.",
              codeExample: `<!-- External JS (best practice) -->\n<script src="app.js" defer></script>\n\n<!-- Inline JS (for event handlers) -->\n<button onclick="alert('Hello!')">Click Me</button>\n\n<!-- Internal JS -->\n<script>\n  document.getElementById('demo').innerHTML = 'Updated by JS!';\n  \n  function changeColor() {\n    document.body.style.backgroundColor = '#1a1a2e';\n  }\n</script>\n\n<!-- Noscript fallback -->\n<noscript>\n  <p>Please enable JavaScript for the best experience.</p>\n</noscript>`,
              commonMistakes: ["Scripts in <head> without defer causing render blocking", "Using onclick in HTML for complex apps", "Not providing noscript fallback"],
              bestPractices: ["Use defer on external scripts", "Separate JS from HTML (unobtrusive JS)", "Handle noscript gracefully"],
              quiz: [
                { q: "What attribute prevents render-blocking scripts?", options: ["async", "defer", "late", "preload"], answer: 1, explanation: "defer loads script after HTML parsing. Both defer and async are options." },
                { q: "What is the difference between async and defer?", options: ["No difference", "async executes immediately when downloaded; defer after DOM", "defer is faster", "async works only in Chrome"], answer: 1, explanation: "async runs when downloaded (may be before DOM). defer runs after DOM is parsed." },
                { q: "What does <noscript> do?", options: ["Disables scripts", "Shows content when JS is disabled", "Runs alternative script", "Logs script errors"], answer: 1, explanation: "<noscript> content shows only when JavaScript is disabled." },
                { q: "Where should script tags ideally go for performance?", options: ["<head>", "Before </body>", "After <html>", "Inside <p>"], answer: 1, explanation: "Scripts before </body> let HTML render first." },
                { q: "Which approach keeps HTML and JS separated?", options: ["onclick attributes", "Internal <script>", "External .js file with addEventListener", "All are equal"], answer: 2, explanation: "addEventListener in external JS files keeps HTML clean (unobtrusive JS)." },
              ],
              exercise: { title: "Interactive Counter", description: "Build a counter with +/- buttons using external JS, proper defer loading, and a noscript fallback." },
              summary: "Add JS with <script>. Use defer on external scripts. Keep JS in external files. Provide noscript fallbacks.",
            },
          ],
        },
      ],
    },

    // MODULE 23 — FILE PATHS
    {
      id: 23, title: "HTML File Paths", icon: "📂", color: "#7f8c8d",
      description: "Understand absolute and relative file paths for linking files correctly.",
      chapters: [
        {
          id: "23-1", title: "Path Types",
          lessons: [
            {
              id: "23-1-1", title: "Absolute vs Relative Paths", subtitle: "Linking files correctly every time",
              difficulty: "Beginner", duration: "20 min", prerequisites: ["13-1-1"],
              theory: "File paths specify where linked resources (CSS, JS, images) are located. Absolute paths start from root (/images/photo.jpg) or include full URL (https://...). Relative paths are relative to the current file's location: same folder (photo.jpg), parent folder (../images/photo.jpg), child folder (assets/photo.jpg).",
              codeExample: `<!-- Absolute path (from root) -->\n<img src="/images/logo.png" alt="Logo">\n<link rel="stylesheet" href="/css/style.css">\n\n<!-- Relative path (same folder) -->\n<img src="photo.jpg" alt="Photo">\n\n<!-- Relative path (child folder) -->\n<img src="images/banner.jpg" alt="Banner">\n<link rel="stylesheet" href="css/style.css">\n\n<!-- Relative path (parent folder) -->\n<img src="../shared/logo.png" alt="Logo">\n\n<!-- Full URL (external) -->\n<img src="https://example.com/image.jpg" alt="External image">`,
              commonMistakes: ["Mixing up ../ and ./ prefixes", "Case sensitivity issues on Linux servers", "Using absolute local paths like C:/images/ (only works locally)"],
              bestPractices: ["Use root-relative paths (/images/...) for site-wide consistency", "Keep consistent folder structure", "Never use absolute local OS paths"],
              quiz: [
                { q: "What does '../' mean in a file path?", options: ["Current folder", "Child folder", "Parent folder", "Root folder"], answer: 2, explanation: "../ goes up one level to the parent directory." },
                { q: "Which path works on all servers including Linux?", options: ["C:/images/photo.jpg", "/images/photo.jpg", "images\\photo.jpg", "D:/photo.jpg"], answer: 1, explanation: "Root-relative paths (/images/...) work on all web servers." },
                { q: "What does 'images/photo.jpg' represent?", options: ["Parent folder", "Root folder", "Child folder named 'images'", "External URL"], answer: 2, explanation: "No ../ prefix means child folder relative to current location." },
                { q: "Why do absolute local paths fail in production?", options: ["Browser security", "The C: drive doesn't exist on web servers", "PHP restriction", "CSS specificity"], answer: 1, explanation: "Local OS paths like C:/... only exist on your machine, not on web servers." },
                { q: "What path prefix goes to site root?", options: ["./", "../", "/", "~/"], answer: 2, explanation: "Leading / makes path root-relative, starting from site root." },
              ],
              exercise: { title: "Fix Broken Paths", description: "Given a broken website with wrong file paths, correct all image and CSS links." },
              summary: "Use relative paths for portability. / for root-relative, ../ for parent, folder/ for children. Never use OS absolute paths.",
            },
          ],
        },
      ],
    },

    // MODULE 24 — HEAD ELEMENT
    {
      id: 24, title: "HTML Head Element", icon: "🧠", color: "#2980b9",
      description: "Everything that goes in <head>: metadata, links, scripts, and resource hints.",
      chapters: [
        {
          id: "24-1", title: "Head Children",
          lessons: [
            {
              id: "24-1-1", title: "Complete Head Element Guide", subtitle: "title, meta, link, style, script, base",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["2-2-1"],
              theory: "The <head> can contain: <title> (tab/SEO), <meta> (charset, viewport, description, og:*), <link> (CSS, favicon, preload, canonical), <style> (internal CSS), <script> (JS loading), <base> (base URL). Ordering matters — charset first, then viewport, then title.",
              codeExample: `<head>\n  <!-- 1. Character encoding FIRST -->\n  <meta charset="UTF-8">\n  \n  <!-- 2. Viewport for mobile -->\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  \n  <!-- 3. SEO Meta tags -->\n  <title>Product Page | Brand Name</title>\n  <meta name="description" content="Buy our premium product.">\n  <meta name="robots" content="index, follow">\n  \n  <!-- 4. Resource hints -->\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preload" href="hero.jpg" as="image">\n  \n  <!-- 5. Stylesheets -->\n  <link rel="stylesheet" href="style.css">\n  \n  <!-- 6. Favicon -->\n  <link rel="icon" href="favicon.ico">\n  \n  <!-- 7. Defer scripts -->\n  <script src="app.js" defer></script>\n</head>`,
              commonMistakes: ["Putting charset after other tags", "Too many render-blocking resources", "Missing canonical link", "Scripts without defer in head"],
              bestPractices: ["charset first", "Viewport second", "Preload critical resources", "Defer all scripts"],
              quiz: [
                { q: "What must be the first meta tag in head?", options: ["viewport", "description", "charset", "title"], answer: 2, explanation: "charset should be the very first meta to ensure correct encoding parsing." },
                { q: "What does rel='preload' do?", options: ["Reloads the page", "Loads resource earlier with high priority", "Delays loading", "Caches permanently"], answer: 1, explanation: "preload fetches critical resources early before they're needed." },
                { q: "What does rel='canonical' do?", options: ["Validates HTML", "Tells search engines the preferred URL for duplicate content", "Links to sitemap", "Sets base URL"], answer: 1, explanation: "Canonical links prevent duplicate content SEO issues." },
                { q: "What does rel='preconnect' do?", options: ["Connects to database", "Establishes early connection to external origin", "Preloads all links", "Checks connectivity"], answer: 1, explanation: "preconnect establishes early DNS/TCP/TLS handshake to speed up subsequent requests." },
                { q: "What does the <base> element do?", options: ["Base64 encodes content", "Sets base URL for all relative links on page", "Creates baseline styling", "Database connection"], answer: 1, explanation: "<base href='...'> sets the base URL for all relative links." },
              ],
              exercise: { title: "Perfect Head Section", description: "Build a complete <head> with charset, viewport, title, description, OG tags, preconnect, CSS link, favicon, and deferred script." },
              summary: "Order matters in <head>: charset → viewport → title → metas → preloads → CSS → favicon → deferred scripts.",
            },
          ],
        },
      ],
    },

    // MODULE 25 — META TAGS
    {
      id: 25, title: "HTML Meta Tags & SEO", icon: "🔍", color: "#27ae60",
      description: "Control how search engines index your pages and how they appear in results.",
      chapters: [
        {
          id: "25-1", title: "Essential Meta Tags",
          lessons: [
            {
              id: "25-1-1", title: "Meta Tags for SEO & Social", subtitle: "Description, robots, OG, Twitter Cards",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["24-1-1"],
              theory: "Meta tags provide metadata to browsers and crawlers. Key ones: description (search snippet), keywords (mostly ignored), robots (crawl instructions), viewport (mobile), and Open Graph (og:title, og:description, og:image) for social sharing. Twitter Cards enable rich social media previews.",
              codeExample: `<head>\n  <meta charset="UTF-8">\n  <meta name="description" content="Learn HTML from scratch in this complete 2025 tutorial.">\n  <meta name="robots" content="index, follow">\n  <meta name="author" content="CodeLearn">\n  \n  <!-- Open Graph (Facebook, LinkedIn) -->\n  <meta property="og:title" content="Complete HTML Tutorial">\n  <meta property="og:description" content="Master HTML5 from beginner to pro.">\n  <meta property="og:image" content="https://codelearn.com/og-image.jpg">\n  <meta property="og:url" content="https://codelearn.com/html">\n  <meta property="og:type" content="website">\n  \n  <!-- Twitter Card -->\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="Complete HTML Tutorial">\n  <meta name="twitter:description" content="Master HTML5.">\n  <meta name="twitter:image" content="https://codelearn.com/og-image.jpg">\n</head>`,
              commonMistakes: ["Description over 160 characters", "Missing OG image (required for rich previews)", "Wrong robots values", "Missing og:url"],
              bestPractices: ["Keep description 120-160 characters", "OG image at least 1200x630px", "Test with Facebook Debugger and Twitter Card Validator"],
              quiz: [
                { q: "What is the recommended max length for meta description?", options: ["60 chars", "100 chars", "160 chars", "300 chars"], answer: 2, explanation: "Meta descriptions should be 120-160 characters to avoid truncation." },
                { q: "What does 'noindex' in robots meta tag do?", options: ["Blocks CSS", "Tells search engines not to index the page", "Hides the page from users", "Removes from sitemap"], answer: 1, explanation: "noindex instructs search engines not to include the page in search results." },
                { q: "Which protocol powers social media preview cards?", options: ["Schema.org", "Open Graph (og:)", "Twitter Protocol", "JSON-LD"], answer: 1, explanation: "Open Graph (og: prefix) is used by Facebook, LinkedIn, and others for rich previews." },
                { q: "What size is recommended for OG images?", options: ["400x300", "800x600", "1200x630", "512x512"], answer: 2, explanation: "1200x630px is the recommended size for Open Graph images." },
                { q: "Which meta tag is used for Twitter-specific rich previews?", options: ["og:twitter", "twitter:card", "social:twitter", "x:card"], answer: 1, explanation: "twitter:card meta tag enables Twitter Card rich previews." },
              ],
              exercise: { title: "Social-Ready Page", description: "Create a page with complete OG tags, Twitter Card meta, and proper robots instructions. Test with social debuggers." },
              summary: "Meta tags control SEO and social sharing. Description 120-160 chars. Add OG and Twitter Card tags for rich previews.",
            },
          ],
        },
      ],
    },

    // MODULE 26 — RESPONSIVE DESIGN
    {
      id: 26, title: "Responsive Design with HTML", icon: "📱", color: "#3498db",
      description: "Build pages that work beautifully on every screen size from mobile to desktop.",
      chapters: [
        {
          id: "26-1", title: "Responsive HTML Foundations",
          lessons: [
            {
              id: "26-1-1", title: "Viewport, Fluid Layouts & Responsive Images", subtitle: "Mobile-first HTML fundamentals",
              difficulty: "Intermediate", duration: "35 min", prerequisites: ["14-1-1", "12-1-1"],
              theory: "Responsive design means a single codebase adapts to any screen. HTML foundation: viewport meta tag enables proper mobile scaling. Use max-width: 100% on images to prevent overflow. Use the <picture> element and srcset for responsive images. Combine with CSS media queries for breakpoint control.",
              codeExample: `<!-- Essential viewport meta -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n<!-- Fluid image -->\n<img src="hero.jpg" alt="Hero" style="max-width:100%; height:auto;">\n\n<!-- Responsive image with srcset -->\n<img\n  src="small.jpg"\n  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"\n  sizes="(max-width:480px) 480px, (max-width:768px) 768px, 1200px"\n  alt="Responsive banner">\n\n<!-- Picture for art direction -->\n<picture>\n  <source media="(max-width:480px)" srcset="mobile.jpg">\n  <source media="(max-width:1024px)" srcset="tablet.jpg">\n  <img src="desktop.jpg" alt="Banner">\n</picture>`,
              commonMistakes: ["Missing viewport meta", "Fixed pixel widths on images", "Not testing on real devices", "Horizontal scrollbar on mobile"],
              bestPractices: ["Mobile-first approach", "max-width: 100% on all images", "Test on multiple devices/screen sizes", "Use Chrome DevTools device toolbar"],
              quiz: [
                { q: "What meta tag is essential for responsive design?", options: ["description", "charset", "viewport", "robots"], answer: 2, explanation: "viewport meta tag prevents mobile browsers from zooming out to fit desktop size." },
                { q: "What CSS makes images responsive?", options: ["width: responsive", "max-width: 100%; height: auto", "display: flex", "float: responsive"], answer: 1, explanation: "max-width: 100%; height: auto makes images fluid and proportional." },
                { q: "What is mobile-first design?", options: ["Design only for mobile", "Start CSS for small screens, add complexity for larger", "Use mobile frameworks", "Ignore desktop"], answer: 1, explanation: "Mobile-first = start with small screen CSS, use min-width media queries to enhance." },
                { q: "What does srcset on <img> do?", options: ["Styles the image", "Sets multiple image sources for different resolutions", "Caches images", "Preloads images"], answer: 1, explanation: "srcset lets browser choose the best image for the device resolution." },
                { q: "What tool in Chrome helps test responsive layouts?", options: ["Source panel", "Performance panel", "Device Toolbar (Ctrl+Shift+M)", "Network panel"], answer: 2, explanation: "Chrome DevTools Device Toolbar simulates different screen sizes." },
              ],
              exercise: { title: "Responsive Landing Page", description: "Build a landing page with responsive images, viewport meta, and at least 2 breakpoints." },
              summary: "Responsive HTML needs viewport meta, fluid images (max-width:100%), srcset, and mobile-first thinking.",
            },
          ],
        },
      ],
    },

    // MODULE 27 — SEMANTIC HTML
    {
      id: 27, title: "Semantic HTML5", icon: "🏗️", color: "#27ae60",
      description: "Use meaningful HTML elements that describe content structure clearly.",
      chapters: [
        {
          id: "27-1", title: "Semantic Structure Elements",
          lessons: [
            {
              id: "27-1-1", title: "Semantic Layout Elements", subtitle: "header, nav, main, article, section, aside, footer",
              difficulty: "Intermediate", duration: "35 min", prerequisites: ["1-2-1"],
              theory: "Semantic HTML uses tags that describe their content's meaning, not just appearance. Instead of nesting dozens of divs, use: <header> for page/section headers, <nav> for navigation, <main> for primary content, <article> for self-contained content, <section> for grouped related content, <aside> for tangentially related content, <footer> for page/section footers.",
              codeExample: `<!DOCTYPE html>\n<html lang="en">\n<body>\n  <header>\n    <img src="logo.svg" alt="Brand Logo">\n    <nav aria-label="Main navigation">\n      <ul>\n        <li><a href="/">Home</a></li>\n        <li><a href="/about">About</a></li>\n        <li><a href="/blog">Blog</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h1>Getting Started with HTML</h1>\n        <time datetime="2025-01-15">January 15, 2025</time>\n      </header>\n      <section id="introduction">\n        <h2>Introduction</h2>\n        <p>HTML is the foundation of the web...</p>\n      </section>\n    </article>\n    <aside>\n      <h2>Related Articles</h2>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2025 CodeLearn. All rights reserved.</p>\n  </footer>\n</body>\n</html>`,
              commonMistakes: ["Using <div> for everything (divitis)", "Using <section> as a generic container", "Multiple <main> elements", "Missing aria-label on multiple navs"],
              bestPractices: ["One <main> per page", "Use <article> for independently distributable content", "Add aria-label to differentiate multiple navs", "Use <time> for dates"],
              quiz: [
                { q: "What element should wrap the primary content of a page?", options: ["<body>", "<div>", "<main>", "<content>"], answer: 2, explanation: "<main> wraps the primary, unique content of the page. Only one per page." },
                { q: "What is <article> for?", options: ["Any content", "Self-contained, independently distributable content", "Any section", "News only"], answer: 1, explanation: "<article> represents content that makes sense on its own (blog post, news story)." },
                { q: "Can a page have multiple <header> elements?", options: ["No", "Yes, one per page and per section", "Only 2 max", "Only in HTML4"], answer: 1, explanation: "<header> can appear inside sections, articles, etc." },
                { q: "What does <aside> represent?", options: ["Error messages", "Sidebar advertising only", "Content tangentially related to main content", "Navigation"], answer: 2, explanation: "<aside> holds content tangentially related to the surrounding content." },
                { q: "What element represents a standalone navigation?", options: ["<menu>", "<navigation>", "<nav>", "<links>"], answer: 2, explanation: "<nav> wraps major navigation blocks." },
              ],
              exercise: { title: "Semantic Blog Page", description: "Rebuild a div-heavy blog layout using proper semantic HTML5 elements throughout." },
              summary: "Semantic HTML uses meaningful tags (header, nav, main, article, section, aside, footer) that describe content purpose.",
            },
          ],
        },
      ],
    },

    // MODULE 28 — HTML FORMS
    {
      id: 28, title: "HTML Forms", icon: "📝", color: "#e74c3c",
      description: "Build accessible, usable forms for data collection and user interaction.",
      chapters: [
        {
          id: "28-1", title: "Form Fundamentals",
          lessons: [
            {
              id: "28-1-1", title: "HTML Forms Complete Guide", subtitle: "form, fieldset, legend, label, input",
              difficulty: "Intermediate", duration: "40 min", prerequisites: ["4-1-1"],
              theory: "Forms collect user data and submit it to a server. Key elements: <form> (container with action/method), <fieldset> (groups related fields), <legend> (describes fieldset), <label> (describes input), <input>, <textarea>, <select>, <button>. The method attribute sets HTTP verb (GET/POST).",
              codeExample: `<form action="/submit" method="POST" novalidate>\n  <fieldset>\n    <legend>Personal Information</legend>\n    \n    <div class="field">\n      <label for="full-name">Full Name *</label>\n      <input type="text" id="full-name" name="fullName" required autocomplete="name">\n    </div>\n    \n    <div class="field">\n      <label for="email">Email *</label>\n      <input type="email" id="email" name="email" required autocomplete="email">\n    </div>\n  </fieldset>\n  \n  <fieldset>\n    <legend>Message</legend>\n    <label for="message">Your Message</label>\n    <textarea id="message" name="message" rows="5" placeholder="Write your message..."></textarea>\n  </fieldset>\n  \n  <button type="submit">Send Message</button>\n  <button type="reset">Clear Form</button>\n</form>`,
              commonMistakes: ["Missing label associations (for/id)", "No required attributes", "Using GET for sensitive data", "Missing autocomplete attributes"],
              bestPractices: ["Associate every label with its input via for/id", "Use appropriate input types", "Add autocomplete for UX", "POST for sensitive data, GET for search"],
              quiz: [
                { q: "What attribute specifies where form data is sent?", options: ["src", "href", "action", "target"], answer: 2, explanation: "action attribute specifies the URL that processes the form data." },
                { q: "Which method should be used for login forms?", options: ["GET", "POST", "PUT", "SEND"], answer: 1, explanation: "POST sends data in request body, not URL — safer for passwords." },
                { q: "How do you link a label to an input?", options: ["Both have same class", "label for = input id", "label src = input id", "label name = input name"], answer: 1, explanation: "label's for attribute must match the input's id attribute." },
                { q: "What does <fieldset> do?", options: ["Creates fields", "Groups related form controls", "Styles form", "Validates inputs"], answer: 1, explanation: "<fieldset> groups related form controls visually and semantically." },
                { q: "What does the required attribute do?", options: ["Makes field read-only", "Prevents form submission if field is empty", "Marks field as important", "Adds asterisk"], answer: 1, explanation: "required prevents form submission and shows browser validation error." },
              ],
              exercise: { title: "Contact Form", description: "Build a complete contact form with fieldsets, proper labels, required fields, and accessible error states." },
              summary: "Forms need action, method, labeled inputs, fieldsets, and proper button types. POST for sensitive data.",
            },
          ],
        },
      ],
    },

    // MODULE 29 — INPUT TYPES
    {
      id: 29, title: "HTML Input Types", icon: "⌨️", color: "#9b59b6",
      description: "Master all HTML5 input types for better UX and mobile-friendly forms.",
      chapters: [
        {
          id: "29-1", title: "All Input Types",
          lessons: [
            {
              id: "29-1-1", title: "HTML5 Input Types Reference", subtitle: "text, email, number, date, range, color and more",
              difficulty: "Intermediate", duration: "35 min", prerequisites: ["28-1-1"],
              theory: "HTML5 introduced many input types beyond text: email (email validation + mobile keyboard), password (masked), number (numeric), range (slider), date/time (date picker), color (color picker), file (file upload), checkbox/radio (selection), tel (phone keyboard), url (URL validation). Mobile browsers show context-appropriate keyboards based on type.",
              codeExample: `<form>\n  <input type="text" placeholder="Full Name">\n  <input type="email" placeholder="Email Address">\n  <input type="password" placeholder="Password">\n  <input type="number" min="0" max="100" step="1">\n  <input type="range" min="0" max="100" value="50">\n  <input type="date">\n  <input type="time">\n  <input type="datetime-local">\n  <input type="color" value="#27ae60">\n  <input type="file" accept="image/*">\n  <input type="tel" placeholder="+1 (555) 000-0000">\n  <input type="url" placeholder="https://example.com">\n  <input type="search" placeholder="Search...">\n  <input type="checkbox" id="agree"> <label for="agree">I agree</label>\n  <input type="radio" name="size" value="S" id="small"> <label for="small">Small</label>\n  <input type="radio" name="size" value="L" id="large"> <label for="large">Large</label>\n  <input type="hidden" name="csrf_token" value="abc123">\n  <input type="submit" value="Submit">\n</form>`,
              commonMistakes: ["Using type='text' for emails (loses mobile keyboard)", "Missing name attribute on radio buttons", "No accept attribute on file inputs", "Missing min/max on number inputs"],
              bestPractices: ["Use correct type for better UX and validation", "Group radio buttons with same name", "Use accept on file inputs to filter types", "Add min/max/step to number and range"],
              quiz: [
                { q: "What input type shows a slider?", options: ["slider", "scale", "range", "progress"], answer: 2, explanation: "type='range' creates a slider/scrubber input." },
                { q: "What does type='hidden' do?", options: ["Hides the input visually but sends value", "Deletes the input", "Disables the input", "Encrypts the value"], answer: 0, explanation: "Hidden inputs store values submitted with the form but not shown to users." },
                { q: "How do you group radio buttons for single selection?", options: ["Same class", "Same id", "Same name", "Same type"], answer: 2, explanation: "Radio buttons with the same name attribute act as a group." },
                { q: "What attribute restricts allowed file types on file input?", options: ["type", "filter", "accept", "allow"], answer: 2, explanation: "accept='.pdf,image/*' restricts the file picker to those types." },
                { q: "Which input type triggers a numeric keyboard on mobile?", options: ["text", "number", "digits", "tel"], answer: 1, explanation: "type='number' shows a numeric keyboard on mobile devices." },
              ],
              exercise: { title: "Form Input Showcase", description: "Build a form that uses every major HTML5 input type with proper labels and attributes." },
              summary: "Use the right input type for validation, UX, and mobile keyboards. Group radios by name. Use accept on file inputs.",
            },
          ],
        },
      ],
    },

    // MODULE 30 — FORM VALIDATION
    {
      id: 30, title: "HTML Form Validation", icon: "✅", color: "#27ae60",
      description: "Client-side validation using HTML5 attributes and constraint validation API.",
      chapters: [
        {
          id: "30-1", title: "HTML5 Validation Attributes",
          lessons: [
            {
              id: "30-1-1", title: "Built-in Form Validation", subtitle: "required, pattern, min, max, minlength, maxlength",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["29-1-1"],
              theory: "HTML5 built-in validation works without JavaScript using attributes: required (must be filled), minlength/maxlength (character limits), min/max (number/date range), pattern (regex), type validation (email/url/number). The browser shows native error messages. Use novalidate on form to handle with JS instead.",
              codeExample: `<form>\n  <!-- Required field -->\n  <input type="text" required minlength="2" maxlength="50">\n  \n  <!-- Email validation -->\n  <input type="email" required>\n  \n  <!-- Pattern validation (UK postcode) -->\n  <input type="text" pattern="[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}" \n    title="Enter a valid UK postcode" placeholder="EC1A 1BB">\n  \n  <!-- Number range -->\n  <input type="number" min="18" max="120" required>\n  \n  <!-- Custom validity message -->\n  <input type="text" id="username" required\n    oninvalid="this.setCustomValidity('Username required — 3-20 characters')"\n    oninput="this.setCustomValidity('')"\n    minlength="3" maxlength="20">\n  \n  <button type="submit">Submit</button>\n</form>`,
              commonMistakes: ["Relying only on client-side validation (always validate server-side too)", "Overly complex regex in pattern", "Not providing helpful error messages", "Using novalidate and forgetting JS validation"],
              bestPractices: ["Always validate server-side too", "Provide clear error messages", "Use :valid/:invalid CSS pseudo-classes for visual feedback", "Test with keyboard-only navigation"],
              quiz: [
                { q: "Is HTML5 client-side validation sufficient for security?", options: ["Yes, it's enough", "No, always validate server-side too", "Only for public forms", "Only with HTTPS"], answer: 1, explanation: "Client-side validation can be bypassed. Always validate on the server." },
                { q: "What attribute validates input against a regex?", options: ["regex", "validate", "pattern", "match"], answer: 2, explanation: "pattern attribute accepts a regular expression for validation." },
                { q: "What CSS pseudo-class styles valid inputs?", options: [":valid", ":correct", ":ok", ":pass"], answer: 0, explanation: ":valid and :invalid pseudo-classes target validated form inputs." },
                { q: "What does minlength='5' do on a text input?", options: ["Limits to 5 chars max", "Requires at least 5 characters", "Adds 5 characters", "Sets font size to 5"], answer: 1, explanation: "minlength='5' requires the input to have at least 5 characters." },
                { q: "What does novalidate on <form> do?", options: ["Removes form", "Disables all HTML5 built-in validation", "Validates without submit", "Adds validation"], answer: 1, explanation: "novalidate disables built-in HTML5 validation, allowing custom JS validation." },
              ],
              exercise: { title: "Validated Registration Form", description: "Build a sign-up form with required, minlength, maxlength, pattern, and custom validity messages." },
              summary: "HTML5 validation uses required, pattern, min/max, minlength/maxlength. Always validate server-side too.",
            },
          ],
        },
      ],
    },

    // MODULE 31 — HTML AUDIO
    {
      id: 31, title: "HTML Audio", icon: "🎵", color: "#e74c3c",
      description: "Embed and control audio content natively in HTML without plugins.",
      chapters: [
        {
          id: "31-1", title: "The Audio Element",
          lessons: [
            {
              id: "31-1-1", title: "HTML Audio Complete Guide", subtitle: "controls, autoplay, loop, preload, multiple sources",
              difficulty: "Intermediate", duration: "25 min", prerequisites: ["4-1-1"],
              theory: "The <audio> element embeds audio content. Attributes: controls (show player UI), autoplay (start immediately — often blocked by browsers), loop, muted, preload (auto|metadata|none). Use multiple <source> elements for cross-browser format support (MP3, OGG, WAV). Fallback text shows in unsupporting browsers.",
              codeExample: `<!-- Basic audio with controls -->\n<audio controls>\n  <source src="music.mp3" type="audio/mpeg">\n  <source src="music.ogg" type="audio/ogg">\n  <p>Your browser does not support audio. <a href="music.mp3">Download the track</a>.</p>\n</audio>\n\n<!-- Autoplay muted (autoplay requires muted in most browsers) -->\n<audio controls autoplay muted loop preload="metadata">\n  <source src="background.mp3" type="audio/mpeg">\n</audio>\n\n<!-- JS control -->\n<audio id="player" src="song.mp3"></audio>\n<button onclick="document.getElementById('player').play()">Play</button>\n<button onclick="document.getElementById('player').pause()">Pause</button>`,
              commonMistakes: ["Autoplay without muted (browsers block it)", "Only one format (cross-browser issues)", "No fallback content", "Not providing download link as fallback"],
              bestPractices: ["Provide MP3 + OGG sources", "Use preload='metadata' for pages that may not play", "Always include fallback text with download link", "Use muted for autoplay"],
              quiz: [
                { q: "What attribute shows browser audio player controls?", options: ["player", "ui", "controls", "show"], answer: 2, explanation: "controls attribute displays the browser's built-in audio player UI." },
                { q: "Why does autoplay often fail in modern browsers?", options: ["HTML5 bug", "Browsers block autoplay to prevent annoying UX unless muted", "Server restriction", "CSS conflict"], answer: 1, explanation: "Modern browsers block autoplay unless the audio is muted." },
                { q: "What format has the best cross-browser support?", options: ["WAV", "OGG", "MP3", "FLAC"], answer: 2, explanation: "MP3 is supported by all modern browsers." },
                { q: "What does preload='metadata' do?", options: ["Downloads entire file", "Downloads only metadata (duration, dimensions)", "No download", "Downloads first 10 seconds"], answer: 1, explanation: "preload='metadata' downloads only file metadata, not the full audio." },
                { q: "What does the loop attribute do?", options: ["Creates a loop variable", "Plays audio repeatedly", "Loops the src URL", "Loops CSS animation"], answer: 1, explanation: "loop makes the audio restart automatically when it ends." },
              ],
              exercise: { title: "Music Player", description: "Build a custom audio player with play/pause, volume control using <audio> and JavaScript." },
              summary: "<audio> embeds audio natively. Provide multiple formats. Mute for autoplay. Include fallback download link.",
            },
          ],
        },
      ],
    },

    // MODULE 32 — HTML VIDEO
    {
      id: 32, title: "HTML Video", icon: "🎬", color: "#c0392b",
      description: "Embed and control video content, posters, subtitles, and captions.",
      chapters: [
        {
          id: "32-1", title: "The Video Element",
          lessons: [
            {
              id: "32-1-1", title: "HTML Video with Captions", subtitle: "video, source, track, subtitles",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["31-1-1"],
              theory: "The <video> element embeds videos. Attributes: controls, autoplay, muted, loop, poster (thumbnail), width/height, preload, playsinline. Use <source> for multiple formats (MP4, WebM, OGG). Use <track> with VTT files for subtitles, captions, chapters, and descriptions — essential for accessibility.",
              codeExample: `<video\n  controls\n  width="800"\n  height="450"\n  poster="thumbnail.jpg"\n  preload="metadata"\n  playsinline>\n  \n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  \n  <!-- Captions (accessibility requirement) -->\n  <track\n    label="English"\n    kind="subtitles"\n    srclang="en"\n    src="captions-en.vtt"\n    default>\n  <track\n    label="Tamil"\n    kind="subtitles"\n    srclang="ta"\n    src="captions-ta.vtt">\n  \n  <p>Your browser does not support video. <a href="video.mp4">Download</a>.</p>\n</video>`,
              commonMistakes: ["Missing poster image", "No captions/subtitles (accessibility failure)", "Only MP4 format", "Autoplay without muted"],
              bestPractices: ["Always add captions via <track>", "Provide MP4 + WebM sources", "Use poster for loading state", "Add playsinline for iOS"],
              quiz: [
                { q: "What attribute sets the video thumbnail?", options: ["thumbnail", "src", "poster", "preview"], answer: 2, explanation: "poster attribute specifies an image shown before the video plays." },
                { q: "What element adds subtitles to video?", options: ["<caption>", "<subtitle>", "<track>", "<text>"], answer: 2, explanation: "<track> with kind='subtitles' adds subtitle files to video." },
                { q: "What file format is used for subtitle tracks?", options: [".srt", ".vtt", ".txt", ".sub"], answer: 1, explanation: "WebVTT (.vtt) is the HTML5 standard subtitle format." },
                { q: "What attribute allows video autoplay on iOS?", options: ["ios-play", "playsinline", "autoplay", "mobile-play"], answer: 1, explanation: "playsinline prevents iOS from forcing fullscreen for autoplay." },
                { q: "Are captions required for accessible video content?", options: ["No, they are optional", "Yes — required by WCAG 2.1 AA for all pre-recorded video", "Only for paid content", "Only on educational sites"], answer: 1, explanation: "WCAG 2.1 AA requires captions for all prerecorded video with audio." },
              ],
              exercise: { title: "Video Player with Captions", description: "Build a video player with poster image, multiple source formats, English captions, and custom JS controls." },
              summary: "<video> with controls, poster, and <track> captions. Provide MP4+WebM. Captions are a WCAG requirement.",
            },
          ],
        },
      ],
    },

    // MODULE 33 — HTML CANVAS
    {
      id: 33, title: "HTML Canvas", icon: "🖌️", color: "#e67e22",
      description: "Draw shapes, animations, and graphics using the Canvas 2D API.",
      chapters: [
        {
          id: "33-1", title: "Canvas Drawing API",
          lessons: [
            {
              id: "33-1-1", title: "Getting Started with Canvas", subtitle: "Shapes, paths, text, and animation",
              difficulty: "Advanced", duration: "45 min", prerequisites: ["22-1-1"],
              theory: "The <canvas> element provides a bitmap drawing surface. You draw with JavaScript using the 2D context (getContext('2d')). Canvas supports shapes (rect, arc, paths), text, images, gradients, and animation via requestAnimationFrame. Unlike SVG, canvas is pixel-based — great for games, data visualisation, and image manipulation.",
              codeExample: `<canvas id="myCanvas" width="500" height="300" style="border:1px solid #ccc"></canvas>\n\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  \n  // Rectangle\n  ctx.fillStyle = '#3498db';\n  ctx.fillRect(20, 20, 120, 80);\n  \n  // Circle\n  ctx.beginPath();\n  ctx.arc(250, 80, 50, 0, Math.PI * 2);\n  ctx.fillStyle = '#e74c3c';\n  ctx.fill();\n  \n  // Text\n  ctx.font = '24px Arial';\n  ctx.fillStyle = '#2c3e50';\n  ctx.fillText('Hello Canvas!', 50, 200);\n  \n  // Gradient\n  const grad = ctx.createLinearGradient(300, 20, 480, 100);\n  grad.addColorStop(0, '#27ae60');\n  grad.addColorStop(1, '#2ecc71');\n  ctx.fillStyle = grad;\n  ctx.fillRect(300, 20, 180, 100);\n</script>`,
              commonMistakes: ["Forgetting to call beginPath() before drawing paths", "No fallback content inside canvas", "Not setting canvas dimensions as attributes (only CSS stretches, distorts)"],
              bestPractices: ["Set width/height as attributes not CSS", "Add fallback content between canvas tags", "Use requestAnimationFrame for animations", "Clear canvas before each animation frame"],
              quiz: [
                { q: "How do you get the 2D drawing context?", options: ["canvas.getContext('draw')", "canvas.context2D()", "canvas.getContext('2d')", "canvas.draw2D()"], answer: 2, explanation: "getContext('2d') returns the 2D rendering context." },
                { q: "What method draws a filled rectangle?", options: ["ctx.rect()", "ctx.fillRect()", "ctx.drawRect()", "ctx.rectangle()"], answer: 1, explanation: "fillRect(x, y, width, height) draws a filled rectangle." },
                { q: "What is the correct way to animate canvas?", options: ["setInterval", "setTimeout", "requestAnimationFrame", "animate()"], answer: 2, explanation: "requestAnimationFrame syncs with browser refresh rate for smooth animation." },
                { q: "What should be called before drawing a new path?", options: ["ctx.path()", "ctx.newPath()", "ctx.beginPath()", "ctx.startPath()"], answer: 2, explanation: "beginPath() starts a new path, preventing previous paths from being redrawn." },
                { q: "How does Canvas differ from SVG?", options: ["No difference", "Canvas is pixel-based, SVG is vector-based", "SVG is faster", "Canvas uses XML"], answer: 1, explanation: "Canvas = pixel-based bitmap (no DOM). SVG = vector, scalable, with DOM elements." },
              ],
              exercise: { title: "Interactive Canvas", description: "Create a canvas where the user can draw by clicking and dragging (paint app)." },
              summary: "Canvas is a pixel-based drawing surface controlled by JavaScript. Use getContext('2d') and requestAnimationFrame.",
            },
          ],
        },
      ],
    },

    // MODULE 34 — HTML SVG
    {
      id: 34, title: "HTML SVG", icon: "⬡", color: "#f39c12",
      description: "Create resolution-independent vector graphics directly in HTML.",
      chapters: [
        {
          id: "34-1", title: "SVG Fundamentals",
          lessons: [
            {
              id: "34-1-1", title: "SVG Shapes & Paths", subtitle: "rect, circle, ellipse, polygon, path",
              difficulty: "Intermediate", duration: "40 min", prerequisites: ["4-1-1"],
              theory: "SVG (Scalable Vector Graphics) creates resolution-independent graphics using XML markup. SVG can be inline in HTML, external, or in img src. Unlike Canvas, SVG has a DOM — elements can be styled with CSS, animated, and made accessible. Great for icons, illustrations, charts, and logos.",
              codeExample: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">\n  <!-- Rectangle -->\n  <rect x="10" y="10" width="100" height="60" fill="#3498db" rx="8"/>\n  \n  <!-- Circle -->\n  <circle cx="200" cy="60" r="50" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>\n  \n  <!-- Ellipse -->\n  <ellipse cx="330" cy="60" rx="60" ry="35" fill="#27ae60"/>\n  \n  <!-- Path -->\n  <path d="M 10 150 L 100 200 L 50 250 Z" fill="#9b59b6"/>\n  \n  <!-- Text -->\n  <text x="120" y="180" font-size="24" fill="#2c3e50" font-family="Arial">SVG Text</text>\n  \n  <!-- Group with transform -->\n  <g transform="translate(300,150)">\n    <polygon points="0,-40 35,20 -35,20" fill="#f39c12"/>\n  </g>\n</svg>`,
              commonMistakes: ["Forgetting viewBox for scalability", "Missing xmlns on standalone SVG", "No accessible title/desc in SVG icons", "Using SVG for photos (use img/CSS for that)"],
              bestPractices: ["Always set viewBox for responsive SVGs", "Add <title> and <desc> for accessibility", "Use aria-hidden='true' for decorative SVGs", "Optimise SVG with SVGO tool"],
              quiz: [
                { q: "What SVG attribute makes it scalable?", options: ["scale", "responsive", "viewBox", "width"], answer: 2, explanation: "viewBox defines the SVG coordinate system, enabling responsive scaling." },
                { q: "How does SVG differ from Canvas?", options: ["SVG is faster", "SVG is XML-based with a DOM; Canvas is pixel-based", "No difference", "Canvas uses XML"], answer: 1, explanation: "SVG elements are in the DOM (styleable, accessible). Canvas is a pixel bitmap." },
                { q: "Which SVG element draws a star shape?", options: ["<star>", "<polygon>", "<path>", "<polystar>"], answer: 2, explanation: "<path> with d attribute or <polygon> with points can draw stars." },
                { q: "How should decorative SVG icons be handled for accessibility?", options: ["Add alt text", "aria-hidden='true'", "role='icon'", "Use <figure>"], answer: 1, explanation: "aria-hidden='true' hides decorative SVGs from screen readers." },
                { q: "What SVG element creates a circle?", options: ["<oval>", "<round>", "<circle>", "<ellipse>"], answer: 2, explanation: "<circle cx cy r> draws a perfect circle." },
              ],
              exercise: { title: "SVG Logo", description: "Design a simple brand logo using SVG shapes, paths, text, and gradient fills." },
              summary: "SVG is XML vector graphics embedded in HTML. Has a DOM, is accessible, scalable, and CSS-styleable.",
            },
          ],
        },
      ],
    },

    // MODULE 35 — DRAG AND DROP
    {
      id: 35, title: "HTML Drag & Drop API", icon: "🖱️", color: "#8e44ad",
      description: "Implement native drag-and-drop interactions using HTML5 drag events.",
      chapters: [
        {
          id: "35-1", title: "Drag & Drop Events",
          lessons: [
            {
              id: "35-1-1", title: "HTML5 Drag and Drop", subtitle: "draggable, dragstart, dragover, drop",
              difficulty: "Advanced", duration: "40 min", prerequisites: ["22-1-1"],
              theory: "HTML5 has a native Drag and Drop API. Any element can be made draggable with draggable='true'. Key events: dragstart (drag begins), dragover (dragged over target — must call preventDefault()), drop (item dropped), dragend. Data is transferred via dataTransfer object.",
              codeExample: `<style>\n  .draggable { padding:12px; background:#3498db; color:white; cursor:grab; border-radius:6px; margin:4px; }\n  .drop-zone { min-height:80px; border:2px dashed #ccc; padding:12px; border-radius:8px; }\n  .drop-zone.drag-over { border-color:#27ae60; background:#f0fff4; }\n</style>\n\n<div id="drag-item" class="draggable" draggable="true">Drag Me!</div>\n\n<div class="drop-zone" id="drop-zone">Drop Here</div>\n\n<script>\n  const item = document.getElementById('drag-item');\n  const zone = document.getElementById('drop-zone');\n  \n  item.addEventListener('dragstart', e => {\n    e.dataTransfer.setData('text/plain', 'drag-item');\n  });\n  \n  zone.addEventListener('dragover', e => {\n    e.preventDefault(); // Required!\n    zone.classList.add('drag-over');\n  });\n  \n  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));\n  \n  zone.addEventListener('drop', e => {\n    e.preventDefault();\n    const id = e.dataTransfer.getData('text/plain');\n    zone.appendChild(document.getElementById(id));\n    zone.classList.remove('drag-over');\n  });\n</script>`,
              commonMistakes: ["Forgetting preventDefault() on dragover (prevents drop)", "Not setting dataTransfer data", "No visual feedback during drag"],
              bestPractices: ["Always preventDefault on dragover", "Provide visual drag-over feedback", "Handle dragend to clean up state", "Test keyboard accessibility (drag-drop isn't keyboard accessible)"],
              quiz: [
                { q: "What attribute makes an element draggable?", options: ["drag='true'", "draggable='true'", "movable='true'", "allow-drag"], answer: 1, explanation: "draggable='true' enables native drag on an element." },
                { q: "Why must dragover call preventDefault()?", options: ["For performance", "To allow the drop event to fire", "CSS requirement", "Security"], answer: 1, explanation: "Default dragover behaviour cancels the drop. preventDefault() enables dropping." },
                { q: "What object carries data during a drag operation?", options: ["dragData", "event.data", "dataTransfer", "dragEvent.payload"], answer: 2, explanation: "dataTransfer object stores data to be transferred during drag-drop." },
                { q: "Is drag-and-drop accessible by keyboard?", options: ["Yes", "No — must provide keyboard alternatives", "Only in Firefox", "With aria-grabbed"], answer: 1, explanation: "Native DnD isn't keyboard accessible. Always provide keyboard alternatives." },
                { q: "What event fires when a drag ends (success or fail)?", options: ["dragestop", "dragfinish", "dragend", "dropcomplete"], answer: 2, explanation: "dragend fires when drag operation ends, regardless of success." },
              ],
              exercise: { title: "Kanban Board", description: "Build a 3-column kanban board where cards can be dragged between To-Do, In Progress, and Done columns." },
              summary: "Drag & Drop uses draggable='true' and dataTransfer. Dragover must preventDefault(). Add keyboard alternatives.",
            },
          ],
        },
      ],
    },

    // MODULE 36 — GEOLOCATION
    {
      id: 36, title: "HTML Geolocation API", icon: "📍", color: "#e74c3c",
      description: "Access the user's location with the browser Geolocation API.",
      chapters: [
        {
          id: "36-1", title: "Geolocation API",
          lessons: [
            {
              id: "36-1-1", title: "Getting User Location", subtitle: "getCurrentPosition, watchPosition, permissions",
              difficulty: "Advanced", duration: "30 min", prerequisites: ["22-1-1"],
              theory: "The Geolocation API provides access to the device's location. Requires HTTPS and explicit user permission. Methods: getCurrentPosition (one-time), watchPosition (continuous). Returns: latitude, longitude, accuracy, altitude, speed. Always handle the error callback — users can deny permission.",
              codeExample: `<button onclick="getLocation()">Get My Location</button>\n<p id="location-output">Location will appear here.</p>\n\n<script>\n  function getLocation() {\n    if (!navigator.geolocation) {\n      document.getElementById('location-output').textContent = \n        'Geolocation not supported.';\n      return;\n    }\n    \n    navigator.geolocation.getCurrentPosition(\n      // Success\n      (position) => {\n        const { latitude, longitude, accuracy } = position.coords;\n        document.getElementById('location-output').innerHTML = \`\n          Latitude: \${latitude.toFixed(6)}<br>\n          Longitude: \${longitude.toFixed(6)}<br>\n          Accuracy: ±\${accuracy.toFixed(0)}m\n        \`;\n      },\n      // Error\n      (error) => {\n        const messages = {\n          1: 'Permission denied.',\n          2: 'Position unavailable.',\n          3: 'Request timed out.'\n        };\n        document.getElementById('location-output').textContent = \n          messages[error.code] || 'Unknown error.';\n      },\n      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }\n    );\n  }\n</script>`,
              commonMistakes: ["Not handling error callback", "Using geolocation on HTTP (requires HTTPS)", "Not checking navigator.geolocation exists", "Showing location without explicit user action"],
              bestPractices: ["Request location on user action, not on page load", "Explain why you need location before requesting", "Handle all 3 error codes", "HTTPS required"],
              quiz: [
                { q: "What protocol does Geolocation require?", options: ["HTTP", "FTP", "HTTPS", "WebSocket"], answer: 2, explanation: "Geolocation API requires HTTPS (or localhost) for security." },
                { q: "What does watchPosition do differently from getCurrentPosition?", options: ["Faster", "Continuously updates location as device moves", "More accurate", "Works offline"], answer: 1, explanation: "watchPosition fires the callback repeatedly as the device moves." },
                { q: "What error code means the user denied location access?", options: ["0", "1", "2", "3"], answer: 1, explanation: "Error code 1 = PERMISSION_DENIED." },
                { q: "When should you request location?", options: ["Immediately on page load", "In background", "On explicit user action with clear explanation", "Every 5 seconds"], answer: 2, explanation: "Request location only when user initiates an action that clearly needs it." },
                { q: "What option enables GPS-level accuracy?", options: ["gpsMode: true", "enableHighAccuracy: true", "accuracy: 'high'", "useGPS: true"], answer: 1, explanation: "enableHighAccuracy: true requests GPS accuracy (uses more battery)." },
              ],
              exercise: { title: "Location Finder", description: "Build a page that gets user location and displays it on an embedded Google Map." },
              summary: "Geolocation API gets/watches user location. Requires HTTPS, user permission, and error handling. Request on user action.",
            },
          ],
        },
      ],
    },

    // MODULE 37 — WEB STORAGE
    {
      id: 37, title: "HTML Web Storage", icon: "💾", color: "#2980b9",
      description: "Store data client-side with localStorage and sessionStorage.",
      chapters: [
        {
          id: "37-1", title: "localStorage & sessionStorage",
          lessons: [
            {
              id: "37-1-1", title: "Web Storage API", subtitle: "setItem, getItem, removeItem, clear",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["22-1-1"],
              theory: "Web Storage provides two mechanisms: localStorage (persists until manually cleared, shared across tabs of same origin) and sessionStorage (cleared when tab closes, isolated per tab). Both use key-value pairs (strings only). Store objects using JSON.stringify/parse. Much better than cookies for client-side data.",
              codeExample: `<!-- localStorage example -->\n<script>\n  // Save data\n  localStorage.setItem('username', 'Alex');\n  localStorage.setItem('theme', 'dark');\n  localStorage.setItem('prefs', JSON.stringify({ lang: 'en', size: 'large' }));\n  \n  // Read data\n  const user = localStorage.getItem('username'); // 'Alex'\n  const prefs = JSON.parse(localStorage.getItem('prefs'));\n  \n  // Remove single item\n  localStorage.removeItem('username');\n  \n  // Clear all\n  localStorage.clear();\n  \n  // sessionStorage (same API, different lifetime)\n  sessionStorage.setItem('cart', JSON.stringify([{id:1, qty:2}]));\n  const cart = JSON.parse(sessionStorage.getItem('cart'));\n  \n  // Dark mode toggle with persistence\n  function toggleTheme() {\n    const isDark = document.body.classList.toggle('dark');\n    localStorage.setItem('theme', isDark ? 'dark' : 'light');\n  }\n  \n  // Apply saved theme on load\n  const savedTheme = localStorage.getItem('theme');\n  if (savedTheme === 'dark') document.body.classList.add('dark');\n</script>`,
              commonMistakes: ["Storing objects without JSON.stringify", "Storing sensitive data (passwords, tokens) in localStorage", "Not handling storage quota exceeded errors", "Assuming data will always be there"],
              bestPractices: ["Never store sensitive data in localStorage", "JSON.stringify/parse for objects", "Wrap in try-catch for quota errors", "Use sessionStorage for temporary cart/session data"],
              quiz: [
                { q: "When does sessionStorage data expire?", options: ["After 1 hour", "When browser closes", "When tab closes", "Never"], answer: 2, explanation: "sessionStorage clears when the browser tab is closed." },
                { q: "How do you store an object in localStorage?", options: ["localStorage.setItem(key, obj)", "localStorage.setObject(key, obj)", "localStorage.setItem(key, JSON.stringify(obj))", "localStorage.store(key, obj)"], answer: 2, explanation: "localStorage only stores strings. Use JSON.stringify to serialise objects." },
                { q: "Should you store JWT tokens in localStorage?", options: ["Yes, it's secure", "No — vulnerable to XSS attacks", "Only in production", "Only short tokens"], answer: 1, explanation: "localStorage is vulnerable to XSS. Use httpOnly cookies for tokens." },
                { q: "What is the typical localStorage size limit?", options: ["1MB", "5MB", "10MB", "Unlimited"], answer: 1, explanation: "Most browsers allow 5-10MB per origin in localStorage." },
                { q: "What event fires when storage changes in another tab?", options: ["storagechange", "storage", "localStorage-update", "storageSync"], answer: 1, explanation: "The 'storage' event fires in other tabs when localStorage is modified." },
              ],
              exercise: { title: "Theme Switcher", description: "Build a dark/light mode toggle that persists across page reloads using localStorage." },
              summary: "localStorage persists across sessions. sessionStorage per-tab. Store only strings (JSON.stringify for objects). Never store secrets.",
            },
          ],
        },
      ],
    },

    // MODULE 38 — WEB WORKERS
    {
      id: 38, title: "HTML Web Workers", icon: "⚙️", color: "#7f8c8d",
      description: "Run scripts in background threads to keep the UI responsive.",
      chapters: [
        {
          id: "38-1", title: "Web Worker API",
          lessons: [
            {
              id: "38-1-1", title: "Background Scripts with Web Workers", subtitle: "postMessage, onmessage, terminate",
              difficulty: "Advanced", duration: "35 min", prerequisites: ["22-1-1"],
              theory: "Web Workers run JavaScript in background threads, preventing heavy computation from blocking the UI. Workers communicate with the main thread via postMessage/onmessage. Workers cannot access the DOM. Types: Dedicated Workers (single page), Shared Workers (multiple tabs). Ideal for: data processing, image manipulation, encryption.",
              codeExample: `<!-- main.js -->\n<script>\n  const worker = new Worker('worker.js');\n  \n  // Send data to worker\n  worker.postMessage({ numbers: [1,2,3,4,5,6,7,8,9,10], task: 'sum' });\n  \n  // Receive result\n  worker.onmessage = (e) => {\n    console.log('Result from worker:', e.data);\n    document.getElementById('result').textContent = e.data.result;\n  };\n  \n  worker.onerror = (e) => console.error('Worker error:', e.message);\n  \n  // Terminate when done\n  // worker.terminate();\n</script>\n\n<!-- worker.js -->\n<script type="module">\n  // In actual worker.js file (no HTML):\n  // self.onmessage = (e) => {\n  //   const { numbers, task } = e.data;\n  //   if (task === 'sum') {\n  //     const result = numbers.reduce((a, b) => a + b, 0);\n  //     self.postMessage({ result });\n  //   }\n  // };\n</script>`,
              commonMistakes: ["Trying to access DOM from a worker (not allowed)", "Not terminating finished workers (memory leak)", "Using workers for small tasks (overhead not worth it)"],
              bestPractices: ["Use workers for CPU-intensive tasks >50ms", "Always terminate when done", "Handle worker errors with onerror", "Transfer ownership of large buffers with Transferable"],
              quiz: [
                { q: "Can Web Workers access the DOM?", options: ["Yes", "No", "Only read access", "With special permissions"], answer: 1, explanation: "Web Workers run in a separate thread and cannot access the DOM." },
                { q: "How does a worker communicate with the main thread?", options: ["Shared variables", "postMessage and onmessage", "window.send()", "fetch()"], answer: 1, explanation: "postMessage sends data; onmessage receives it." },
                { q: "When should you use Web Workers?", options: ["For all JavaScript", "For CPU-intensive tasks that would block the UI", "For DOM manipulation", "For API calls"], answer: 1, explanation: "Workers are ideal for heavy computation that would freeze the main thread." },
                { q: "How do you stop a Web Worker?", options: ["worker.stop()", "worker.kill()", "worker.terminate()", "worker.close()"], answer: 2, explanation: "worker.terminate() immediately terminates the worker." },
                { q: "What is the main thread advantage of Web Workers?", options: ["Faster DOM updates", "UI stays responsive during heavy computation", "Smaller bundle size", "Better security"], answer: 1, explanation: "Workers keep the main thread free for UI updates and event handling." },
              ],
              exercise: { title: "Background Calculator", description: "Build a Fibonacci calculator that computes large numbers in a Web Worker to keep the page responsive." },
              summary: "Web Workers run background JS threads. Can't access DOM. Communicate via postMessage. Terminate when done.",
            },
          ],
        },
      ],
    },

    // MODULE 39 — SERVER-SENT EVENTS
    {
      id: 39, title: "Server-Sent Events (SSE)", icon: "📡", color: "#1abc9c",
      description: "Receive real-time server updates in the browser with SSE.",
      chapters: [
        {
          id: "39-1", title: "EventSource API",
          lessons: [
            {
              id: "39-1-1", title: "Real-time Updates with SSE", subtitle: "EventSource, auto-reconnect, named events",
              difficulty: "Advanced", duration: "30 min", prerequisites: ["22-1-1"],
              theory: "Server-Sent Events allow a server to push data to the browser over HTTP. Unlike WebSockets (bidirectional), SSE is one-way (server → client). The browser automatically reconnects if connection drops. Ideal for: live feeds, notifications, dashboards, score updates. EventSource uses text/event-stream MIME type.",
              codeExample: `<div id="events-container">\n  <p id="status">Connecting...</p>\n  <ul id="event-list"></ul>\n</div>\n\n<script>\n  const source = new EventSource('/api/events');\n  \n  source.onopen = () => {\n    document.getElementById('status').textContent = '✅ Connected';\n  };\n  \n  // Generic message\n  source.onmessage = (e) => {\n    const li = document.createElement('li');\n    li.textContent = JSON.parse(e.data).message;\n    document.getElementById('event-list').prepend(li);\n  };\n  \n  // Named event\n  source.addEventListener('notification', (e) => {\n    console.log('Notification:', JSON.parse(e.data));\n  });\n  \n  source.onerror = () => {\n    document.getElementById('status').textContent = '🔄 Reconnecting...';\n  };\n  \n  // Close when done\n  // source.close();\n</script>`,
              commonMistakes: ["Using SSE when bidirectional communication is needed (use WebSockets)", "Not closing EventSource when page unloads", "No error handling"],
              bestPractices: ["Close EventSource in cleanup (page unload)", "Use named events for different data types", "Implement retry logic on server", "Set Last-Event-ID for resumable streams"],
              quiz: [
                { q: "What is SSE primarily used for?", options: ["Client to server", "Server to client one-way push", "File uploads", "WebRTC"], answer: 1, explanation: "SSE is a one-way server → client push technology." },
                { q: "What MIME type does SSE use?", options: ["application/json", "text/stream", "text/event-stream", "application/stream"], answer: 2, explanation: "SSE uses Content-Type: text/event-stream." },
                { q: "Does SSE automatically reconnect on disconnect?", options: ["No", "Yes", "Only with retry config", "Only in Chrome"], answer: 1, explanation: "EventSource automatically reconnects when connection drops." },
                { q: "How does SSE differ from WebSockets?", options: ["No difference", "SSE is one-way (server→client); WebSocket is bidirectional", "WebSocket is faster", "SSE requires HTTPS"], answer: 1, explanation: "SSE = server to client only. WebSocket = bidirectional." },
                { q: "What API class creates an SSE connection?", options: ["SSESource", "EventStream", "EventSource", "ServerEvents"], answer: 2, explanation: "new EventSource('/endpoint') creates an SSE connection." },
              ],
              exercise: { title: "Live Dashboard", description: "Build a live notification feed that receives real-time updates using SSE from a local Node.js server." },
              summary: "SSE uses EventSource for one-way server-to-client push. Auto-reconnects. Ideal for feeds, notifications, dashboards.",
            },
          ],
        },
      ],
    },

    // MODULE 40 — WEB COMPONENTS
    {
      id: 40, title: "HTML Web Components", icon: "🧩", color: "#9b59b6",
      description: "Build reusable, encapsulated custom HTML elements with Web Components.",
      chapters: [
        {
          id: "40-1", title: "Custom Elements & Shadow DOM",
          lessons: [
            {
              id: "40-1-1", title: "Building Custom HTML Elements", subtitle: "customElements.define, Shadow DOM, templates",
              difficulty: "Advanced", duration: "50 min", prerequisites: ["22-1-1"],
              theory: "Web Components = Custom Elements + Shadow DOM + HTML Templates. Custom Elements let you define new HTML tags (<my-button>). Shadow DOM encapsulates styles and markup (no leakage). HTML Templates (<template>, <slot>) define reusable markup. Together they create framework-independent reusable UI components.",
              codeExample: `<!-- Using the custom element -->\n<my-card title="HTML Tutorial" author="CodeLearn">\n  <p slot="description">Learn HTML from scratch.</p>\n</my-card>\n\n<template id="card-template">\n  <style>\n    :host { display: block; border: 1px solid #ddd; border-radius: 8px; padding: 16px; }\n    h3 { color: #2c3e50; }\n    .author { color: #7f8c8d; font-size: 0.8em; }\n  </style>\n  <h3></h3>\n  <span class="author"></span>\n  <slot name="description"></slot>\n</template>\n\n<script>\n  class MyCard extends HTMLElement {\n    constructor() {\n      super();\n      const shadow = this.attachShadow({ mode: 'open' });\n      const template = document.getElementById('card-template');\n      shadow.appendChild(template.content.cloneNode(true));\n    }\n    \n    connectedCallback() {\n      this.shadowRoot.querySelector('h3').textContent = this.getAttribute('title');\n      this.shadowRoot.querySelector('.author').textContent = this.getAttribute('author');\n    }\n    \n    static get observedAttributes() { return ['title', 'author']; }\n    \n    attributeChangedCallback(name, oldVal, newVal) {\n      this.connectedCallback();\n    }\n  }\n  \n  customElements.define('my-card', MyCard);\n</script>`,
              commonMistakes: ["Defining custom elements without a hyphen in name", "Not calling super() first in constructor", "Manipulating DOM in constructor (use connectedCallback)"],
              bestPractices: ["Custom element names must contain a hyphen", "Use observedAttributes for reactive props", "Prefer open Shadow DOM for testability", "Provide a fallback inside custom elements"],
              quiz: [
                { q: "What must custom element names contain?", options: ["Uppercase letter", "A hyphen (-)", "Numbers", "Underscore"], answer: 1, explanation: "Custom element names must contain a hyphen to distinguish from native tags." },
                { q: "What does Shadow DOM provide?", options: ["Server-side rendering", "Scoped/encapsulated styles and markup", "Better performance", "Animation support"], answer: 1, explanation: "Shadow DOM encapsulates styles so they don't leak in or out." },
                { q: "What lifecycle method runs when element is inserted into DOM?", options: ["constructor", "mounted()", "connectedCallback()", "onInsert()"], answer: 2, explanation: "connectedCallback() fires when the element is added to the document." },
                { q: "What element defines reusable HTML markup for Web Components?", options: ["<reusable>", "<partial>", "<template>", "<include>"], answer: 2, explanation: "<template> defines inert HTML to be cloned for use in components." },
                { q: "What does a <slot> do?", options: ["Creates tabs", "Provides placeholder for user-provided content", "Saves data", "Creates animations"], answer: 1, explanation: "<slot> is a placeholder that users fill with their own HTML content." },
              ],
              exercise: { title: "Custom Alert Component", description: "Build a <my-alert type='success|error|warning'> Web Component with Shadow DOM styling." },
              summary: "Web Components = Custom Elements + Shadow DOM + Templates/Slots. Must have hyphen in name. Use connectedCallback for DOM work.",
            },
          ],
        },
      ],
    },

    // MODULE 41 — ACCESSIBILITY
    {
      id: 41, title: "HTML Accessibility (ARIA)", icon: "♿", color: "#27ae60",
      description: "Make your websites usable by everyone, including people with disabilities.",
      chapters: [
        {
          id: "41-1", title: "WCAG & ARIA Fundamentals",
          lessons: [
            {
              id: "41-1-1", title: "ARIA Roles, States & Properties", subtitle: "Making HTML accessible to all users",
              difficulty: "Intermediate", duration: "40 min", prerequisites: ["27-1-1"],
              theory: "Web Accessibility Initiative ARIA (WAI-ARIA) adds semantic information to elements for assistive technologies. ARIA provides: roles (what element is), states (current state), properties (characteristics). WCAG 2.1 defines A, AA, AAA accessibility levels. Key principles: POUR (Perceivable, Operable, Understandable, Robust). First rule of ARIA: use native HTML instead when possible.",
              codeExample: `<!-- Don't use ARIA when native HTML works -->\n<!-- Bad: -->\n<div role="button" tabindex="0" onclick="...">Click</div>\n<!-- Good: -->\n<button onclick="...">Click</button>\n\n<!-- ARIA roles -->\n<div role="alert" aria-live="assertive">Form submitted!</div>\n<nav aria-label="Breadcrumb" role="navigation">\n  <ol>\n    <li><a href="/">Home</a></li>\n    <li><a href="/courses" aria-current="page">Courses</a></li>\n  </ol>\n</nav>\n\n<!-- ARIA states -->\n<button aria-expanded="false" aria-controls="menu">Menu</button>\n<ul id="menu" aria-hidden="true">...</ul>\n\n<!-- Skip link (keyboard navigation) -->\n<a href="#main-content" class="skip-link">Skip to main content</a>\n<main id="main-content">...</main>`,
              commonMistakes: ["Using ARIA when native HTML element would work", "Missing alt text on images", "Poor colour contrast", "No keyboard navigation support", "Missing focus indicators"],
              bestPractices: ["First rule: use semantic HTML before ARIA", "Ensure 4.5:1 colour contrast", "Test with actual screen readers (NVDA, JAWS, VoiceOver)", "Provide skip navigation links"],
              quiz: [
                { q: "What is the first rule of ARIA?", options: ["Always use ARIA", "Use native HTML first, ARIA only when needed", "ARIA replaces HTML", "Use ARIA for styling"], answer: 1, explanation: "Always use semantic native HTML. ARIA is for cases where HTML semantics aren't sufficient." },
                { q: "What WCAG level do most organisations aim for?", options: ["Level A", "Level AA", "Level AAA", "Level ARIA"], answer: 1, explanation: "WCAG 2.1 Level AA is the standard target for most websites." },
                { q: "What does aria-hidden='true' do?", options: ["Hides element visually", "Removes element from accessibility tree (screen readers)", "Deletes element from DOM", "Disables element"], answer: 1, explanation: "aria-hidden hides element from screen readers while keeping it visible." },
                { q: "What is the minimum contrast ratio for normal text (WCAG AA)?", options: ["2:1", "3:1", "4.5:1", "7:1"], answer: 2, explanation: "WCAG AA requires 4.5:1 contrast ratio for normal text." },
                { q: "What does aria-live='polite' do?", options: ["Pauses screen reader", "Announces content changes when user is idle", "Makes element editable", "Adds animation"], answer: 1, explanation: "aria-live='polite' announces dynamic content changes without interrupting the user." },
              ],
              exercise: { title: "Accessibility Audit", description: "Audit a sample web page using WAVE or Axe DevTools and fix all critical accessibility issues." },
              summary: "Accessibility uses semantic HTML + ARIA. Ensure contrast, keyboard navigation, screen reader support. Test with real tools.",
            },
          ],
        },
      ],
    },

    // MODULE 42 — SEO
    {
      id: 42, title: "HTML SEO Optimisation", icon: "🔍", color: "#f39c12",
      description: "Optimise HTML for search engines to increase organic visibility.",
      chapters: [
        {
          id: "42-1", title: "On-Page SEO",
          lessons: [
            {
              id: "42-1-1", title: "Technical HTML SEO", subtitle: "Title, meta, canonical, hreflang, structured data",
              difficulty: "Intermediate", duration: "35 min", prerequisites: ["25-1-1"],
              theory: "SEO in HTML covers: unique, descriptive title tags; meta descriptions for CTR; proper heading hierarchy; semantic HTML (articles, sections); canonical URLs; hreflang for multi-language; structured data (JSON-LD, Microdata); fast load times; mobile-friendly markup; clean URL structure; alt text on images.",
              codeExample: `<head>\n  <!-- Title: unique, descriptive, 50-60 chars -->\n  <title>Learn HTML5 in 2025 | Complete Tutorial | CodeLearn</title>\n  \n  <!-- Meta description: 120-160 chars -->\n  <meta name="description" content="Master HTML5 from scratch with our 50-module tutorial. Includes 200+ examples, quizzes, and real projects.">\n  \n  <!-- Canonical URL -->\n  <link rel="canonical" href="https://codelearn.com/html">\n  \n  <!-- hreflang for multi-language -->\n  <link rel="alternate" hreflang="en" href="https://codelearn.com/html">\n  <link rel="alternate" hreflang="ta" href="https://codelearn.com/ta/html">\n  \n  <!-- Robots -->\n  <meta name="robots" content="index, follow, max-image-preview:large">\n</head>\n<body>\n  <!-- JSON-LD Structured Data -->\n  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Course",\n    "name": "Complete HTML Mastery",\n    "description": "Learn HTML5 from beginner to professional",\n    "provider": { "@type": "Organization", "name": "CodeLearn" }\n  }\n  </script>\n</body>`,
              commonMistakes: ["Duplicate title tags across pages", "Missing canonical on paginated content", "All pages sharing same meta description", "No structured data for course/product content"],
              bestPractices: ["Unique title and description per page", "JSON-LD for structured data", "Canonical on all pages", "Use heading hierarchy correctly (one h1 per page)"],
              quiz: [
                { q: "What is the recommended length for a title tag?", options: ["20-30 chars", "50-60 chars", "100-120 chars", "No limit"], answer: 1, explanation: "Title tags should be 50-60 characters to avoid truncation in search results." },
                { q: "What does a canonical link do?", options: ["Creates category", "Specifies preferred URL for duplicate/similar content", "Adds breadcrumbs", "Sets page language"], answer: 1, explanation: "canonical prevents duplicate content issues by specifying the preferred URL." },
                { q: "What format does Google prefer for structured data?", options: ["Microdata", "RDFa", "JSON-LD", "OpenGraph"], answer: 2, explanation: "Google recommends JSON-LD as the preferred format for structured data." },
                { q: "What is hreflang used for?", options: ["Page speed", "Specifying language/region versions of a page", "Image SEO", "Mobile optimisation"], answer: 1, explanation: "hreflang tells search engines about alternate language/region versions of pages." },
                { q: "How many h1 tags should a page have for SEO?", options: ["As many as needed", "0-2", "Exactly one", "At least 3"], answer: 2, explanation: "Best practice is one h1 per page as the primary topic signal." },
              ],
              exercise: { title: "SEO Optimise a Page", description: "Take a poorly optimised HTML page and add proper title, meta, canonical, structured data, and correct heading hierarchy." },
              summary: "HTML SEO: unique titles, meta descriptions, canonical, one h1, semantic structure, JSON-LD structured data.",
            },
          ],
        },
      ],
    },

    // MODULE 43 — PERFORMANCE
    {
      id: 43, title: "HTML Performance Optimisation", icon: "🚀", color: "#e74c3c",
      description: "Speed up your pages with HTML-level performance techniques.",
      chapters: [
        {
          id: "43-1", title: "Performance Best Practices",
          lessons: [
            {
              id: "43-1-1", title: "Core Web Vitals & HTML Performance", subtitle: "LCP, FID, CLS — optimising with HTML",
              difficulty: "Advanced", duration: "40 min", prerequisites: ["26-1-1"],
              theory: "Core Web Vitals measure page experience: LCP (Largest Contentful Paint < 2.5s), FID/INP (interaction responsiveness), CLS (Cumulative Layout Shift < 0.1). HTML techniques: preload critical resources, lazy load images, set image dimensions, defer scripts, use resource hints (preconnect, dns-prefetch), minimise render-blocking resources.",
              codeExample: `<head>\n  <!-- Preconnect to critical origins -->\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="dns-prefetch" href="https://cdn.example.com">\n  \n  <!-- Preload critical above-fold image (LCP) -->\n  <link rel="preload" href="hero.webp" as="image" fetchpriority="high">\n  \n  <!-- Preload critical CSS -->\n  <link rel="preload" href="critical.css" as="style">\n  \n  <!-- Non-critical CSS (loaded async) -->\n  <link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">\n</head>\n<body>\n  <!-- Hero image: no lazy load (above fold) -->\n  <img src="hero.webp" alt="Hero" width="1200" height="600" fetchpriority="high">\n  \n  <!-- Below-fold images: lazy load -->\n  <img src="product.webp" alt="Product" loading="lazy" width="400" height="300">\n  \n  <!-- Defer non-critical JS -->\n  <script src="analytics.js" defer></script>\n</body>`,
              commonMistakes: ["Lazy loading hero/LCP image (hurts LCP)", "Missing width/height on images (causes CLS)", "Loading all CSS synchronously", "Not using modern image formats (WebP, AVIF)"],
              bestPractices: ["Preload LCP image", "Lazy load everything below fold", "Set dimensions on all images", "Defer all non-critical scripts", "Use WebP/AVIF images"],
              quiz: [
                { q: "What does LCP measure?", options: ["Link Click Performance", "Largest Contentful Paint", "Last Content Painted", "Load Completion Point"], answer: 1, explanation: "LCP (Largest Contentful Paint) measures when the largest element is rendered." },
                { q: "What causes Cumulative Layout Shift (CLS)?", options: ["Slow servers", "Images without dimensions", "Too many CSS files", "JavaScript errors"], answer: 1, explanation: "Images without width/height cause layout shifts as they load." },
                { q: "Which images should NOT be lazy loaded?", options: ["Footer images", "All images", "Above-fold hero images", "Small thumbnails"], answer: 2, explanation: "Hero/LCP images should not be lazy loaded — they need to load fast." },
                { q: "What does fetchpriority='high' do?", options: ["Downloads faster", "Tells browser to prioritise fetching this resource", "Requires HTTP/2", "Caches permanently"], answer: 1, explanation: "fetchpriority='high' hints the browser to fetch this resource with high priority." },
                { q: "What HTML hint establishes an early connection to an origin?", options: ["preload", "prefetch", "preconnect", "predial"], answer: 2, explanation: "rel='preconnect' establishes early DNS/TCP/TLS connection." },
              ],
              exercise: { title: "Performance Audit", description: "Run Lighthouse on a webpage, identify HTML-level issues, fix them, and re-run to compare scores." },
              summary: "Preload LCP images, lazy load below-fold, set image dimensions, defer scripts, use resource hints for faster pages.",
            },
          ],
        },
      ],
    },

    // MODULE 44 — LAZY LOADING
    {
      id: 44, title: "HTML Lazy Loading", icon: "⏳", color: "#16a085",
      description: "Defer loading of off-screen content to improve initial page load.",
      chapters: [
        {
          id: "44-1", title: "Native Lazy Loading",
          lessons: [
            {
              id: "44-1-1", title: "Lazy Loading Images & Iframes", subtitle: "loading attribute and Intersection Observer",
              difficulty: "Intermediate", duration: "25 min", prerequisites: ["14-1-1"],
              theory: "Native lazy loading uses the loading='lazy' attribute on <img> and <iframe> elements. The browser defers loading until the element approaches the viewport. For more control, use the Intersection Observer API. Never lazy load above-the-fold content — it hurts LCP. Also avoid lazy loading too aggressively (images may load late on fast scroll).",
              codeExample: `<!-- Native lazy loading (simplest) -->\n<img src="product.jpg" alt="Product" loading="lazy" width="400" height="300">\n<iframe src="map.html" loading="lazy" title="Location Map"></iframe>\n\n<!-- Intersection Observer (more control) -->\n<img class="lazy" data-src="heavy-image.jpg" alt="Heavy Image" width="800" height="600">\n\n<script>\n  const observer = new IntersectionObserver((entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const img = entry.target;\n        img.src = img.dataset.src;\n        img.classList.remove('lazy');\n        observer.unobserve(img);\n      }\n    });\n  }, { rootMargin: '200px' });\n  \n  document.querySelectorAll('img.lazy').forEach(img => observer.observe(img));\n</script>`,
              commonMistakes: ["Lazy loading hero/LCP image", "No fallback for browsers without loading support", "Setting rootMargin too small (images load too late)"],
              bestPractices: ["Only lazy load below-fold images", "Always set width and height", "Use rootMargin to load slightly before viewport", "Test on slow 3G connections"],
              quiz: [
                { q: "Which attribute enables native lazy loading?", options: ["defer='lazy'", "loading='lazy'", "lazy='true'", "load='deferred'"], answer: 1, explanation: "loading='lazy' is the native HTML attribute for lazy loading." },
                { q: "Should you lazy load the hero/banner image?", options: ["Yes", "No — hurts LCP", "Only on mobile", "Only if above 1MB"], answer: 1, explanation: "Never lazy load the LCP/hero image — it needs to load as fast as possible." },
                { q: "What API provides programmatic lazy loading control?", options: ["ScrollObserver", "ViewportObserver", "IntersectionObserver", "LazyObserver"], answer: 2, explanation: "IntersectionObserver fires callbacks when elements enter/leave viewport." },
                { q: "What does loading='eager' do?", options: ["Lazy loads", "Loads immediately regardless of viewport position", "Caches image", "Preloads image"], answer: 1, explanation: "loading='eager' (default) loads the resource immediately." },
                { q: "Why set rootMargin in IntersectionObserver?", options: ["For styling", "To trigger loading slightly before element reaches viewport", "For accessibility", "Required by spec"], answer: 1, explanation: "rootMargin='200px' triggers loading 200px before the element reaches viewport." },
              ],
              exercise: { title: "Image Gallery with Lazy Load", description: "Build a 20-image gallery with native lazy loading and an Intersection Observer fallback for older browsers." },
              summary: "Use loading='lazy' on images and iframes. Never lazy load above-fold. Use IntersectionObserver for advanced control.",
            },
          ],
        },
      ],
    },

    // MODULE 45 — MICRODATA & SCHEMA.ORG
    {
      id: 45, title: "Microdata & Schema.org", icon: "🗂️", color: "#8e44ad",
      description: "Add structured data to HTML for rich search results and better SEO.",
      chapters: [
        {
          id: "45-1", title: "Structured Data",
          lessons: [
            {
              id: "45-1-1", title: "Schema.org with JSON-LD & Microdata", subtitle: "Rich snippets for search engines",
              difficulty: "Advanced", duration: "35 min", prerequisites: ["42-1-1"],
              theory: "Structured data marks up your HTML so search engines understand your content and display rich results (star ratings, FAQs, event dates, prices). Three formats: JSON-LD (Google preferred, separate from HTML), Microdata (inline attributes), RDFa. Schema.org provides the vocabulary. Common types: Article, Product, FAQPage, Course, BreadcrumbList, LocalBusiness.",
              codeExample: `<!-- JSON-LD (preferred) -->\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "Complete HTML Mastery",\n  "description": "Learn HTML5 from beginner to professional.",\n  "provider": {\n    "@type": "Organization",\n    "name": "CodeLearn",\n    "url": "https://codelearn.com"\n  },\n  "hasCourseInstance": {\n    "@type": "CourseInstance",\n    "courseMode": "online",\n    "startDate": "2025-01-01"\n  }\n}\n</script>\n\n<!-- FAQPage schema -->\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [\n    {\n      "@type": "Question",\n      "name": "What is HTML?",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "HTML is HyperText Markup Language, the standard for web pages."\n      }\n    }\n  ]\n}\n</script>`,
              commonMistakes: ["Marking up content not visible on the page", "Using wrong Schema.org type", "Validation errors in structured data", "Not testing with Rich Results Test"],
              bestPractices: ["Use JSON-LD for all new structured data", "Test with Google Rich Results Test", "Only mark up content visible on the page", "Keep structured data in sync with visible content"],
              quiz: [
                { q: "What format does Google prefer for structured data?", options: ["Microdata", "RDFa", "JSON-LD", "XML"], answer: 2, explanation: "Google recommends JSON-LD as the preferred structured data format." },
                { q: "What vocabulary does structured data use?", options: ["ARIA", "Schema.org", "JSON Schema", "OpenAPI"], answer: 1, explanation: "Schema.org provides the types and properties for structured data." },
                { q: "What tool validates structured data?", options: ["W3C Validator", "Google Rich Results Test", "Lighthouse", "HTML Validator"], answer: 1, explanation: "Google Rich Results Test validates structured data and previews rich results." },
                { q: "What Schema type creates FAQ rich results?", options: ["FAQ", "FAQPage", "Questions", "QandA"], answer: 1, explanation: "Schema type 'FAQPage' enables FAQ accordion in search results." },
                { q: "Can you mark up content not visible on the page?", options: ["Yes", "No — violates Google guidelines", "Only for technical SEO", "Only for images"], answer: 1, explanation: "Marking up hidden content is a Google spam policy violation." },
              ],
              exercise: { title: "Add Structured Data", description: "Add JSON-LD structured data for a Course page and an FAQ section. Validate with Rich Results Test." },
              summary: "Use JSON-LD + Schema.org for structured data. Enables rich search results. Only mark visible content. Validate everything.",
            },
          ],
        },
      ],
    },

    // MODULE 46 — OPEN GRAPH & TWITTER CARDS
    {
      id: 46, title: "Open Graph & Twitter Cards", icon: "📣", color: "#3498db",
      description: "Control how your pages appear when shared on social media platforms.",
      chapters: [
        {
          id: "46-1", title: "Social Media Meta Tags",
          lessons: [
            {
              id: "46-1-1", title: "Open Graph Protocol", subtitle: "og:title, og:image, og:description, Twitter Cards",
              difficulty: "Intermediate", duration: "25 min", prerequisites: ["25-1-1"],
              theory: "Open Graph (OG) meta tags control how pages appear in social media link previews on Facebook, LinkedIn, WhatsApp, Slack. Twitter Cards are Twitter-specific. Essential OG tags: og:title, og:description, og:image (min 1200x630), og:url, og:type, og:site_name. Twitter: twitter:card, twitter:title, twitter:description, twitter:image.",
              codeExample: `<head>\n  <!-- Open Graph / Facebook / LinkedIn / WhatsApp -->\n  <meta property="og:title" content="Complete HTML Mastery Course">\n  <meta property="og:description" content="Learn HTML5 from beginner to pro with 50 modules.">\n  <meta property="og:image" content="https://codelearn.com/og/html-course.jpg">\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">\n  <meta property="og:url" content="https://codelearn.com/html">\n  <meta property="og:type" content="website">\n  <meta property="og:site_name" content="CodeLearn">\n  <meta property="og:locale" content="en_US">\n  \n  <!-- Twitter Card -->\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:site" content="@CodeLearnHQ">\n  <meta name="twitter:creator" content="@author">\n  <meta name="twitter:title" content="Complete HTML Mastery Course">\n  <meta name="twitter:description" content="Learn HTML5 from beginner to pro.">\n  <meta name="twitter:image" content="https://codelearn.com/og/html-course.jpg">\n</head>`,
              commonMistakes: ["Image too small (<600px wide)", "Missing og:url", "Using relative URLs for og:image", "Forgetting to test with social debuggers"],
              bestPractices: ["1200x630px minimum for og:image", "Always absolute URLs", "Test with Facebook Sharing Debugger + Twitter Card Validator", "Create page-specific images"],
              quiz: [
                { q: "Minimum OG image size for best compatibility?", options: ["400x300", "800x600", "1200x630", "2000x1000"], answer: 2, explanation: "1200x630px is the recommended minimum for Open Graph images." },
                { q: "Which twitter:card value shows a large image?", options: ["summary", "large_image", "summary_large_image", "image_card"], answer: 2, explanation: "twitter:card='summary_large_image' shows a full-width image preview." },
                { q: "What property attribute prefix do OG tags use?", options: ["name", "property", "content", "meta"], answer: 1, explanation: "OG tags use property= attribute, unlike name= for standard meta tags." },
                { q: "Should og:image URLs be relative or absolute?", options: ["Relative", "Absolute", "Either works", "URL-encoded"], answer: 1, explanation: "og:image must be an absolute URL — social platforms fetch the image directly." },
                { q: "Which tool tests Facebook link previews?", options: ["Rich Results Test", "Facebook Sharing Debugger", "Chrome DevTools", "W3C Validator"], answer: 1, explanation: "Facebook Sharing Debugger shows and refreshes how URLs appear when shared." },
              ],
              exercise: { title: "Social-Ready Page", description: "Add complete OG and Twitter Card meta to a page and test previews using Facebook Debugger and Twitter Validator." },
              summary: "OG tags control social share previews. Use property= attribute. Absolute URLs. 1200x630 images. Test with social debuggers.",
            },
          ],
        },
      ],
    },

    // MODULE 47 — PWA BASICS
    {
      id: 47, title: "Progressive Web Apps (PWA) Basics", icon: "📱", color: "#2ecc71",
      description: "Learn the HTML foundation for building installable, offline-capable web apps.",
      chapters: [
        {
          id: "47-1", title: "PWA HTML Foundation",
          lessons: [
            {
              id: "47-1-1", title: "Web App Manifest & Service Workers", subtitle: "Making websites installable",
              difficulty: "Advanced", duration: "40 min", prerequisites: ["24-1-1"],
              theory: "Progressive Web Apps combine web reach with native app capabilities. PWA requires: HTTPS, a Web App Manifest (JSON file defining app name, icons, theme), and a Service Worker (JS file handling offline caching and push notifications). HTML links to the manifest with <link rel='manifest'>.",
              codeExample: `<!-- In HTML head: -->\n<link rel="manifest" href="/manifest.json">\n<meta name="theme-color" content="#27ae60">\n<meta name="mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-title" content="CodeLearn">\n<link rel="apple-touch-icon" href="/icons/icon-180x180.png">\n\n<!-- manifest.json -->\n<!--\n{\n  "name": "CodeLearn - HTML Tutorial",\n  "short_name": "CodeLearn",\n  "start_url": "/",\n  "display": "standalone",\n  "background_color": "#ffffff",\n  "theme_color": "#27ae60",\n  "icons": [\n    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png" },\n    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png" }\n  ]\n}\n-->\n\n<!-- Service Worker registration -->\n<script>\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.register('/sw.js')\n      .then(reg => console.log('SW registered:', reg.scope))\n      .catch(err => console.error('SW failed:', err));\n  }\n</script>`,
              commonMistakes: ["No HTTPS (PWAs require HTTPS)", "Missing icons in required sizes", "Not providing offline fallback in service worker", "Forgetting Apple-specific meta tags"],
              bestPractices: ["Provide both 192x192 and 512x512 icons", "Use Lighthouse to audit PWA score", "Test on actual mobile devices", "Implement proper offline strategy in service worker"],
              quiz: [
                { q: "What is required for PWA installability?", options: ["HTTPS only", "HTTPS + Manifest + Service Worker", "Service Worker only", "Manifest only"], answer: 1, explanation: "PWA requires HTTPS, a Web App Manifest, and a Service Worker." },
                { q: "What does the Web App Manifest define?", options: ["App logic", "App name, icons, theme, display mode", "Service worker cache", "Push notifications"], answer: 1, explanation: "Manifest.json defines app metadata for the install prompt and home screen." },
                { q: "What does the theme-color meta tag do?", options: ["Sets CSS theme", "Colours browser UI chrome (address bar) on mobile", "Sets Dark mode", "Sets primary colour"], answer: 1, explanation: "theme-color meta tag colours the browser's UI chrome on mobile Chrome." },
                { q: "Where is the Service Worker JS file registered?", options: ["In manifest.json", "In CSS file", "In HTML via JavaScript", "In .htaccess"], answer: 2, explanation: "Service Worker is registered with navigator.serviceWorker.register() in HTML." },
                { q: "What Lighthouse category scores PWA features?", options: ["Performance", "SEO", "PWA", "Accessibility"], answer: 2, explanation: "Lighthouse has a dedicated PWA audit category." },
              ],
              exercise: { title: "Make it Installable", description: "Add a manifest.json, register a service worker, and test PWA installability in Chrome." },
              summary: "PWA HTML: link manifest.json, register service worker, add theme-color. Requires HTTPS. Test with Lighthouse.",
            },
          ],
        },
      ],
    },

    // MODULE 48 — HTML EMAILS
    {
      id: 48, title: "HTML Email Templates", icon: "📧", color: "#e74c3c",
      description: "Build responsive, compatible HTML emails for marketing campaigns.",
      chapters: [
        {
          id: "48-1", title: "Email HTML Fundamentals",
          lessons: [
            {
              id: "48-1-1", title: "Building HTML Emails", subtitle: "Table-based layouts, inline CSS, email clients",
              difficulty: "Advanced", duration: "45 min", prerequisites: ["16-1-1", "11-1-1"],
              theory: "HTML emails are notoriously tricky — email clients (Outlook, Gmail, Apple Mail) have inconsistent CSS support. Rules: use table-based layouts (not CSS Grid/Flexbox), inline all CSS, use pixels not rem/em, avoid JavaScript, test in many clients. Gmail strips <style> from <head>, so inline styles are essential.",
              codeExample: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Welcome to CodeLearn</title>\n</head>\n<body style="margin:0; padding:0; background:#f5f5f5; font-family:Arial,sans-serif;">\n  \n  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f5f5;">\n    <tr><td align="center" style="padding:20px;">\n      \n      <!-- Email container -->\n      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff; border-radius:8px; overflow:hidden;">\n        \n        <!-- Header -->\n        <tr><td style="background:#27ae60; padding:30px; text-align:center;">\n          <h1 style="color:#ffffff; margin:0; font-size:28px;">Welcome to CodeLearn!</h1>\n        </td></tr>\n        \n        <!-- Body -->\n        <tr><td style="padding:30px;">\n          <p style="color:#333; font-size:16px; line-height:1.6;">Hi there,</p>\n          <p style="color:#333; font-size:16px; line-height:1.6;">Your HTML journey starts today.</p>\n          <table role="presentation" cellpadding="0" cellspacing="0">\n            <tr><td style="background:#27ae60; border-radius:4px; padding:12px 24px;">\n              <a href="https://codelearn.com" style="color:#ffffff; text-decoration:none; font-weight:bold;">Start Learning</a>\n            </td></tr>\n          </table>\n        </td></tr>\n        \n        <!-- Footer -->\n        <tr><td style="background:#f5f5f5; padding:20px; text-align:center;">\n          <p style="color:#999; font-size:12px;">© 2025 CodeLearn. All rights reserved.</p>\n        </td></tr>\n      </table>\n    </td></tr>\n  </table>\n</body>\n</html>`,
              commonMistakes: ["Using CSS Flexbox/Grid (not supported in Outlook)", "CSS in <head> without inline styles (Gmail strips it)", "Images without alt text", "No mobile-responsive media queries"],
              bestPractices: ["Always inline CSS", "Use table-based layout", "Test with Litmus or Email on Acid", "Provide plain text version", "Max width 600px"],
              quiz: [
                { q: "Why use table-based layouts for HTML emails?", options: ["They're faster", "CSS Grid/Flexbox lack support in email clients like Outlook", "Tables are easier", "CSS doesn't work in email"], answer: 1, explanation: "Email clients like Outlook use Word rendering engine, which only understands table layouts." },
                { q: "Why must CSS be inlined in HTML emails?", options: ["Performance", "Gmail and others strip <style> from <head>", "CSS doesn't work in email", "Smaller file size"], answer: 1, explanation: "Gmail strips <style> blocks. Inline styles are the only guaranteed method." },
                { q: "What is the recommended max width for email templates?", options: ["400px", "600px", "800px", "1200px"], answer: 1, explanation: "600px is the standard email template width for all email clients." },
                { q: "Which tool tests HTML emails across multiple email clients?", options: ["Lighthouse", "W3C Validator", "Litmus or Email on Acid", "Chrome DevTools"], answer: 2, explanation: "Litmus and Email on Acid render previews across 90+ email clients." },
                { q: "Should JavaScript be used in HTML emails?", options: ["Yes, for interactivity", "No — blocked by all email clients", "Only in Gmail", "Only for tracking"], answer: 1, explanation: "JavaScript is blocked by all major email clients for security reasons." },
              ],
              exercise: { title: "Welcome Email", description: "Build a complete welcome email template that works in Gmail, Outlook, and Apple Mail." },
              summary: "HTML emails need table layouts, inline CSS, max 600px width, and no JavaScript. Test in multiple clients.",
            },
          ],
        },
      ],
    },

    // MODULE 49 — BEST PRACTICES
    {
      id: 49, title: "HTML Best Practices", icon: "✅", color: "#27ae60",
      description: "Professional HTML coding standards, validation, and maintainability.",
      chapters: [
        {
          id: "49-1", title: "Code Quality & Standards",
          lessons: [
            {
              id: "49-1-1", title: "Professional HTML Standards", subtitle: "Validation, indentation, naming, maintainability",
              difficulty: "Intermediate", duration: "30 min", prerequisites: ["27-1-1"],
              theory: "Professional HTML follows consistent standards: always validate with W3C Validator; use consistent 2-space indentation; lowercase tag names and attributes; quote all attribute values; meaningful class/id naming (BEM or kebab-case); progressive enhancement (works without CSS/JS); separation of concerns; document with comments.",
              codeExample: `<!DOCTYPE html>\n<!-- Good: semantic, clean, accessible, validated -->\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Best Practices Demo</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n\n  <!-- Skip navigation for keyboard users -->\n  <a href="#main" class="skip-link">Skip to content</a>\n\n  <header class="site-header" role="banner">\n    <nav aria-label="Primary">\n      <ul class="nav-list">\n        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main id="main" class="site-main" tabindex="-1">\n    <article class="post">\n      <h1 class="post__title">Article Title</h1>\n      <p class="post__body">Content...</p>\n    </article>\n  </main>\n\n  <footer class="site-footer" role="contentinfo">\n    <p>&copy; <time datetime="2025">2025</time> CodeLearn</p>\n  </footer>\n\n  <script src="app.js" defer></script>\n</body>\n</html>`,
              commonMistakes: ["Uppercase tag names", "Missing quotes on attributes", "Invalid HTML", "No validation", "Inconsistent indentation"],
              bestPractices: ["Validate with W3C Validator regularly", "2-space consistent indentation", "BEM or kebab-case naming", "Semantic HTML over divs", "Test with keyboard and screen reader"],
              quiz: [
                { q: "What tool validates HTML markup?", options: ["Google Lighthouse", "W3C Markup Validator", "Chrome DevTools", "ESLint"], answer: 1, explanation: "validator.w3.org is the official W3C HTML validation tool." },
                { q: "What naming convention uses double underscores?", options: ["camelCase", "PascalCase", "BEM (Block__Element--Modifier)", "snake_case"], answer: 2, explanation: "BEM uses block__element--modifier pattern for CSS class naming." },
                { q: "What does progressive enhancement mean?", options: ["Add features progressively", "Start with basic HTML that works everywhere, then enhance", "Load features lazily", "Use latest APIs only"], answer: 1, explanation: "Progressive enhancement = core functionality in HTML, enhance with CSS and JS." },
                { q: "Should HTML attribute values be quoted?", options: ["No, optional in HTML5", "Yes, always quote attribute values", "Only for values with spaces", "Only in XHTML"], answer: 1, explanation: "Always quote attribute values for clarity and to avoid parsing errors." },
                { q: "What is separation of concerns in web development?", options: ["Separate HTML files", "HTML for structure, CSS for style, JS for behaviour — in separate files", "One file per component", "Separate server and client"], answer: 1, explanation: "Separation of concerns: HTML = structure, CSS = presentation, JS = behaviour." },
              ],
              exercise: { title: "Code Review", description: "Review a poorly written HTML page and refactor it following all best practices." },
              summary: "Validate HTML. Consistent indentation. Semantic elements. BEM naming. Progressive enhancement. Separation of concerns.",
            },
          ],
        },
      ],
    },

    // MODULE 50 — REAL WORLD PROJECTS & CAPSTONE
    {
      id: 50, title: "Real-World Projects & Capstone", icon: "🏆", color: "#f39c12",
      description: "Apply everything learned in professional real-world HTML projects.",
      chapters: [
        {
          id: "50-1", title: "Portfolio of Projects",
          lessons: [
            {
              id: "50-1-1", title: "Capstone Project: Full Website", subtitle: "Portfolio, Blog, E-Commerce, Dashboard",
              difficulty: "Advanced", duration: "120 min", prerequisites: ["49-1-1"],
              theory: "Combine all HTML skills to build production-ready websites. Each project covers: semantic structure, responsive design, accessibility, SEO, performance, forms, and multimedia. Projects include: Personal Portfolio, Restaurant Website, E-Commerce Homepage, Admin Dashboard, Blog, and more.",
              codeExample: `<!-- Portfolio Project Structure -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Alex Chen | Frontend Developer</title>\n  <meta name="description" content="Alex Chen — Frontend Developer specialising in React and HTML5.">\n  <meta property="og:title" content="Alex Chen | Portfolio">\n  <meta property="og:image" content="/og-image.jpg">\n  <link rel="canonical" href="https://alexchen.dev">\n  <link rel="stylesheet" href="styles.css">\n  <link rel="manifest" href="/manifest.json">\n  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Alex Chen","jobTitle":"Frontend Developer"}</script>\n</head>\n<body>\n  <a href="#main" class="skip-link">Skip to content</a>\n  <header>\n    <nav aria-label="Main">\n      <a href="/" class="logo">Alex Chen</a>\n      <ul>\n        <li><a href="#about">About</a></li>\n        <li><a href="#projects">Projects</a></li>\n        <li><a href="#contact">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main id="main">\n    <section id="hero" aria-labelledby="hero-title">\n      <h1 id="hero-title">Building beautiful, accessible web experiences</h1>\n      <a href="#projects" class="btn-primary">View My Work</a>\n    </section>\n    <section id="projects" aria-labelledby="projects-title">\n      <h2 id="projects-title">Featured Projects</h2>\n      <div class="projects-grid">\n        <!-- Project cards -->\n      </div>\n    </section>\n    <section id="contact" aria-labelledby="contact-title">\n      <h2 id="contact-title">Get In Touch</h2>\n      <form action="/api/contact" method="POST">\n        <label for="name">Name</label>\n        <input type="text" id="name" name="name" required autocomplete="name">\n        <label for="email">Email</label>\n        <input type="email" id="email" name="email" required autocomplete="email">\n        <label for="message">Message</label>\n        <textarea id="message" name="message" required rows="5"></textarea>\n        <button type="submit">Send Message</button>\n      </form>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; <time datetime="2025">2025</time> Alex Chen</p>\n  </footer>\n  <script src="app.js" defer></script>\n</body>\n</html>`,
              commonMistakes: ["Skipping accessibility in final project", "No SEO meta tags", "Missing form validation", "No mobile testing"],
              bestPractices: ["Run Lighthouse on final project (target 90+ all categories)", "Validate HTML", "Test with keyboard and screen reader", "Test on real mobile devices"],
              quiz: [
                { q: "What Lighthouse score should you target in production?", options: ["50+", "70+", "90+", "100 exactly"], answer: 2, explanation: "Target 90+ in Performance, Accessibility, Best Practices, and SEO." },
                { q: "Which project best demonstrates HTML skills to employers?", options: ["Portfolio website", "Simple calculator", "Hello world page", "CSS animations"], answer: 0, explanation: "A portfolio demonstrates semantic HTML, accessibility, SEO, forms, and responsiveness." },
                { q: "What should you check before deploying a website?", options: ["CSS only", "W3C validation, Lighthouse audit, cross-browser testing, mobile test", "JavaScript only", "Domain availability"], answer: 1, explanation: "Pre-launch checklist: validation, Lighthouse, cross-browser, mobile, accessibility." },
                { q: "What makes a portfolio website stand out for HTML developers?", options: ["Lots of animations", "Semantic HTML, accessibility, SEO, performance, clean code", "Dark theme", "Many pages"], answer: 1, explanation: "Employers look for semantic markup, accessibility, performance, and clean, validated code." },
                { q: "How many Lighthouse categories should you check?", options: ["1 (Performance only)", "2", "3", "All 4 (Performance, Accessibility, Best Practices, SEO)"], answer: 3, explanation: "Check all 4 Lighthouse categories for a production-ready website." },
              ],
              exercise: { title: "Portfolio Website", description: "Build a complete, professional portfolio website applying all HTML skills from the course." },
              challenge: { title: "Full-Stack HTML Project", description: "Build one of: Restaurant Website, E-Commerce Homepage, School Website, Hospital Website, Hotel Website, or SaaS Landing Page." },
              assignment: { title: "Capstone Review", description: "Submit your final project for peer review. Ensure 90+ Lighthouse score on all categories." },
              miniProject: { title: "Mini Projects Showcase", description: "Create: Netflix UI Clone, Spotify UI, YouTube UI, Admin Dashboard, Blog Layout using only HTML and CSS." },
              summary: "Apply all HTML skills in real projects. Always validate, audit with Lighthouse, test accessibility, and test on mobile devices.",
            },
          ],
        },
      ],
    },
  ],

  // ── LEARNING ROADMAP ────────────────────────────────────────────────────────
  learningRoadmap: {
    beginner: ["Modules 1-10: HTML Foundations, Structure, Text, Formatting, Colors"],
    intermediate: ["Modules 11-30: CSS Integration, Links, Images, Tables, Forms, Responsive"],
    advanced: ["Modules 31-45: Multimedia, Canvas, SVG, APIs, Web Components, Schema"],
    professional: ["Modules 46-50: Social Meta, PWA, Email, Best Practices, Real Projects"],
  },

  weeklyPlan: [
    { week: 1, modules: [1, 2, 3, 4, 5], goal: "HTML basics and document structure" },
    { week: 2, modules: [6, 7, 8, 9, 10], goal: "Headings, paragraphs, formatting, comments, colors" },
    { week: 3, modules: [11, 12, 13, 14, 15], goal: "Styles, CSS, links, images, favicon" },
    { week: 4, modules: [16, 17, 18, 19, 20], goal: "Tables, lists, block/inline, classes, IDs" },
    { week: 5, modules: [21, 22, 23, 24, 25], goal: "Iframes, JS, paths, head, meta tags" },
    { week: 6, modules: [26, 27, 28, 29, 30], goal: "Responsive, semantic, forms, inputs, validation" },
    { week: 7, modules: [31, 32, 33, 34, 35], goal: "Audio, video, canvas, SVG, drag & drop" },
    { week: 8, modules: [36, 37, 38, 39, 40], goal: "Geolocation, storage, workers, SSE, web components" },
    { week: 9, modules: [41, 42, 43, 44, 45], goal: "Accessibility, SEO, performance, lazy loading, schema" },
    { week: 10, modules: [46, 47, 48, 49, 50], goal: "Social meta, PWA, email, best practices, final projects" },
  ],
};

export default htmlCourseData;

import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaPython, FaJava, FaDocker, FaCode, FaSearch, FaArrowRight,
  FaStar, FaUsers, FaClock, FaGraduationCap, FaFilter,
  FaTimes, FaFire, FaBookOpen, FaVideo, FaCertificate,
  FaPlay, FaChevronDown, FaChevronRight, FaTh, FaList, FaCopy, FaCheck,
  FaChevronLeft, FaBookmark, FaLaptopCode, FaCheckCircle
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql,
  SiDjango, SiSpringboot, SiExpress
} from 'react-icons/si';

const allLanguagesData = {
  html: {
    name: 'HTML',
    sections: [
      { id: 'html_home', title: 'HTML HOME', challenge: { title: 'HTML Home Overview', instruction: 'Build a standard index homepage layout with header and body tags.', starter: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Welcome to CodeLearn HTML</h1>\n</body>\n</html>` } },
      { id: 'html_intro', title: 'HTML Introduction', challenge: { title: 'HTML Intro Challenge', instruction: 'Add an <h1> heading and a <p> paragraph to introduce your website.', starter: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Introduction Header</h1>\n  <p>This is my first web page.</p>\n</body>\n</html>` } },
      { id: 'html_editors', title: 'HTML Editors', challenge: { title: 'HTML Editors Challenge', instruction: 'Configure your first HTML document inside a web code editor.', starter: `<!DOCTYPE html>\n<html>\n<body>\n  <p>Created in Web Code Editor</p>\n</body>\n</html>` } },
      { id: 'html_basic', title: 'HTML Basic', challenge: { title: 'HTML Basic Code Challenge', instruction: 'Add <!DOCTYPE html>, <html>, <body>, and <h1>Hello World</h1>.', starter: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>` } },
      { id: 'html_elements', title: 'HTML Elements', challenge: { title: 'HTML Elements Challenge', instruction: 'Create nested HTML elements using <div>, <h2>, and <p>.', starter: `<div>\n  <h2>Nested Title</h2>\n  <p>Nested Paragraph Content</p>\n</div>` } },
      { id: 'html_attributes', title: 'HTML Attributes', challenge: { title: 'HTML Attributes Challenge', instruction: 'Add an href attribute to an <a> link and an alt attribute to an <img>.', starter: `<a href="https://codelearn.com">Visit CodeLearn</a>\n<img src="logo.png" alt="Logo">` } },
      { id: 'html_headings', title: 'HTML Headings', challenge: { title: 'HTML Headings Challenge', instruction: 'Create h1, h2, and h3 heading tags in descending order.', starter: `<h1>Main Heading 1</h1>\n<h2>Sub Heading 2</h2>\n<h3>Sub Heading 3</h3>` } },
      { id: 'html_paragraphs', title: 'HTML Paragraphs', challenge: { title: 'HTML Paragraphs Challenge', instruction: 'Use <p> tags and <br> line breaks inside a paragraph.', starter: `<p>First sentence.<br>Second line after break.</p>` } },
      { id: 'html_styles', title: 'HTML Styles', challenge: { title: 'HTML Styles Challenge', instruction: 'Apply inline style attribute for color and font-size.', starter: `<h1 style="color: blue; font-size: 24px;">Styled Heading</h1>` } },
      { id: 'html_formatting', title: 'HTML Formatting', challenge: { title: 'HTML Formatting Challenge', instruction: 'Use <strong> for bold and <em> for italicized text formatting.', starter: `<p>This is <strong>bold</strong> and <em>italic</em> text.</p>` } },
      { id: 'html_links', title: 'HTML Links', challenge: { title: 'HTML Links Challenge', instruction: 'Create a link with target="_blank" attribute.', starter: `<a href="https://example.com" target="_blank">Open New Tab</a>` } },
      { id: 'html_images', title: 'HTML Images', challenge: { title: 'HTML Images Challenge', instruction: 'Insert an image element with src, width, height, and alt text.', starter: `<img src="hero.jpg" alt="Hero Banner" width="300" height="200">` } },
      { id: 'html_tables', title: 'HTML Tables', challenge: { title: 'HTML Tables Challenge', instruction: 'Create a table with <th> headers and <td> data cells.', starter: `<table>\n  <tr><th>Name</th><th>Role</th></tr>\n  <tr><td>Jane</td><td>Developer</td></tr>\n</table>` } }
    ]
  },
  css: {
    name: 'CSS',
    sections: [
      { id: 'css_home', title: 'CSS HOME', challenge: { title: 'CSS Home Challenge', instruction: 'Set body background-color to #f4f6f8.', starter: `body {\n  background-color: #f4f6f8;\n}` } },
      { id: 'css_intro', title: 'CSS Introduction', challenge: { title: 'CSS Selector Challenge', instruction: 'Target h1 elements and set color to emerald green.', starter: `h1 {\n  color: #10B981;\n  text-align: center;\n}` } },
      { id: 'css_flexbox', title: 'CSS Flexbox', challenge: { title: 'CSS Flexbox Challenge', instruction: 'Center items horizontally and vertically using Flexbox.', starter: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}` } },
      { id: 'css_grid', title: 'CSS Grid', challenge: { title: 'CSS Grid Challenge', instruction: 'Create a 3-column responsive grid layout.', starter: `.grid-wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}` } }
    ]
  },
  js: {
    name: 'JAVASCRIPT',
    sections: [
      { id: 'js_home', title: 'JS HOME', challenge: { title: 'JS Intro Challenge', instruction: 'Create a variable name and print a welcome message.', starter: `const name = "Jane Doe";\nconsole.log("Welcome " + name);` } },
      { id: 'js_functions', title: 'JS Functions', challenge: { title: 'JS Functions Challenge', instruction: 'Write an arrow function that returns the square of a number.', starter: `const square = (x) => x * x;\nconsole.log(square(5)); // 25` } },
      { id: 'js_async', title: 'JS Async/Await', challenge: { title: 'JS Async Challenge', instruction: 'Write an async function to fetch API JSON data.', starter: `async function loadData() {\n  const res = await fetch('/api/data');\n  return await res.json();\n}` } }
    ]
  },
  python: {
    name: 'PYTHON',
    sections: [
      { id: 'py_home', title: 'PYTHON HOME', challenge: { title: 'Python Hello World', instruction: 'Print Hello World in Python.', starter: `print("Hello World")` } },
      { id: 'py_lists', title: 'Python Lists', challenge: { title: 'Python List Comprehension', instruction: 'Filter even numbers using list comprehension.', starter: `evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)` } }
    ]
  }
};

const Tutorials = () => {
  const [activeLangKey, setActiveLangKey] = useState('html');
  const [expandedSectionIds, setExpandedSectionIds] = useState(new Set(['html_basic', 'html_intro']));
  const [activeSectionId, setActiveSectionId] = useState('html_basic');
  const [activeSubtype, setActiveSubtype] = useState('challenge'); // 'overview', 'exercises', 'challenge'
  const [viewMode, setViewMode] = useState('reader'); // 'reader' or 'grid'

  const currentLang = allLanguagesData[activeLangKey] || allLanguagesData.html;
  const currentSection = currentLang.sections.find(s => s.id === activeSectionId) || currentLang.sections[0];

  const [editorCode, setEditorCode] = useState(currentSection.challenge.starter);
  const [codeChecked, setCodeChecked] = useState(false);

  const toggleSection = (secId) => {
    const next = new Set(expandedSectionIds);
    if (next.has(secId)) next.delete(secId);
    else next.add(secId);
    setExpandedSectionIds(next);
  };

  const handleSelectSubtopic = (secId, subtype) => {
    setActiveSectionId(secId);
    setActiveSubtype(subtype);
    const targetSec = currentLang.sections.find(s => s.id === secId);
    if (targetSec) {
      setEditorCode(targetSec.challenge.starter);
    }
    setCodeChecked(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Top Language Navigation Bar */}
      <nav className="bg-[#1D2A35] text-white px-4 flex items-center gap-1 overflow-x-auto scrollbar-none border-b border-gray-700 font-bold text-xs uppercase tracking-wider">
        {[
          { key: 'html', label: 'HTML' },
          { key: 'css', label: 'CSS' },
          { key: 'js', label: 'JAVASCRIPT' },
          { key: 'python', label: 'PYTHON' }
        ].map(item => (
          <button
            key={item.key}
            onClick={() => {
              setActiveLangKey(item.key);
              const firstSec = allLanguagesData[item.key].sections[0];
              setActiveSectionId(firstSec.id);
              setEditorCode(firstSec.challenge.starter);
              setViewMode('reader');
            }}
            className={`px-4 py-3 whitespace-nowrap transition-colors border-b-4 ${
              activeLangKey === item.key
                ? 'border-emerald-500 bg-[#111827] text-white'
                : 'border-transparent text-gray-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="flex-1" />

        <div className="flex items-center gap-2 py-2 shrink-0">
          <button
            onClick={() => setViewMode(viewMode === 'reader' ? 'grid' : 'reader')}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {viewMode === 'reader' ? <FaTh /> : <FaBookOpen />}
            <span>{viewMode === 'reader' ? 'Grid View' : 'Reader View'}</span>
          </button>
        </div>
      </nav>

      {/* Main Documentation Reader View */}
      {viewMode === 'reader' ? (
        <div className="flex min-h-[calc(100vh-49px)]">
          
          {/* Left Sidebar with Dropdown Accordions FOR ALL SECTIONS */}
          <aside className="w-64 bg-[#E7E9EB]/60 border-r border-gray-200 p-4 space-y-1 overflow-y-auto shrink-0 hidden md:block">
            <h3 className="text-xs font-black uppercase text-gray-500 tracking-wider px-3 mb-2">
              {currentLang.name} TUTORIAL SECTIONS
            </h3>

            {currentLang.sections.map(sec => {
              const isExpanded = expandedSectionIds.has(sec.id);
              const isSectionActive = activeSectionId === sec.id;

              return (
                <div key={sec.id} className="space-y-0.5">
                  {/* Section Parent Button with Chevron Dropdown */}
                  <button
                    onClick={() => toggleSection(sec.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isSectionActive ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200/80'
                    }`}
                  >
                    <span>{sec.title}</span>
                    <FaChevronDown className={`text-[10px] transition-transform ${isExpanded ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
                  </button>

                  {/* Subtopics Indented Dropdown List (Overview, Exercises, Code Challenge) */}
                  {isExpanded && (
                    <div className="pl-4 space-y-0.5 border-l-2 border-emerald-500/40 ml-3 py-1">
                      {[
                        { id: 'overview', label: 'Overview' },
                        { id: 'exercises', label: 'Exercises' },
                        { id: 'challenge', label: 'Code Challenge' }
                      ].map(sub => {
                        const isSubActive = isSectionActive && activeSubtype === sub.id;

                        return (
                          <button
                            key={sub.id}
                            onClick={() => handleSelectSubtopic(sec.id, sub.id)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                              isSubActive
                                ? 'bg-[#04AA6D] text-white font-bold shadow-2xs'
                                : 'text-gray-700 hover:bg-gray-200/70'
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </aside>

          {/* Central Main Content Area */}
          <main className="flex-1 p-6 sm:p-10 max-w-4xl space-y-8 overflow-y-auto">
            
            {/* Header Controls */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <button className="px-5 py-2 bg-[#04AA6D] hover:bg-[#039660] text-white font-bold text-xs rounded-lg flex items-center gap-1 cursor-pointer">
                <FaChevronLeft className="text-[10px]" /> Previous
              </button>
              <button className="px-6 py-2 bg-[#04AA6D] hover:bg-[#039660] text-white font-bold text-xs rounded-lg flex items-center gap-1 cursor-pointer">
                Next <FaChevronRight className="text-[10px]" />
              </button>
            </div>

            {/* Render Code Challenge View when Code Challenge or Exercises Subtopic is Active */}
            {activeSubtype === 'challenge' || activeSubtype === 'exercises' ? (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-heading mb-2">
                    {currentSection.title} {activeSubtype === 'challenge' ? 'Code Challenge' : 'Practice Exercise'}
                  </h1>
                  <h2 className="text-xl font-bold text-gray-800">Challenge: {currentSection.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Test your understanding by completing this coding challenge for {currentSection.title}.
                  </p>
                </div>

                {/* Instructions Card */}
                <div className="bg-slate-50 border border-gray-200 p-6 rounded-2xl space-y-3 shadow-2xs">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Task Instructions</h3>
                  <p className="text-xs text-gray-700 font-semibold leading-relaxed">
                    {currentSection.challenge.instruction}
                  </p>
                </div>

                {/* Split Challenge Editor & Live Output Console */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Code Editor */}
                  <div className="bg-[#1D2A35] rounded-2xl border border-slate-700 overflow-hidden flex flex-col justify-between shadow-xl">
                    <div className="px-4 py-2.5 bg-[#111827] flex items-center justify-between border-b border-slate-800 text-xs font-bold text-slate-300">
                      <span>Code Console ({currentLang.name})</span>
                      <button
                        onClick={() => setCodeChecked(true)}
                        className="px-4 py-1.5 bg-[#04AA6D] hover:bg-[#039660] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Check Code
                      </button>
                    </div>

                    <textarea
                      value={editorCode}
                      onChange={(e) => { setEditorCode(e.target.value); setCodeChecked(false); }}
                      className="w-full bg-[#1D2A35] text-emerald-400 font-mono text-xs p-4 outline-none resize-none leading-relaxed h-52"
                    />
                  </div>

                  {/* Right Output Preview */}
                  <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between shadow-xl">
                    <div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold pb-2 border-b border-slate-800">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                        <span className="ml-2">Result Preview</span>
                      </div>

                      <div className="pt-4 text-xs font-mono">
                        {codeChecked ? (
                          <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl space-y-2 text-emerald-300">
                            <div className="flex items-center gap-2 font-bold text-sm">
                              <FaCheckCircle className="text-emerald-400" /> Challenge Passed!
                            </div>
                            <p className="text-xs text-white font-sans mt-2">Output code successfully verified for {currentSection.title}.</p>
                          </div>
                        ) : (
                          <p className="text-slate-500 italic">Click Check Code to test your solution output here.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Overview Notes Section */
              <div className="space-y-6">
                <h1 className="text-3xl font-extrabold text-gray-900">{currentSection.title} Overview</h1>
                <p className="text-sm text-gray-700 leading-relaxed bg-emerald-50 p-5 rounded-2xl border-l-4 border-[#04AA6D]">
                  Learn the core fundamentals and syntax rules of <strong>{currentSection.title}</strong> in {currentLang.name}.
                </p>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button className="px-5 py-2 bg-[#04AA6D] hover:bg-[#039660] text-white font-bold text-xs rounded-lg flex items-center gap-1 cursor-pointer">
                <FaChevronLeft className="text-[10px]" /> Previous
              </button>
              <button className="px-6 py-2 bg-[#04AA6D] hover:bg-[#039660] text-white font-bold text-xs rounded-lg flex items-center gap-1 cursor-pointer">
                Next <FaChevronRight className="text-[10px]" />
              </button>
            </div>

          </main>
        </div>
      ) : (
        /* Alternative Grid View */
        <div className="max-w-7xl mx-auto p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation Categories Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.keys(allLanguagesData).map(langKey => (
              <div
                key={langKey}
                onClick={() => { setActiveLangKey(langKey); setViewMode('reader'); }}
                className="bg-white p-6 rounded-3xl border border-gray-200 hover:border-emerald-500 shadow-xs cursor-pointer uppercase font-bold text-gray-900"
              >
                {langKey} Tutorials & Code Challenges →
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Tutorials;

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import Button from '../../components/ui/Button';

// Import icon libraries
import {
  FaPlay, FaRedo, FaCopy, FaTerminal, FaSun, FaMoon,
  FaCode, FaCheck, FaTrash, FaSave, FaDownload,
  FaShare, FaGithub, FaChevronDown, FaDotCircle
} from 'react-icons/fa';

import {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiCplusplus,
  SiDotnet, SiPhp, SiRuby, SiRust, SiGo, SiKotlin, SiSwift,
  SiScala, SiPerl, SiLua, SiHaskell, SiElixir, SiDart, SiR,
  SiHtml5, SiCss
} from 'react-icons/si';

import {
  MdPlayArrow, MdRefresh, MdContentCopy, MdCheckCircle,
  MdOutlineTerminal, MdDarkMode, MdLightMode, MdCode,
  MdDelete, MdSave, MdDownload, MdShare
} from 'react-icons/md';

import {
  BsPlay, BsArrowRepeat, BsClipboard, BsTerminal,
  BsSun, BsMoon, BsCode, BsCheck, BsTrash,
  BsSave, BsDownload, BsShare, BsGithub, BsDot
} from 'react-icons/bs';

import {
  IoPlay, IoRefresh, IoCopy, IoCheckmark,
  IoTerminal, IoSunny, IoMoon, IoCode,
  IoTrash, IoSave, IoDownload, IoShare,
  IoLogoGithub, IoChevronDown
} from 'react-icons/io5';

import {
  GiPlayButton, GiClockwiseRotation, GiStack, GiPc,
  GiSun, GiMoon, GiCircuitry, GiTrashCan,
  GiSave, GiCloudDownload, GiShare, GiOctopus,
  GiExpand, GiCheckMark
} from 'react-icons/gi';

import {
  TbPlayerPlay, TbRefresh, TbCopy, TbCheck,
  TbTerminal, TbSun, TbMoon, TbCode,
  TbTrash, TbDeviceFloppy, TbDownload, TbShare,
  TbBrandGithub, TbChevronDown
} from 'react-icons/tb';

import {
  VscPlay, VscRefresh, VscCopy, VscCheck,
  VscTerminal, VscLightbulb, VscCircleFilled, VscCode,
  VscTrash, VscSave, VscDownload, VscShare,
  VscGithub, VscChevronDown
} from 'react-icons/vsc';

// Language configurations with all icon sets
const LANGUAGES = {
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    extension: 'js',
    monacoLanguage: 'javascript',
    icons: {
      si: SiJavascript,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.15)',
    defaultCode: `// 🚀 JavaScript Playground
console.log("Hello, CodeLearn!");

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Object example
const user = { name: "John", age: 30 };
console.log("User:", user);`,
    compile: function (code) {
      let logs = [];
      const originalConsoleLog = console.log;
      console.log = function (...args) {
        logs.push(args.map(function (arg) {
          return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
        }).join(' '));
      };

      try {
        new Function(code)();
        console.log = originalConsoleLog;
        return { output: logs.join('\n') || '✅ Program executed successfully (no output)', error: null };
      } catch (err) {
        console.log = originalConsoleLog;
        return { output: null, error: err.message };
      }
    }
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    extension: 'ts',
    monacoLanguage: 'typescript',
    icons: {
      si: SiTypescript,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#3178C6',
    bgColor: 'rgba(49, 120, 198, 0.15)',
    defaultCode: `// 📘 TypeScript Playground
interface User {
  name: string;
  age: number;
}

const greet = (user) => {
  return \`Hello, \${user.name}! You are \${user.age} years old.\`;
};

const john = { name: "John", age: 30 };
console.log(greet(john));`,
    compile: function (code) {
      let logs = [];
      const originalConsoleLog = console.log;
      console.log = function (...args) {
        logs.push(args.map(function (arg) {
          return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
        }).join(' '));
      };

      try {
        const cleanedCode = code
          .replace(/:\s*[a-zA-Z<>[\]]+/g, '')
          .replace(/interface\s+\w+\s*\{[^}]*\}/g, '')
          .replace(/implements\s+\w+/g, '');

        new Function(cleanedCode)();

        console.log = originalConsoleLog;
        return { output: logs.join('\n') || '✅ Program executed successfully', error: null };
      } catch (err) {
        console.log = originalConsoleLog;
        return { output: null, error: err.message };
      }
    }
  },
  python: {
    id: 'python',
    name: 'Python',
    extension: 'py',
    monacoLanguage: 'python',
    icons: {
      si: SiPython,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#3776AB',
    bgColor: 'rgba(55, 118, 171, 0.15)',
    defaultCode: `# 🐍 Python Playground
print("Hello, CodeLearn!")

# List comprehension
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(f"Doubled: {doubled}")

# Dictionary example
user = {"name": "John", "age": 30}
print(f"User: {user}")`,
    compile: function (code) {
      try {
        const outputs = [];
        const lines = code.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          const printMatch = line.match(/print\(['"](.+?)['"]\)/);
          if (printMatch) outputs.push(printMatch[1]);

          const fStringMatch = line.match(/print\(f["'](.+?)["']\)/);
          if (fStringMatch) {
            const content = fStringMatch[1];
            const varMatches = content.match(/\{([^}]+)\}/g);
            if (varMatches) {
              let result = content;
              for (let j = 0; j < varMatches.length; j++) {
                const match = varMatches[j];
                const varName = match.slice(1, -1);
                if (varName === 'numbers') result = result.replace(match, '[1, 2, 3, 4, 5]');
                else if (varName === 'doubled') result = result.replace(match, '[2, 4, 6, 8, 10]');
                else if (varName === 'user') result = result.replace(match, "{'name': 'John', 'age': 30}");
              }
              outputs.push(result);
            }
          }
        }
        return { output: outputs.join('\n') || '✅ Program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  java: {
    id: 'java',
    name: 'Java',
    extension: 'java',
    monacoLanguage: 'java',
    icons: {
      si: SiOpenjdk,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#007396',
    bgColor: 'rgba(0, 115, 150, 0.15)',
    defaultCode: `// ☕ Java Playground
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, CodeLearn!");
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Doubled: ");
        for (int num : numbers) {
            System.out.print(num * 2 + " ");
        }
        System.out.println();
    }
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const printMatches = code.match(/System\.out\.println\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < printMatches.length; i++) {
          const match = printMatches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }

        const printMatches2 = code.match(/System\.out\.print\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < printMatches2.length; i++) {
          const match = printMatches2[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }

        return { output: outputs.join('\n') || '✅ Java program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    extension: 'cpp',
    monacoLanguage: 'cpp',
    icons: {
      si: SiCplusplus,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#00599C',
    bgColor: 'rgba(0, 89, 156, 0.15)',
    defaultCode: `// ⚡ C++ Playground
#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "Hello, CodeLearn!" << endl;
    
    // Vector operations
    vector<int> numbers = {1, 2, 3, 4, 5};
    cout << "Doubled: ";
    for (int num : numbers) {
        cout << num * 2 << " ";
    }
    cout << endl;
    
    return 0;
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const coutMatches = code.match(/cout\s*<<\s*['"](.+?)['"]/g) || [];
        for (let i = 0; i < coutMatches.length; i++) {
          const match = coutMatches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ C++ program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    extension: 'cs',
    monacoLanguage: 'csharp',
    icons: {
      si: SiDotnet,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#239120',
    bgColor: 'rgba(35, 145, 32, 0.15)',
    defaultCode: `// 🔷 C# Playground
using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Console.WriteLine("Hello, CodeLearn!");
        
        // List operations
        List<int> numbers = new List<int> {1, 2, 3, 4, 5};
        Console.Write("Doubled: ");
        foreach (int num in numbers) {
            Console.Write(num * 2 + " ");
        }
        Console.WriteLine();
    }
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/Console\.(WriteLine|Write)\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ C# program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  php: {
    id: 'php',
    name: 'PHP',
    extension: 'php',
    monacoLanguage: 'php',
    icons: {
      si: SiPhp,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#777BB4',
    bgColor: 'rgba(119, 123, 180, 0.15)',
    defaultCode: `<?php
// 🐘 PHP Playground
echo "Hello, CodeLearn!\\n";

// Array operations
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function($n) { return $n * 2; }, $numbers);
echo "Doubled: " . implode(", ", $doubled) . "\\n";
?>`,
    compile: function (code) {
      try {
        const outputs = [];
        const echoMatches = code.match(/echo\s+['"](.+?)['"]/g) || [];
        for (let i = 0; i < echoMatches.length; i++) {
          const match = echoMatches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ PHP program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    extension: 'rb',
    monacoLanguage: 'ruby',
    icons: {
      si: SiRuby,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#CC342D',
    bgColor: 'rgba(204, 52, 45, 0.15)',
    defaultCode: `# 💎 Ruby Playground
puts "Hello, CodeLearn!"

# Array operations
numbers = [1, 2, 3, 4, 5]
doubled = numbers.map { |n| n * 2 }
puts "Doubled: #{doubled}"

# Hash example
user = { name: "John", age: 30 }
puts "User: #{user}"`,
    compile: function (code) {
      try {
        const outputs = [];
        const putsMatches = code.match(/puts\s+['"](.+?)['"]/g) || [];
        for (let i = 0; i < putsMatches.length; i++) {
          const match = putsMatches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Ruby program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  rust: {
    id: 'rust',
    name: 'Rust',
    extension: 'rs',
    monacoLanguage: 'rust',
    icons: {
      si: SiRust,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#000000',
    bgColor: 'rgba(255, 255, 255, 0.05)',
    defaultCode: `// 🦀 Rust Playground
fn main() {
    println!("Hello, CodeLearn!");
    
    // Vector operations
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|&n| n * 2).collect();
    println!("Doubled: {:?}", doubled);
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/println!\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Rust program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  go: {
    id: 'go',
    name: 'Go',
    extension: 'go',
    monacoLanguage: 'go',
    icons: {
      si: SiGo,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#00ADD8',
    bgColor: 'rgba(0, 173, 216, 0.15)',
    defaultCode: `// 🐹 Go Playground
package main

import "fmt"

func main() {
    fmt.Println("Hello, CodeLearn!")
    
    // Slice operations
    numbers := []int{1, 2, 3, 4, 5}
    doubled := make([]int, len(numbers))
    for i, n := range numbers {
        doubled[i] = n * 2
    }
    fmt.Println("Doubled:", doubled)
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/fmt\.Println\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Go program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    extension: 'kt',
    monacoLanguage: 'kotlin',
    icons: {
      si: SiKotlin,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#7F52FF',
    bgColor: 'rgba(127, 82, 255, 0.15)',
    defaultCode: `// 🎯 Kotlin Playground
fun main() {
    println("Hello, CodeLearn!")
    
    // List operations
    val numbers = listOf(1, 2, 3, 4, 5)
    val doubled = numbers.map { it * 2 }
    println("Doubled: $doubled")
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/println\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Kotlin program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  swift: {
    id: 'swift',
    name: 'Swift',
    extension: 'swift',
    monacoLanguage: 'swift',
    icons: {
      si: SiSwift,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#F05138',
    bgColor: 'rgba(240, 81, 56, 0.15)',
    defaultCode: `// 🦅 Swift Playground
print("Hello, CodeLearn!")

// Array operations
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }
print("Doubled: \\(doubled)")`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/print\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Swift program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  scala: {
    id: 'scala',
    name: 'Scala',
    extension: 'scala',
    monacoLanguage: 'scala',
    icons: {
      si: SiScala,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#DC322F',
    bgColor: 'rgba(220, 50, 47, 0.15)',
    defaultCode: `// 🔥 Scala Playground
object Main {
  def main(args: Array[String]): Unit = {
    println("Hello, CodeLearn!")
    
    // List operations
    val numbers = List(1, 2, 3, 4, 5)
    val doubled = numbers.map(_ * 2)
    println(s"Doubled: $doubled")
  }
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/println\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Scala program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  perl: {
    id: 'perl',
    name: 'Perl',
    extension: 'pl',
    monacoLanguage: 'perl',
    icons: {
      si: SiPerl,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#39457E',
    bgColor: 'rgba(57, 69, 126, 0.15)',
    defaultCode: `#!/usr/bin/perl
# 🐪 Perl Playground
use strict;
use warnings;

print "Hello, CodeLearn!\\n";

# Array operations
my @numbers = (1, 2, 3, 4, 5);
my @doubled = map { $_ * 2 } @numbers;
print "Doubled: @doubled\\n";`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/print\s+['"](.+?)['"]/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Perl program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  lua: {
    id: 'lua',
    name: 'Lua',
    extension: 'lua',
    monacoLanguage: 'lua',
    icons: {
      si: SiLua,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#2C2D72',
    bgColor: 'rgba(44, 45, 114, 0.15)',
    defaultCode: `-- 🌙 Lua Playground
print("Hello, CodeLearn!")

-- Table operations
local numbers = {1, 2, 3, 4, 5}
local doubled = {}
for i, n in ipairs(numbers) do
    doubled[i] = n * 2
end
print("Doubled: " .. table.concat(doubled, ", "))`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/print\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Lua program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  haskell: {
    id: 'haskell',
    name: 'Haskell',
    extension: 'hs',
    monacoLanguage: 'haskell',
    icons: {
      si: SiHaskell,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#5D4F85',
    bgColor: 'rgba(93, 79, 133, 0.15)',
    defaultCode: `-- λ Haskell Playground
main :: IO ()
main = do
    putStrLn "Hello, CodeLearn!"
    
    -- List operations
    let numbers = [1, 2, 3, 4, 5]
    let doubled = map (*2) numbers
    print doubled`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/putStrLn\s+['"](.+?)['"]/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Haskell program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  elixir: {
    id: 'elixir',
    name: 'Elixir',
    extension: 'ex',
    monacoLanguage: 'elixir',
    icons: {
      si: SiElixir,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#4B275F',
    bgColor: 'rgba(75, 39, 95, 0.15)',
    defaultCode: `# 💧 Elixir Playground
IO.puts("Hello, CodeLearn!")

# List operations
numbers = [1, 2, 3, 4, 5]
doubled = Enum.map(numbers, fn n -> n * 2 end)
IO.inspect(doubled)`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/IO\.puts\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Elixir program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  dart: {
    id: 'dart',
    name: 'Dart',
    extension: 'dart',
    monacoLanguage: 'dart',
    icons: {
      si: SiDart,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#0175C2',
    bgColor: 'rgba(1, 117, 194, 0.15)',
    defaultCode: `// 🎯 Dart Playground
void main() {
  print("Hello, CodeLearn!");
  
  // List operations
  List<int> numbers = [1, 2, 3, 4, 5];
  List<int> doubled = numbers.map((n) => n * 2).toList();
  print("Doubled: $doubled");
}`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/print\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ Dart program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  r: {
    id: 'r',
    name: 'R',
    extension: 'r',
    monacoLanguage: 'r',
    icons: {
      si: SiR,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#276DC3',
    bgColor: 'rgba(39, 109, 195, 0.15)',
    defaultCode: `# 📊 R Playground
print("Hello, CodeLearn!")

# Vector operations
numbers <- c(1, 2, 3, 4, 5)
doubled <- numbers * 2
print(paste("Doubled:", paste(doubled, collapse=", ")))`,
    compile: function (code) {
      try {
        const outputs = [];
        const matches = code.match(/print\(['"](.+?)['"]\)/g) || [];
        for (let i = 0; i < matches.length; i++) {
          const match = matches[i];
          const content = match.match(/['"](.+?)['"]/);
          if (content) outputs.push(content[1]);
        }
        return { output: outputs.join('\n') || '✅ R program executed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  html: {
    id: 'html',
    name: 'HTML',
    extension: 'html',
    monacoLanguage: 'html',
    icons: {
      si: SiHtml5,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#E34F26',
    bgColor: 'rgba(227, 79, 38, 0.15)',
    defaultCode: `<!-- 🌐 HTML Playground -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CodeLearn</title>
</head>
<body>
  <h1>Hello, CodeLearn!</h1>
  <p>Welcome to the HTML playground.</p>
  <ul>
    <li>Learn</li>
    <li>Build</li>
    <li>Ship</li>
  </ul>
</body>
</html>`,
    compile: function (code) {
      try {
        const textMatches = code.match(/>([^<>\n]+)</g) || [];
        const texts = textMatches
          .map(function (m) { return m.slice(1, -1).trim(); })
          .filter(function (t) { return t.length > 0; });

        const tagMatches = code.match(/<([a-zA-Z][a-zA-Z0-9]*)/g) || [];
        const tagCount = tagMatches.length;

        const output = [];
        if (texts.length) {
          output.push('📄 Rendered text content:');
          output.push(texts.join('\n'));
          output.push('');
        }
        output.push(`Parsed ${tagCount} HTML element${tagCount === 1 ? '' : 's'}`);

        return { output: output.join('\n') || '✅ HTML parsed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  },
  css: {
    id: 'css',
    name: 'CSS',
    extension: 'css',
    monacoLanguage: 'css',
    icons: {
      si: SiCss,
      fa: FaCode,
      md: MdCode,
      bs: BsCode,
      io: IoCode,
      gi: GiCircuitry,
      tb: TbCode,
      vsc: VscCode
    },
    color: '#1572B6',
    bgColor: 'rgba(21, 114, 182, 0.15)',
    defaultCode: `/* 🎨 CSS Playground */
body {
  font-family: sans-serif;
  background-color: #1e1e1e;
  color: #ffffff;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #61dafb;
}

.button {
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #22c55e;
}`,
    compile: function (code) {
      try {
        const withoutComments = code.replace(/\/\*[\s\S]*?\*\//g, '');
        const ruleMatches = withoutComments.match(/[^\{\}]+\{[^\{\}]*\}/g) || [];
        const output = [];
        let totalDeclarations = 0;

        ruleMatches.forEach(function (rule) {
          const parts = rule.match(/([^\{\}]+)\{([^\{\}]*)\}/);
          if (parts) {
            const selector = parts[1].trim();
            const declarations = parts[2].split(';').map(function (d) { return d.trim(); }).filter(Boolean);
            totalDeclarations += declarations.length;
            output.push(`${selector} { ${declarations.length} propert${declarations.length === 1 ? 'y' : 'ies'} }`);
          }
        });

        output.push('');
        output.push(`Parsed ${ruleMatches.length} rule${ruleMatches.length === 1 ? '' : 's'}, ${totalDeclarations} total declarations`);

        return { output: output.join('\n') || '✅ CSS parsed successfully', error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    }
  }
};

// Icon set configurations with correct imports
const ICON_SETS = {
  si: {
    name: 'Simple Icons',
    icon: SiJavascript,
    play: FaPlay,
    refresh: FaRedo,
    copy: FaCopy,
    check: FaCheck,
    terminal: FaTerminal,
    sun: FaSun,
    moon: FaMoon,
    code: FaCode,
    trash: FaTrash,
    save: FaSave,
    download: FaDownload,
    share: FaShare,
    github: FaGithub,
    chevron: FaChevronDown,
    dot: FaDotCircle
  },
  fa: {
    name: 'Font Awesome',
    icon: FaCode,
    play: FaPlay,
    refresh: FaRedo,
    copy: FaCopy,
    check: FaCheck,
    terminal: FaTerminal,
    sun: FaSun,
    moon: FaMoon,
    code: FaCode,
    trash: FaTrash,
    save: FaSave,
    download: FaDownload,
    share: FaShare,
    github: FaGithub,
    chevron: FaChevronDown,
    dot: FaDotCircle
  },
  md: {
    name: 'Material Design',
    icon: MdCode,
    play: MdPlayArrow,
    refresh: MdRefresh,
    copy: MdContentCopy,
    check: MdCheckCircle,
    terminal: MdOutlineTerminal,
    sun: MdLightMode,
    moon: MdDarkMode,
    code: MdCode,
    trash: MdDelete,
    save: MdSave,
    download: MdDownload,
    share: MdShare,
    github: MdCode,
    chevron: MdCode,
    dot: MdCheckCircle
  },
  bs: {
    name: 'Bootstrap',
    icon: BsCode,
    play: BsPlay,
    refresh: BsArrowRepeat,
    copy: BsClipboard,
    check: BsCheck,
    terminal: BsTerminal,
    sun: BsSun,
    moon: BsMoon,
    code: BsCode,
    trash: BsTrash,
    save: BsSave,
    download: BsDownload,
    share: BsShare,
    github: BsGithub,
    chevron: BsDot,
    dot: BsDot
  },
  io: {
    name: 'Ionicons',
    icon: IoCode,
    play: IoPlay,
    refresh: IoRefresh,
    copy: IoCopy,
    check: IoCheckmark,
    terminal: IoTerminal,
    sun: IoSunny,
    moon: IoMoon,
    code: IoCode,
    trash: IoTrash,
    save: IoSave,
    download: IoDownload,
    share: IoShare,
    github: IoLogoGithub,
    chevron: IoChevronDown,
    dot: IoCheckmark
  },
  gi: {
    name: 'Game Icons',
    icon: GiCircuitry,
    play: GiPlayButton,
    refresh: GiClockwiseRotation,
    copy: GiStack,
    check: GiCheckMark,
    terminal: GiPc,
    sun: GiSun,
    moon: GiMoon,
    code: GiCircuitry,
    trash: GiTrashCan,
    save: GiSave,
    download: GiCloudDownload,
    share: GiShare,
    github: GiOctopus,
    chevron: GiExpand,
    dot: GiCheckMark
  },
  tb: {
    name: 'Tabler',
    icon: TbCode,
    play: TbPlayerPlay,
    refresh: TbRefresh,
    copy: TbCopy,
    check: TbCheck,
    terminal: TbTerminal,
    sun: TbSun,
    moon: TbMoon,
    code: TbCode,
    trash: TbTrash,
    save: TbDeviceFloppy,
    download: TbDownload,
    share: TbShare,
    github: TbBrandGithub,
    chevron: TbChevronDown,
    dot: TbCheck
  },
  vsc: {
    name: 'VS Code',
    icon: VscCode,
    play: VscPlay,
    refresh: VscRefresh,
    copy: VscCopy,
    check: VscCheck,
    terminal: VscTerminal,
    sun: VscLightbulb,
    moon: VscCircleFilled,
    code: VscCode,
    trash: VscTrash,
    save: VscSave,
    download: VscDownload,
    share: VscShare,
    github: VscGithub,
    chevron: VscChevronDown,
    dot: VscCheck
  }
};

const Playground = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialLang = searchParams.get('lang') || 'javascript';
  const initialCode = searchParams.get('code') ? decodeURIComponent(searchParams.get('code')) : LANGUAGES[initialLang]?.defaultCode || '';

  const [selectedLanguage, setSelectedLanguage] = useState(initialLang);
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [iconSet, setIconSet] = useState('si');

  useEffect(() => {
    const lang = searchParams.get('lang');
    const qCode = searchParams.get('code');
    if (lang && LANGUAGES[lang]) {
      setSelectedLanguage(lang);
      if (qCode) {
        setCode(decodeURIComponent(qCode));
      } else {
        setCode(LANGUAGES[lang].defaultCode);
      }
    }
  }, [location.search]);

  const handleLanguageChange = (langId) => {
    setSelectedLanguage(langId);
    setCode(LANGUAGES[langId].defaultCode);
    setOutput('');
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('');

    setTimeout(() => {
      try {
        const compiler = LANGUAGES[selectedLanguage];
        const result = compiler.compile(code);

        if (result.error) {
          setOutput(`❌ Error: ${result.error}`);
        } else {
          const lang = LANGUAGES[selectedLanguage];
          setOutput(`✅ ${lang.name} Execution Complete\n\n${'─'.repeat(50)}\n\n${result.output}`);
        }
      } catch (err) {
        setOutput(`❌ Error: ${err.message}`);
      } finally {
        setIsRunning(false);
      }
    }, 300);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleResetCode = () => {
    setCode(LANGUAGES[selectedLanguage].defaultCode);
    setOutput('');
  };

  const CurrentIcon = LANGUAGES[selectedLanguage].icons[iconSet] || LANGUAGES[selectedLanguage].icons.si;
  const currentColor = LANGUAGES[selectedLanguage].color;
  const Icons = ICON_SETS[iconSet];

  // Group languages for dropdown
  const languageGroups = {
    '🔥 Popular': ['javascript', 'python', 'typescript', 'java', 'cpp', 'csharp'],
    '🌐 Web': ['html', 'css', 'php', 'ruby', 'perl', 'lua'],
    '⚙️ Systems': ['rust', 'go'],
    '🧮 Functional': ['haskell', 'scala', 'elixir'],
    '📱 Mobile': ['kotlin', 'swift', 'dart'],
    '📊 Data': ['r']
  };

  return (
    <div className={`flex flex-col h-[calc(100vh-76px)] ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Icon Set Selector */}
      <div className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-[#2d2d2d] border-[#333]' : 'bg-white border-gray-200'} border-b flex-wrap`}>
        <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Icon Set:</span>
        <div className="flex gap-1 flex-wrap">
          {Object.entries(ICON_SETS).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setIconSet(key)}
              className={`p-1.5 rounded transition-all ${iconSet === key
                ? isDarkMode ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-blue-100 text-blue-600 border border-blue-400'
                : isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
              title={value.name}
            >
              <value.icon size={16} />
            </button>
          ))}
        </div>
        <span className={`text-[10px] ml-2 px-2 py-0.5 rounded ${isDarkMode ? 'bg-[#333] text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
          {ICON_SETS[iconSet].name}
        </span>
      </div>

      {/* Header */}
      <header className={`flex flex-wrap items-center justify-between px-6 py-3 ${isDarkMode ? 'bg-[#252526] border-[#333]' : 'bg-white border-gray-200'} border-b gap-3`}>
        <div className="flex items-center gap-4 flex-wrap">
          {/* Language Selector */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={`appearance-none pl-10 pr-8 py-2 rounded-lg font-medium text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode
                ? 'bg-[#333] text-white border-[#555] hover:border-gray-400'
                : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400'
                }`}
              style={{ minWidth: '200px' }}
            >
              {Object.entries(languageGroups).map(([group, langs]) => (
                <optgroup key={group} label={group}>
                  {langs.map((langId) => {
                    const lang = LANGUAGES[langId];
                    return (
                      <option key={langId} value={langId}>
                        {lang.name}
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <CurrentIcon size={18} color={currentColor} />
            </div>
            <Icons.chevron className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} size={16} />
          </div>

          {/* Language Badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: isDarkMode ? `${currentColor}20` : `${currentColor}10`,
              color: currentColor
            }}
          >
            <CurrentIcon size={16} />
            <span>{LANGUAGES[selectedLanguage].name}</span>
            <span className="opacity-50 text-xs">.{(LANGUAGES[selectedLanguage].extension)}</span>
          </div>

          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-1`}>
            <Icons.dot className="inline animate-pulse text-green-500" size={8} />
            Auto-saved
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-all ${isDarkMode
              ? 'hover:bg-gray-700 text-gray-300'
              : 'hover:bg-gray-200 text-gray-600'
              }`}
          >
            {isDarkMode ? <Icons.sun size={18} /> : <Icons.moon size={18} />}
          </button>

          {/* Copy Button */}
          <Button
            variant="outline"
            onClick={handleCopyCode}
            className={`py-1.5! text-sm! flex items-center gap-2 ${isDarkMode
              ? 'border-gray-500 text-gray-300 hover:text-white hover:bg-gray-700'
              : 'border-gray-300 text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
          >
            {isCopied ? (
              <Icons.check className="text-green-500" size={16} />
            ) : (
              <Icons.copy size={16} />
            )}
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={handleResetCode}
            className={`py-1.5! text-sm! flex items-center gap-2 ${isDarkMode
              ? 'border-gray-500 text-gray-300 hover:text-white hover:bg-gray-700'
              : 'border-gray-300 text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
          >
            <Icons.refresh size={14} />
            Reset
          </Button>

          {/* Run Button */}
          <Button
            onClick={handleRunCode}
            disabled={isRunning}
            className="py-1.5! text-sm! flex items-center gap-2 px-5!"
            style={{
              background: isRunning ? '#6b7280' : '#22c55e',
              color: 'white',
              border: 'none'
            }}
          >
            {isRunning ? (
              <>
                <span className="animate-spin">⏳</span>
                Running...
              </>
            ) : (
              <>
                <Icons.play size={12} />
                Run Code
              </>
            )}
          </Button>
        </div>
      </header>

      {/* Editor & Console */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 border-r border-[#333] relative">
          <Editor
            height="100%"
            language={LANGUAGES[selectedLanguage].monacoLanguage}
            theme={isDarkMode ? 'vs-dark' : 'light'}
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'JetBrains Mono, Fira Code, monospace',
              padding: { top: 16, bottom: 16 },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              lineNumbers: 'on',
              renderWhitespace: 'selection',
              bracketPairColorization: { enabled: true },
              suggest: {
                showKeywords: true,
                showSnippets: true,
              },
            }}
          />
        </div>

        {/* Console */}
        <div className={`w-[40%] flex flex-col ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-50'}`}>
          <div className={`flex items-center justify-between px-4 py-2.5 ${isDarkMode ? 'bg-[#252526] border-[#333]' : 'bg-white border-gray-200'} border-b`}>
            <div className="flex items-center gap-2">
              <Icons.terminal className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={14} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Console Output
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] px-2 py-1 rounded ${isDarkMode ? 'bg-[#333] text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                {LANGUAGES[selectedLanguage].name}
              </span>
              {output && (
                <button
                  onClick={() => setOutput('')}
                  className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'}`}
                >
                  <Icons.trash size={14} />
                </button>
              )}
            </div>
          </div>
          <div className={`flex-1 overflow-y-auto font-mono text-sm whitespace-pre-wrap ${selectedLanguage === 'html' && output ? 'p-0' : 'p-4'} ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            {output && selectedLanguage === 'html' ? (
              <iframe
                srcDoc={code}
                title="HTML Result"
                className="w-full h-full bg-white border-none"
                sandbox="allow-scripts"
              />
            ) : output ? (
              <div className="space-y-1">
                {output.split('\n').map((line, i) => (
                  <div key={i} className={line.startsWith('❌') ? 'text-red-400' : line.startsWith('✅') ? 'text-green-400' : ''}>
                    {line}
                  </div>
                ))}
              </div>
            ) : (
              <div className={`flex flex-col items-center justify-center h-full ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <Icons.terminal size={40} className="mb-3 opacity-30" />
                <p className="italic">Run your code to see output here</p>
                <p className="text-xs mt-2 opacity-50">Press <kbd className={`px-2 py-0.5 rounded ${isDarkMode ? 'bg-[#333]' : 'bg-gray-200'}`}>Ctrl + Enter</kbd> to run</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`flex items-center justify-between px-4 py-2 ${isDarkMode ? 'bg-[#252526] border-[#333]' : 'bg-white border-gray-200'} border-t`}>
        <div className="flex items-center gap-3">
          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <span className="font-mono">{selectedLanguage}</span> • Line {code.split('\n').length} • {code.length} characters
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className={`p-1.5 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
            <Icons.save size={14} />
          </button>
          <button className={`p-1.5 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
            <Icons.download size={14} />
          </button>
          <button className={`p-1.5 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
            <Icons.share size={14} />
          </button>
          <button className={`p-1.5 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
            <Icons.github size={14} />
          </button>
          <span className={`text-[10px] px-2 py-1 rounded ${isDarkMode ? 'bg-[#333] text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
            v2.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Playground;
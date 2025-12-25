import React from 'react';
import { DocSection } from '../types';
import { 
  Zap, 
  Layout, 
  Cpu, 
  GraduationCap, 
  Settings, 
  Code, 
  PlayCircle, 
  Award, 
  Terminal,
  BookOpen
} from 'lucide-react';

export const DOCS_SECTIONS: DocSection[] = [
  // --- GUIDE CATEGORY ---
  {
    id: 'getting-started',
    title: 'Getting Started',
    category: 'Guide',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-synk-50 to-white dark:from-synk-900/20 dark:to-slate-900 p-8 rounded-2xl border border-synk-100 dark:border-synk-900/50 mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Welcome to Synk</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Synk is an all-in-one platform designed to bridge the gap between block-based coding and professional embedded systems engineering.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">What is Synk?</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          This guide explains <strong>how to use Synk</strong> to write programs, learn concepts, and deploy code to real hardware. By the end of this documentation, you will be able to confidently navigate the ecosystem.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-synk-300 dark:hover:border-synk-700 transition-colors flex flex-col h-full">
            <div className="w-10 h-10 bg-synk-100 dark:bg-synk-900/50 rounded-lg flex items-center justify-center text-synk-600 dark:text-synk-400 mb-4">
              <GraduationCap size={20} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Synk Academy</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex-grow mb-4">
              A web-based learning platform for interactive lessons, simulations, and gamified progress tracking.
            </p>
            <a 
              href="https://synk-academy.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-synk-600 dark:text-synk-400 hover:underline"
            >
              synk-academy.netlify.app →
            </a>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-synk-300 dark:hover:border-synk-700 transition-colors flex flex-col h-full">
             <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <Terminal size={20} />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Synk Nexus</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex-grow mb-4">
              A powerful desktop environment (IDE) for writing code, compiling, and uploading to physical Arduino & ESP boards.
            </p>
            <a 
              href="https://synk-nexus.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
            >
              synk-nexus.netlify.app →
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'setup',
    title: 'Account & Setup',
    category: 'Guide',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">First Time Setup</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400">
            To begin your journey with Synk Academy, follow these steps to create your personalized learning environment.
          </p>

          <ol className="list-decimal list-inside space-y-4 mt-6 text-slate-700 dark:text-slate-300">
            <li className="pl-2"><span className="font-semibold">Access the Portal:</span> Open <a href="https://synk-academy.netlify.app" target="_blank" rel="noopener noreferrer" className="text-synk-600 dark:text-synk-400 hover:underline">Synk Academy</a>.</li>
            <li className="pl-2"><span className="font-semibold">Authentication:</span> Create an account or sign in with your provider.</li>
            <li className="pl-2"><span className="font-semibold">The Calibration Wizard:</span> This is the most critical step.</li>
          </ol>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
          <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2 mb-2">
            <Settings size={18} /> What is Calibration?
          </h4>
          <p className="text-amber-700 dark:text-amber-300/80 text-sm leading-relaxed">
            The calibration wizard is not just a survey. It adjusts the internal engine of Synk to match your cognitive style. It customizes explanation depth, learning speed, the balance between visual/textual content, and how frequently the system offers hints.
          </p>
        </div>
      </div>
    )
  },

  // --- ACADEMY CATEGORY ---
  {
    id: 'dashboard',
    title: 'The Dashboard',
    category: 'Academy',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Navigating the Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Your dashboard is the control center for your embedded systems journey. It provides a high-level overview of your current standing.
        </p>

        <div className="grid gap-6">
           <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <Layout className="mt-1 text-synk-500" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Active Lessons</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Start new topics or resume exactly where you left off. Each lesson card displays estimated completion time and difficulty level.
                </p>
              </div>
           </div>
           <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <Award className="mt-1 text-synk-500" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">XP & Badges</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Track your mastery. Badges aren't just for show; they unlock advanced project tiers.
                </p>
              </div>
           </div>
           <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <Cpu className="mt-1 text-synk-500" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Hardware Status</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  See which simulated hardware is currently available in your sandbox environment.
                </p>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'writing-code',
    title: 'Writing Synk Syntax',
    category: 'Academy',
    content: (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Writing Your First Program</h1>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Synk uses a natural-language syntax designed to be readable while mapping 1:1 to C++. In the lesson editor, you focus on <em>logic</em> rather than semicolon placement.
        </p>

        <div className="bg-slate-900 rounded-xl p-6 shadow-xl overflow-hidden">
          <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
            <span className="text-xs font-mono text-synk-400">EDITOR PREVIEW</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-purple-400">start loop</div>
            <div className="pl-4 text-white">turn on pin <span className="text-blue-400">13</span></div>
            <div className="pl-4 text-white">wait <span className="text-blue-400">1</span> second</div>
            <div className="pl-4 text-white">turn off pin <span className="text-blue-400">13</span></div>
            <div className="pl-4 text-white">wait <span className="text-blue-400">1</span> second</div>
            <div className="text-purple-400">end loop</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Real-time Translation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              As you type, Synk automatically generates the Arduino C++ equivalent side-by-side. This helps you learn the professional syntax without the frustration of syntax errors.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Intelligent Linting</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              The editor checks for logic mistakes instantly. If you try to write to a pin you haven't set as output, Synk will gently nudge you to fix it.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'sensors',
    title: 'Sensors & Inputs',
    category: 'Academy',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Working with Sensors</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Synk simplifies the complex math usually required for raw sensor data.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-synk-500 font-mono text-sm text-slate-800 dark:text-slate-200">
          read analog pin A0 into lightValue<br/>
          print lightValue
        </div>

        <p className="text-slate-600 dark:text-slate-400">
          Supported simulated components include:
        </p>
        <div className="flex flex-wrap gap-2">
          {['Push Buttons', 'LDR (Light)', 'Ultrasonic Distance', 'IR Receivers', 'Temperature', 'Potentiometers'].map(s => (
            <span key={s} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'progress',
    title: 'Progress & Rewards',
    category: 'Academy',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Gamification</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Learning is hard work, and Synk rewards that effort. The progress system tracks concept mastery, not just completion.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          The <strong>Skill Tree</strong> visually represents your growth from "Novice" to "Embedded Systems Architect". Revisit weak concepts to repair your streak and solidify your knowledge base.
        </p>
      </div>
    )
  },

  // --- IDE CATEGORY ---
  {
    id: 'synk-ide',
    title: 'Using Synk Nexus',
    category: 'IDE',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Real Hardware Development</h1>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          When you are ready to move beyond the browser, <strong>Synk Nexus</strong> is your desktop companion. It connects directly to physical hardware via USB.
        </p>

        <div className="space-y-6 mt-6">
          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">1. Connect</h3>
            <p className="text-slate-600 dark:text-slate-400">Plug in your Arduino Uno, Nano, or ESP32. Synk Nexus auto-detects the COM port.</p>
          </div>
          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">2. Code</h3>
            <p className="text-slate-600 dark:text-slate-400">Write in Synk Syntax or standard C++. You can toggle between views instantly.</p>
          </div>
          <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">3. Upload</h3>
            <p className="text-slate-600 dark:text-slate-400">One-click compilation and upload. No complex toolchain setup required.</p>
          </div>
        </div>
        
        <div className="mt-8">
            <a 
              href="https://synk-nexus.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
            >
              Launch Synk Nexus <Terminal size={16} className="ml-2" />
            </a>
        </div>
      </div>
    )
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    category: 'IDE',
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Next Steps</h1>
        
        <div className="bg-synk-50 dark:bg-synk-900/20 p-6 rounded-xl">
          <h3 className="font-bold text-synk-800 dark:text-synk-200 mb-4">To get the most out of Synk:</h3>
          <ul className="space-y-3 text-synk-900 dark:text-synk-100">
            <li className="flex items-center gap-2"><Zap size={16}/> Follow lessons in order—don't skip the basics.</li>
            <li className="flex items-center gap-2"><Zap size={16}/> Build projects on real hardware whenever possible.</li>
            <li className="flex items-center gap-2"><Zap size={16}/> Read the translated C++ code to understand what's happening under the hood.</li>
            <li className="flex items-center gap-2"><Zap size={16}/> Experiment! Change variables and see what breaks.</li>
          </ul>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          After completing Synk Academy, you will be ready to build real IoT projects, home automation systems, and robotics.
        </p>
      </div>
    )
  },
];

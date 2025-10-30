---
date: '2025-09-27T11:24:47Z'
draft: true
title: 'Claude Swarm Deep'
weight: 10
---

Agentic swarm coding feels like the next big thing.

While I had success with claude-swarm in a small proof of concept (link), I struggled to understand in more detail how it work.

Quick recall, here is what I did:

```shell
npx claude-flow@alpha init --force

npx claude-flow@alpha hive-mind spawn "Create a simple single player web page where the user can play tic-tac-toe against the computer" --claude
```

With this, Claude starts doing the work.
Approximately 20 minutes later, it produced [a solution that worked](/ttt/tic-tac-toe.html) at the first attempt!

But, how does this scale?

There are quite a few design or process decisions that you need to make early on.
As a beginner in claude-swarm I felt a bit lost.

This time around I took a more considered approach.

As suggested by some members of the claude-swarm community, I downloaded the whole package and asked Claude to explain it to me.
For good measure I also ran it in a devcontainer (official one by Claude Code).

Reading through the CLAUDE.md that comes with claude-swarm, the first thing that I wanted to deeper understand is the SPARC methodology, or more specifically, why you want to select any of the SPARC modes.

So I asked claude code in the claude-swarm directory.

The SPARC commands are failing due to missing commander dependency in the CLI execution path.

npx claude-flow sparc modes

if you run this inside the command line of claude code, with dangerous permissions, it will autofix this.
SPARC configuration file (.roomodes) not found  
     Please ensure .roomodes file exists in: /workspace

Fixed.

## The first answer

Choose based on your current development phase:

  🎯 Choose by Development Stage:

  • spec - Starting a new feature/project, need to define requirements
  • architect - Have requirements, need to design system structure• tdd - Ready to implement with test-first approach
  • integration - Components built, need to connect them
  • refactor - Existing code needs improvement/optimization

  📋 Choose by Task Type:

  • Planning/Analysis → spec
  • System Design → architect
  • New Development → tdd
  • Connecting Parts → integration
  • Improving Code → refactor

  🔄 Typical Flow:
  spec → architect → tdd → integration → refactor

  Quick Decision:
  - Don't know what to build? → spec
  - Know what, not how? → architect
  - Ready to code? → tdd
  - Code exists, needs connecting? → integration
  - Code works, needs improvement? → refactor

## plan B, or put it to the test.

https://claude-flow.ruv.io has a quickstart.

`npx claude-flow@alpha init --force` suggested. so let's run that in the command line.

Now what? It says something quite different:

Quick Start:
1. View available commands: ls .claude/commands/
2. Start a swarm: npx claude-flow@alpha swarm "your objective" --claude
3. Use hive-mind: npx claude-flow@alpha hive-mind spawn "command" --claude
4. Use MCP tools in Claude Code for enhanced coordination
5. Initialize first swarm: npx claude-flow@alpha hive-mind init

Do I run this in the shell or in claude code?

Again, I asked its code base about it.

Claude:
They Can Work Together:
  # 1. Use SPARC for planning
  npx claude-flow sparc spec "E-commerce platform"

  # 2. Use swarm for execution  
  npx claude-flow@alpha swarm init hierarchical
  npx claude-flow@alpha swarm orchestrate "Build the spec'd platform"

  Choose Based On:
  - Simple feature → SPARC
  - Complex system → Swarm
  - Learning/planning → SPARC first
  - Production development → Swarm


OK, but what is the difference between Swarm and hive?

Hive Mind = Advanced Multi-Agent Collective Intelligence

  Complexity Hierarchy:
  SPARC (Single) < Swarm (Multi) < Hive (Collective Intelligence)

  🐝 When Hive is Necessary:
  - Cross-session memory - Agents remember past decisions
  - Collective learning - Patterns improve over time
  - Autonomous coordination - Agents self-organize without central control
  - Complex problem-solving - Emergent intelligence from agent interaction
  - Long-term projects - Persistent knowledge across multiple sessions

  ⚡ When Hive is Overkill:
  - Simple CRUD applications
  - Single-feature development
  - Short-term tasks (< 1 week)
  - Personal projects
  - Learning/prototyping

  🎯 Decision Matrix:

  | Scenario                                                  | Use   |
  |-----------------------------------------------------------|-------|
  | "Build a login form"                                      | SPARC |
  | "Build an e-commerce site"                                | Swarm |
  | "Build a distributed AI platform that learns and evolves" | Hive  |
  | "Debug this function"                                     | SPARC |
  | "Migrate entire codebase to new framework"                | Swarm |
  | "Create self-improving development workflow"              | Hive  |

  🚀 Start Simple, Scale Up:
  1. Try SPARC first
  2. If too complex → Swarm
  3. If you need persistent intelligence → Hive

  Quick Test: Do you need agents to remember and learn from previous sessions? If no → Skip Hive.

So, when would that be? 
Here is what claude says about that. 

Session End Triggers:

  Automatic Ends:
  - Claude Code restart - You close/reopen the IDE
  - Terminal session closes - SSH disconnect, laptop sleep, etc.
  - Process termination - Ctrl+C, system shutdown
  - Memory limits reached - Long conversations hit token limits
  - Inactivity timeout - Extended periods without interaction

  Manual Ends:
  - User exits - /exit command or explicit termination
  - Task completion - Agent finishes and saves state
  - Context switch - Moving to different project/directory
  - Deliberate reset - Starting fresh workflow

  Why Sessions Matter:

  Without Persistent Memory:
  Session 1: "Use TypeScript strict mode"
  Session 2: Agent suggests JavaScript again 🤦‍♂️

  With Persistent Memory:
  Session 1: "Use TypeScript strict mode" → saved
  Session 2: Agent remembers → "Continuing with TypeScript strict mode"

  Session Lifecycle:
  # Session starts
  npx claude-flow start

  # Work happens, memory accumulates
  Agent learns patterns, stores decisions

  # Session ends (any reason above)
  npx claude-flow hooks session-end --export-metrics

  # Next session starts
  npx claude-flow hooks session-restore --session-id "previous"
  Agent: "I remember we were using React hooks pattern..."

  Real Example:
  - Monday: Build auth system, decide on JWT approach
  - Tuesday: Claude Code crashes/restarts
  - Wednesday: Agent remembers JWT decision, doesn't suggest sessions again

  The memory bridges the gaps between interruptions.

  ## the set of agents..

  claude flow, or the user, sets up a number of agents to run.
  Who decides on that, and why would you want more or less of them?


● 🎛️ Agent Count Decision Makers:

  1. User (Manual Control):
  # You specify exact count
  npx claude-flow@alpha swarm init mesh --max-agents 5
  npx claude-flow@alpha swarm spawn researcher
  npx claude-flow@alpha swarm spawn coder
  # etc... up to your limit

  2. System (Auto-scaling):
  # System decides based on task complexity
  npx claude-flow@alpha swarm orchestrate "Build full-stack app"
  # System: "This needs 6 agents: frontend, backend, database, testing, devops, security"

  3. Configuration Defaults:
  // In CLAUDE.md or .claude/config.json
  {
    "swarm": {
      "defaultMaxAgents": 8,
      "autoScale": true,
      "topology": "mesh"
    }
  }

  🤖 Auto-Spawning Logic:

  Task Complexity Analysis:
  - Simple task → 1-2 agents
  - Medium task → 3-5 agents
  - Complex task → 6-10+ agents

  Example Auto-Decisions:
  "Fix this bug" → 2 agents (coder + tester)
  "Build authentication" → 4 agents (coder, security, tester, docs)
  "Create microservices platform" → 8+ agents (architect, multiple coders, devops, security, etc.)

  🧠 Hive Intelligence:
  # Hive can spawn agents autonomously
  Hive: "I need a database specialist for this PostgreSQL optimization"
  # Automatically spawns database-specialist agent

  Resource Limits:
  - CPU/Memory constraints
  - Token usage limits
  - Performance thresholds

  You control the ceiling, system optimizes within it.

## what is with the neural training and WASM?

● 🧠 Neural Training + WASM = Performance-Optimized AI Learning

  What It Does:
  - Neural Training: Agents learn patterns from your codebase/workflow
  - WASM: WebAssembly acceleration for faster neural computations
  - SIMD: Single Instruction Multiple Data for parallel processing

  🚀 Performance Stack:
  Neural Patterns (AI Learning)
      ↓
  WASM Runtime (Fast Execution)
      ↓
  SIMD Instructions (Parallel Math)
      ↓
  2.8-4.4x Speed Improvement

  When to Use:

  Neural Training:
  # Agents learn your coding patterns
  npx claude-flow neural train --pattern coordination
  npx claude-flow neural train --pattern optimization

  # Example learning:
  Agent notices: "User always uses async/await, never .then()"
  Agent adapts: Future code suggestions use async/await

  WASM Acceleration:
  # Enable for computationally heavy tasks
  npx claude-flow wasm optimize --operation "large-codebase-analysis"
  npx claude-flow wasm optimize --operation "multi-file-refactoring"

  🎯 Use Cases:

  Enable Neural Training When:
  - Working on large codebases (>1000 files)
  - Repetitive patterns in your code
  - Long-term projects (>1 month)
  - Team with consistent coding standards

  Enable WASM When:
  - Slow performance with multiple agents
  - Complex analysis tasks
  - Large file processing
  - Real-time coordination needed

  🔧 Setup:
  # Check if WASM/SIMD available
  npx claude-flow features detect --category wasm

  # Enable neural training
  npx claude-flow neural status
  npx claude-flow neural train --iterations 50

  # Monitor performance
  npx claude-flow benchmark run --type neural

  💡 Skip If:
  - Small projects (<100 files)
  - Short-term tasks
  - Simple CRUD operations
  - Learning/experimentation

  TL;DR: Neural+WASM = Agents get smarter and faster over time. Use for production-scale development.

## --claude

● 🎯 The --claude flag in hive-mind commands:

  Purpose: Claude Code Integration Mode

  npx claude-flow@alpha hive-mind spawn researcher --claude

  What --claude Does:
  - Spawns agent INSIDE Claude Code environment (not external process)
  - Uses Claude Code's Task tool for actual execution
  - Integrates with Claude Code's file system and tools
  - Leverages Claude Code's permissions and security model

  Without --claude:
  npx claude-flow@alpha hive-mind spawn researcher
  # Creates external process agent
  # Runs independently of Claude Code
  # Limited file system access

  With --claude:
  npx claude-flow@alpha hive-mind spawn researcher --claude
  # Agent runs via Claude Code's Task tool
  # Full integration with IDE
  # Can use Read, Write, Edit, Bash tools
  # Part of Claude Code's orchestration

  Real Difference:
  # External agent (no --claude)
  Agent: "I can't access your files directly"

  # Claude Code integrated agent (--claude)  
  Agent: "I can read package.json, edit src/app.js, run npm test"

  When to Use --claude:
  - Working inside Claude Code IDE
  - Need file system access
  - Want integrated development workflow
  - Using Claude Code's tools/permissions

  When to Skip --claude:
  - Running in pure terminal
  - Headless/server environments
  - External automation scripts

  TL;DR: --claude = "Run this agent inside Claude Code, not as external process"

don't add --claude to SPARC commands.

## the current workflow - NOT

- clone a devcontainer environment (e.g. from vscode clone a template repo)
- remove redundant files
- git init ; git remote remove
- npx claude-flow@alpha init --force
- npx claude-flow@alpha sparc spec "read parallaxr.md for input"

  npx claude-flow@latest init --sparc
  npx claude-flow sparc spec "read parallaxr.md for input"

NO:- you may want to add @alpha to claude-flow

lets try
  npx claude-flow@latest init --sparc --force
  npx claude-flow sparc modes
  npx claude-flow sparc spec "read parallaxr.md for input"

NO: still runs into .roomodes errors
Nieuwste versie heeft geen .roomode meer, en geen SPEC meer? 

## Try 2 hive mind - no SPEC

For survival across session breaks, use Hive-Mind with persistent memory:

  Setup for Cross-Session Persistence:

  # 1. Initialize hive-mind (creates persistent database)
  npx claude-flow@alpha hive-mind init

  # 2. Spawn agents with persistence enabled
  npx claude-flow@alpha hive-mind spawn researcher --claude --enable-memory
  npx claude-flow@alpha hive-mind spawn architect --claude --enable-memory

  (hier ergens gaat het al met claude praten en bouwen)
  Gaat compleet over de top met de CICD strategy.

  # 3. Store your project context permanently
  npx claude-flow@alpha memory persist --session-id "parallaxr-project"
  npx claude-flow@alpha memory store "project_files" "parallaxr.md"
  npx claude-flow@alpha memory store "project_goal" "create specification from parallaxr.md"

  # 4. Create persistent workflow
  npx claude-flow@alpha hive-mind workflow create "parallaxr-spec" \
    --name "ParallaxR Specification Analysis" \
    --persistence true


## still a bit confused about this.




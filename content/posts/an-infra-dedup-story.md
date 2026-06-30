---
date: '2026-06-28T10:41:46Z'
draft: false
title: "Counting the copies: how an AI wiki helped me read my father's digital legacy"
weight: 10
---

# Counting the copies: how an AI wiki helped me read my father's digital legacy

## The root cause

In the 1990s my father's health deteriorated as a result of what was later thought to be some
immune system related disease.
He found out that living in warm climates with little pollution and no need to stay indoors for very long helped him maintain his health.
So he took a bold move, sold his house, and became a traveling academic.
In the summers he would stay in the south of France were we visited him, in the shoulder seasons he lived on one of the Canary Islands, and in the winter months he traveled to the southern hemisphere (Chili, Africa, Australia).
Jokingly he called himself a 'refugié pollutique'.

As a polyglot, an academic and a practitioner of various trades, wanting to stay in contact with like minded people, he was a very early user of the internet.
He maintained a weblog []() before the word blogging came into being.
To him, the internet was an intellectual lifeline.
But it had challenges.
Dial-up internet at 28.8 Kbit/sec was the norm in the developed world, and a little less so elsewhere.
Light laptops still had to be invented, as well as consumer grade digital photography.
A floppy disk held 1.4 Mbyte, less than one typical photo image today.
The top portable storage device was the Iomega Zip-drive at 100 Mbyte.

As I remember he had a HP 200LX to fit in his luggage.
He used that to email, write, and maintain his blog.
On the road, this is how he managed his IT.
Back home, I was his system admin taking care of the web hosting.
A little later he got a Toshiba Libretto 50CT, an ultra small laptop with close to one GB of storage, a huge improvement.
Still, always on was not an option, so he needed to carry his entire digital archive with him, email, e-books, music, documents, pictures.
And then there is the need to make a backup for availability.
Over the years, his demand for digital storage continuously outstripped whatever would fit on a single device.

## Getting to grips with the legacy

Long story short: when he died in 2020 we collected multiple mini laptops, hard disks, usb drives, memory cards of various sizes, and probably some leftover storage technologies that I'd rather forget.
To make matters worse, the way of best organizing pictures, for example, changed over the years.
He would not always neatly migrate  all his old backups to newer systems.
Bandwidth and storage were scarce, so to email or blog a picture he had to shrink it first — and he kept the shrunken copies, the same shot saved at 400, 800, 1,000 and 1,200 pixels with the size baked into the filename. Each resized version is a distinct file to the computer, so a single photograph quietly became four or five, then multiplied again through every backup.

Nothing was ever really thrown away. Each time he moved to a new machine he copied the old one in wholesale and named the folder after whatever he was retiring that month — AsusAllesvanE240711, NewVolume20apr13, BackupLibraries26okt11 — so every disk became a geological layer of the one before it.
On just one 500 GB drive, more than half of the 134 GB it held — some 73 gigabytes — turned out to be exact, byte-for-byte copies of material already sitting somewhere else: the same scanned childhood photo, the same holiday, saved again and again. A single two-hour recording of a conversation with a friend was present eleven times; one photo from his eightieth birthday surfaced in four separate photo libraries, plus a "just in case" export, plus a backup of a backup.

His pictures had also lived through every era of Apple's shifting ideas about how photos should be kept — an old iPhoto library, the Photos library that succeeded it, a half-finished migration of that one, and a flat exported folder — four near-identical copies of roughly the same twenty thousand images, and none of them clearly the master.
The oldest ones, scans of prints from the late nineties, carried no capture date at all; only the folder names he had typed by hand offered any clue to when they were taken.

It wasn't only photographs. One folder alone held 6,251 e-books and nearly 4,000 MP3s.
The music ran to some 5,700 tracks and thirty gigabytes, much of it in duplicate and triplicate: the same Brel, Brassens and Berlioz ripped and re-ripped across the years. And there were genuine fossils — a Van Dale dictionary from 1997, its Windows help files still carrying a "locked" flag he must have set a quarter of a century ago, sitting patiently on a disk long after the software that could open them had disappeared.

Add up his machines and the scale of the habit becomes plain: more than 300,000 files, of which only about 180,000 were actually distinct — roughly two in five were copies of something he already had.
In the end, making sense of his data turned out to be less a matter of reading it than of counting how many times he had saved it.
 
At the time of his death he had two MacBooks,
but the Apple Photos app instances on them were not quite the same.
I tried a variety of tools, with varying degrees of success.
It took quite some time to get to understand how they work, or do not work as the case may be.
And then those tools only tell you what the duplicates are, not what to do with them.

I managed to consolidate away the smaller storage devices, and did a bit of deduplication.
When I managed to liberate one laptop, and got rid of the storage devices that had no recycle value other priorities took over for a while.

## IT supports knowledge management

The management of my home IT isn't perfect either, I probably inherited some of the traits of my father.
At the same time, getting to grips with managing IT at scale has occupied me in various professional roles my entire career.
The value of information there, to paraphrase the Godfather, is "strictly business, nothing personal".
At home however, a lot of information *is* personal and has emotions attached to it.

In a business, most of the IT should run production within clear guardrails.
Experiments run in completely isolated environments.
But a home lab is purposely built for experiments.
They run for minutes, days, and in some cases years.

I have rotated through various systems to keep track of those.
I have tried paper, spreadsheets, text files, notes.
None of them stuck. They become more of a burden to keep up to date, than a help when you need them.
They are either too small and limited to be of actual use, or a big data dump without context that becomes too time consuming to go through.
Yet, it is wanted, because you can't expect to remember tiny details of how and why you did configurations years ago, why you copied a folder, or stood up a VM or container.

## Infrastructure management in the age of AI

I always dreamt of IT helping me with my knowledge management.
Many years ago I created an ontology around my consulting topics.
But, like some of the folders of my father's computers, it quickly became a paper dump.
And anything you'd be looking for either gave you a small factoid, or a huge paper, never the specific insights you would be looking for.

And this was not my first attempt at systematic knowledge management.
Every time, it turned out that
maintenance on these systems is both a burden and a distraction from the real work.

Recently, I ran into Karpathy's LLM wiki approach [link to gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f), which takes a simplified approach.
Instead of maintaining a complex graph database of which the structure is opaque, all the relevant knowledge is consolidated in a wiki style set of markdown documents.
Every relevant concept has its own page, and links to other pages with simple hyperlinks.

This type of wiki evolves in various ways.

- New data is ingested under instruction from the user, and a suitable LLM prompt summarizes it into the wiki by adding new pages and links as relevant.
- You query the wiki through the LLM.
The result of that conversation can be fed back into the wiki, as useful summaries, or even as new insights.
- Periodically, an LLM prompt or agent can do a health check on the wiki. It can scan duplicates, contradictions, data gaps, etcetera.

In your filesystem this has three layers.

- Raw data that is ingested, and which should never be mutated.
- The wiki, as it is produced by LLM actions from the raw data
- The schema tells the LLM how to work. It has prompts and conventions. It will also point to an index file and a journal file. This is what would be in CLAUDE.md or AGENTS.md.

Karpathy states that this system actually works better than a RAG pipeline.

I set out to create such a wiki for a business project on evaluating LLM systems.
Step 1 was to initiate a dialog in Claude Code by roughly explaining the intentions and scope, giving it a link to the Karpathy gist.
With a bit of back and forth it set up the whole system and I could start ingesting a couple of documents.

Step 2 was to work on two relevant tasks:

- what additional research is needed
- create some draft deliverables for the project.

For example, in my project I linked quality criteria of LLM systems, such as readability of answers, to a risk, such as customers being unhappy.
I asked the wiki to compile a list of such risks, review the quality criteria we already established and tell me the risks that were not covered by a criterion.

This works great.
The results flow out easily. And you start feeling like an orchestrator of a system, instead of its minion.

Why does this system work better than the others I have tried?
My feeling is that the automatic consolidation and regular reorganization of concept map, while maintaining links to the source documents, eliminates a lot of the tedium.
Letting the LLM search in that concept map gives more focussed answers.

What is still not easy:

- ingesting anything other than plain documents (think sections of websites) still requires manual work, though the system can be extended to that.
- how to git commit at an appropriate granularity, especially with multiple concurrent sessions. Again, solutions exist, I have not gotten around to implementing them.
- classifying source material on credibility and trustworthiness. I have a lot of material from practitioners 'in the trenches', whose first hand experiences are true, but not yet scientifically validated.

## Agentic Infrastructure Management

After having this positive experience, I started to think about how to apply this to  
infrastructure management, and this also led me to applying it to my father's digital legacy.
The way I see it, infrastructure management is like knowledge management, but with a twist.
Instead of just looking at facts that are supported by scientific papers, and rarely change after that, understanding infrastructure has knowledge on multiple levels.

Cognitive theory talks about:

- semantic information, facts that are supported by evidence
- episodic information, statements on events that happened on a specific moment in time, typically actions that were undertaken
- procedural knowledge, if we have a specific outcome, here is how to get it
- beliefs, provisional hypotheses, but also objectives, things that may or may not be true

An example of semantic information is what machines are on our network.
An episodic item would be: rebooted a machine at a certain moment.
Procedural: step by step instructions on how to create a container image and run it, for example.
A belief would be that a certain server has a bad power supply which causes a variety of failures.

All of these can be recorded in a wiki, but they all have to be maintained and treated in different ways.

## Jumping in

Like many people have found out, Claude knows a lot about how infrastructure works.
Ask it to write a shell script to compare folders, write a Docker file, diagnose a certain error message, and more often than not, the answer is spot on.

I started by asking Claude Cowork to fix problems in Raspberry Pi installations, such as broken memory cards, file shares, and application installations.
Then I asked it to encode these solutions in runbooks.
After a while, this became a bit messy, and I asked it to reorganize the documents for consistency.
I also moved this story to Claude Code, same engine as Claude Cowork but it lives in the terminal,
so it could execute some of the tasks directly itself.

But it was still under my direct instructions.
I was looking for something a little more autonomous.
And that is when I investigated applying the wiki approach to infra management as sketched above.
I instructed Claude to create the full structure to implement this, and after some back and forth, it was working.
I also installed some MCPs and command line tools for querying the external log service and the local WiFi manager.
More are probably to come.

To wrap it up, I called it LIMA, LLM Infrastructure Management Agent.

I started using it for reviewing the status of my home Wifi, checking on various logs, cleaning up the home lab in general, starting containers with specific software inside, and for deduplicating my father's legacy.

Its structure is a little bit more complicated than the research wiki, because of the different types of memory (semantic, procedural, etcetera).
It now stands at about 2500 lines in over 50 files.
It will probably grow as it discovers more of my IT estate.

## Deduplication

Generic tools for deduplication give you the duplicates.
They also have lots of features for use cases that are not yours, but need weeding out,
as you are trying to figure out which one best matched yours.

In my case I had my father's laptop nearly filled to the rim, a USB disk with an unknown number of copies on it, and a big folder on my main laptop with condensed USB thumb drives.
Some of the pictures were stored in folders, others in a number of MacBook Photo libraries.

LIMA helped create coherent access to all these collections, took inventory of them, and helped me plan a consolidation and migration based on an *intent* for a final goal.
Most deduplication actions can be done with basic shell scripting instead of dedicated tooling, and this gets even better if it is informed by the intent, such as only looking for a specific type of photo.
I also liked the capability to do this across devices, which is information stored in the various types of memory.
And with the objective of freeing disk space it stepped outside deduplication and uncovered a full 31 GB Photos library in the trash, and Time machine snapshots that silently kept that disk from draining.

I had spent days on deduplication before, but the nitty gritty was frustrating, and I found it so hard to track that I abandoned it for a few years.
I still took many hours to complete the deduplication, but the wiki structure enabled LIMA to help me keep on track, continuously experience progress, while also allowing me the occasional break from it.

## The result

It was still an effort, but the images are now finally organized enough to review, instead of a set of folders with counts on them.

This enabled me to revisit episodes of his life, including a lot of shared memories and the history of the house in France that we inherited from him.
I also felt his pain as he struggled with bleeding edge technology to keep his life connected to his friends and family, even as he was far away from them.
Finally, I could lay that part of his legacy to rest.

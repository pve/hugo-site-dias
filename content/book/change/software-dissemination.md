---
date: '2026-07-07T00:00:00Z'
draft: true
title: "Software Dissemination"
weight: 110
---


## How software grows

A lot of software begins its life as the project of an individual, but ends up being used widely in organizations, or even society at large.

I have seen many Excel files that started out as a small set of notes and grew to be the operational backbone of entire departments.
Examples I have seen include complete bookkeeping ledgers, customer relationship systems, and planning tools.
And the allure of tools such as Excel, Airtable, et cetera, is that they are flexible, and don't require a skilled programmer to update them.
The risk there, though, is that as the software grows in importance, its governance does not necessarily keep up.
More specifically, there are specific thresholds that, when crossed, cause specific new risks.

Let's have a look at the journey that such an application takes as its adoption grows,
the lifecycle of a piece of software, you might say.

The size of an organization matters, as we saw.
The same thresholds apply here too, but measured differently. We'll look not so much as the formal size of the organization, but at the number of people that regularly use a specific piece of software, be it an Excel sheet, an AI coded app, or just a shared cloud network drive.
Even inside a large complex organization, there can be a small group that is below the Dunbar number.

The smallest step up in size, but in some ways the most important one, is when the software starts to be used by somebody other than the initial creator.
This transition will uncover many intentions and assumptions that were only in the head of the creator, sometimes not even consciously.
This step will force the creator to consider the ideas, requirements, and constraints of other people.
In other words, the creator will have to start sharing control.
While at this scale this mostly happens informally, this is were governance starts.
Interests are rarely 100% aligned, even while there is a perceived benefit of using the tool together.

For example, in an Excel based application, this marks the point where you suddenly need to talk about what certain tabs and columns mean, and who is allowed to change what, even if there are only two people using it.

As a creator, if you feel you have an idea that is worth sharing in software, this is where your 'marketing' starts.
My father researched and taught about the initial stages of product development, called this the 'socialization' of your individual idea.
It requires you to step into the minds of others.
As he used to say: "If you want to know what Jane Doe buys, you have to look through Jane Doe's eyes".

One trap to fall into, which seems specific to software rather than ideas in general, is that the software appears to formalize the idea unambiguously in code, but that there are many details whose meaning is subject to interpretation.
For example: who do you consider to be an employee of a company? Just the people on the payroll, or all contractors?
A modern example: who do you give access rights to data? People, or also AI agents individually?

If this step is not properly taken, the application will eventually die, or at least will not be used as widely as can be beneficial to the organization.
In the meantime, if many people use it in an uncontrolled manner, the application becomes an operational risk to the organization.
For example: if everybody can modify a planning spreadsheet, any individual can turn it into a mess.

As the user base of software grows, you will get into more governance discussions: access and modification rights, who pays for the development, who is responsible for fixing problems, and more.
Elsewhere in this book you can see how promise theory can be applied to address that.

Though I have seen Excel files that were in use by thousands of people, at some point in time the required governance is best implemented with the help of more sophisticated shared infrastructure such as databases and identity management systems.

Continuing our scaling journey from one to two to a small group and then beyond the Dunbar frontier, the most important changes are processes and meaning.
In small groups a lot of governance can still be informal.
Everybody in the group will have a reasonably clear idea on who is supposed to be doing what.
Beyond the Dunbar frontier, this structure breaks down.
And when the user base of the software grows beyond the size of an organization, such as with a SaaS application, controls such as policy documents cease to be effective, as the users no longer belong to the organization that can enforce those policies.
What might come in its place are contracts and regulation, and this is a whole topic in itself.

An application supporting business processes enforces a certain world view.
For example: what constitutes a customer, what does an order look like, how do we value certain things.
An organization needs to have a lot of these aligned across its entire workforce in order to be effective and efficient.
But as an organization grows, these world views become more complicated.
This then requires a lot of user training, and beyond the Dunbar frontier, this has to be formalized.
Even then, these complicated world views are often a source of great frustration to many employees.
You'll hear comments such as "It is almost impossible to work with this system", and "Fighting with the system". 

What I find interesting is that for public SaaS solutions, the average user does not seem to be aware of this 'world view' that is being imposed by the owners of the application.
At the same time, you can be sure that owners of a successful SaaS service have a very clear idea of the 'world view' they are imposing on their users.
A disturbing example is social media, in which its addictive effects are very deliberately engineered.

(wrapup to come)
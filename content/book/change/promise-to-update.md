---
date: '2025-08-14T11:30:02Z'
draft: false
title: 'Promise to Update'
weight: 25
---

An important part of managing digital infrastructures is updating various software components.
It does not matter if we are talking about operating systems, applications, AI models, configurations, software libraries, and so on.

What matters is: who is going to do that?

Updates happen for many reasons, but the major ones are:

- new functionality
- better security.

As you can imagine, there are different stakeholders for these changes, and different skill sets required.

In today's environment, whether we are using cloud or not, there is a division of labor and expertise.
This can be within a company, or across many service providers.
Figuring this out is an example of applying *shared responsibility* models.
Ideally, a cloud service comes with a clear shared responsibility model that explains who is supposed to do what.
What is it the cloud provider does, what is an external service provider doing, and what should cloud consumers do themselves?

A great way to then detail out the responsibilities is by using the terminology of *promise theory*, which is discussed elsewhere in this book.

Here are some examples from service providers:

- We promise to prevent unauthorized access to these systems.
- We promise to maintain a particular system according to vendor best practices.
- We promise to make sure that there is a spare copy of your data off site.
- We promise to apply updates and improvements.
- We promise to answer your call to the service desk.

It is not just about doing tasks, it is also about specifying what the conditions and outcomes are.
You don't just want updates done, you want them done within a certain period of time.
In that way, others can depend on that, with less coordination and overhead.

A SaaS provider promises to update its operating systems, libraries, configurations, for example.
An IaaS provider does *not* promise to update the operating system on your virtual machine.
In fact, they might even promise that they will *not* have access to it.

Most people are familiar with calling a service desk (or customer support in general) for help. Historically, this has often been a frustrating experience. That is why it is important to have quality attributes with them, such as 'time to respond' (which typically means, the time it takes for somebody to start working on it), and escalation paths.

For software updates, you can think of quality attributes such as time to update after a new version has been tested.

In a complex multi-provider environment, one of the most important things about promises is, who is making them.
Many security issues have been the result of a responsibility falling in the cracks between two parties, where both think the other is taking care of it.




---
date: '2025-04-30T12:46:33Z'
draft: false
title: 'Three books on Zero Trust, and when you should read them'
weight: 10
---

_'But where do we start?'_

The question hung in the air of my training session, asked by many of the attendants. Mind you, these are experienced people with many years of cyber security experience.

But turning Zero Trust from an abstract concept into concrete action? That's where everyone gets stuck.

I know that feeling well. Years ago, I joined my first Zero Trust working group, swimming in a sea of frameworks, agency guidelines, and vendor whitepapers. I even had the privilege of attending sessions with John Kindervag, the father of Zero Trust himself. Yet the gap between theory and implementation remained stubbornly wide.

That's why I've spent months analyzing the growing mountain of Zero Trust literature, searching for resources that bridge this gap. Most of what I found was marketing fluff - vendors repackaging their existing products with a Zero Trust label. But three books emerged that, together, might finally answer that persistent question: 'Where do we start?'" I owe it to my students to do this research.

Here is my take on these three books that I feel complement each other nicely. I have interspersed that with some of my own perspectives and wrap it up with what I think could use additional elaboration. Read to the end for a final recommendation.

## The Certificate of Competence in Zero Trust by the CSA (Cloud Security Alliance)

The CCZT (Certificate of Competence in Zero Trust) is the first vendor neutral body of knowledge on ZT (Zero Trust).

Technically, it is not a book, but a set of study guides. As usual with CSA, the study guides are free downloads, and a large group of volunteers was involved in their making (including me).

The CCZT body of knowledge is a very comprehensive set of documents, and it aims to incorporate most industry knowledge, including those of US agencies such as CISA and NIST.

CCZT takes a top-down and process-oriented approach, attempting to be rigorous and comprehensive. For me the best way to explain the usefulness of this approach is by pointing out that no organization wide approach is going to succeed without extensive stakeholder buy-in. CCZT addresses that.

Implicit in the ZT approach is understanding an underlying trend. More and more companies are effectively a digital company, deploying more IT than ever, across a much wider and less controlled network, while external threats and compliance requirements are only increasing. Old-school blanket approaches to security are no longer sustainable. It is not your daddy’s datacenter anymore, and there is no firewall to rule them all.

Instead, we need to prioritize, starting from the most valuable data assets to protect.

In my CCZT learning cohorts, we go through the chapters of CCZT and see how the concepts can be applied in the real world. The fit seems to be good, so far.

What seems to work is that ZT has a language that is understood across an organization: from the board room to the shop floor.

Of course, we’ll still run into that old problem that unless you know a bit about the technology and architecture, it is hard to understand the management and governance requirements, and vice versa. The limited coverage of technical examples in CCZT does not make that easier.

The CCZT chapter that feels a bit like the odd one out is the one on SDP (Software Defined Perimeter). It introduces different words for similar concepts, and it covers one specific set of use cases in quite a bit more detail than the rest of CCZT, down to introducing the Single Packet Authorization protocol.

As far as my memory of the working groups goes, this is the understandable result of wanting to incorporate the seminal earlier work that was done on SDP into later developments.

In summary, the biggest contribution of CCZT is that it comprehensively covers most organizational levels, but the objectives of timelessness and vendor neutrality make it hard on people who lack experience in organizational dynamics and technical architecture.

That is why the next books come in handy and complement CCZT nicely.

## Project Zero Trust

“Project Zero Trust” is a business novel by George Finney. A business novel has fictional characters in it and elaborates on a management concept or business principle in a story. It bears a relationship with fictional case studies that are popular at certain MBA programs.

What I like about the book is that it paints a reasonably realistic picture of a modern enterprise, including the information technology choices that it makes. This serves as a good backdrop to a variety of Zero Trust initiatives, which the book describes in a bit of detail.

As an instructor I find that most of the vendor neutral training material out there lacks specific examples (I mentioned CCZT as a specific example above). This makes it hard for students to anchor the abstract concepts that they are fed to a realistic environment with some resemblance to their job situation.

This book feels like it fills that need for a lot of my students, which is why I am recommending it to them. It combines a compelling story with enough examples that can be related to by anybody who has a basic understanding of information technology, while suggesting enough deeper dives for the so inclined (DNS, DHCP, anyone?).

“Project Zero Trust” has most of the elements of the business novel genre, to the point that some feel like a cliché. There is the protagonist who has a new job, and runs into problems on day one, a real hero story. There is the CEO who steps down, the beers in a bar scene with insights from unexpected coworkers, and naturally the happy ending with the promotion. And there is appropriate ‘couleur locale’ from conference rooms to office dungeons.

It works most of the time.

What I think the book could use some more off is a bit of drama. I mean that in the technical sense. The only serious conflict in this book is between the organization and one adversarial hacker. In contrast, the “Phoenix Project” and “Unicorn Project” (the archetypical IT business novels) show at length what internal conflicts in its protagonist organization can develop. To me this is relevant because no strategic IT innovation will be successful if it does not go through significant internal conflict and its resolution. More examples in spelling out the existing conflict and pathologies of an organization would therefore add significantly to the educational value for my students.

I also liked the overt and covert movie references, and the shoutouts to a variety of industry organizations such as the Cloud Security Alliance and NIST.

## Zero Trust Security

“Zero Trust Security,” by Jason Garbis and Jerry W. Chapman, is presented as an enterprise guide.

While “Project Zero Trust” narrates the ZT journey from the trenches that are under fire (please pardon the military metaphors), this book takes an architectural approach. Component by component is examined to see how they can play a role in applying Zero Trust principles. Example chapter titles: “Identity and Access Management”, “Virtual Private Networks”.

What I like about the book is the systematic and consistent usage of deployment diagrams. In my opinion these are the first tool to use in analyzing an architecture for security.

But it does not stop there. The practical project experience of the authors shines through, for example in discussions on how to pragmatically approach the ideal of Zero Trust. The final part of the book summarizes their organizational and governance experiences. This covers similar ground as CCZT does, but in a much more pragmatic way.

As comprehensive as the book gets, it leaves me with the feeling that there is more to it and that we are still only scratching the surface. And the more this book elaborates on, the more I get the feeling that there is more to uncover.

In its pragmatism one insight stood out for me. Zero Trust can be presented as a radically new insight, which in a way it is, but almost all elements of it can be traced back to security concepts that are much older. The architectural examples in the book all seem to illustrate that Zero Trust is built with existing technology that only needs to be enhanced slightly.

That is not necessarily bad, in my opinion. On the contrary, it gives me the feeling that Zero Trust has the potential to be a unifying new language and conceptual framework for IT and cyber security. This alone can lead to more efficient and effective dialogue on cyber security, which is a good thing.

But a wide potential of applicability then still begs the question: where do I begin, and how do we know we are progressing? The maturity models give some insight but probably fall short for the technical professional who needs to map this to products and configurations.

## But what do we need more?

As an instructor, I have two thoughts for more instructional material.

First: a set of labs. Even though all three books have some technology examples in them, nothing beats code that works, or actual design diagrams to tinker with. And once you have these labs, it will be easier to discuss how ‘Zero Trust’ can be added incrementally. It will also be easier to discuss the limitations of these solutions in fulfilling the Zero Trust promise.

Second: I am thinking of a game. The playground of the imagined game is an architectural solution to fulfill a specific ZT scenario. Players could use elements such as game cards on a board to rack up points and avoid penalties. The cards and the board would be aligned to the major ZT concepts. Maybe we could throw in random scenarios from bad actors, like the tabletop exercise elaborated in “Project Zero Trust”.

## Summary and conclusion

All these books are relevant for the aspiring Zero Trust professional. The concepts and language overlap sufficiently, that is, any differences do not confuse. For somebody new in the field I would recommend starting with “Project Zero Trust”: it is a nice story, and a nice backdrop and source of examples for the other books. I believe the others can be read in either order.  If you want to strengthen your architectural understanding of enterprise IT, read “Zero Trust Security” first. If you want a more comprehensive stakeholder and project perspective, and you can live with abstract architecture concepts, you might prefer the CCZT study guide first.

The books complement each other nicely, but even together still aren’t a roadmap to follow blindly. That is why I am looking forward to working with practitioners in my Zero Trust learning cohorts.

[https://cczt.clubcloudcomputing.com](https://cczt.clubcloudcomputing.com)

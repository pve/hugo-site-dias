---
date: '2025-03-29T15:35:53Z'
draft: false
title: 'How My Site Got Hacked'
---

## Detection

I should have acted on the first signals more aggressively. But let’s talk about that later in this story.
Here is the story of my site being infected with malware, viewed by a professional cloud security expert. So I am going to apply all that cloud security theory to it.

The hack led to business damage at the end of one of my webinars. In 2016, on a Friday, I did a webinar, at the end of which I had two links to my site as a call to action.

However, three participants reported in the chat that they could not access those links as their corporate firewalls blocked them. Three different security programs (Microsoft, McAfee and Kaspersky) rated the site as unsafe for various reasons, ranging from detected Trojans to mention of “Malicious software threat: This site contains links to viruses or other software programs that can reveal personal information stored or typed on your computer to malicious persons”.

So, instead of continuing the conversation of how I could be of help to these people, and talk about my next program, I stalled. Nobody bought my program. Business lost. And my time suddenly had to be diverted to fixing this. Another loss. This is all real damage. The only upside is that I can write this article about it.

That was the detection phase, one of the phases of the NIST incident response process. As I mentioned, I could have found it earlier. For more information on the NIST incident response process guidance at the time of this incident, you can refer to the [NIST Special Publication 800-61 Revision 2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf). A new version is in preparation.

## Analysis and Eradication

Now for the analysis and eradication phase. What the heck was going on? I had very little luck in getting the security programs to tell me what was wrong with the site. [Virustotal](<http://www.virustotal.com>), which aggregates reports from security providers, reported 1 hit by Yandex, though the diagnostics on their webmaster pages were vague. McAfee and Kaspersky did not seem to have any service that is helpful with this.

In the mean time, three more reports came in on the site, adding TrendMicro to the list of blockers.
It took my site manager until Tuesday to fix it. Very disappointing. He also was not very communicative about the real underlying problem, other than that is was caused by a WordPress plugin that had not been updated. He did manage to restore the site and clean it. I think.

After I discovered the problem, independently I got a report from a SEO expert, who noticed funny code in the pages, and weird statistics in the analytics. He told me that the malware was in fact a 5 year old Mozilla exploit, which is number 17974 on exploit-db (No link to that exploit, because it gives my site a bad reputation).

It appeared to be an automated infection targeted at Mozilla users who had not updated their browsers. My site does not store any customer data, all form submissions go to a separate autoresponder and shopping cart service. So no data was lost or breached.

## Recovery

Now for the recovery phase. Malware gone does not equal business problem gone. Even as the malware is erased, my site’s reputation is still suffering.

Getting off the blacklists is a hard process; they seem to parrot and echo each other. A week after the alleged site fix, I managed to get it off one or two engines. But it is still listed at Yandex, Clean MX, SCUMWARE and CRDF, all of whom don’t appear to have an expedient process of getting off their blacklist. <http://www.urlvoid.com/scan/clubcloudcomputing.com/> actually increased the number of blacklisting sites in the past days and added Fortinet’s FortiGuard.

One of the engines rates my site as bad because it links to a bad site, namely itself. How Catch 22 can you become?

Sounds like a bad vigilante movie, where the main characters don’t care too much about the collateral damage they inflict. Listing malware sites is easy enough, delisting apparently is harder.

So this reputation might haunt me for who knows how long. Maybe the domain will never really recover.

On the positive side, some corporate firewalls reset the reputation after a few weeks. But be aware that most corporate firewalls are extremely paranoid, as they probably should be. Just having a simple link in my email message pointing to my homepage had that message marked as [SUSPICIOUS MESSAGE] by one of the big four advisory firms.

## Preparation

Finally, back to preparation. What could we have done to prevent this, or at least reduce the impact of the problem?

I have a backup running of this website. It is a WordPress plugin that dumps the entire site’s content in a DropBox which is synced to my PC. Weeks before the webinar, I had installed F-Secure on the PC, and it barked on one of the files in the DropBox folder. I reported this to my website manager, but I knew that it was in a part of the website that was not in use, nor accessible to the users of the website. That led me to believe it was a false positive, but I should have known better.

In the end, having the site itself generate a backup is not sufficient. The advantage is that the backup should be easy to restore, but malware might take the backup software or its configuration as a first target. In fact, I suspect that in my case the malware created a few hundred thousand files, which clogged my DropBox synchronization. However, I could not finish the forensics on that.

The site manager restored the site from a file system backup. I did not have access to that.
Externally spidering the website, and versioning it may be better. At any rate, this is a case for generating fully static websites.

So, obviously the best direct preparation is regularly updating software and removing software you don’t need. Case in point: the malware was inserted into a piece of forum software that we never got to work properly. In the end we abandoned it in favor of a managed cloud solution (an e-learning platform).

## Cloud security reference model

The cloud security reference model of the Cloud Security Alliance asks us to identify who is responsible for what piece of the software stack. I don’t think there is much confusion about who was supposed to keep the site’s software up to date. My site manager never denied that he was. But he did not put in any warning system, and ignored my F-Secure warning.
He also did not yet provide adequate forensics to me after the fact. Maybe a regular customer won’t need those details, I can see that. But I have professional interests beyond that, as this article proves.
Of course, my site manager is not the only one responsible for the software. He did not write it. The site’s software and plugins are either commercial or open source. Both have their own update policies or lack thereof. Both can be abandoned by their developers. But somebody needs to track that too.

Managing one custom WordPress website at a time is not likely to be a very viable business model in the long run. If your website is not very complicated functionally, you might consider static hosting, or move it to a cloud based website builder like squarespace.com or wix.com. You would still have to check their competence, but with thousands or hundreds of thousands of websites at stake, these companies are more likely to have the motivation and the resources to properly manage these risks.

As a business owner, I am ultimately accountable for all IT risks that affect my business. Remember, any provider, including a managed hosting provider, can fail. You need a plan B. I do have some backup of the most important documents on my site. I wrote them. But in the end, the most irrecoverable asset lost here might be the domain name. As a precaution against that, I could have considered to have the most important pages also hosted on another domain. In fact, I might have to do that, if this domain isn’t delisted quickly enough. It is a telling and disturbing sign that registrations for my newsletters these days mostly come from public email providers, not companies.

## Wrapping up

I am disclosing my misfortune so that it may be of help to people. Whether you work in a large corporation or a small one, are on the consumer or on the provider side, you can use this case to improve your own management of IT risk.

What are the biggest lessons you should take?

Reputation damage that gets its way into the firewalls and proxies of customer companies leads to real and lasting business damage.

Exit and recovery plans can be considered on multiple levels. Sure, the basic backups matter, but at all times consider your business continuity from the top down, starting at your domain name.

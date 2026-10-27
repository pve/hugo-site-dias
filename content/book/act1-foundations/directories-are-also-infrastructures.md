---
title: Directories are also infrastructures
date: '2006-09-21T10:54:00'
draft: false
aliases:
- "/posts/directories-are-also-infrastructures/"
weight: 110
notes-closed:
    - "[ ] Log4j/Log4Shell worked example as contemporary counterpart to DNS/Active Directory"
    - "[ ] 'Cloud is about distributing responsibility across an IT supply chain' thesis statement, bridging to unit 12"
    - "[ ] 'Most SaaS providers want all your identities and can't do federated authorization' — current identity-lock-in pain point"
    - "[ ] 'Identity management as a number one task' in multi-cloud migration (SSO unresolved)"
    - "[ ] Wikipedia/Flickr as infrastructure companion example alongside DNS/Active Directory"
    - "[ ] VOIP/SIP as directory-not-crossroads example"
notes: |
    Verplaatst vanuit `units-notes/unit-11.md` (2026-10-27) — harvest-triage, nog niet
    verwerkt in de proza hieronder. Gewicht klopt nog (110).

    Live file: `act1-foundations/directories-are-also-infrastructures.md` (weight 110,
    published, dated 2006, moved from `posts/` with alias kept — per book-sequence.md,
    "shows the pattern predates the cloud").

    ## Current state

    A short 2006 post arguing directories (DNS, Active Directory, custom identity
    stores) should be managed as infrastructure in their own right, separated from the
    applications that use them — one login for many systems, centralized management,
    service levels. Notes directories differ from other infrastructures in two ways:
    technical operation can be centralized even while management of the actual data is
    delegated hierarchically, and access control within the directory itself is
    unusually fine-grained. Ends on an open question about why self-administered
    public identity directories never gained traction. Thin (single-page), but
    conceptually clean — and this harvest is unusually strong for a 6-item unit, with
    almost everything clearing the bar.

    ## Triage

    **Highly relevant**

    - **Log4j / Log4Shell as a worked example**: the vulnerability chain runs through
      a directory-service protocol (JNDI/LDAP) reachable from inside application
      logging code — a "shared service" (naming/directory lookup) becoming an
      unexpected attack surface (`sources/archive-2021-22-log4j-worked-example.md`).
      A strong, well-known, modern bookend to a 2006 post. Recommend adding this as a
      contemporary counterpart to the DNS/Active Directory examples already in the
      text.
    - **"Cloud is about distributing responsibility... across an IT supply chain of
      independent providers, technical boundaries matched by organizational and
      contractual boundaries. This is new, we did not have that before the digital
      revolution."** (`sources/misc-teamprogram-scat2018-faster-innovation.md`,
      repeated near-verbatim across drafts). A strong recurring thesis statement —
      good connective tissue between this unit and unit 12, and a way to bridge the
      2006 directories argument into the book's present-day cloud framing.
    - **"Most SaaS providers want all your identities and can't do federated
      authorization"** — a concrete, current practitioner complaint about identity
      lock-in (`sources/delivery-csw11-2020-online-denhaag-postmortem.md`). Directly
      updates the unit's 2006 argument with a live, ongoing pain point.
    - **Identity management as "a number one task" in multi-cloud migration** — SSO
      across providers remains unresolved
      (`sources/oudemeuk-move-to-google-apps-o365.md`). Shows the 2006 thesis is
      still true, arguably more true, today.
    - **Wikipedia/Flickr as infrastructure** — "multiple users converge, creating a
      collective value," an earlier instance of exactly the terminological move this
      unit already makes
      (`sources/oudemeuk-omkatten-social-infrastructures-considered-harmful.md`). A
      ready-made second example alongside DNS/Active Directory.
    - **VOIP/SIP as directory-not-crossroads**: the telephone exchange shifts from "a
      crossroads through which all communications pass" to "a directory that tells
      user devices where their counterparts are located"
      (`sources/oudemeuk-on-net-or-in-net.md`). A sharp, compact example of
      infrastructure function migrating from control point to lookup service — fits
      the unit's closing paragraph.

    **Maybe relevant** — none; every item here clears the bar.

    **Hardly relevant** — none.

    ## Note

    Unusual for this batch: nearly everything harvested for this unit is a strong
    fit, and the unit itself is thin (under 300 words). A good candidate for a
    genuine expansion rather than a light edit — the log4j example and the
    Wikipedia/Flickr companion example in particular would roughly double the unit's
    substance without diluting its focus.

    ## Cross-unit flags

    - "Cloud distributes responsibility across an IT supply chain" thesis → also
      connective tissue for unit 12.
---

One of the big projects I was working a while back is directory services for identity management.
In these directories digital identities such as login names, addresses, access rights, etc. are stored. With an adequately structured directory service, the proper management of access rights becomes a lot easier, which translates into cost savings and better security.

Examples of these include the internet's Domain Name System (DNS) and Microsoft's Active Directory.
A lot of organizations however, have requirements beyond these systems, and for these a wide range of custom solutions are used.

In order to improve on that, we must see directories as infrastructures.
The management of user names, their access rights and personal preferences can be separated from the applications and consolidated into a single directory. As an example, you can think of one login name to use for multiple independent websites.
This will allow users to work with only a single digital identity, and it will allow systems management to have better control over who accesses what.
As this infrastructure is separated from its applications one will get all the usual issues: it becomes more important to specify the services, the service levels, and the way in which demand is matched with supply.

Directories as infrastructures also differ from other infrastructures.
Although the technical operation can often be centralized, the management of the actual user information is delegated in a hierarchical way.
In addition, access control on the information in the directory itself, who can read or modify what, is very fine-grained.

All in all, we see that creating a directory infrastructure requires a lot of attention to management issues.
Furthermore, it would make an interesting business case study as to why self-administered public directories for identities are not gaining a lot of traction.

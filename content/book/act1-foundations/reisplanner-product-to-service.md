---
date: '2026-11-09T09:00:00Z'
draft: true
title: 'From timetable disk to journey service (draft)'
weight: 53
notes: |
    Stub created 2026-11-09. Weight 53 since 2026-11-09 (was 172, then 150): it sits
    directly before promise-theory (55) as the story that leads into it (the text
    ends with "later I discovered promise theory"). Act I order now: lunch-spain 40,
    essence 50, things-break-at-scale 51, first-network 52, this unit 53,
    promise-theory 55, promise-contract 57, suwi 58, then the technical grounding
    from elements (60). The rule is "directly before promise theory", not the number.
    Overlaps to resolve at this position: promise-theory intro (line ~114) already
    tells this project in one sentence; "service, not a product" is already in
    essence, cloudcomputing and promise-theory; the unreliability part now follows
    things-break-at-scale (51), so refer back to it instead of repeating it.
    first-network (52) now precedes this unit, so "my earlier university experience"
    can point back to it.

    Intended claim (to be confirmed by the author): a product makes one small
    promise (the edition is valid from date X to date Y); a service is a continuing
    set of promises, here from many providers, and the user sees only one of them.
    Service idea is already introduced earlier in Act I. Must pass the criterion in
    TODO.md item 2: which claim does this support, and does that claim come first?

    What was found (nothing here is written as prose, only facts and pointers):

    Images, all in Salvage to process/Content en creatie/Independent units/talk
    service design/:
    - "reisplanner image.JPG": cover "NS Reisplanner, Het Electronisch Spoorboekje",
      season 89/90, published by CVI (Centrum voor Informatie Verwerking N.V.,
      "CVI 25 jaar Van pionier tot professional"); sketch of two yellow NS trains
      with departure-time displays, and a floppy symbol.
    - "spoorboekje1989.jpg": the same box next to the 5.25 inch floppy.
    - "reisplanner_84.JPG": blue 3.5 inch floppy, "'94 '95, Nederlandse Spoorwegen,
      Geldig van 29 mei '94 - 27 mei '95, NS Reisplanner, MS/Dos". The validity
      period is printed on the disk: the only promise the product makes.
    Deck: "Patterns for service design.pdf" (22 slides, 26 Mar 2015), slide 2 shows
    the 89/90 cover with an arrow to the 9292 journey planner website (plan your
    journey, disruptions, "My 9292") and the caption "(micro) service oriented
    architecture". The deck has no further reisplanner content.

    Author's own post-talk notes (notes2.txt, 27 Mar 2015, Dutch):
    - "plaat 1: uitleggen van OV reisplanner."
    - "plaat 2 (suwi) uitleggen van complexiteit van werking en diagnose
      (conditionals, etc)."
    - "' why patterns' heeft meer intro nodig. Kan ook weggelaten door daarvoor een
      case in te lasten, die laat zien dat cooperation design moeilijk is (show,
      dont tell)."
    - "Meer WHY, Complication, voorbeeld van een probleem dat je hier mee oplost."
    - "Basic service pattern: wat kan er mis gaan."
    So the author himself marked these two cases as the missing show-don't-tell
    opening of the talk.

    The recording of the talk (recording.mp4, 21 min) starts at slide 4 ("Now why
    patterns?") and does not contain the reisplanner story. No other recording
    exists under Digital Infrastructures/ (exhaustive search 2026-11-06; media
    outside that tree not checked). Transcript:
    Salvage to process/transcripts/Content en creatie/Independent units/talk service
    design/recording.txt. So the story must come from the author's memory. Open
    questions only the author can answer: what was the author's role, what went
    wrong in practice, what is the promise-theory lesson (product versus service,
    hierarchy of providers, who answers when the planner is wrong).

    Related, already triaged: unit 26 note about the service-hierarchy angle that is
    still unwritten (act2-value/promise-theory-services notes); the harvest note
    sources/misc-independent-units-talk-service-design.md (says: reisplanner explains
    a service's user-facing complexity). Earlier candidate homes named there
    (deployment-diagrams, governance-example) were not taken up.

    Status check 2026-11-12: prose now exists (body below), confirming the intended
    claim (product = one small promise vs. service = continuing set of promises,
    lines 104-106) — no longer "to be confirmed by the author", it's written. Of the
    open questions: author's role is answered (line 87, suggested the re-architecting).
    Still open/unresolved: "what went wrong in practice" is not answered anywhere in
    the body; "hierarchy of providers, who answers when the planner is wrong" is not
    addressed. The two overlap items are also still unresolved: the unreliability
    passage (lines 108-112) does not refer back to things-break-at-scale (51), it
    restates the point instead; "my earlier university experience" (line 88) does not
    explicitly point back to first-network (52). Not closing this out — draft: true
    remains correct, and the overlap/ripple edits from TODO.md item 12 still need
    doing before this can be considered done.
---

In the late eighties, Dutch Railways and its IT subsidiary CVI created an MS-DOS personal computer application to consult its timetables.
It was distributed as a floppy disk, and the price was comparable to the printed timetable book.
It was quite popular, as it made planning journeys that switched trains across the network a lot easier.

The idea was extended to include other forms of public transport such as busses and ferries.
However, that network did not fit on a floppy disk anymore, nor would it run on commodity PCs of the time, and its rate of change also made physical distribution to consumers too expensive.
Instead it was provisioned to physical servers in about ten regional call center buildings with more than hundred telephone operators.
It took something like twenty IBM RS/6000 Unix servers to handle the load.
The telephone number of the service allegedly was chosen after its introduction year (06-9292).
Google Maps now provides a similar service but with a fairly different user interface.

I got involved when ideas were developed to bring that travel information to digital media, such as kiosks and consumer information devices.
Consumer internet on home devices was on the distant horizon at that time.

The public transport planner was a huge software monolith, which was increasingly harder to maintain.
I suggested the idea of re-architecting that monolith as a set of collaborating services that could be independently build and scaled.
This was probably based on my earlier university experience in protocol and systems design.
Similar ideas were popping up elsewhere in the industry as well.
Werner Vogels, chief technology officer at Amazon later wrote about their transition from maintaining a software monolith to what is now known as a service oriented, or micro-services architecture.

The travel planner builds on a number of distinct services, which all provide relevant information for the final travel planner.
One service maps departure and arrival locations to geographical locations.
You send that service a question: "Where is main street?", and the services answers with coordinates.
This involves looking up addresses, point of interest and postal codes.
The next service maps these locations to public transport stops.
A third service estimates the walking time to these stops by taking into account obstacles such as waterways, highways, and so on.
With those stops and their walking times, the total public transport network timetable is searched to compose the ultimate journey plan, which will be rendered by any of the user interfaces.

We designed this system to be scalable so that each service could have an adequate number of servers allocated to it, that the number could differ by service, and that the whole system would be resilient against server overload or failure.
Each of these services is also used (consumed) by 1 or more other services, or an actual client.
This turns such a service into a **digital infrastructure**.

In hindsight, this story represents a couple of rather fundamental shifts in thinking about computer systems.
We have moved from a **product** that is a one-time purchase to a **service** where there is continued interaction between provider and consumer.
This changes power dynamics as we will see.

We are also building services on top of other, possibly unreliable, services.
Servers, and the networks between them, may break, they may be overloaded, they may be deliberately turned off.
Historically, computers were understood as deterministic machines.
Now, they become unreliable.
How do we handle that?

At the time, we defined sets of messages describing the questions, the answers, and the error messages.
We got it to work, but it wasn't until later that I discovered promise theory, and immediately saw it as a much cleaner way to look at these architectures.

More on this in a later unit.
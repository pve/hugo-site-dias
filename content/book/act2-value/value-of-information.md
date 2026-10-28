---
date: '2025-05-10T11:33:28Z'
draft: false
title: 'What is the value of information?'
weight: 210
notes-closed:
    - "[ ] 'Value must be explainable'-teaching device (gemengde claims: sneller/makkelijker/'mijn oma vindt het fijn'/lagere ping) nog niet verwerkt — goede fit, geeft Maria een praktische checklist"
    - "[ ] Telecom cost-over-time analogie (1970/1990/2010, bellen per uur loon) nog niet verwerkt — past naast bestaande Shannon/resolutie-voorbeelden"
    - "[x] Rest van de harvest (cloud-business-case-materiaal) gerouteerd naar unit 22 — niet hier dupliceren"
notes: |
    Verplaatst vanuit units-notes/unit-21.md (2026-10-28).

    Highly relevant, nog te verwerken:
    - "Value must be explainable"-device — bron: sources/archive-2021-22-it-professional-value-promise.md.
    - Telecom cost-over-time analogie — bron: sources/misc-signature-speech-2016-2017.md.

    Structurele mismatch: bijna de hele harvest is cloud-business-case-materiaal
    (hoe bouw je er een, wat kost het), niet "waarde van informatie" in Shannon-zin.
    Dat materiaal (cloud-business-case-outline, Fashiolista-cijfers, Gasunie-case,
    Stephen's "fuel systems"-case, business/tech-objectiepaar, kostenankers,
    elderly-care-databottleneck, security-business-case-framing) is gerouteerd naar
    unit 22 (Value in process improvement) — zie die unit's notes voor de volledige
    lijst en bronnen. Enige grensgeval: de elderly-care-databottleneck (drie
    zorgaanbieders, geblokkeerde nachtdienst-inzage) is ook als informatie-waarde-
    voorbeeld te lezen — heroverwegen als deze unit alsnog een concrete case wil.

    Cross-unit flags: zie unit 22's notes voor de volledige overdracht.
---

What is information really?
If we know that, we can try to understand how we can judge its value, or even start to understand how we can create value with information.

In Claude Shannon's theory of communication, information is about reducing uncertainty.
Another way is to say that more information means less noise because if you add noise to information, that information will have more uncertainty and less value.

To visualize this, think of a picture that is obscured by a bit of fog or haze.
You can still see some of the picture, but not very clearly.
You will make more errors when trying to understand what the picture means.

Similarly, think of the difference between a grainy low resolution image, where you can see the individual pixels, versus a high resolution version of that image.
More pixels, more bits, less uncertainty.

![](/deploy-images/shannonresolution.png)

It is the same with sound.
Being in the hall with musicians gives you much more opportunity to hear all instruments and singers compared to listening to it over the phone.

### Future value

Value can come from the reduction of uncertainty.
If you know that a storm is coming, you can take protective measures and reduce damage.
If you know a storm is *not* coming, you can enjoy a day outside.
If you know neither, you cannot take advantage of the weather.

In business, the more you know about the potential customer, the more likely you can make them an offer that they will be interested in.

In information security, if you know about potential vulnerabilities, you can make it less likely to suffer damage from them.

An example from service management. Suppose your digital infrastructure is down a day a year, on the average.
Your consumers will suffer from that, because it reduces their potential to benefit.
How are you going to make it better, with less downtime?
Now suppose you know that this happens on particular days, or hours, or with specific customers.
With that information you can make more targeted investments in improving your digital infrastructure, which now are more likely to have a positive return on investment.

The pattern that we see here is that information on the current state of affairs allows us to influence the *future* outcome of a process, and with that, we can create value.

One of the most dramatic examples of that in the history of computing is the breaking of the Enigma code in World War II, by Alan Turing and his team members.
This allowed the allies to reduce the loss that german U-boats were inflicting on transatlantic supply ships.

### Information processing is information reduction

Paradoxically, we never really seem to *generate* really new information, only more relevant information.
We can call something information processing, but in reality we are only *reducing* information.
If we compute the sum of two numbers, we are left with the sum, but that is not new information.
It was, in a way, already there.
And if we don't show where the result came from (the two numbers) we are left with *less* information.

If in a table of inventory, we update the inventory with the result of many transactions, the resulting inventory table does not have more information than before.
Of course, the information is more relevant to the current state.

But, what about generative AI, you may ask.
Isn't that generating information?
With only a small prompt, we can have the AI generate a complete research report, or term paper, or nice new image.
Yes, it looks like that, but the inference engine that takes your prompt, *also* takes in a huge model and combines the two into a new artefact, which is a lot smaller than your prompt and the model together.
And in fact, the model itself is the result of processing huge amounts of training data.

But, the information that is the result of this reduction can be more valuable.
Less is more.
Paradoxical, isn't it?

---
date: '2025-05-19T21:39:41Z'
draft: false
title: 'Control Promises'
weight: 720
notes: |
    Pick-up from Delegation Domino (unit 53, act4-power/promise-multiparty.md, published):
    - don't retell the Aaron/Betty/Alice/Bob story here, link to it instead
    - borrow the mechanism (request-for-promise per link in a chain) without re-quoting names
    - optionally add a forward-pointer in unit 53 itself, after its closing line, pointing here for the accountability/enforcement angle
    - Unit 72 draft: Act III-link (feedback-loop, unit 36) en Act IV-link (power-mediation) nog niet verwerkt in tekst — stonden alleen in cross-act framing plan.
---

Once we have assets and risks identified, we think of ways to minimize the risks that we can't avoid or accept.
Those ways are called controls or measures.

A control is a promise that is made enforceable.
You can budget it, delegate it, and audit it.
Once you call it a promise, it becomes clear that somebody needs to make the promise, and somebody needs to acquit the promise.
Presumably, somebody also has to promise to pay for it.

Now, what is the promise that is made?

Information processing is about accessing data, processing data, updating or modifying data, and deleting data.
Naturally, the next question then is: who is allowed to do each of these?
This is at the core of controlling availability, integrity and confidentiality risks.

This translates to: we promise to allow the right identities to do these things, and we promise to deny other identities to do these things.

All these promises refer to some kind of control boundary.
For access control, this would be a login screen or a parameter of an API call, and it sounds like: "we promise to only allow access to those with the proper identity and access rights".
The complication then is how the control knows what those rights are.
For that, it has to rely on promises made somewhere else, for example "I promise to timely expire identities of people who have left the organization."

A related promise of an identity system is: "I refuse to set or use passwords that do not conform to the password policy."
But where does that promise come from?
There is no intrinsic need for an identity system to have this promise, so it must come from somewhere else.
That "somewhere else" is a security governance body that has asked the identity system to make this promise.

In its turn, that security governance body was asked to promise that it would ask these types of promises by a higher management layer.
In its turn that may have been a management board decision to enter into a contract in which one of the promises was to abide by a certain compliance framework.
This chain of promises relates to what we saw earlier in "Delegation Domino".
In that chain of promises you can also identify the intermediary actors that channel power from the board down to the technology.

Technical controls (such as encryption and access control) are therefore not the only important ones.
Many controls serve to inform and instruct other controls.
Classification and labelling are examples of these.
For information classified as top secret, you probably require encryption and specific secrets management.
For systems labelled as production you require different change management than for development systems.

To assess how effective controls are, you can view them as elements of a feedback loop.
They serve to maintain a certain state: minimal risk at acceptable cost.

For any control, you can ask these questions:

- What are the promises?
- In your role, are you making promises, asking for them, or reviewing the outcomes?
- Who asked for these promises, and what did they offer in return?
- Who or what was behind those promise requests and what did they promise in their turn?

In the next units we'll go over some examples of controls and control delegation.

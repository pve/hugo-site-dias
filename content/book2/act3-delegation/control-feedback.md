---
date: '2025-04-19T20:01:07Z'
draft: false
title: 'Control Through Feedback Loops'
weight: 360
---

There are many ways to influence and control a system, but one of the most controlled (pun intended) ways is to use feedback loops.

Let's start with an analogy first: driving a car.

If you want the car to stop as fast as possible, just push the brakes as hard as you can. But that does not give you much control.
For example, your passengers might not like it, and it leads to wear on the tires.
If you want the car to stop at an intended location, for example just in front of a traffic light, you apply a feedback loop.
You adjust the pressure on the brake continuously, based on the remaining distance.

Another example is keeping the car in the proper lane on the road.
Such a loop starts by observing the state, asking: where are we driving? Then we figure out how that differs from the middle of the lane, which is presumably where we want to be driving. Based on that difference (the error) we turn the steering wheel. That is the control we apply. The car will respond, after which we can observe a new state. This closes the loop.
We feed back information from observing the car into the control.

Cars are full of feedback loops. Some are mechanical, some automatic, some have a human in the loop. And some exist outside of the car, such as traffic control systems.

We typically want the feedback loops to keep (or bring) the system in a specific state.
In our car example: we want the car to be driving nicely along the highway, and stay in its lane.
For the feedback loop to lead to this result the feedback should be negative, meaning that deviations from the desired state are counteracted, instead of amplified.

Let's look at some examples of feedback loops in digital infrastructures.

Large websites have so-called autoscalers. If the load on the website increases, for instance because the website is suddenly in the news, or it is Black Friday on a shopping site, the autoscaler can spin up more web servers to handle that load.
It acts by observing the web traffic and the delays in handling that, and controls the amount of servers that are active.

Here is an example from my professional practice.
In the early days of the internet, I advised a retail internet service provider.
At the time, those were independent companies, not part of the telecommunication companies.
They were growing very rapidly, and as a result they experienced quality issues.
Consumers found that web downloads were too slow, and threatened to leave.
The cause of this was that the company was not adapting its connection to the internet fast enough.
That connection was a large part of the cost of running the provider, so they did not want to buy too much too early.
To fix this, I created a feedback loop through which they could better balance between spending too much on bandwidth and disappointing consumers.
Based on the current number of subscribers and the bandwidth of their connection, it would show how the contracted bandwidth would need to be changed for an optimal outcome.

Feedback also makes AI deep learning systems work. The neural network is given a series of training data. The output is checked for correctness, and on the basis of the errors, the weights in the network are adjusted. Repeat this long enough on enough processors, and the errors will drop. The network has then learned.

Feedback loops are everywhere.

- When you download a large file from a server, the server will adjust its sending rate to whatever the network and the receiver can handle.
- When a cloud provider gets more customers, it will adjust the server capacity it has, and it will also adapt the staffing of its support center.
- In cybersecurity, we observe the patching level of software components against known vulnerabilities, and update the software as needed.

## Better feedback loops

What makes feedback loops better?

There is a lot of theory on these types of control systems, for example to figure out if they work fast enough at an acceptable cost.

Feedback loops allow us to *control* something.
As stated before, the control objective is often to keep a system in a defined state, as many of the examples above show.
That defined state then represents some kind of optimum: minimum errors or maximum value.

The first criterion of quality is whether the feedback control loop actually helps to move toward that state.
This is called *stability* and often you can compute if a system is stable.
In college I was surprised by the mathematics of this.
It turns out that the control only needs to 'push' the system in the right direction, it does not matter how fast that is.
Think about a car.
Once you push the brake pedal, the car will eventually stop, and it does not matter how fast you step on the brakes.
Of course, you also want the car to stop fast *enough*, but that is a different quality criterion.

The second criterion of quality is speed.
How long does it take for a system to reach the desired state?
For example, when a child suddenly crosses the street in front of your car, you don't want to have the car stop eventually, you want the car to stop before it hits the child.
This is a matter of life and death.

Another famous example is the OODA loop that was introduced to train fighter pilots.
OODA stands for Observe, Orient, Decide, Act.
As you can imagine it is kind of feedback loop.
A fighter pilot needs to respond to enemy actions.
Fighter pilots are trained to do this consciously, and then automatically, so that they respond faster.
If you respond faster than your opponent, your are much more likely to win the fight.

For IT troubleshooting I introduced the OHDA loop to enable teams to fix problems faster.
OHDA stands for Observe, Hypothesize, Decide, Act, and it acknowledges that in troubleshooting, you don't always now what the root cause of the problem is.

Another example. The practice of devops combined with continuous integration speeds up the software development process.
The loop is: define a new feature or bugfix, design and code it, turn in into an executable artefact, test and deploy the artefact, watch the results, see how much closer you are to your target, and start all over again.
The faster this loop runs, and it can run in hours or less, the more useful software you are going to get out of a given time period.
In contrast, the classical 'waterfall' software approach would go through this cycle every year or so.

From this perspective, the buzzword "agility" just means having faster feedback loops.

Finally, a big engineering challenge in training AI neural network models is to make them learn faster.

Whenever you hear words such as optimize, control, or goal, think of the feedback loops that could be in place.
Make them stable, then optimize for speed.
